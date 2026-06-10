import React from 'react';
import { MdOutlineWork } from "react-icons/md";
import { FaLocationArrow, FaCoffee } from "react-icons/fa";

export interface ProfileCardProps {
  jobTitle: string;
  hobby: string;
  location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ jobTitle, hobby, location }) => (
  <div className="flex justify-center items-center bg-black text-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto mb-8">
    <div className="flex items-center space-x-8 w-full">
      <div className="flex items-center space-x-2 flex-1">
        <MdOutlineWork className="text-gray-400" />
        <span className="text-sm">{jobTitle}</span>
      </div>
      <div className="flex items-center space-x-2 flex-1">
        <FaCoffee className="text-gray-400" />
        <span className="text-sm">{hobby}</span>
      </div>
      <div className="flex items-center space-x-2 flex-1">
        <FaLocationArrow className="text-gray-400" />
        <span className="text-sm">{location}</span>
      </div>
    </div>
  </div>
);

export default ProfileCard;
