export namespace CameraMode {
    let ORTHOGRAPHIC: number;
    let PERSPECTIVE: number;
    let VR: number;
}
export namespace ClipTask {
    let NONE: number;
    let HIGHLIGHT: number;
    let SHOW_INSIDE: number;
    let SHOW_OUTSIDE: number;
}
export namespace ClipMethod {
    let INSIDE_ANY: number;
    let INSIDE_ALL: number;
}
export namespace ElevationGradientRepeat {
    let CLAMP: number;
    let REPEAT: number;
    let MIRRORED_REPEAT: number;
}
export namespace MOUSE {
    let LEFT: number;
    let RIGHT: number;
    let MIDDLE: number;
}
export namespace PointSizeType {
    let FIXED: number;
    let ATTENUATED: number;
    let ADAPTIVE: number;
}
export namespace PointShape {
    let SQUARE: number;
    let CIRCLE: number;
    let PARABOLOID: number;
}
export namespace TreeType {
    let OCTREE: number;
    let KDTREE: number;
}
export namespace LengthUnits {
    namespace METER {
        let code: string;
        let unitspermeter: number;
    }
    namespace FEET {
        let code_1: string;
        export { code_1 as code };
        let unitspermeter_1: number;
        export { unitspermeter_1 as unitspermeter };
    }
    namespace INCH {
        let code_2: string;
        export { code_2 as code };
        let unitspermeter_2: number;
        export { unitspermeter_2 as unitspermeter };
    }
}
