import { Skill } from '../types/skills';
// Sample data for skills
const sampleSkills: Skill[] = [
  {
    id: 1,
    title: 'React',
    level: 5,
    zertifikat: 'React Developer Certification',
    description: 'Erfahrung in Hooks, Zustand und Komponentenarchitektur.',
    category: 'Frontend',
    lastUsed: '2025-03-01',
    yearsExperience: 3,
    isVerified: true,
    tags: ['JavaScript', 'UI', 'SPA'],
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
  },
  {
    id: 2,
    title: 'TypeScript',
    level: 4,
    zertifikat: 'TS Advanced Course',
    description: 'Starke Kenntnisse in Typisierung und Interfaces.',
    category: 'Backend',
    lastUsed: '2025-05-01',
    yearsExperience: 2,
    isVerified: false,
    tags: ['Types', 'JS', 'TSX'],
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/919/919832.png',
  },
  
];

export default sampleSkills;