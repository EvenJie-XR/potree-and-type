export class OctreeGeometry {
    url: any;
    spacing: number;
    boundingBox: any;
    root: any;
    pointAttributes: any;
    loader: any;
}
export class OctreeGeometryNode {
    constructor(name: any, octreeGeometry: any, boundingBox: any);
    id: number;
    name: any;
    index: number;
    octreeGeometry: any;
    boundingBox: any;
    boundingSphere: any;
    children: {};
    numPoints: number;
    level: any;
    oneTimeDisposeHandlers: any[];
    isGeometryNode(): boolean;
    getLevel(): any;
    isTreeNode(): boolean;
    isLoaded(): boolean;
    getBoundingSphere(): any;
    getBoundingBox(): any;
    getBoundingBox(): any;
    getChildren(): any[];
    load(): void;
    getNumPoints(): number;
    dispose(): void;
    geometry: any;
    loaded: boolean;
}
export namespace OctreeGeometryNode {
    let IDCount: number;
}
