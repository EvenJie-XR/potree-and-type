/**
 * laslaz code taken and adapted from plas.io js-laslaz
 *	http://plas.io/
 *  https://github.com/verma/plasio
 *
 * Thanks to Uday Verma and Howard Butler
 *
 */
export class LasLazLoader {
    static progressCB(): void;
    constructor(version: any, extension: any);
    version: any;
    extension: any;
    load(node: any): void;
    parse(node: any, buffer: any): Promise<void>;
    handle(node: any, url: any): void;
}
export class LasLazBatcher {
    constructor(node: any);
    node: any;
    push(lasBuffer: any): void;
}
