export class ClippingTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    maxPolygonVertices: number;
    sceneMarker: THREE.Scene;
    sceneVolume: THREE.Scene;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;
    setScene(scene: any): void;
    scene: any;
    startInsertion(args?: {}): PolygonClipVolume;
    update(): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { PolygonClipVolume } from "./PolygonClipVolume.js";
