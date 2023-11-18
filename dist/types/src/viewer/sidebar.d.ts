export class Sidebar {
    constructor(viewer: any);
    viewer: any;
    measuringTool: any;
    profileTool: any;
    volumeTool: any;
    dom: any;
    createToolIcon(icon: any, title: any, callback: any): any;
    init(): void;
    initToolbar(): void;
    initScene(): void;
    annotationMapping: Map<any, any>;
    initClippingTool(): void;
    initFilters(): void;
    initReturnFilters(): void;
    initGPSTimeFilters(): void;
    initPointSourceIDFilters(): void;
    initClassificationList(): void;
    initAccordion(): void;
    initAppearance(): void;
    initNavigation(): void;
    initSettings(): void;
}
