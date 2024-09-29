import { Env, Context, MiddlewareHandler } from 'hono';

type ServeStaticOptions<E extends Env = Env> = {
    /**
     * Root path, relative to current working directory from which the app was started. Absolute paths are not supported.
     */
    root?: string;
    path?: string;
    index?: string;
    precompressed?: boolean;
    rewriteRequestPath?: (path: string) => string;
    onFound?: (path: string, c: Context<E>) => void | Promise<void>;
    onNotFound?: (path: string, c: Context<E>) => void | Promise<void>;
};
declare const serveStatic: (options?: ServeStaticOptions) => MiddlewareHandler;

export { ServeStaticOptions, serveStatic };
