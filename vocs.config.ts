import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Stone Packaging',
  rootDir: 'docs',
  
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
    {
      text: 'Stone Packaging Resources',
      link: '/resourcers',
    },
  ],
})
