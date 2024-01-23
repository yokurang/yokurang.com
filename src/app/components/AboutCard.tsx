// src/app/components/AboutCard.tsx
import React from 'react';

interface AboutProps {
  title: string;
  content: string[];
}

const AboutCard: React.FC<AboutProps> = ({ title, content }) => {
  return (
    <div className="bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <ul className="list-inside list-disc space-y-2 pl-5">
        {content.map((point, index) => (
          <li key={index} className="text-lg text-gray-600">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCard;
