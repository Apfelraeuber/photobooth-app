#!/usr/bin/python3
import time

from picamera2.encoders.mjpeg_encoder import MJPEGEncoder
from picamera2.picamera2 import Picamera2

picam2 = Picamera2()
video_config = picam2.create_video_configuration()
picam2.configure(video_config)

encoder = MJPEGEncoder(10000000)

picam2.start_recording(encoder, 'videocapture6.mjpeg')
time.sleep(10)
picam2.stop_recording()