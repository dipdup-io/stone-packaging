interface InternalBody {
    source: string | Uint8Array | FormData | Blob | null;
    stream: ReadableStream;
    length: number | null;
}
declare const getResponseCache: unique symbol;
declare const cacheKey: unique symbol;
declare const GlobalResponse: {
    new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): globalThis.Response;
    prototype: globalThis.Response;
    error(): globalThis.Response;
    json(data: any, init?: ResponseInit | undefined): globalThis.Response;
    redirect(url: string | URL, status?: number | undefined): globalThis.Response;
};
declare class Response {
    #private;
    [getResponseCache](): typeof GlobalResponse;
    constructor(body?: BodyInit | null, init?: ResponseInit);
}
declare function getInternalBody(response: Response | typeof GlobalResponse): InternalBody | undefined;

export { GlobalResponse, Response, cacheKey, getInternalBody };
