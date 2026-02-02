import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avida-ED',
  tagline: 'Digital evolution for education',
  favicon: 'img/favicon.ico',

  // GitHub Pages canonical settings (project site)
  url: 'https://avida-ed.github.io',
  baseUrl: '/Avida-ED-test2/',

  organizationName: 'Avida-ED',
  projectName: 'Avida-ED-test2',

  // During stub phase, warnings are less disruptive than hard failures.
  // Flip back to 'throw' when the site is complete.
  onBrokenLinks: 'warn',
markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',  
  },
},

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false, // No blog/news feed; "News Archive" is a normal page.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Avida-ED',
        logo: {
          alt: 'Avida-ED Logo',
          src: 'img/avida-ed-logo.png',
        },
        items: [
          { label: 'Home', to: '/' },

          {
            label: 'Get Started',
            items: [
              { label: 'Docs Intro', to: '/docs/intro' },
              { label: 'Launch Avida-ED', to: '/app' },
              { label: 'Download / Offline', to: '/download' },
            ],
          },

          { label: 'Curriculum', to: '/docs/category/curriculum' },

          {
            label: 'About',
            items: [
              { label: 'Avida-ED', to: '/about/avida-ed' },
              { label: 'Digital Evolution', to: '/about/digital-evolution' },
              { label: 'Version History', to: '/about/version-history' },
              { label: 'Vintage Archive', to: '/about/vintage-archive' },
              { label: 'About Us', to: '/about/team' },
            ],
          },

          { label: 'News Archive', to: '/news-archive' },

          { label: 'Support', to: '/support' },

          {
            label: 'Launch',
            to: '/app',
            position: 'right',
            className: 'button button--primary',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Avida-ED`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
