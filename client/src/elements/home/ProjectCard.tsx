import React from 'react';
import { Project } from '../../assets/types/project';
import { TbCalendarDue } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export interface ProjectCardProps {
    projects?: Project[];
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
    <div className="p-4 bg-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
        <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
                <h3 className="text-white font-medium">{project.title}</h3>
                {project.isVerified && <span className="text-blue-400 text-xs">✔</span>}
            </div>
            <p className="text-gray-400 text-xs col-span-2">{project.description}</p>
            <div className="flex flex-col space-y-1 text-xs text-gray-400">
                <span className="flex items-center gap-1"><TbCalendarDue /> {project.startDate} - {project.completionDate}</span>
                <span className="flex items-center gap-1"><MdWork /> {project.company}</span>
                <span className="flex items-center gap-1"><FaLocationArrow /> {project.location}</span>
            </div>
        </div>
    </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold text-black mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-3">
            {projects?.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    </div>
);

export default ProjectCard;
