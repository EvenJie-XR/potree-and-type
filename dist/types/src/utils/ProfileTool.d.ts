export class ProfileTool extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    renderer: any;
    scene: THREE.Scene;
    light: THREE.PointLight;
    onRemove: (e: any) => any;
    onAdd: (e: any) => any;
    onSceneChange(e: any): void;
    startInsertion(args?: {}): Profile;
    update(): void;
    render(): void;
}
import { EventDispatcher } from "../EventDispatcher.js";
import * as THREE from "../../libs/three.js/build/three.module.js";
import { Profile } from "./Profile.js";
