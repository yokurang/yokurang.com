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
    <div className="bg-white mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-12 xl:px-16 min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-4">Here is a brief summary about me and my resume.</p>
      </header>
      <section className="mb-12">
        <AboutCard title="Summary" content={aboutMeSummary} />
      </section>
      <div className="mt-8 bg-gray-50 shadow-xl rounded-lg overflow-hidden mx-4 md:mx-16">
        <div className="text-lg font-semibold p-5 bg-blue-600 text-white">
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
