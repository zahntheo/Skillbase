import React from 'react';
import { Skill } from '../../assets/types/skills';

export interface SkillCardProps {
    skills?: Skill[];
}

const SkillCategory: React.FC<{ category: string; skills: Skill[] }> = ({ category, skills }) => (
    <div className="pr-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{category}</h2>
        <div className="grid grid-cols-1 gap-4">
            {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                    <div
                        key={skill.id}
                        className="p-4 bg-white rounded-md shadow transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                    >
                        <div className="flex items-center space-x-2">
                            <img src={skill.iconUrl} alt={skill.title} className="w-8 h-8" />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
                                    {skill.isVerified && <span className="text-blue-500">✔</span>}
                                    {skill.yearsExperience !== undefined && (
                                        <span className="text-sm text-gray-500">
                                            {skill.yearsExperience} yrs
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-500">{skill.description}</p>

                                <div className="w-64 bg-gray-200 rounded-full h-2 mt-1">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${(skill.level / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
);

const SkillCard: React.FC<SkillCardProps> = ({ skills = [] }) => {
    // Get all unique categories from skills
    const categories = Array.from(new Set(skills.map((skill) => skill.category || 'Uncategorized').filter(Boolean)));

    // Determine grid columns based on number of categories
    const gridCols = categories.length <= 2 ? 'grid-cols-2' : categories.length <= 3 ? 'grid-cols-3' : 'grid-cols-4';

    return (
        <div className={`grid ${gridCols} divide-x divide-gray-200 w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md`}>
            {categories.map((category, index) => (
                <React.Fragment key={category}>
                    {index > 0 && (
                        <div className="border-l border-gray-200" />
                    )}
                    <div className={index > 0 ? 'pl-6' : 'pr-6'}>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">{category}</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="p-4 bg-white rounded-md shadow transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <img src={skill.iconUrl} alt={skill.title} className="w-8 h-8" />
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
                                                    {skill.isVerified && <span className="text-blue-500">✔</span>}
                                                    {skill.yearsExperience !== undefined && (
                                                        <span className="text-sm text-gray-500">
                                                            {skill.yearsExperience} yrs
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-sm text-gray-500">{skill.description}</p>

                                                <div className="w-64 bg-gray-200 rounded-full h-2 mt-1">
                                                    <div
                                                        className="bg-blue-500 h-2 rounded-full"
                                                        style={{ width: `${(skill.level / 5) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SkillCard;
