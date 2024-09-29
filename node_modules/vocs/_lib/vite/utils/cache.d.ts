export declare const search: {
    get(key: string): any;
    set<v>(key: string, value: v): void;
    delete(key: string): void;
    clear(): void;
};
export declare const twoslash: {
    get(key: string): any;
    set<v>(key: string, value: v): void;
    delete(key: string): void;
    clear(): void;
};
export declare function create(key: string, { cacheDir }?: {
    cacheDir?: string;
}): {
    get(key: string): any;
    set<v>(key: string, value: v): void;
    delete(key: string): void;
    clear(): void;
};
export declare function clear({ cacheDir, }?: {
    cacheDir?: string;
}): void;
//# sourceMappingURL=cache.d.js.map