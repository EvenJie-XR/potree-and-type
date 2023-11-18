export class DeviceOrientationControls extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    screenOrientation: number;
    deviceOrientation: any;
    setScene(scene: any): void;
    update(delta: any): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
