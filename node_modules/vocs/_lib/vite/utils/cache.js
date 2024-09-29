import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { default as fs } from 'fs-extra';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const search = create('search');
export const twoslash = create('twoslash');
export function create(key, { cacheDir = resolve(__dirname, '../.vocs/cache') } = {}) {
    let cache = new Map();
    let hydrated = false;
    function hydrate() {
        const data = fs.readJSONSync(resolve(cacheDir, `${key}.json`), { throws: false });
        if (data)
            cache = new Map(JSON.parse(data));
        hydrated = true;
    }
    function save() {
        fs.ensureDirSync(cacheDir);
        fs.writeJSONSync(resolve(cacheDir, `${key}.json`), JSON.stringify([...cache]));
    }
    return {
        get(key) {
            if (!hydrated)
                hydrate();
            return cache.get(key);
        },
        set(key, value) {
            if (!hydrated)
                hydrate();
            cache.set(key, value);
            save();
        },
        delete(key) {
            if (!hydrated)
                hydrate();
            cache.delete(key);
            save();
        },
        clear() {
            cache.clear();
            save();
        },
    };
}
export function clear({ cacheDir = resolve(__dirname, '../.vocs/cache'), } = {}) {
    if (!fs.existsSync(cacheDir))
        return;
    fs.rmSync(cacheDir, { recursive: true });
}
//# sourceMappingURL=cache.js.map