export class NavigationCube extends THREE.Object3D {
    constructor(viewer: any);
    viewer: any;
    front: THREE.Mesh;
    back: THREE.Mesh;
    left: THREE.Mesh;
    right: THREE.Mesh;
    bottom: THREE.Mesh;
    top: THREE.Mesh;
    width: number;
    camera: THREE.OrthographicCamera;
    pickedFace: any;
    update(rotation: any): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
