import React from 'react';


import { Skill } from '../../assets/types/skills';


interface ProfileCardProps {
    skills?: Skill[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ skills }) => (
    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md space-x-3 w-full max-w-md mx-auto m-8">
        <div className='grid grid-cols-1 gap-4'>
            {skills?.map((skill) => (
                <div key={skill.id} className="flex items-center space-x-2">
                    <img src={skill.iconUrl} alt={skill.title} className="w-8 h-8" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
                        <p className="text-sm text-gray-500">{skill.description}</p>
                        <div className="max-w-md bg-gray-200 rounded-full h-2 mt-1">
                            <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${(skill.level / 5) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ProfileCard;