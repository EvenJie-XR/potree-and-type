export class Renderer {
    constructor(threeRenderer: any);
    threeRenderer: any;
    gl: any;
    buffers: Map<any, any>;
    shaders: Map<any, any>;
    textures: Map<any, any>;
    glTypeMapping: Map<any, any>;
    toggle: number;
    deleteBuffer(geometry: any): void;
    createBuffer(geometry: any): WebGLBuffer;
    updateBuffer(geometry: any): void;
    traverse(scene: any): {
        octrees: PointCloudTree[];
    };
    renderNodes(octree: any, nodes: any, visibilityTextureData: any, camera: any, target: any, shader: any, params: any): void;
    renderOctree(octree: any, nodes: any, camera: any, target: any, params?: {}): void;
    render(scene: any, camera: any, target?: any, params?: {}): void;
}
declare class WebGLBuffer {
    numElements: number;
    vao: any;
    vbos: Map<any, any>;
}
import { PointCloudTree } from "./PointCloudTree.js";
export {};
