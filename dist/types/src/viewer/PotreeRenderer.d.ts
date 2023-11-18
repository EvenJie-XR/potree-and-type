export class PotreeRenderer {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    dummyMesh: THREE.Mesh;
    dummyScene: THREE.Scene;
    clearTargets(): void;
    clear(): void;
    render(params: any): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
