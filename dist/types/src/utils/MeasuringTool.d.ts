export class MeasuringTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    showLabels: boolean;
    scene: THREE.Scene;
    light: THREE.PointLight;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;
    onSceneChange(e: any): void;
    startInsertion(args?: {}): Measure;
    update(): void;
    render(): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { Measure } from "./Measure.js";
