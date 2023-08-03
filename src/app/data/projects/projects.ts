export type Project = {
  title: string;
  description: string;
  projectLink?: string;
  codeLink: string;
  tags: string[];
  details?: string;
};

export const projects: Project[] = [
  {
      title: 'yokurang.com',
      description: 'My personal website',
      projectLink: 'https://www.yokurang.com',
      codeLink: 'https://github.com/yokurang/yokurang.com',
      tags: ['React', 'TypeScript', 'AWS'],
      details: 'Built using React TypeScript and hosted using AWS.'
  },
];