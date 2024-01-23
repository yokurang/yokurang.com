import React from 'react';
import AboutCard from 'src/app/components/AboutCard';
import NavigationBar from 'src/app/components/NavBar';

const aboutMeSummary = [
  "Experienced Web Developer",
  "Passionate about technology and learning",
  "Avid reader and traveler"
];

const resumePdfUrl = "/resume/Resume_AlanMatthew.pdf";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white mx-auto max-w-4xl py-16 px-4 min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-4">Here is a brief summary about me and my resume.</p>
      </header>
      <section className="mb-12">
        <AboutCard title="Summary" content={aboutMeSummary} />
      </section>
      {/* Styling the PDF container for a more integrated look */}
      <div className="mt-8 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="text-lg font-semibold p-5 bg-blue-500 text-white">
          My Resume
        </div>
        <iframe
          src={resumePdfUrl}
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="My Resume"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
