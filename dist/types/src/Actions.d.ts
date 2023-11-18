export class Action extends EventDispatcher {
    constructor(args?: {});
    icon: any;
    tooltip: any;
    onclick(event: any): void;
    pairWith(object: any): void;
    setIcon(newIcon: any): void;
}
import { EventDispatcher } from "./EventDispatcher.js";
