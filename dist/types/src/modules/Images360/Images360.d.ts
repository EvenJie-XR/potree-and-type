export class Images360 extends EventDispatcher {
    constructor(viewer: any);
    viewer: any;
    selectingEnabled: boolean;
    images: any[];
    node: THREE.Object3D;
    sphere: THREE.Mesh;
    _visible: boolean;
    focusedImage: any;
    elUnfocus: HTMLInputElement;
    domRoot: any;
    set visible(arg: boolean);
    get visible(): boolean;
    focus(image360: any): void;
    unfocus(): void;
    load(image360: any): Promise<any>;
    handleHovering(): void;
    update(): void;
}
export class Images360Loader {
    static load(url: any, viewer: any, params?: {}): Promise<Images360>;
    static createSceneNodes(images360: any, transform: any): void;
}
import { EventDispatcher } from "../../EventDispatcher.js";
import * as THREE from "../../../libs/three.js/build/three.module.js";
