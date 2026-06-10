import React from 'react';
import { Skill } from '../../assets/types/skills';

export interface SkillCardProps {
    skills?: Skill[];
}

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="p-4 bg-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
        <div className="flex items-center space-x-3">
            <img src={skill.iconUrl} alt={skill.title} className="w-6 h-6" />
            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-sm font-medium text-white">{skill.title}</h3>
                    {skill.isVerified && <span className="text-blue-400 text-xs">✔</span>}
                    {skill.yearsExperience && (
                        <span className="text-xs text-gray-400">{skill.yearsExperience} yrs</span>
                    )}
                </div>
                <p className="text-xs text-gray-400 truncate">{skill.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                    <div
                        className="bg-white h-1.5 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    </div>
);

const SkillCategory: React.FC<{ category: string; skills: Skill[] }> = ({ category, skills }) => {
    const categorySkills = skills.filter((s) => s.category === category);
    
    if (categorySkills.length === 0) return null;

    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold text-black mb-3">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categorySkills.map((skill) => (
                    <SkillItem key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const SkillCard: React.FC<SkillCardProps> = ({ skills = [] }) => {
    const categories = Array.from(
        new Set(skills.map((s) => s.category || 'Uncategorized').filter(Boolean))
    );

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-black mb-6">Skills</h2>
            {categories.map((category) => (
                <SkillCategory key={category} category={category} skills={skills} />
            ))}
        </div>
    );
};

export default SkillCard;
