export class View {
    position: THREE.Vector3;
    yaw: number;
    _pitch: number;
    radius: number;
    maxPitch: number;
    minPitch: number;
    clone(): View;
    set pitch(arg: number);
    get pitch(): number;
    set direction(arg: THREE.Vector3);
    get direction(): THREE.Vector3;
    lookAt(t: any, ...args: any[]): void;
    getPivot(): THREE.Vector3;
    getSide(): THREE.Vector3;
    pan(x: any, y: any): void;
    translate(x: any, y: any, z: any): void;
    translateWorld(x: any, y: any, z: any): void;
    setView(position: any, target: any, duration?: number, callback?: any): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
