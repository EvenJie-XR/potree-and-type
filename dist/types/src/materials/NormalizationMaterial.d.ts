export class NormalizationMaterial extends THREE.RawShaderMaterial {
    constructor(parameters?: {});
    getDefines(): string;
    updateShaderSource(): void;
    needsUpdate: boolean;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
