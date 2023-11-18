export class VRControls extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    node: THREE.Object3D;
    triggered: Set<any>;
    menu: THREE.Object3D;
    cPrimary: any;
    cSecondary: any;
    mode_fly: FlyMode;
    mode_translate: TranslationMode;
    mode_rotScale: RotScaleMode;
    createSlider(label: any, min: any, max: any): THREE.Object3D;
    createInfo(): THREE.Mesh;
    initMenu(controller: any): void;
    toScene(vec: any): any;
    toVR(vec: any): any;
    setMode(mode: any): void;
    mode: any;
    onTriggerStart(controller: any): void;
    onTriggerEnd(controller: any): void;
    onStart(): void;
    onEnd(): void;
    setScene(scene: any): void;
    scene: any;
    getCamera(): THREE.PerspectiveCamera;
    update(delta: any): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
declare class FlyMode {
    constructor(vrControls: any);
    moveFactor: number;
    dbgLabel: any;
    start(vrControls: any): void;
    end(): void;
    update(vrControls: any, delta: any): void;
}
declare class TranslationMode {
    controller: any;
    startPos: any;
    debugLine: any;
    start(vrControls: any): void;
    end(vrControls: any): void;
    update(vrControls: any, delta: any): void;
}
declare class RotScaleMode {
    line: any;
    startState: any;
    start(vrControls: any): void;
    dbgLabel: any;
    end(vrControls: any): void;
    update(vrControls: any, delta: any): void;
}
export {};
