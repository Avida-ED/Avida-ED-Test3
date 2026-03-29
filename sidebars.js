/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Instructors',
      link: { type: 'doc', id: 'instructors/index' },
      items: [
        { type: 'doc', id: 'instructors/quick-start', label: 'Quick Start' },
        { type: 'doc', id: 'instructors/publications', label: 'Publications' },

        {
          type: 'category',
          label: 'Lab Manual',
          link: { type: 'doc', id: 'instructors/lab-manual/index' },
          items: [
            { type: 'doc', id: 'instructors/lab-manual/exercise-1', label: 'Exercise 1' },
            { type: 'doc', id: 'instructors/lab-manual/exercise-2', label: 'Exercise 2' },
            { type: 'doc', id: 'instructors/lab-manual/exercise-3', label: 'Exercise 3' },
            { type: 'doc', id: 'instructors/lab-manual/exercise-4', label: 'Exercise 4' },
            { type: 'doc', id: 'instructors/lab-manual/independent-research-project'
            , label: 'Independent Research Project' },
          ],
        },

        {
          type: 'category',
          label: 'Model Lessons',
          link: { type: 'doc', id: 'instructors/model-lessons/index' },
          items: [
            { type: 'doc', id: 'instructors/model-lessons/genetic-variations'
            , label: 'Understanding the Introduction of Genetic Variations by Random Mutation' },
            
            { type: 'doc', id: 'instructors/model-lessons/genotype-to-phenotype'
            , label: 'From Genotype to Phenotype: Understanding the Introduction of Phenotypic Variations' },
            
            { type: 'doc', id: 'instructors/model-lessons/mRate-individuals'
            , label: 'Exploring the Effects of Mutation Rate on Individuals' },
            
            { type: 'doc', id: 'instructors/model-lessons/mRate-populations'
            , label: 'Exploring the Effects of Mutation Rate on Populations' },
            
            { type: 'doc', id: 'instructors/model-lessons/artificial-selection'
            , label: 'Artificial Selection: Evolution in Practice' },
            
            { type: 'doc', id: 'instructors/model-lessons/exploring-selection'
            , label: 'Exploring Selection and Fitness' },
            
            { type: 'doc', id: 'instructors/model-lessons/ex-evolve-project'
            , label: 'Experimental Evolution Project with Evolving Digital Organisms' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Students',
      link: { type: 'doc', id: 'students/index' },
      items: [
        { type: 'doc', id: 'students/first-steps', label: 'First Steps' },
        { type: 'doc', id: 'students/course-workflow', label: 'Course Workflow' },
        { type: 'doc', id: 'students/faq', label: 'Student FAQ' },
        { type: 'doc', id: 'students/videos', label: 'Videos' },
      ],
    },
    {
      type: 'category',
      label: 'Videos',
      link: { type: 'doc', id: 'videos/index' },
      items: [
        { type: 'doc', id: 'videos/intro-to-lab-bench', label: 'Intro to Lab Bench Transcript' },
        { type: 'doc', id: 'videos/project-overview', label: 'Project Overview Transcript' },
      ],
    },
    {
      type: 'category',
      label: 'Support',
      link: { type: 'doc', id: 'support/index' },
      items: [
        { type: 'doc', id: 'support/accessibility', label: 'Accessibility' },
        { type: 'doc', id: 'support/instructor-faq', label: 'Instructor FAQ' },
        { type: 'doc', id: 'support/reporting-problems', label: 'Reporting Problems' },
        { type: 'doc', id: 'support/troubleshooting', label: 'Troubleshooting' },
      ],
    },
  ],
};

export default sidebars;
