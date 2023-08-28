import { SkillCategory, TSkill } from "../../data/resume/skills";

const Skills = ({ data }: { data: TSkill[] }) => {
  const categories = data.reduce((acc: Record<SkillCategory, TSkill[]>, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, TSkill[]>);

  const categoryColor = {
    [SkillCategory.Languages]: 'text-blue-500',
    [SkillCategory.Technologies]: 'text-green-500',
  };

  return (
    <div>
      {Object.values(SkillCategory).map((category) => (
        <div key={category} className="mb-8 p-4 md:p-5 rounded-lg shadow-md bg-white">
          <h3 className={`font-bold text-lg md:text-xl ${categoryColor[category]}`}>{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {categories[category]?.map((skill, index) => (
              <div key={index} className="py-2 px-4 bg-white rounded-md flex flex-wrap items-center gap-2 mb-2 border border-gray-200">
                <span className="font-bold text-sm md:text-base break-words">{skill.name}</span>
                <span className="break-normal">({skill.level})</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
