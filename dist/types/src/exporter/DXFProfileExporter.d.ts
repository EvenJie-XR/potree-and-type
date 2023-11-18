/**
 *
 * @author roy.mdr / http://...
 *
 */
export class DXFProfileExporter {
    static toXYZ(points: any, flatten?: boolean): {
        x: any[];
        y: any[];
        z: any[];
        minX: number;
        minY: number;
        minZ: number;
        maxX: number;
        maxY: number;
        maxZ: number;
        numPoints: number;
    };
    static plotPCloudPoint(x: any, y: any, z: any): string;
    static toString(points: any, flatten?: boolean): string;
}
