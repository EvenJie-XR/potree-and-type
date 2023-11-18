export class HQSplatRenderer {
    constructor(viewer: any);
    viewer: any;
    depthMaterials: Map<any, any>;
    attributeMaterials: Map<any, any>;
    normalizationMaterial: NormalizationMaterial;
    rtDepth: THREE.WebGLRenderTarget;
    rtAttribute: THREE.WebGLRenderTarget;
    gl: any;
    initialized: boolean;
    init(): void;
    normalizationEDLMaterial: NormalizationEDLMaterial;
    resize(width: any, height: any): void;
    clearTargets(): void;
    clear(): void;
    render(params: any): void;
}
import { NormalizationMaterial } from "../materials/NormalizationMaterial.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { NormalizationEDLMaterial } from "../materials/NormalizationEDLMaterial.js";
