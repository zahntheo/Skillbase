import sampleProjects from "./sampleProjects";  
import sampleSkills from "./sampleSkills";
import sampleWorkStations from "./sampleWorkStations";
import sampleUser from "./sampleUser";
import sampleProfileCard from "./sampleProfileCard";
import type { Profile } from "../types/profile";

const sampleProfile: Profile = {
  id: '1',
  card: sampleProfileCard,
  skills: sampleSkills, 
  projects: sampleProjects,
  workStations: sampleWorkStations,
  user: sampleUser,
  profilePicture: '/images/profile1.jpg',
};


export default sampleProfile;
