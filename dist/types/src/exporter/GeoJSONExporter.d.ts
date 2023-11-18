export class GeoJSONExporter {
    static measurementToFeatures(measurement: any): ({
        type: string;
        geometry: {
            type: string;
            coordinates: any;
        };
        properties: {
            name: any;
        };
    } | {
        type: string;
        geometry: {
            type: string;
            coordinates: any;
        };
        properties: {
            area: any;
        };
    })[];
    static toString(measurements: any): string;
}
