import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Avida-ED-test2/__docusaurus/debug',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug', 'dd4'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/config',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/config', '6e9'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/content',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/content', 'f35'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/globalData',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/globalData', '6b2'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/metadata',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/metadata', 'a8e'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/registry',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/registry', 'dbd'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/__docusaurus/debug/routes',
    component: ComponentCreator('/Avida-ED-test2/__docusaurus/debug/routes', '446'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/about/avida-ed',
    component: ComponentCreator('/Avida-ED-test2/about/avida-ed', '216'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/about/digital-evolution',
    component: ComponentCreator('/Avida-ED-test2/about/digital-evolution', 'f84'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/about/team',
    component: ComponentCreator('/Avida-ED-test2/about/team', '018'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/about/version-history',
    component: ComponentCreator('/Avida-ED-test2/about/version-history', '4d5'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/about/vintage-archive',
    component: ComponentCreator('/Avida-ED-test2/about/vintage-archive', 'e2b'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/app',
    component: ComponentCreator('/Avida-ED-test2/app', '046'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/download',
    component: ComponentCreator('/Avida-ED-test2/download', '914'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/news-archive',
    component: ComponentCreator('/Avida-ED-test2/news-archive', '1c7'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/support',
    component: ComponentCreator('/Avida-ED-test2/support', 'be5'),
    exact: true
  },
  {
    path: '/Avida-ED-test2/docs',
    component: ComponentCreator('/Avida-ED-test2/docs', '0bd'),
    routes: [
      {
        path: '/Avida-ED-test2/docs',
        component: ComponentCreator('/Avida-ED-test2/docs', 'ab1'),
        routes: [
          {
            path: '/Avida-ED-test2/docs',
            component: ComponentCreator('/Avida-ED-test2/docs', 'cf9'),
            routes: [
              {
                path: '/Avida-ED-test2/docs/curriculum/',
                component: ComponentCreator('/Avida-ED-test2/docs/curriculum/', 'b25'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-test2/docs/intro',
                component: ComponentCreator('/Avida-ED-test2/docs/intro', '4b7'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Avida-ED-test2/',
    component: ComponentCreator('/Avida-ED-test2/', '212'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
