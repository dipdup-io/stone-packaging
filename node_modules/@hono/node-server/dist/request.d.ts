import { IncomingMessage } from 'node:http';
import { Http2ServerRequest } from 'node:http2';

declare class RequestError extends Error {
    static name: string;
    constructor(message: string, options?: {
        cause?: unknown;
    });
}
declare const toRequestError: (e: unknown) => RequestError;
declare const GlobalRequest: {
    new (input: RequestInfo | URL, init?: RequestInit | undefined): globalThis.Request;
    prototype: globalThis.Request;
};
declare class Request extends GlobalRequest {
    constructor(input: string | Request, options?: RequestInit);
}
declare const getAbortController: unique symbol;
declare const newRequest: (incoming: IncomingMessage | Http2ServerRequest, defaultHostname?: string) => any;

export { GlobalRequest, Request, RequestError, getAbortController, newRequest, toRequestError };
