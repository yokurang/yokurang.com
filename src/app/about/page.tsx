import React from 'react';
import AboutCard from 'src/app/components/about/AboutCard';
import Stats from 'src/app/components/about/AboutStats';
import { AcademicCapIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/solid';
import NavigationBar from '../components/NavigationBar';

const aboutMeData = [
  {
    title: 'Education',
    content: ['Bachelor in Computer Science'],
    Icon: AcademicCapIcon,
  },
  {
    title: 'Travel',
    content: ['Visited 5 countries', 'Loves exploring new cultures'],
    Icon: GlobeAltIcon,
  },
  {
    title: 'Location',
    content: ['Currently living in Singapore'],
    Icon: MapPinIcon,
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl py-16 px-4 bg-white min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-2">Learn more about my education, travels, and where I live.</p>
      </header>
      <section className="py-12 px-4">
        <div className="mb-8 rounded shadow-md bg-gray-100">
          <div className="p-6">
            <Stats />
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 rounded shadow-md bg-gray-100 w-full">
          {aboutMeData.map((data, index) => (
            <div key={index} className="w-full p-6">
              <AboutCard title={data.title} content={data.content} Icon={data.Icon} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
