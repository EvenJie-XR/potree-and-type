export class PointCloudEptGeometry {
    constructor(url: any, info: any);
    eptScale: THREE.Vector3;
    eptOffset: THREE.Vector3;
    url: any;
    info: any;
    type: string;
    schema: any;
    span: any;
    boundingBox: THREE.Box3;
    tightBoundingBox: THREE.Box3;
    offset: THREE.Vector3;
    boundingSphere: any;
    tightBoundingSphere: any;
    version: any;
    projection: any;
    fallbackProjection: any;
    pointAttributes: PointAttributes;
    spacing: number;
    loader: any;
}
export class EptKey {
    constructor(ept: any, b: any, d: any, x: any, y: any, z: any);
    ept: any;
    b: any;
    d: any;
    x: any;
    y: any;
    z: any;
    name(): string;
    step(a: any, b: any, c: any): any;
    children(): any[];
}
export class PointCloudEptGeometryNode extends PointCloudTreeNode {
    constructor(ept: any, b: any, d: any, x: any, y: any, z: any);
    ept: any;
    key: any;
    id: number;
    geometry: any;
    boundingBox: any;
    tightBoundingBox: any;
    spacing: number;
    boundingSphere: any;
    hasChildren: boolean;
    children: {};
    numPoints: number;
    level: any;
    loaded: boolean;
    loading: boolean;
    oneTimeDisposeHandlers: any[];
    name: string;
    index: number;
    isGeometryNode(): boolean;
    getLevel(): any;
    isTreeNode(): boolean;
    isLoaded(): boolean;
    getBoundingSphere(): any;
    getBoundingBox(): any;
    url(): string;
    getNumPoints(): number;
    filename(): any;
    getChildren(): any[];
    addChild(child: any): void;
    load(): void;
    loadPoints(): void;
    loadHierarchy(): Promise<void>;
    doneLoading(bufferGeometry: any, tightBoundingBox: any, np: any, mean: any): void;
    mean: any;
    toPotreeName(d: any, x: any, y: any, z: any): string;
    dispose(): void;
}
export namespace PointCloudEptGeometryNode {
    let IDCount: number;
}
import * as THREE from "../libs/three.js/build/three.module.js";
import { PointAttributes } from "./loader/PointAttributes.js";
import { PointCloudTreeNode } from "./PointCloudTree.js";
