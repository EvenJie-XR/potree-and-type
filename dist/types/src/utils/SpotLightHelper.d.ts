export class SpotLightHelper extends THREE.Object3D {
    constructor(light: any, color: any);
    light: any;
    color: any;
    sphere: THREE.Mesh;
    frustum: THREE.LineSegments;
    update(): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
