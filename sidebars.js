/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    { type: 'doc', id: 'intro', label: 'Introduction' },

    {
      type: 'category',
      label: 'Curriculum',
      link: { type: 'doc', id: 'curriculum/index' },
      items: [
        { type: 'doc', id: 'curriculum/quick-start', label: 'Quick Start' },

        {
          type: 'category',
          label: 'Lab Manual',
          link: { type: 'doc', id: 'curriculum/lab-manual/index' },
          items: [
            { type: 'doc', id: 'curriculum/lab-manual/exercise-1', label: 'Exercise 1' },
            { type: 'doc', id: 'curriculum/lab-manual/exercise-2', label: 'Exercise 2' },
            { type: 'doc', id: 'curriculum/lab-manual/exercise-3', label: 'Exercise 3' },
            { type: 'doc', id: 'curriculum/lab-manual/exercise-4', label: 'Exercise 4' },
            { type: 'doc', id: 'curriculum/lab-manual/independent-research-project'
            , label: 'Independent Research Project' },
          ],
        },

        {
          type: 'category',
          label: 'Model Lessons',
          link: { type: 'doc', id: 'curriculum/model-lessons/index' },
          items: [
            { type: 'doc', id: 'curriculum/model-lessons/genetic-variations'
            , label: 'Understanding the Introduction of Genetic Variations by Random Mutation' },
            
            { type: 'doc', id: 'curriculum/model-lessons/genotype-to-phenotype'
            , label: 'From Genotype to Phenotype: Understanding the Introduction of Phenotypic Variations' },
            
            { type: 'doc', id: 'curriculum/model-lessons/mRate-individuals'
            , label: 'Exploring the Effects of Mutation Rate on Individuals' },
            
            { type: 'doc', id: 'curriculum/model-lessons/mRate-populations'
            , label: 'Exploring the Effects of Mutation Rate on Populations' },
            
            { type: 'doc', id: 'curriculum/model-lessons/artificial-selection'
            , label: 'Artificial Selection: Evolution in Practice' },
            
            { type: 'doc', id: 'curriculum/model-lessons/exploring-selection'
            , label: 'Exploring Selection and Fitness' },
            
            { type: 'doc', id: 'curriculum/model-lessons/ex-evolve-project'
            , label: 'Experimental Evolution Project with Evolving Digital Organisms' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
