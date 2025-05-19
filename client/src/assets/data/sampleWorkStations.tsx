import { WorkStation } from "../types/workStation";

const mockWorkStations: WorkStation[] = [
  {
    id: 1,
    title: "Software Developer",
    description: "Entwicklung von Webanwendungen mit Angular und Node.js",
    company: "TechSolutions GmbH",
    location: "Berlin, Deutschland",
    tags: ["JavaScript", "Angular", "Node.js"],
    companyLogo: "https://example.com/logos/techsolutions.png",
    isVerified: true,
    isFeatured: false,
    isInProgress: false,
    isArchived: false,
    isDraft: false,
    isPrivate: false,
    isDeleted: false,
    isPublic: true
  },
  {
    id: 2,
    title: "Projektmanager",
    description: "Leitung von interdisziplinären IT-Projekten",
    company: "Innovate AG",
    location: "München, Deutschland",
    tags: ["Projektmanagement", "Scrum", "Agile"],
    companyLogo: "https://example.com/logos/innovate.png",
    isVerified: true,
    isFeatured: true,
    isInProgress: false,
    isArchived: false,
    isDraft: false,
    isPrivate: false,
    isDeleted: false,
    isPublic: true
  },
  {
    id: 3,
    title: "Praktikant UI/UX Design",
    description: "Unterstützung bei der Gestaltung von Benutzeroberflächen",
    company: "DesignStudio",
    location: "Remote",
    tags: ["Figma", "UX", "UI"],
    companyLogo: "https://example.com/logos/designstudio.png",
    isVerified: true,
    isFeatured: false,
    isInProgress: true,
    isArchived: false,
    isDraft: false,
    isPrivate: true,
    isDeleted: false,
    isPublic: false
  }
];
export default mockWorkStations;