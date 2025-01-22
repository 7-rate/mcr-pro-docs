import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MCR Pro Docs',
  tagline: 'マイコンカーAdvanced Class用モータードライブ基板のドキュメント',
  favicon: 'img/logo.svg',

  url: 'https://7-rate.github.io/',
  baseUrl: '/mcr-pro-docs/',

  organizationName: 'rate',
  projectName: 'mcr-pro-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MCR Pro Docs',
      logo: {
        alt: 'MCR Pro Docs Logo',
        src: 'svg/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'mcr-pro',
              href: 'https://github.com/7-rate/mcr-pro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 7_rate. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
