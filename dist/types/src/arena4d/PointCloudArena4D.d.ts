export class PointCloudArena4DNode extends PointCloudTreeNode {
    left: any;
    right: any;
    sceneNode: any;
    kdtree: any;
    getNumPoints(): any;
    isLoaded(): boolean;
    isTreeNode(): boolean;
    isGeometryNode(): boolean;
    getLevel(): any;
    getBoundingSphere(): any;
    getBoundingBox(): any;
    toTreeNode(child: any): void;
    getChildren(): any[];
}
export class PointCloudArena4D extends PointCloudTree {
    constructor(geometry: any);
    root: any;
    visiblePointsTarget: number;
    minimumNodePixelSize: number;
    numVisibleNodes: number;
    numVisiblePoints: number;
    boundingBoxNodes: any[];
    loadQueue: any[];
    visibleNodes: any[];
    pcoGeometry: any;
    boundingBox: any;
    boundingSphere: any;
    material: PointCloudMaterial;
    profileRequests: any[];
    getBoundingBoxWorld(): THREE.Box3;
    setName(name: any): void;
    getName(): string;
    getLevel(): any;
    toTreeNode(geometryNode: any, parent: any): PointCloudArena4DNode;
    updateMaterial(material: any, visibleNodes: any, camera: any, renderer: any): void;
    updateVisibleBounds(): void;
    hideDescendants(object: any): void;
    updateMatrixWorld(force: any): void;
    nodesOnRay(nodes: any, ray: any): any[];
    pick(viewer: any, camera: any, ray: any, params?: {}): any;
    pickState: {
        renderTarget: THREE.WebGLRenderTarget;
        material: PointCloudMaterial;
        scene: THREE.Scene;
    };
    computeVisibilityTextureData(nodes: any): {
        data: Uint8Array;
        offsets: Map<any, any>;
    };
    get progress(): 0 | 1;
}
import { PointCloudTreeNode } from "../PointCloudTree.js";
import { PointCloudTree } from "../PointCloudTree.js";
import { PointCloudMaterial } from "../materials/PointCloudMaterial.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
