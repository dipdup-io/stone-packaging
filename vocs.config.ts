import { defineConfig } from 'vocs'

const GITHUB_URL_PREFIX = "https://github.com/dipdup-io/stone-packaging/tree/master"

const replaceInFiles = (fileExt: string, replacements: [string, string][]) => 
  (code: string, id: string) => {
    if (!id.endsWith(`.${fileExt}`)) {
      return null;
    }
    for (const rec of replacements.values()) {
      code = code.replaceAll(rec[0], rec[1]);
    }
    return {
      code,
      map: null,
    };
  }


export default defineConfig({
  title: 'Stone Packaging',
  rootDir: 'docs',

  sidebar: [
    {
      text: "Overview",
      link: "/",
    },
    {
      text: "Examples",
      link: "/example",
    },
    {
      text: 'Installation',
      collapsed: true,
      items: [
        { text: "From sources", link: "/install/sources" },
        { text: "Static binaries", link: "/install/binaries" },
        { text: "Docker images", link: "/install/docker" },
        { text: "Debian packages", link: "/install/debian" },
        { text: "Homebrew", link: "/install/homebrew" },
      ],
    },
    {
      text: 'Usage',
      collapsed: true,
      items: [
        { text: "Generating execution artifacts", link: "/usage/execution" },
        { text: "Stone Prover configuration", link: "/usage/configuration" },
        { text: "Proving execution", link: "/usage/proving" },
        { text: "Verifying proof", link: "/usage/verifying" },
      ],
    },
    {
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: "Verifying Stone proof in Ethereum", link: "/advanced/ethereum" },
        { text: "Verifying Stone proof on Starknet", link: "/advanced/starknet" },
      ],
    },
    {
      text: 'Stone Packaging Resources',
      link: '/resourcers',
    },
  ],

  vite: {
    plugins: [
      {
        name: "vite-plugin-rewrite-links", // Plugin name
        enforce: "pre", // Run before default transformations
        transform: replaceInFiles("md", [
          ["../../test_files/", `${GITHUB_URL_PREFIX}/test_files/`],
          ["../../e2e_test/", `${GITHUB_URL_PREFIX}/e2e_test/`],
        ])
      }
    ]
  }
});
