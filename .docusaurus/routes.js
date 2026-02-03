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
    component: ComponentCreator('/Avida-ED-Test2/docs', 'a73'),
    routes: [
      {
        path: '/Avida-ED-Test2/docs',
        component: ComponentCreator('/Avida-ED-Test2/docs', 'e3d'),
        routes: [
          {
            path: '/Avida-ED-Test2/docs',
            component: ComponentCreator('/Avida-ED-Test2/docs', '777'),
            routes: [
              {
                path: '/Avida-ED-Test2/docs/curriculum/',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/', '137'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/', 'e73'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-1',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-1', 'e57'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-2',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-2', 'ab1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-3',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-3', '56b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-4',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/exercise-4', '02c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/lab-manual/independent-research-project',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/lab-manual/independent-research-project', 'd91'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/', 'e43'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/artificial-selection',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/artificial-selection', '651'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/ex-evolve-project',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/ex-evolve-project', 'c59'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/exploring-selection',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/exploring-selection', '284'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/genetic-variations',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/genetic-variations', '5f6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/genotype-to-phenotype',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/genotype-to-phenotype', '6aa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/mRate-individuals',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/mRate-individuals', '14e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/model-lessons/mRate-populations',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/model-lessons/mRate-populations', '045'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/Avida-ED-Test2/docs/curriculum/quick-start',
                component: ComponentCreator('/Avida-ED-Test2/docs/curriculum/quick-start', '4c2'),
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
