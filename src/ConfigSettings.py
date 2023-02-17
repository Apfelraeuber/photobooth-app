from pydantic import BaseModel, Field
import jsonref
from enum import Enum
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
    '''Common settings for photobooth.'''
    CAPTURE_CAM_RESOLUTION_WIDTH:           int = Field(
        default=1280, description="camera resolution width for still photos on supported backends (eg. picam2, webcam)")
    CAPTURE_CAM_RESOLUTION_HEIGHT:          int = Field(
        default=720, description="camera resolution height for still photos on supported backends (eg. picam2, webcam)")
    PREVIEW_CAM_RESOLUTION_WIDTH:           int = Field(
        default=1280, description="camera resolution width for liveview on supported backends (eg. picam2, webcam)")
    PREVIEW_CAM_RESOLUTION_HEIGHT:          int = Field(
        default=720, description="camera resolution height for liveview on supported backends (eg. picam2, webcam)")
    LIVEVIEW_RESOLUTION_WIDTH:           int = Field(
        default=1280, description="Resolution width liveview is streamed (eg. picam2, webcam)")
    LIVEVIEW_RESOLUTION_HEIGHT:          int = Field(
        default=720, description="Resolution height liveview is streamed (eg. picam2, webcam)")
    LIVEPREVIEW_QUALITY:              int = Field(
        default=80, ge=10, le=100, description="Livepreview stream JPEG image quality on supported backends")
    THUMBNAIL_STILL_QUALITY:          int = Field(
        default=60, ge=10, le=100, description="Still JPEG thumbnail quality (thumbs used in gallery list)")
    PREVIEW_STILL_QUALITY:            int = Field(
        default=75, ge=10, le=100, description="Still JPEG preview quality (image shown in gallery detail)")
    HIRES_STILL_QUALITY:              int = Field(
        default=90, ge=10, le=100, description="Still JPEG full resolution quality (downloaded photo)")
    PREVIEW_STILL_WIDTH:          int = Field(
        default=900, ge=200, le=2000, description="Width of resized preview image, height is automatically calculated to keep aspect ratio")
    THUMBNAIL_STILL_WIDTH:        int = Field(
        default=400, ge=100, le=1000, description="Width of resized thumbnail image, height is automatically calculated to keep aspect ratio")

    DEBUG_LEVEL: str = "DEBUG"

    PREVIEW_PREVIEW_FRAMERATE_DIVIDER: int = Field(default=1, ge=1, le=5)
    EXT_DOWNLOAD_URL: str = Field(
        default="http://dl.qbooth.net/{filename}", description="URL encoded by QR code to download images from onlineservice. {filename} is replaced by actual filename")
    # flip camera source horizontal/vertical
    CAMERA_TRANSFORM_HFLIP: bool = False
    CAMERA_TRANSFORM_VFLIP: bool = False
    PROCESS_COUNTDOWN_TIMER: float = 3
    PROCESS_COUNTDOWN_OFFSET: float = 0.25
    PROCESS_TAKEPIC_MSG: str = "CHEEESE!"
    PROCESS_TAKEPIC_MSG_TIMER: float = 0.5
    PROCESS_AUTOCLOSE_TIMER: int = 10
    PROCESS_ADD_EXIF_DATA: bool = True

    webserver_port: int = 8000


class GroupFocuser(BaseModel):
    """
    Focuser is to autofocus motorized focus cameras. Use for cameras that do not have their own focus algorithm integrated.
    Currently supported cameras are arducam imx477, imx519 and 64mp hawkeye.
    """
    # autofocus
    # 70 for imx519 (range 0...4000) and 30 for arducam64mp (range 0...1000)
    ENABLED: bool = False
    MODEL: str = None
    MIN_VALUE: int = 50
    MAX_VALUE: int = 950
    DEF_VALUE: int = 300
    STEP: int = 10
    # results in max. 1/0.066 fps autofocus speed rate (here about 15fps)
    MOVE_TIME: float = 0.028
    ROI: tuple[float, float, float, float] = (
        0.2, 0.2, 0.6, 0.6)  # x, y, width, height in %
    REPEAT_TRIGGER: int = 5  # every x seconds trigger autofocus


