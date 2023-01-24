// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shmuel Israel.xyz',
  tagline: 'Nodes are yummy',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shmuelisrl', // Usually your GitHub org/user name.
  projectName: 'docusaurus_website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    // edit page link//
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          // {to: '/new-folder', label: 'mds', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   logo: 'img/logo.svg',
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',   
          // },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentations',
            items: [
              {
                label: 'BBTK',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Tutorials',
          //   items: [
          //     {
          //       label: 'Tutorial #1',
          //       to: '/new-folder/markdown-page',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // youtube link //
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCB1n48TB6f6TuMm75jZ18-w',
              },
              // discord link //
              {
                label: 'Discord',
                href: 'https://discord.gg/2cCDA5wbmU',
              },
              // twitter link //
              {
                label: 'Twitter',
                href: 'https://twitter.com/shmuel_Israel_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // gumroad link //
              {
                label: 'Gumroad',
                href: 'https://shmueldisrl.gumroad.com',
              },
              // Github link //
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/shmuelisrl',
              // },
            ],
            
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
   
  
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
  
};



module.exports = config;