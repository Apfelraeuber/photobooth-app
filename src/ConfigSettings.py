from typing import Any
from pathlib import Path
from datetime import datetime
from pydantic import BaseModel, BaseSettings, Field, PrivateAttr, Extra
import os
import json
import logging
logger = logging.getLogger(__name__)

CONFIG_FILENAME = "./config/config.json"


class GroupCommon(BaseModel):
    '''Docstring for SubModelCommon'''
    CAPTURE_CAM_RESOLUTION_WIDTH:           int = 4656
    CAPTURE_CAM_RESOLUTION_HEIGHT:          int = 3496
    CAPTURE_VIDEO_RESOLUTION_WIDTH:           int = 1280
    CAPTURE_VIDEO_RESOLUTION_HEIGHT:          int = 720
    PREVIEW_CAM_RESOLUTION_WIDTH:           int = 2328
    PREVIEW_CAM_RESOLUTION_HEIGHT:          int = 1748
    PREVIEW_VIDEO_RESOLUTION_WIDTH:           int = 1280
    PREVIEW_VIDEO_RESOLUTION_HEIGHT:          int = 720
    LORES_QUALITY:              int = Field(default=80, ge=10, le=100)
    THUMBNAIL_QUALITY:          int = Field(default=60, ge=10, le=100)
    PREVIEW_QUALITY:            int = Field(default=75, ge=10, le=100)
    HIRES_QUALITY:              int = Field(default=90, ge=10, le=100)
    PREVIEW_MIN_WIDTH:          int = Field(default=900, ge=200, le=2000)
    THUMBNAIL_MIN_WIDTH:        int = Field(default=400, ge=100, le=1000)

    PREVIEW_PREVIEW_FRAMERATE_DIVIDER: int = Field(default=1, ge=1, le=5)
    EXT_DOWNLOAD_URL: str = Field(
        default="http://dl.qbooth.net/{filename}", description="URL encoded by QR code to download images from onlineservice. {filename} is replaced by actual filename")

    PICAM2_AE_EXPOSURE_MODE: int = Field(
        default=1, ge=0, le=4, description="Usually 0=normal exposure, 1=short, 2=long, 3=custom (not all necessarily supported by camera!")

    # flip camera source horizontal/vertical
    CAMERA_TRANSFORM_HFLIP: bool = False
    CAMERA_TRANSFORM_VFLIP: bool = False

    PROCESS_COUNTDOWN_TIMER: float = 3
    PROCESS_COUNTDOWN_OFFSET: float = 0.25
    PROCESS_TAKEPIC_MSG: str = "CHEEESE!"
    PROCESS_TAKEPIC_MSG_TIMER: float = 0.5
    PROCESS_AUTOCLOSE_TIMER: int = 10
    PROCESS_ADD_EXIF_DATA: bool = True


class GroupFocuser(BaseModel):
    # autofocus
    # 70 for imx519 (range 0...4000) and 30 for arducam64mp (range 0...1000)
    ENABLED: bool = False
    MIN_VALUE: int = 300
    MAX_VALUE: int = 3000
    DEF_VALUE: int = 800
    STEP: int = 50
    # results in max. 1/0.066 fps autofocus speed rate (here about 15fps)
    MOVE_TIME: float = 0.028
    JPEG_QUALITY: int = 80
    ROI: tuple[float, float, float, float] = (
        0.2, 0.2, 0.6, 0.6)  # x, y, width, height in %
    DEVICE: str = "/dev/v4l-subdev1"
    REPEAT_TRIGGER: int = 5  # every x seconds trigger autofocus


class GroupBackendDigicamcontrol(BaseModel):
    pass  # not yet implemented!


class GroupBackendGphoto2(BaseModel):
    pass  # not yet implemented!


class GroupBackendPicam2(BaseModel):
    pass  # not yet implemented!


class GroupBackendSimulated(BaseModel):
    pass  # not yet implemented!


class GroupBackendWebcamCv2(BaseModel):
    # None=first found device, otherwise index 0...
    device_index:                       int = 2


class GroupBackendWebcamV4l(BaseModel):
    # None=first found device, otherwise index 0...
    device_index:                       int = 2


class GroupBackends(BaseModel):
    '''Settings for specific backends'''
    MAIN_BACKEND:                       str = "ImageServerSimulated"
    LIVE_BACKEND:                       str = None
    LIVEPREVIEW_ENABLED:               bool = True

    digicamcontrol: GroupBackendDigicamcontrol = GroupBackendDigicamcontrol()
    gphoto2: GroupBackendGphoto2 = GroupBackendGphoto2()
    picam2: GroupBackendPicam2 = GroupBackendPicam2()
    simulated: GroupBackendSimulated = GroupBackendSimulated()
    webcamCv2: GroupBackendWebcamCv2 = GroupBackendWebcamCv2()
    webcamV4l: GroupBackendWebcamV4l = GroupBackendWebcamV4l()