class EnumImageServers(str, Enum):
    ImageServerSimulated = 'ImageServerSimulated'
    ImageServerPicam2 = 'ImageServerPicam2'
    ImageServerWebcamCv2 = 'ImageServerWebcamCv2'
    ImageServerWebcamV4l = 'ImageServerWebcamV4l'
    ImageServerGphoto2 = 'ImageServerGphoto2'
    ImageServerDigicamcontrol = 'ImageServerDigicamcontrol'


class GroupBackends(BaseModel):
    '''
    Choose backends for still images/high quality images captured on main backend.
    If the livepreview is enabled, the video is captured from live backend (if configured) or main backend.
    '''
    MAIN_BACKEND: EnumImageServers = Field(title="Main Backend",
                                           default=EnumImageServers.ImageServerSimulated, description="Choose a backend to use for high quality still captures")
    LIVE_BACKEND: EnumImageServers = Field(title="Live Backend",
                                           default=None, description="Choose secondary backend used for live streaming only")
    LIVEPREVIEW_ENABLED:               bool = Field(
        default=True, description="Enable livestream (if possible)")

    cv2_device_index:                       int = 2
    v4l_device_index:                       int = 2
    picam2_stats_overlay:                   bool = False
    picam2_AE_EXPOSURE_MODE: int = Field(
        default=1, ge=0, le=4, description="Usually 0=normal exposure, 1=short, 2=long, 3=custom (not all necessarily supported by camera!")


class GroupHardwareInput(BaseModel):
    '''Hardware related settings'''
    keyboard_input_enabled:                        bool = True
    keyboard_input_keycode_takepic:              str = "down"


class GroupLocationService(BaseModel):
    '''Embed GPS coordinates in picam2 images using googles geolocation api. Register and obtain a key here https://developers.google.com/maps/documentation/geolocation/get-api-key'''
    LOCATION_SERVICE_ENABLED: bool = False
    LOCATION_SERVICE_API_KEY: str = ""
    LOCATION_SERVICE_CONSIDER_IP: bool = True
    LOCATION_SERVICE_WIFI_INTERFACE_NO: int = 0
    LOCATION_SERVICE_FORCED_UPDATE: int = 60
    # every x minutes
    LOCATION_SERVICE_HIGH_FREQ_UPDATE: int = 10
    # retries after program start to get more accurate data
    LOCATION_SERVICE_THRESHOLD_ACCURATE: int = 1000
    # threshold below which the data is accurate enough to not trigger high freq updates (in meter)


class GroupPersonalize(BaseModel):
    '''Personalize your photobooth.'''
    UI_FRONTPAGE_TEXT: str = '<div class="fixed-center text-h2 text-weight-bold text-center text-white" style="text-shadow: 4px 4px 4px #666;">Hey!<br>Let\'s take some pictures <br>📷💕</div>'

    GALLERY_ENABLE: bool = True
    GALLERY_EMPTY_MSG: str = "So boring here...🤷‍♂️<br>Let's take some pictures 📷💕"

    exif_enable_geolocation: bool = False
    geolocation_latitude: str = ""
    geolocation_longitude: str = ""


class GroupWled(BaseModel):
    '''
    WLED integration for countdown led / shoot animation
    needs WLED module connected via USB serial port and
    three presets:
    1: standby (usually LEDs off)
    2: countdown (animates countdown)
    3: shoot (imitate a flash)
    Please define presets on your own in WLED webfrontend
    '''
    # WledService settings
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

    _processed_at: datetime = PrivateAttr(
        default_factory=datetime.now)  # private attributes

    # groups -> setting items
    common: GroupCommon = GroupCommon()
    personalize: GroupPersonalize = GroupPersonalize()
    backends: GroupBackends = GroupBackends()
    focuser: GroupFocuser = GroupFocuser()
    wled: GroupWled = GroupWled()
    locationservice: GroupLocationService = GroupLocationService()
    hardwareinput: GroupHardwareInput = GroupHardwareInput()

    class Config:
        env_file_encoding = 'utf-8'
        # first in following list is least important; last .env file overwrites the other.
        env_file = '.env.installer', '.env.dev', '.env', '.env.prod'
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

    def getSchema(self, type: str = "default"):
        '''Get schema to build UI. Schema is polished to the needs of UI'''
        if (type == "dereferenced"):
            # https://github.com/pydantic/pydantic/issues/889#issuecomment-1064688675
            return jsonref.loads(settings.schema_json())
        else:
            return settings.schema()

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
