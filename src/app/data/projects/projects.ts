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
      description: 'The website you are currently on!',
      projectLink: 'https://yokurang.com/',
      codeLink: 'https://github.com/yokurang/yokurang.com',
      tags: ['React', 'TypeScript', 'CI/CD'],
      details: 'Built using Next.js, React, TypeScript, and Tailwind CSS. CI/CD pipeline using GitHub Actions.'
  },
];