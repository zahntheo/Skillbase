import React from 'react';
import { MdOutlineWork } from "react-icons/md";
import { FaLocationArrow , FaCoffee} from "react-icons/fa";

// define the props for the ProfileCard component
// The ProfileCard component is a functional component that takes in jobTitle, hobby, and location as props
export interface ProfileCardProps {
  jobTitle: string;
  hobby: string;
  location: string;
}

// The ProfileCard component is a functional component that takes in jobTitle, hobby, and location as props
// It returns a div that contains three paragraphs, each displaying an icon and the corresponding prop value
const ProfileCard: React.FC<ProfileCardProps> = ({ jobTitle, hobby, location }) => (
  <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md space-x-5 w-full max-w-md mx-auto m-8">
    <p className="text-gray-600"> <MdOutlineWork /> {jobTitle}</p>
    <p className="text-gray-600"><FaCoffee /> {hobby}</p>
    <p className="text-gray-600"><FaLocationArrow /> {location}</p>
  </div>
);

export default ProfileCard;