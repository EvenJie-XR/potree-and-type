export class VolumeTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    scene: THREE.Scene;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;
    onSceneChange(e: any): void;
    startInsertion(args?: {}): any;
    update(): void;
    render(params: any): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
