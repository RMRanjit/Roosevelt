import React, { useEffect, useRef } from 'react';
import WebCam from 'react-webcam';
import * as cam from '@mediapipe/camera_utils';
// import '@tensorflow/tfjs-core';
// import '@tensorflow/tfjs-backend-webgl';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
// import theme from "../../theme"
// import { ThemeProvider } from "@mui/material"

const HandsGestureMediaPipe = (props) => {
    const styles = {
        width: props.width,
        height: props.height
    };
    const WebCamRef = useRef(null);
    const canvasRef = useRef(null);

    function onResults(results) {
        // const video = WebCamRef.current.video;
        const videoWidth = WebCamRef.current.video.videoWidth;
        const videoHeight = WebCamRef.current.video.videoHeight;

        // Set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext('2d');

        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        if (results.multiHandLandmarks) {
            for (const landmarks of results.multiHandLandmarks) {
                drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                    color: props.meshSettings[0],
                    lineWidth: props.meshSettings[1]
                });
                drawLandmarks(canvasCtx, landmarks, {
                    color: props.landMarkSettings[0],
                    lineWidth: props.landMarkSettings[1]
                });
            }
        }
        canvasCtx.restore();
    }

    useEffect(() => {
        const hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });
        hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        hands.onResults(onResults);

        const camera = new cam.Camera(WebCamRef.current.video, {
            onFrame: async () => {
                await hands.send({ image: WebCamRef.current.video });
            },
            width: 1280,
            height: 720
        });
        camera.start();
    });

    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
            <WebCam hidden ref={WebCamRef} />
            <canvas ref={canvasRef} style={styles} />
            {/* </ThemeProvider> */}
        </div>
    );
};

HandsGestureMediaPipe.defaultProps = {
    width: '680px',
    height: 'auto',
    meshSettings: ['#30FF30', 2],
    landMarkSettings: ['#FF3030', 0.1]
};
export default HandsGestureMediaPipe;
