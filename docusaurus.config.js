// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '瀚高数据库',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        versions: {
          current: {label: '运维指南'}
        },
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... 其他设置
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'applicationDep',
        versions: {
          current: {label: '应用开发指南'}
        },
        path: 'applicationDep',
        routeBasePath: 'applicationDep',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... 其他设置
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sql',
        versions: {
          current: {label: 'SQL开发指南'}
        },
        path: 'sql',
        routeBasePath: 'sql',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... 其他设置
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'problemMenu',
        versions: {
          current: {label: '常见问题'}
        },
        path: 'problemMenu',
        routeBasePath: 'problemMenu',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... 其他设置
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'manualDep',
        versions: {
          current: {label: '产品手册'}
        },
        path: 'manualDep',
        routeBasePath: 'manualDep',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... 其他设置
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      // algolia: {
      //   appId: '34H12TP0EB',
      //   apiKey: '4114cd4f532283f35b5f823f93cb25eb',
      //   indexName: 'yy c',
      //   contextualSearch: true,
      // },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-doc.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '快速入手',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'community',
            activeBasePath: '/community/'
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'applicationDep',
            activeBasePath: '/applicationDep/'
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'sql',
            activeBasePath: '/sql/'
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'problemMenu',
            activeBasePath: '/problemMenu/'
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'manualDep',
            activeBasePath: '/problemMenu/'
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        // style: 'dark',
        copyright: `Copyright © 2022 瀚高基础软件股份有限公司 | 备案号：鲁ICP备09010331号-3`,
       
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          docsRouteBasePath: ["/docs","/community",,"manualDep","problemMenu","/sql","applicationDep"],
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ["en", "zh"],
          // ```
        },
      ],
    ]
};

module.exports = config;
