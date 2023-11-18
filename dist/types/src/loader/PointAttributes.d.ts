export class PointAttributes {
    constructor(pointAttributes: any);
    attributes: any[];
    byteSize: number;
    size: number;
    vectors: any[];
    add(pointAttribute: any): void;
    addVector(vector: any): void;
    hasNormals(): boolean;
}
export namespace PointAttributeTypes {
    namespace DATA_TYPE_DOUBLE {
        let ordinal: number;
        let name: string;
        let size: number;
    }
    namespace DATA_TYPE_FLOAT {
        let ordinal_1: number;
        export { ordinal_1 as ordinal };
        let name_1: string;
        export { name_1 as name };
        let size_1: number;
        export { size_1 as size };
    }
    namespace DATA_TYPE_INT8 {
        let ordinal_2: number;
        export { ordinal_2 as ordinal };
        let name_2: string;
        export { name_2 as name };
        let size_2: number;
        export { size_2 as size };
    }
    namespace DATA_TYPE_UINT8 {
        let ordinal_3: number;
        export { ordinal_3 as ordinal };
        let name_3: string;
        export { name_3 as name };
        let size_3: number;
        export { size_3 as size };
    }
    namespace DATA_TYPE_INT16 {
        let ordinal_4: number;
        export { ordinal_4 as ordinal };
        let name_4: string;
        export { name_4 as name };
        let size_4: number;
        export { size_4 as size };
    }
    namespace DATA_TYPE_UINT16 {
        let ordinal_5: number;
        export { ordinal_5 as ordinal };
        let name_5: string;
        export { name_5 as name };
        let size_5: number;
        export { size_5 as size };
    }
    namespace DATA_TYPE_INT32 {
        let ordinal_6: number;
        export { ordinal_6 as ordinal };
        let name_6: string;
        export { name_6 as name };
        let size_6: number;
        export { size_6 as size };
    }
    namespace DATA_TYPE_UINT32 {
        let ordinal_7: number;
        export { ordinal_7 as ordinal };
        let name_7: string;
        export { name_7 as name };
        let size_7: number;
        export { size_7 as size };
    }
    namespace DATA_TYPE_INT64 {
        let ordinal_8: number;
        export { ordinal_8 as ordinal };
        let name_8: string;
        export { name_8 as name };
        let size_8: number;
        export { size_8 as size };
    }
    namespace DATA_TYPE_UINT64 {
        let ordinal_9: number;
        export { ordinal_9 as ordinal };
        let name_9: string;
        export { name_9 as name };
        let size_9: number;
        export { size_9 as size };
    }
}
export class PointAttribute {
    constructor(name: any, type: any, numElements: any);
    name: any;
    type: any;
    numElements: any;
    byteSize: number;
    description: string;
    range: number[];
}
export namespace PointAttribute {
    export let POSITION_CARTESIAN: PointAttribute;
    export let RGBA_PACKED: PointAttribute;
    import COLOR_PACKED = RGBA_PACKED;
    export { COLOR_PACKED };
    export let RGB_PACKED: PointAttribute;
    export let NORMAL_FLOATS: PointAttribute;
    export let INTENSITY: PointAttribute;
    export let CLASSIFICATION: PointAttribute;
    export let NORMAL_SPHEREMAPPED: PointAttribute;
    export let NORMAL_OCT16: PointAttribute;
    export let NORMAL: PointAttribute;
    export let RETURN_NUMBER: PointAttribute;
    export let NUMBER_OF_RETURNS: PointAttribute;
    export let SOURCE_ID: PointAttribute;
    export let INDICES: PointAttribute;
    export let SPACING: PointAttribute;
    export let GPS_TIME: PointAttribute;
}
