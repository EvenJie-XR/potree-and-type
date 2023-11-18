export class OrientedImage {
    constructor(id: any);
    id: any;
    fov: number;
    position: THREE.Vector3;
    rotation: THREE.Vector3;
    width: number;
    height: number;
    mesh: THREE.Mesh;
    line: THREE.Line;
    texture: any;
    set(position: any, rotation: any, dimension: any, fov: any): void;
    updateTransform(): void;
}
export class OrientedImages extends EventDispatcher {
    node: any;
    cameraParams: any;
    imageParams: any;
    images: any;
    _visible: boolean;
    set visible(arg: boolean);
    get visible(): boolean;
}
export class OrientedImageLoader {
    static loadCameraParams(path: any): Promise<{
        path: any;
        width: number;
        height: number;
        f: number;
        fov: number;
    }>;
    static loadImageParams(path: any): Promise<{
        id: string;
        x: number;
        y: number;
        z: number;
        omega: number;
        phi: number;
        kappa: number;
    }[]>;
    static load(cameraParamsPath: any, imageParamsPath: any, viewer: any): Promise<OrientedImages>;
}
import * as THREE from "../../../libs/three.js/build/three.module.js";
import { EventDispatcher } from "../../EventDispatcher.js";
