export class ProfileData {
    constructor(profile: any);
    profile: any;
    segments: {
        start: any;
        end: any;
        cutPlane: THREE.Plane;
        halfPlane: THREE.Plane;
        length: number;
        points: Points;
    }[];
    boundingBox: THREE.Box3;
    size(): number;
}
export class ProfileRequest {
    constructor(pointcloud: any, profile: any, maxDepth: any, callback: any);
    pointcloud: any;
    profile: any;
    maxDepth: any;
    callback: any;
    temporaryResult: ProfileData;
    pointsServed: number;
    highestLevelServed: number;
    priorityQueue: any;
    initialize(): void;
    traverse(node: any): void;
    update(): void;
    updateGeneratorInstance: Generator<boolean, void, unknown>;
    updateGenerator(): Generator<boolean, void, unknown>;
    getAccepted(numPoints: any, node: any, matrix: any, segment: any, segmentDir: any, points: any, totalMileage: any): Generator<false | (Uint32Array | Float32Array | Float64Array)[], void, unknown>;
    getPointsInsideProfile(nodes: any, target: any): Generator<boolean, void, unknown>;
    finishLevelThenCancel(): void;
    cancelRequested: boolean;
    cancel(): void;
}
import * as THREE from "../libs/three.js/build/three.module.js";
import { Points } from "./Points.js";
