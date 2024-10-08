import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Stone Packaging',
  rootDir: 'docs',

  sidebar: [
    {
      text: "Overview",
      link: "/",
    },
    {
      text: 'Installation',
      collapsed: true,
      items: [
        { text: "From sources", link: "/install/sources" },
        { text: "Static binaries", link: "/install/binaries" },
        { text: "Docker images", link: "/install/docker" },
        { text: "Debian packages", link: "/install/debian" },
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
})
