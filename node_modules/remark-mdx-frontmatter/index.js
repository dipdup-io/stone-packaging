import { name as isIdentifierName } from 'estree-util-is-identifier-name';
import { valueToEstree } from 'estree-util-value-to-estree';
import { parse as parseToml } from 'toml';
import { parse as parseYaml } from 'yaml';
/**
 * A remark plugin to expose frontmatter data as named exports.
 *
 * @param options Optional options to configure the output.
 * @returns A unified transformer.
 */
const remarkMdxFrontmatter = ({ name = 'frontmatter', parsers } = {}) => {
    if (!isIdentifierName(name)) {
        throw new Error(`Name this should be a valid identifier, got: ${JSON.stringify(name)}`);
    }
    const allParsers = {
        yaml: parseYaml,
        toml: parseToml,
        ...parsers
    };
    return (ast) => {
        let data;
        const node = ast.children.find((child) => Object.hasOwn(allParsers, child.type));
        if (node) {
            const parser = allParsers[node.type];
            const { value } = node;
            data = parser(value);
        }
        ast.children.unshift({
            type: 'mdxjsEsm',
            value: '',
            data: {
                estree: {
                    type: 'Program',
                    sourceType: 'module',
                    body: [
                        {
                            type: 'ExportNamedDeclaration',
                            specifiers: [],
                            declaration: {
                                type: 'VariableDeclaration',
                                kind: 'const',
                                declarations: [
                                    {
                                        type: 'VariableDeclarator',
                                        id: { type: 'Identifier', name },
                                        init: valueToEstree(data)
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        });
    };
};
export default remarkMdxFrontmatter;
