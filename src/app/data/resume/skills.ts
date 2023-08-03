export interface TSkill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

enum SkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Expert',
}

export enum SkillCategory {
  Languages = "Languages",
  Technologies = "Technologies",
}

const skills: TSkill[] = [
  {
    name: 'Python',
    level: SkillLevel.Intermediate,
    category: SkillCategory.Languages

  },
  {
    name: 'TypeScript',
    level: SkillLevel.Intermediate,
    category: SkillCategory.Languages
  },
  {
    name: 'C++',
    level: SkillLevel.Intermediate,
    category: SkillCategory.Languages
  },
  {
    name: 'Golang',
    level: SkillLevel.Intermediate,
    category: SkillCategory.Languages
  }
  ,
  {
    name: 'AWS',
    level: SkillLevel.Intermediate,
    category: SkillCategory.Technologies
  }
];

export default skills;