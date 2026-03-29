import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DMKit',
  tagline: 'D&D Campaign Management for Dungeon Masters',
  favicon: 'img/favicon.ico',

  url: 'https://dmkit-org.github.io',
  baseUrl: '/user-docs/',

  organizationName: 'dmkit-org',
  projectName: 'user-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dmkit-org/user-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/dmkit-social-card.png',
    navbar: {
      title: 'DMKit',
      logo: {
        alt: 'DMKit Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/dmkit-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'FAQ', to: '/docs/faq' },
            { label: 'Roadmap', to: '/docs/roadmap' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Campaigns', to: '/docs/features/campaigns' },
            { label: 'Battle Map', to: '/docs/features/battle-map' },
            { label: 'Worlds & Locations', to: '/docs/features/worlds-and-locations' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: "What's New", to: '/docs/changelog' },
            { label: 'GitHub', href: 'https://github.com/dmkit-org' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DMKit`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'go', 'typescript', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
