import { Plugin } from 'vite';
import { IdentifierOption, CompileOptions } from '@vanilla-extract/integration';

interface Options {
    identifiers?: IdentifierOption;
    emitCssInSsr?: boolean;
    esbuildOptions?: CompileOptions['esbuildOptions'];
}
declare function vanillaExtractPlugin({ identifiers, emitCssInSsr, esbuildOptions, }?: Options): Plugin;

export { vanillaExtractPlugin };
