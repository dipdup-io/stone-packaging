import type { BuildParameters as BuildParameters_ } from '../../vite/build.js';
export type BuildParameters = Pick<BuildParameters_, 'clean' | 'logLevel' | 'outDir' | 'publicDir' | 'searchIndex'>;
export declare function build({ clean, logLevel, outDir, publicDir, searchIndex }: BuildParameters): Promise<void>;
//# sourceMappingURL=build.d.js.map