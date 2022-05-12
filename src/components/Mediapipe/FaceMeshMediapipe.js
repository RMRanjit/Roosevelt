import React, { useRef, useEffect } from 'react';
import { FaceMesh } from '@mediapipe/face_mesh';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import WebCam from 'react-webcam';
import { drawConnectors } from '@mediapipe/drawing_utils';
// import theme from '../../theme';
// import { ThemeProvider } from '@mui/material';

const FaceMeshMediapipe = (props) => {
    const styles = {
        width: props.width,
        height: props.height
    };
    const WebCamRef = useRef(null);
    const canvasRef = useRef(null);
    var camera = null;
    function onResults(results) {
     
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
        if (results.multiFaceLandmarks) {
            for (const landmarks of results.multiFaceLandmarks) {
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
                    color: props.meshSettings[0],
                    lineWidth: props.meshSettings[1]
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
                    color: props.eyeColors[0]
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
                    color: props.eyeColors[0]
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
                    color: props.eyeColors[1]
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
                    color: props.eyeColors[1]
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
                    color: props.faceOutlineColor
                });
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
                    color: props.lipColor
                });
            }
        }
        canvasCtx.restore();
    }

    useEffect(() => {
        const faceMesh = new FaceMesh({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }
        });

        faceMesh.setOptions({
            maxNumFaces: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        faceMesh.onResults(onResults);

        if (typeof WebCamRef.current !== 'undefined' && WebCamRef.current !== null) {
            camera = new cam.Camera(WebCamRef.current.video, {
                onFrame: async () => {
                    if (WebCamRef.current !== null) {
                        await faceMesh.send({ image: WebCamRef.current.video }).catch((err) => console.log(err));
                    }
                },
                width: props.width,
                height: props.height
            });
            camera.start();
        }
    }, []);

    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
            <WebCam hidden ref={WebCamRef} />
            <canvas ref={canvasRef} style={styles} />
            {/* </ThemeProvider> */}
        </div>
    );
};

FaceMeshMediapipe.defaultProps = {
    meshSettings: ['#C0C0C070', 1],
    eyeColors: ['#30FF30', '#FF3030'],
    faceOutlineColor: '#E0E0E0',
    lipColor: '#FEC5E5',
    width: '680px',
    height: 'auto'
};
export default FaceMeshMediapipe;
