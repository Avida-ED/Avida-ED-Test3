import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avida-ED',
  tagline: 'Digital evolution for education',
  favicon: 'img/favicon.ico',

  // GitHub Pages canonical settings (project site)
  url: 'https://avida-ed.github.io',
  baseUrl: '/Avida-ED-Test3/',

  organizationName: 'Avida-ED',
  projectName: 'Avida-ED-Test3',

  future: {
    v4: {
      useCssCascadeLayers: false,
      removeLegacyPostBuildHeadAttribute: false,
    },
    experimental_faster: {
      swcJsLoader: false,
      swcJsMinimizer: false,
      swcHtmlMinimizer: false,
      lightningCssMinimizer: false,
      mdxCrossCompilerCache: false,
      rspackBundler: false,
      rspackPersistentCache: false,
      ssgWorkerThreads: false,
    },
    experimental_router: 'browser',
  },

  // During stub phase, warnings are less disruptive than hard failures.
  // Flip back to 'throw' when the site is complete.
  onBrokenLinks: 'warn',
markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
    onBrokenMarkdownImages: 'warn',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Avida-ED',
        logo: {
          alt: 'Avida-ED Logo',
          src: 'img/avida-ed-logo.png',
          href: 'https://avida-ed.github.io/Avida-ED4/',
        },
        items: [
          { label: 'Home', to: '/' },

          {
            label: 'Get Started',
            items: [
              { label: 'Launch Avida-ED 4', to: '/app' },
              { label: 'For Students', to: '/getstarted/students' },
              { label: 'For Instructors', to: '/getstarted/instructors' },
              { label: 'Download / Offline', to: '/download' },
            ],
          },

          { label: 'Curriculum', to: '/curriculum' },

          { label: 'Support', to: '/support' },

          {
            label: 'About',
            items: [
              { label: 'Avida-ED', to: '/about/avida-ed' },
              { label: 'Digital Evolution', to: '/about/digital-evolution' },
              { label: 'Version History', to: '/about/version-history' },
              { label: 'Download / Offline', to: '/download' },
              { label: 'News Archive', to: '/about/news-archive' },
              { label: 'Vintage Archive', to: '/about/vintage-archive' },
              { label: 'About Us', to: '/about/team' },
            ],
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
