export class VolumePanel extends MeasurePanel {
    elContent: any;
    elDownloadButton: any;
    elCopyRotation: any;
    elCopyScale: any;
    elRemove: any;
    elCheckClip: any;
    elCheckShow: any;
    download(): Promise<void>;
}
import { MeasurePanel } from "./MeasurePanel.js";
