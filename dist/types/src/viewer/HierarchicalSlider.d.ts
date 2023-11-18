export class HierarchicalSlider {
    constructor(params?: {});
    element: HTMLDivElement;
    labels: any[];
    sliders: any[];
    range: any;
    slide: any;
    step: any;
    setRange(range: any): void;
    setValues(values: any): void;
    addLevel(): void;
    removeLevel(): void;
    updateSliders(): void;
    updateLabels(): void;
}
