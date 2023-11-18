export class EarthControls extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    fadeFactor: number;
    wheelDelta: number;
    zoomDelta: THREE.Vector3;
    camStart: any;
    tweens: any[];
    pivotIndicator: THREE.Mesh;
    pivot: any;
    setScene(scene: any): void;
    stop(): void;
    zoomToLocation(mouse: any): void;
    update(delta: any): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
