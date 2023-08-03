import React from "react";
import { Project } from "@/app/data/projects/projects";
import Link from "next/link";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6">
    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
    <div className="mb-4">
      {project.projectLink && (
        <div className="mb-2">
          <Link href={project.projectLink}>
            <div className="text-blue-500 cursor-pointer hover:underline">
              Project Link
            </div>
          </Link>
        </div>
      )}
      <div className="mb-2">
        <Link href={project.codeLink}>
          <div className="text-blue-500 cursor-pointer hover:underline">
            Code Link
          </div>
        </Link>
      </div>
    </div>
    <p className="text-gray-600 italic mb-4">{project.details}</p>
    <div className="flex flex-wrap">
      {project.tags.map((tag, index) => (
        <span key={index} className="text-sm text-gray-500 bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
