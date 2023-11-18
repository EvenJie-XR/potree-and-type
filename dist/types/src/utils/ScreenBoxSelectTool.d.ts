export class ScreenBoxSelectTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    scene: THREE.Scene;
    onSceneChange(scene: any): void;
    startInsertion(): BoxVolume;
    importance: number;
    update(e: any): void;
    render(): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { BoxVolume } from "./Volume.js";
