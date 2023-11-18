export class PropertiesPanel {
    constructor(container: any, viewer: any);
    container: any;
    viewer: any;
    object: any;
    cleanupTasks: any[];
    scene: any;
    setScene(scene: any): void;
    set(object: any): void;
    addVolatileListener(target: any, type: any, callback: any): void;
    setPointCloud(pointcloud: any): void;
    setMeasurement(object: any): void;
    setCamera(camera: any): void;
    setAnnotation(annotation: any): void;
    setCameraAnimation(animation: any): void;
}
