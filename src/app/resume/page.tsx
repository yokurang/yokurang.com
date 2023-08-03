import React from 'react';
import { RocketLaunchIcon, BriefcaseIcon, CodeBracketSquareIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Educations from '../components/resume/Educations';
import Experiences from '../components/resume/Experiences';
import Skills from '../components/resume/Skills';
import Courses from '../components/resume/Courses';

import { TEducation } from '../data/resume/education';
import { TExperience } from '../data/resume/experience';
import { TSkill } from '../data/resume/skills';
import { TCourse } from '../data/resume/courses';

import educationData from '../data/resume/education';
import experienceData from '../data/resume/experience';
import skillsData from '../data/resume/skills';
import coursesData from '../data/resume/courses';

import NavigationBar from '../components/NavigationBar';

type Section = {
  title: string;
  icon: JSX.Element;
  component: React.ReactElement;
};

const ResumePage: React.FC = () => {
  const sections: Section[] = [
    'Education',
    'Experience',
    'Skills',
    'Courses',
  ].map((title) => {
    let icon;
    let component;
    const iconClass = "w-6 h-6 mr-2";
    switch (title) {
      case 'Education':
        icon = <RocketLaunchIcon className={iconClass} />;
        component = <Educations data={educationData as TEducation[]} />;
        break;
      case 'Experience':
        icon = <BriefcaseIcon className={iconClass} />;
        component = <Experiences data={experienceData as TExperience[]} />;
        break;
      case 'Skills':
        icon = <CodeBracketSquareIcon className={iconClass} />;
        component = <Skills data={skillsData as TSkill[]} />;
        break;
      case 'Courses':
        icon = <BookOpenIcon className={iconClass} />;
        component = <Courses data={coursesData as TCourse[]} />;
        break;
      default:
        throw new Error(`Unknown section: ${title}`);
    }
    return { title, icon, component };
  });

  return (
    <div className="mx-auto max-w-4xl py-16 px-4 bg-white min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
        <p className="text-lg text-gray-600 mb-2">A summary of my professional, educational, and skills background.</p>
      </header>
      <section className="py-12 px-4">
        <div className="flex flex-col items-center mb-8 rounded shadow-md bg-gray-100 w-full">
          {sections.map((section, index) => (
            <div key={index} className="w-full p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold my-2 text-gray-900">{section.title}</h3>
              </div>
              {section.component}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
