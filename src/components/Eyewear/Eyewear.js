import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Camera } from '@mediapipe/camera_utils';

//import * as THREE from 'three';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './Eyewear.css';

import { getZRotation, getXRotation, dist, getYRotation } from './RotationFunctions';
import { TRIANGULATION, uvs } from './FaceArray.js';

export default function Eyewear(props) {
    const mount = useRef();
    const scene = useRef({});
    const threecamera = useRef({});
    const webcamRef = useRef({});
    const maskScene = useRef({});
    const facialMesh = useRef({});

    return (
        <div id="GlassesContainer">
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="webcam" id="cam"></Webcam>
            <div ref={mount} id="threemount" />
        </div>
    );
}
