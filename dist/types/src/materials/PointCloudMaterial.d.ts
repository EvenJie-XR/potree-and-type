export class PointCloudMaterial extends THREE.RawShaderMaterial {
    static generateGradientTexture(gradient: any): THREE.CanvasTexture;
    static generateMatcapTexture(matcap: any): any;
    constructor(parameters?: {});
    visibleNodesTexture: THREE.DataTexture;
    _pointSizeType: number;
    _shape: number;
    _useClipBox: boolean;
    clipBoxes: any[];
    clipPolygons: any[];
    _weighted: boolean;
    _gradient: (number | THREE.Color)[][];
    gradientTexture: THREE.CanvasTexture;
    _matcap: string;
    matcapTexture: any;
    lights: boolean;
    fog: boolean;
    _treeType: any;
    _useEDL: boolean;
    defines: Map<any, any>;
    ranges: Map<any, any>;
    _activeAttributeName: any;
    _defaultIntensityRangeChanged: boolean;
    _defaultElevationRangeChanged: boolean;
    classificationTexture: THREE.DataTexture;
    attributes: {
        position: {
            type: string;
            value: any[];
        };
        color: {
            type: string;
            value: any[];
        };
        normal: {
            type: string;
            value: any[];
        };
        intensity: {
            type: string;
            value: any[];
        };
        classification: {
            type: string;
            value: any[];
        };
        returnNumber: {
            type: string;
            value: any[];
        };
        numberOfReturns: {
            type: string;
            value: any[];
        };
        pointSourceID: {
            type: string;
            value: any[];
        };
        indices: {
            type: string;
            value: any[];
        };
    };
    uniforms: {
        level: {
            type: string;
            value: number;
        };
        vnStart: {
            type: string;
            value: number;
        };
        spacing: {
            type: string;
            value: number;
        };
        blendHardness: {
            type: string;
            value: number;
        };
        blendDepthSupplement: {
            type: string;
            value: number;
        };
        fov: {
            type: string;
            value: number;
        };
        screenWidth: {
            type: string;
            value: number;
        };
        screenHeight: {
            type: string;
            value: number;
        };
        near: {
            type: string;
            value: number;
        };
        far: {
            type: string;
            value: number;
        };
        uColor: {
            type: string;
            value: THREE.Color;
        };
        uOpacity: {
            type: string;
            value: number;
        };
        size: {
            type: string;
            value: any;
        };
        minSize: {
            type: string;
            value: any;
        };
        maxSize: {
            type: string;
            value: any;
        };
        octreeSize: {
            type: string;
            value: number;
        };
        bbSize: {
            type: string;
            value: number[];
        };
        elevationRange: {
            type: string;
            value: number[];
        };
        clipBoxCount: {
            type: string;
            value: number;
        };
        clipPolygonCount: {
            type: string;
            value: number;
        };
        clipBoxes: {
            type: string;
            value: any[];
        };
        clipPolygons: {
            type: string;
            value: any[];
        };
        clipPolygonVCount: {
            type: string;
            value: any[];
        };
        clipPolygonVP: {
            type: string;
            value: any[];
        };
        visibleNodes: {
            type: string;
            value: THREE.DataTexture;
        };
        pcIndex: {
            type: string;
            value: number;
        };
        gradient: {
            type: string;
            value: THREE.CanvasTexture;
        };
        classificationLUT: {
            type: string;
            value: THREE.DataTexture;
        };
        uHQDepthMap: {
            type: string;
            value: any;
        };
        toModel: {
            type: string;
            value: any[];
        };
        diffuse: {
            type: string;
            value: number[];
        };
        transition: {
            type: string;
            value: number;
        };
        intensityRange: {
            type: string;
            value: number[];
        };
        intensity_gbc: {
            type: string;
            value: number[];
        };
        uRGB_gbc: {
            type: string;
            value: number[];
        };
        wRGB: {
            type: string;
            value: number;
        };
        wIntensity: {
            type: string;
            value: number;
        };
        wElevation: {
            type: string;
            value: number;
        };
        wClassification: {
            type: string;
            value: number;
        };
        wReturnNumber: {
            type: string;
            value: number;
        };
        wSourceID: {
            type: string;
            value: number;
        };
        useOrthographicCamera: {
            type: string;
            value: boolean;
        };
        elevationGradientRepat: {
            type: string;
            value: number;
        };
        clipTask: {
            type: string;
            value: number;
        };
        clipMethod: {
            type: string;
            value: number;
        };
        uShadowColor: {
            type: string;
            value: number[];
        };
        uExtraScale: {
            type: string;
            value: number;
        };
        uExtraOffset: {
            type: string;
            value: number;
        };
        uExtraRange: {
            type: string;
            value: number[];
        };
        uExtraGammaBrightContr: {
            type: string;
            value: number[];
        };
        uFilterReturnNumberRange: {
            type: string;
            value: number[];
        };
        uFilterNumberOfReturnsRange: {
            type: string;
            value: number[];
        };
        uFilterGPSTimeClipRange: {
            type: string;
            value: number[];
        };
        uFilterPointSourceIDClipRange: {
            type: string;
            value: number[];
        };
        matcapTextureUniform: {
            type: string;
            value: any;
        };
        backfaceCulling: {
            type: string;
            value: boolean;
        };
    };
    classification: {
        0: {
            visible: boolean;
            name: string;
            color: number[];
        };
        1: {
            visible: boolean;
            name: string;
            color: number[];
        };
        2: {
            visible: boolean;
            name: string;
            color: number[];
        };
        3: {
            visible: boolean;
            name: string;
            color: number[];
        };
        4: {
            visible: boolean;
            name: string;
            color: number[];
        };
        5: {
            visible: boolean;
            name: string;
            color: number[];
        };
        6: {
            visible: boolean;
            name: string;
            color: number[];
        };
        7: {
            visible: boolean;
            name: string;
            color: number[];
        };
        8: {
            visible: boolean;
            name: string;
            color: number[];
        };
        9: {
            visible: boolean;
            name: string;
            color: number[];
        };
        12: {
            visible: boolean;
            name: string;
            color: number[];
        };
        DEFAULT: {
            visible: boolean;
            name: string;
            color: number[];
        };
    };
    vertexShader: string;
    fragmentShader: string;
    vertexColors: number;
    setDefine(key: any, value: any): void;
    removeDefine(key: any): void;
    updateShaderSource(): void;
    blending: number;
    transparent: boolean;
    depthTest: boolean;
    depthWrite: boolean;
    depthFunc: number;
    needsUpdate: boolean;
    getDefines(): string;
    setClipBoxes(clipBoxes: any): void;
    setClipPolygons(clipPolygons: any, maxPolygonVertices: any): void;
    set gradient(arg: (number | THREE.Color)[][]);
    get gradient(): (number | THREE.Color)[][];
    set matcap(arg: string);
    get matcap(): string;
    set useOrthographicCamera(arg: boolean);
    get useOrthographicCamera(): boolean;
    set backfaceCulling(arg: boolean);
    get backfaceCulling(): boolean;
    recomputeClassification(): void;
    set spacing(arg: number);
    get spacing(): number;
    set useClipBox(arg: boolean);
    get useClipBox(): boolean;
    set clipTask(arg: number);
    get clipTask(): number;
    set elevationGradientRepat(arg: number);
    get elevationGradientRepat(): number;
    set clipMethod(arg: number);
    get clipMethod(): number;
    set weighted(arg: boolean);
    get weighted(): boolean;
    set fov(arg: number);
    get fov(): number;
    set screenWidth(arg: number);
    get screenWidth(): number;
    set screenHeight(arg: number);
    get screenHeight(): number;
    set near(arg: number);
    get near(): number;
    set far(arg: number);
    get far(): number;
    set opacity(arg: number);
    get opacity(): number;
    set activeAttributeName(arg: any);
    get activeAttributeName(): any;
    set pointSizeType(arg: number);
    get pointSizeType(): number;
    set useEDL(arg: boolean);
    get useEDL(): boolean;
    set color(arg: THREE.Color);
    get color(): THREE.Color;
    set shape(arg: number);
    get shape(): number;
    set treeType(arg: any);
    get treeType(): any;
    set bbSize(arg: number[]);
    get bbSize(): number[];
    set size(arg: any);
    get size(): any;
    set minSize(arg: any);
    get minSize(): any;
    set elevationRange(arg: number[]);
    get elevationRange(): number[];
    set heightMin(arg: number);
    get heightMin(): number;
    set heightMax(arg: number);
    get heightMax(): number;
    set transition(arg: number);
    get transition(): number;
    set intensityRange(arg: number[]);
    get intensityRange(): number[];
    set intensityGamma(arg: number);
    get intensityGamma(): number;
    set intensityContrast(arg: number);
    get intensityContrast(): number;
    set intensityBrightness(arg: number);
    get intensityBrightness(): number;
    set rgbGamma(arg: number);
    get rgbGamma(): number;
    set rgbContrast(arg: number);
    get rgbContrast(): number;
    set rgbBrightness(arg: number);
    get rgbBrightness(): number;
    set extraGamma(arg: number);
    get extraGamma(): number;
    set extraBrightness(arg: number);
    get extraBrightness(): number;
    set extraContrast(arg: number);
    get extraContrast(): number;
    getRange(attributeName: any): any;
    setRange(attributeName: any, newRange: any): void;
    set extraRange(arg: number[]);
    get extraRange(): number[];
    _defaultExtraRangeChanged: boolean;
    set weightRGB(arg: number);
    get weightRGB(): number;
    set weightIntensity(arg: number);
    get weightIntensity(): number;
    set weightElevation(arg: number);
    get weightElevation(): number;
    set weightClassification(arg: number);
    get weightClassification(): number;
    set weightReturnNumber(arg: number);
    get weightReturnNumber(): number;
    set weightSourceID(arg: number);
    get weightSourceID(): number;
    disableEvents(): void;
    _hiddenListeners: any;
    _listeners: any;
    enableEvents(): void;
}
import * as THREE from "../../libs/three.js/build/three.module.js";
