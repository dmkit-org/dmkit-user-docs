import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'roadmap',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/data-model',
        'architecture/canvas',
        'architecture/navigation',
        'architecture/auth',
      ],
    },
    {
      type: 'category',
      label: 'Stack',
      items: [
        'stack/overview',
        'stack/frontend',
        'stack/backend',
        'stack/infrastructure',
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'cicd/overview',
        'cicd/workflows',
        'cicd/releases',
        'cicd/environments',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: [
        'monitoring/overview',
        'monitoring/logging',
        'monitoring/alerts',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/strategy',
        'testing/frontend',
        'testing/backend',
        'testing/e2e',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: [
        'user-guides/getting-started',
        'user-guides/campaigns',
        'user-guides/worlds-and-locations',
        'user-guides/battle-map',
        'user-guides/entities',
        'user-guides/export-import',
      ],
    },
  ],
};

export default sidebars;
