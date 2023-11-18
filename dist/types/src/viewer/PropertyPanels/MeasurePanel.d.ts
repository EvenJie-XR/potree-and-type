export class MeasurePanel {
    constructor(viewer: any, measurement: any, propertiesPanel: any);
    viewer: any;
    measurement: any;
    propertiesPanel: any;
    _update: () => void;
    createCoordinatesTable(points: any): any;
    elCopy: any;
    createAttributesTable(): any;
    update(): void;
}
