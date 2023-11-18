export class OrbitControls extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    fadeFactor: number;
    yawDelta: number;
    pitchDelta: number;
    panDelta: THREE.Vector2;
    radiusDelta: number;
    doubleClockZoomEnabled: boolean;
    tweens: any[];
    setScene(scene: any): void;
    stop(): void;
    zoomToLocation(mouse: any): void;
    stopTweens(): void;
    update(delta: any): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
