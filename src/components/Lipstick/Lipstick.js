import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Webcam from 'react-webcam';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Camera } from '@mediapipe/camera_utils';

import './Lipstick.css';

export default function Lipstick(props) {
    const canvasRef = useRef('');
    const webcamRef = useRef('');
    const [faceCoordinates, setFaceCoordinates] = useState([]);
    const ctx = useRef();

    let camera;

    // What is the purpose of this function??
    const onResults = (results) => {
        if (results.multiFaceLandmarks) {
            for (const landmarks of results.multiFaceLandmarks) {
                const coords = [];
                landmarks.forEach((p) => {
                    // let newX = p.x * 640; //-lowX
                    // let newY = p.y * 480; //-lowY
                    // let newP = { x: newX, y: newY };
                    // coords.push(newP);
                    coords.push({ x: p.x * props.width, y: p.y * props.height });
                });
                setFaceCoordinates(coords);
                //console.log(landmarks);
            }
        }
    };

    //  Move the drawing of the innet and outer lips to the get coords func, to reduce the # of loops?

    function paintLips() {
        ctx.current.clearRect(0, 0, props.width, props.height);
        let coords = getInnerLipCoords();
        let start = coords[0];
        ctx.current.beginPath();
        ctx.current.moveTo(start.x, start.y);
        for (let i = 1; i < coords.length; i++) {
            let nextP = coords[i];
            ctx.current.lineTo(nextP.x, nextP.y);
        }

        coords = getOuterLipCoords();
        start = coords[0];

        ctx.current.moveTo(start.x, start.y);
        for (let i = 1; i < coords.length; i++) {
            let nextP = coords[i];
            ctx.current.lineTo(nextP.x, nextP.y);
        }

        ctx.current.globalAlpha = props.transparency;
        ctx.current.fillStyle = props.color;
        ctx.current.fill();
    }

    function getInnerLipCoords() {
        let innerLipIndices = [15, 86, 179, 89, 96, 62, 183, 42, 41, 38, 12, 268, 271, 272, 407, 292, 325, 319, 403, 316, 15];
        let inner = [];
        innerLipIndices.forEach((p) => {
            inner.push(faceCoordinates[p]);
        });
        return inner;
    }

    function getOuterLipCoords() {
        let outerLipIndices = [17, 314, 405, 321, 375, 291, 409, 270, 269, 267, 0, 37, 39, 40, 185, 61, 146, 91, 181, 84, 17];
        let outer = [];
        outerLipIndices.forEach((p) => {
            outer.push(faceCoordinates[p]);
        });
        return outer;
    }

    useEffect(() => {
        const canvasElement = canvasRef.current;
        ctx.current = canvasElement.getContext('2d');
        const faceMesh = new FaceMesh({
            locateFile: (file) => {
                const fileName = `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
                return fileName;
            }
        });

        faceMesh.setOptions({
            maxNumFaces: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        faceMesh.onResults(onResults);

        if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null) {
            camera = new Camera(webcamRef.current.video, {
                onFrame: async () => {
                    if (webcamRef.current !== null) {
                        await faceMesh.send({ image: webcamRef.current.video }).catch((err) => console.log(err));
                    }
                },
                width: props.width, // change to read from props
                height: props.height // change to read from props
            });
            camera.start();
        }
    }, []);

    useEffect(() => {
        if (faceCoordinates.length > 0) paintLips();
    }, [faceCoordinates]);

    // const getColor = (item) => {
    //     console.log(item.color);
    //     setColor(item.color);
    // };

    //const height = 100;
    return (
        <div>
            <div id="container" height={props.height} width={props.width}>
                <Webcam
                    //audio={false}
                    ref={webcamRef}
                    //screenshotFormat="image/jpeg"
                    //className="webcam"
                    // id="cam"
                    height={props.height}
                    width={props.width}
                />
                <canvas id="CoverCanvas" ref={canvasRef} width={props.width} height={props.height} />
            </div>
        </div>
    );
}

Lipstick.propTypes = {};

Lipstick.defaultProps = {
    height: 480,
    width: 640,
    color: 'rgba(226, 25, 44, 0.64)',
    transparency: 0.5,
    data: []
};
