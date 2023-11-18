export class AnnotationTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    sg: THREE.SphereGeometry;
    sm: THREE.MeshNormalMaterial;
    s: THREE.Mesh;
    startInsertion(args?: {}): Annotation;
    update(): void;
    render(): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { Annotation } from "../Annotation.js";
