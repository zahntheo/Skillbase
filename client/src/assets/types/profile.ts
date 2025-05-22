
import type { ProfileCardProps } from '../../elements/home/ProfileCard';
import type { Skill } from './skills';
import type { Project } from './project';
import type { WorkStation } from './workStation';
import type { User } from './user';


export interface Profile {
  id: string;
  card: ProfileCardProps;
  skills: Skill[]; 
  projects: Project[]; 
  workStations: WorkStation[]; 
  user: User;
  profilePicture: string;
}
