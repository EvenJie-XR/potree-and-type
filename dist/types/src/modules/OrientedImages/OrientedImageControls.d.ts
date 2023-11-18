export class OrientedImageControls extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    originalCam: any;
    shearCam: any;
    image: any;
    fadeFactor: number;
    fovDelta: number;
    fovMin: number;
    fovMax: number;
    shear: number[];
    elUp: any;
    elRight: any;
    elDown: any;
    elLeft: any;
    elExit: any;
    scene: any;
    sceneControls: THREE.Scene;
    hasSomethingCaptured(): boolean;
    capture(image: any): void;
    originalFOV: any;
    originalControls: any;
    release(): void;
    setScene(scene: any): void;
    update(delta: any): void;
}
import { EventDispatcher } from "../../EventDispatcher.js";
import * as THREE from "../../../libs/three.js/build/three.module.js";
