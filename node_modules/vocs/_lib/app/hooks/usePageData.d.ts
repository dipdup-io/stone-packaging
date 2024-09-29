/// <reference types="react" />
import { type Module } from '../types.js';
export declare function usePageData(): {
    filePath?: string | undefined;
    frontmatter: import("../types.js").Frontmatter | undefined;
    lastUpdatedAt?: number | undefined;
    previousPath?: string | undefined;
};
export declare const PageDataContext: import("react").Context<{
    filePath?: string | undefined;
    frontmatter: Module['frontmatter'];
    lastUpdatedAt?: number | undefined;
    previousPath?: string | undefined;
} | undefined>;
//# sourceMappingURL=usePageData.d.js.map