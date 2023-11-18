export function updatePointClouds(pointclouds: any, camera: any, renderer: any): {
    visibleNodes: any[];
    numVisiblePoints: number;
    lowestSpacing: number;
};
export function updateVisibilityStructures(pointclouds: any, camera: any, renderer: any): {
    frustums: THREE.Frustum[];
    camObjPositions: THREE.Vector3[];
    priorityQueue: any;
};
export function updateVisibility(pointclouds: any, camera: any, renderer: any): {
    visibleNodes: any[];
    numVisiblePoints: number;
    lowestSpacing: number;
};
import * as THREE from "../libs/three.js/build/three.module.js";
