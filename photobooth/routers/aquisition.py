import logging

from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import Response, StreamingResponse
from pymitter import EventEmitter

from ..containers import ApplicationContainer
from ..services.aquisitionservice import AquisitionService

logger = logging.getLogger(__name__)
aquisition_router = APIRouter(
    prefix="/aquisition",
    tags=["aquisition"],
)


@aquisition_router.get("/stream.mjpg")
@inject
def video_stream(aquisition_service: AquisitionService = Depends(Provide[ApplicationContainer.services.aquisition_service])):
    """
    endpoint to stream live video to clients
    """
    headers = {"Age": "0", "Cache-Control": "no-cache, private", "Pragma": "no-cache"}

    try:
        return StreamingResponse(content=aquisition_service.gen_stream(), headers=headers, media_type="multipart/x-mixed-replace; boundary=frame")
    except ConnectionRefusedError as exc:
        logger.warning(exc)
        raise HTTPException(status.HTTP_405_METHOD_NOT_ALLOWED, "preview not enabled") from exc
    except Exception as exc:
        logger.exception(exc)
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, f"preview failed: {exc}") from exc


@aquisition_router.get(
    "/still",
    # Set what the media type will be in the autogenerated OpenAPI specification.
    # fastapi.tiangolo.com/advanced/additional-responses/#additional-media-types-for-the-main-response
    responses={200: {"content": {"image/jpeg": {}}}},
    # Prevent FastAPI from adding "application/json" as an additional
    # response media type in the autogenerated OpenAPI specification.
    # https://github.com/tiangolo/fastapi/issues/3258
    response_class=Response,
)
@inject
def api_still_get(aquisition_service: AquisitionService = Depends(Provide[ApplicationContainer.services.aquisition_service])):
    """Aquire image and serve to download

    Raises:
        HTTPException: Image could not be aquired from backend

    Returns:
        Response: Returns jpeg image to download
    """
    try:
        still_image: bytes = bytes(aquisition_service.wait_for_hq_image())
        logger.info(f"aquired still_image, {len(still_image)}bytes to be sent to client")
        return Response(still_image, media_type="image/jpeg")
    except Exception as exc:
        logger.exception(exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"something went wrong, Exception: {exc}",
        ) from exc


@aquisition_router.get("/mode/{mode}", status_code=status.HTTP_202_ACCEPTED)
@inject
def api_cmd_aquisition_capturemode_get(
    mode: str = "preview", wled_control: bool = True, evtbus: EventEmitter = Depends(Provide[ApplicationContainer.evtbus])
):
    """_summary_

    Args:
        wled_control (bool, optional): Also control wled module. Request WLED module preset thrill. Defaults to True.
    """
    if mode == "capture":
        evtbus.emit("onCaptureMode")
        if wled_control:
            evtbus.emit("wled/preset_thrill")
    elif mode == "preview":
        evtbus.emit("onPreviewMode")
        if wled_control:
            evtbus.emit("wled/preset_standby")
    else:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="illegal mode")
