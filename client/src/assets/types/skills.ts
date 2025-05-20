export interface Skill {
  id: number;
  title: string;            
  level: number;            
  zertifikat: string;       
  description: string;      
  category?: string;        
  lastUsed?: string;        
  yearsExperience?: number; 
  isVerified?: boolean;     
  tags?: string[];          
  iconUrl?: string;         
}
