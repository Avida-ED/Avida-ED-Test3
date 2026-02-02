import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Avida-ED-Test2/about/avida-ed',
    component: ComponentCreator('/Avida-ED-Test2/about/avida-ed', 'b55'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/about/digital-evolution',
    component: ComponentCreator('/Avida-ED-Test2/about/digital-evolution', 'df5'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/about/team',
    component: ComponentCreator('/Avida-ED-Test2/about/team', '657'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/about/version-history',
    component: ComponentCreator('/Avida-ED-Test2/about/version-history', '401'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/about/vintage-archive',
    component: ComponentCreator('/Avida-ED-Test2/about/vintage-archive', '593'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/app',
    component: ComponentCreator('/Avida-ED-Test2/app', 'daf'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/download',
    component: ComponentCreator('/Avida-ED-Test2/download', 'd1c'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/news-archive',
    component: ComponentCreator('/Avida-ED-Test2/news-archive', 'c89'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/support',
    component: ComponentCreator('/Avida-ED-Test2/support', '921'),
    exact: true
  },
  {
    path: '/Avida-ED-Test2/docs',
    component: ComponentCreator('/Avida-ED-Test2/docs', '8cd'),
    routes: [
      {
        path: '/Avida-ED-Test2/docs',
        component: ComponentCreator('/Avida-ED-Test2/docs', '9e1'),
        routes: [
          {
            path: '/Avida-ED-Test2/docs',
            component: ComponentCreator('/Avida-ED-Test2/docs', '31d'),
            routes: [
              {
                path: '/Avida-ED-Test2/docs/curriculum/',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/', '137'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/intro',
                component: ComponentCreator('/Avida-ED-Test2/docs/intro', '77a'),
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
    path: '/Avida-ED-Test2/',
    component: ComponentCreator('/Avida-ED-Test2/', 'aec'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