class GroupHardwareInput(BaseModel):
    '''Docstring for Hardwareinput'''
    ENABLED:                        bool = True

    HW_KEYCODE_TAKEPIC:              str = "down"


class GroupPersonalize(BaseModel):
    '''Docstring for Personalization'''
    UI_FRONTPAGE_TEXT: str = "Hey! Lets take some pictures! :)"

    GALLERY_ENABLE: bool = True
    GALLERY_EMPTY_MSG: str = "So boring here...🤷‍♂️<br>Let's take some pictures 📷💕"

    exif_enable_geolocation: bool = False
    geolocation_latitude: str = ""
    geolocation_longitude: str = ""


class GroupDebugging(BaseModel):
    # dont change following defaults. If necessary change via argument
    DEBUG_LEVEL: str = "DEBUG"
    DEBUG_OVERLAY: bool = True


class GroupWled(BaseModel):
    '''Colorled settings for neopixel and these elements'''
    # WledSerial settings
    ENABLED: bool = False
    SERIAL_PORT: str = None


def json_config_settings_source(settings: BaseSettings) -> dict[str, Any]:
    encoding = settings.__config__.env_file_encoding
    try:
        json_config = json.loads(Path(CONFIG_FILENAME).read_text(encoding))
    except:
        json_config = {}

    return json_config


class ConfigSettings(BaseSettings):
    '''
    Settings class glueing all together

    In the case where a value is specified for the same Settings field in multiple ways, the selected value is determined as follows (in descending order of priority):

    1 Arguments passed to the Settings class initialiser.
    2 Environment variables, e.g. my_prefix_special_function as described above.
    3 Variables loaded from a dotenv (.env) file.
    4 Variables loaded from the secrets directory.
    5 The default field values for the Settings model.
    '''
    test: str = "default"

    _processed_at: datetime = PrivateAttr(
        default_factory=datetime.now)  # private attributes

    # groups -> setting items
    common: GroupCommon = GroupCommon()
    personalize: GroupPersonalize = GroupPersonalize()
    backends: GroupBackends = GroupBackends()
    focuser: GroupFocuser = GroupFocuser()
    wled: GroupWled = GroupWled()
    debugging: GroupDebugging = GroupDebugging()
    hardwareinput: GroupHardwareInput = GroupHardwareInput()

    class Config:
        env_file_encoding = 'utf-8'
        # `.env.prod` takes priority over `.env`
        env_file = '.env', '.env.prod'
        env_nested_delimiter = '__'
        case_sensitive = True
        extra = Extra.ignore

        @classmethod
        def customise_sources(
            cls,
            init_settings,
            env_settings,
            file_secret_settings,
        ):
            return (
                init_settings,
                json_config_settings_source,
                env_settings,
                file_secret_settings,
            )

    def persist(self):
        '''Persist settings to file'''
        logger.debug(f"persist settings to json file")

        with open(CONFIG_FILENAME, "w") as write_file:
            write_file.write(self.json(indent=2))

    def deleteconfig(self):
        '''Reset to defaults'''
        logger.debug(f"settings reset to default")

        try:
            os.remove(CONFIG_FILENAME)
            logger.debug(f"deleted {CONFIG_FILENAME} file.")
        except:
            logger.info(f"delete {CONFIG_FILENAME} file failed.")


# our settings that can be imported throughout the app like # from src.ConfigService import settings
# TODO: might wanna use LROcache functools.
settings = ConfigSettings()

if __name__ == '__main__':

    settings.debugging.DEBUG_OVERLAY = True
    assert settings.debugging.DEBUG_OVERLAY is True
    settings.persist()
    with open(CONFIG_FILENAME, "r") as read_file:
        loadedConfig = json.load(read_file)
    settings = ConfigSettings(**loadedConfig)  # reread config
    assert settings.debugging.DEBUG_OVERLAY is True

    settings.debugging.DEBUG_OVERLAY = False
    settings.persist()
    with open(CONFIG_FILENAME, "r") as read_file:
        loadedConfig = json.load(read_file)
    settings = ConfigSettings(**loadedConfig)  # reread config
    assert settings.debugging.DEBUG_OVERLAY is False

    settings.debugging.DEBUG_OVERLAY = True
    settings.persist()
    with open(CONFIG_FILENAME, "r") as read_file:
        loadedConfig = json.load(read_file)
    settings = ConfigSettings(**loadedConfig)  # reread config
    assert settings.debugging.DEBUG_OVERLAY is True

    settings.deleteconfig()
    # reread config, this one is default now
    settings = ConfigSettings()
    settings.persist()
    assert settings == ConfigSettings()  # is all default?

    # print(settings)
