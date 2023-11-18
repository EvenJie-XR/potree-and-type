export class VRButton {
    static createButton(renderer: any, options: any): Promise<VRButton>;
    onStartListeners: any[];
    onEndListeners: any[];
    element: any;
    onStart(callback: any): void;
    onEnd(callback: any): void;
}
