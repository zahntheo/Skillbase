import React from 'react';

import { Project } from '../../assets/types/projects';

import { MdWork } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { TbCalendarDue } from "react-icons/tb";

interface ProjectCardProps {
    projects?: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => (
    <div className="grid grid-cols-1 gap-4 w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md m-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        {projects?.map((project) => (
            <div
                key={project.id}
                className="p-4 bg-white rounded-md shadow transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
                <div className="flex items-center space-x-2 basis-1/4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    {project.isVerified && <span className="text-blue-500">✔</span>}
                </div>
                <p className="text-sm text-gray-500 basis-1/4">{project.description}</p>
                <span className="text-xs text-gray-400 basis-1/6"><TbCalendarDue />{project.startDate} - {project.completionDate}</span>
                <span className="text-xs text-gray-400 basis-1/6"><MdWork /> {project.company}</span>
                <span className="text-xs text-gray-400 basis-1/6"><FaLocationArrow /> {project.location}</span>
            </div>
        ))}
    </div>
);

export default ProjectCard;