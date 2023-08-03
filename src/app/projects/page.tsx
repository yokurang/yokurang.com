import React from "react";
import NavigationBar from "../components/NavigationBar";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects/projects";

const ProjectsPage = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 bg-white min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 mb-6">A collection of projects that I have worked on.</p>
      </header>
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded shadow-md bg-gray-100 p-6"> {/* Grid layout for projects */}
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
