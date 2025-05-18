import React from 'react';
import { MdVerified } from 'react-icons/md';
import { Skill } from '../../assets/types/skills';

interface ProfileCardProps {
    skills?: Skill[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ skills }) => (
    <div className="grid grid-cols-2 divide-x divide-gray-200 w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">

        <div className="pr-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Backend</h2>
            <div className="grid grid-cols-1 gap-4">
                {skills
                    ?.filter((skill) => skill.category === 'Backend')
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
                                        {skill.isVerified && <MdVerified className="text-blue-500" />}
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


        <div className="pl-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Frontend</h2>
            <div className="grid grid-cols-1 gap-4">
                {skills
                    ?.filter((skill) => skill.category === 'Frontend')
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
                                        {skill.isVerified && <MdVerified className="text-blue-500" />}
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
    </div>


);

export default ProfileCard;
