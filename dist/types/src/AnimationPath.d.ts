export class PathAnimation {
    constructor(path: any, start: any, end: any, speed: any, callback: any);
    path: any;
    length: any;
    speed: any;
    callback: any;
    tween: any;
    startPoint: number;
    endPoint: number;
    t: number;
    start(resume?: boolean): void;
    stop(): void;
    pause(): void;
    resume(): void;
    getPoint(t: any): any;
}
export class AnimationPath {
    constructor(points?: any[]);
    points: any[];
    spline: THREE.CatmullRomCurve3;
    get(t: any): THREE.Vector3;
    getLength(): any;
    animate(start: any, end: any, speed: any, callback: any): PathAnimation;
    pause(): void;
    resume(): void;
    getGeometry(): THREE.Geometry;
    set closed(arg: boolean);
    get closed(): boolean;
}
import * as THREE from "../libs/three.js/build/three.module.js";
