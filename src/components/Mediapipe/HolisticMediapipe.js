import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as cam from '@mediapipe/camera_utils';
// import '@tensorflow/tfjs-core';
// import '@tensorflow/tfjs-backend-webgl';

import {
    Holistic,
    FACEMESH_TESSELATION,
    HAND_CONNECTIONS,
    POSE_CONNECTIONS,
    FACEMESH_LEFT_EYE,
    FACEMESH_LEFT_EYEBROW,
    FACEMESH_RIGHT_EYE,
    FACEMESH_RIGHT_EYEBROW,
    FACEMESH_FACE_OVAL,
    FACEMESH_LIPS
} from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
// import theme from "../../theme"
// import { ThemeProvider } from "@mui/material"

const HolisticMediaPipe = (props) => {
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

        canvasCtx.globalCompositeOperation = 'source-over';

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
            color: props.meshSettings[0],
            lineWidth: props.meshSettings[1]
        });

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE, {
            color: props.eyeColors[0]
        });

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYEBROW, {
            color: props.eyeColors[0]
        });

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYE, {
            color: props.eyeColors[1]
        });

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYEBROW, {
            color: props.eyeColors[1]
        });

        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE, {
            color: props.eyeColors[0]
        });
        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_FACE_OVAL, {
            color: props.faceOutlineColor
        });
        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LIPS, {
            color: props.lipColor
        });

        drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {
            color: props.handMeshSettings[0],
            lineWidth: props.handMeshSettings[1]
        });
        drawLandmarks(canvasCtx, results.leftHandLandmarks, {
            color: props.handMarkSettings[0],
            lineWidth: props.handMarkSettings[1]
        });
        drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, {
            color: props.handMeshSettings[0],
            lineWidth: props.handMeshSettings[1]
        });
        drawLandmarks(canvasCtx, results.rightHandLandmarks, {
            color: props.handMarkSettings[0],
            lineWidth: props.handMarkSettings[1]
        });

        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
            color: props.poseSettings[0],
            lineWidth: props.poseSettings[1]
        });
        drawLandmarks(canvasCtx, results.poseLandmarks, {
            color: props.poseMarkSettings[0],
            lineWidth: props.poseMarkSettings[1]
        });
        canvasCtx.restore();
    }
    useEffect(() => {
        // mount.current.appendChild(renderer.domElement)
        const holistic = new Holistic({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
            }
        });
        holistic.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: true,
            smoothSegmentation: true,
            refineFaceLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        holistic.onResults(onResults);

        const camera = new cam.Camera(WebCamRef.current.video, {
            onFrame: async () => {
                await holistic.send({ image: WebCamRef.current.video });
            },
            width: 1280,
            height: 720
        });
        camera.start();
    });

    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
            <Webcam hidden ref={WebCamRef} />
            <canvas ref={canvasRef} style={styles} />
            {/* </ThemeProvider> */}
        </div>
    );
};
HolisticMediaPipe.defaultProps = {
    width: '680px',
    height: 'auto',
    meshSettings: ['#C0C0C070', 1],
    eyeColors: ['#30FF30', '#FF3030'],
    faceOutlineColor: '#E0E0E0',
    lipColor: '#FEC5E5',
    handMeshSettings: ['#30FF30', 2],
    handMarkSettings: ['#FF3030', 0.1],
    poseSettings: ['#30FF30', 3],
    poseMarkSettings: ['#FF3030', 2]
};
export default HolisticMediaPipe;
