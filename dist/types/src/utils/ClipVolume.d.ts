export class ClipVolume extends THREE.Object3D {
    constructor(args: any);
    clipOffset: number;
    clipRotOffset: number;
    dimension: THREE.Vector3;
    material: THREE.MeshBasicMaterial;
    box: THREE.Mesh;
    boundingBox: any;
    frame: THREE.LineSegments;
    planeFrame: THREE.LineSegments;
    arrowX: THREE.Object3D;
    arrowY: THREE.Object3D;
    arrowZ: THREE.Object3D;
    setClipOffset(offset: any): void;
    setClipRotOffset(offset: any): void;
    setScaleX(x: any): void;
    setScaleY(y: any): void;
    setScaleZ(z: any): void;
    offset(args: any): void;
    rotate(args: any): void;
    update(): void;
    boundingSphere: any;
    updateLocalSystem(): void;
    localX: THREE.Vector3;
    localY: THREE.Vector3;
    localZ: THREE.Vector3;
    raycast(raycaster: any, intersects: any): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
