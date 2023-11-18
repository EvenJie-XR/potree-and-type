export function saveProject(viewer: any): {
    type: string;
    version: number;
    settings: {
        pointBudget: any;
        fov: any;
        edlEnabled: any;
        edlRadius: any;
        edlStrength: any;
        background: any;
        minNodeSize: any;
        showBoundingBoxes: any;
    };
    view: {
        position: any;
        target: any;
    };
    classification: any;
    pointclouds: any;
    measurements: any;
    volumes: any;
    cameraAnimations: any;
    profiles: any;
    annotations: any;
    orientedImages: any;
    geopackages: any;
};
