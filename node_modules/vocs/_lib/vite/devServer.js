import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { dev } from './plugins/dev.js';
import * as cache from './utils/cache.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export async function createDevServer(params = {}) {
    if (params.clean)
        cache.clear();
    return createServer({
        root: __dirname,
        server: {
            host: params.host,
            port: params.port,
        },
        plugins: [dev()],
    });
}
//# sourceMappingURL=devServer.js.map