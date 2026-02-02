/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Curriculum',
      link: { type: 'doc', id: 'curriculum/index' },
      items: [],
    },
  ],
};

export default sidebars;
