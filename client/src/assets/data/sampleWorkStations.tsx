import { WorkStation } from "../types/workStation";

const sampleWorkStations: WorkStation[] = [
  {
    id: 1,
    title: "Software Developer",
    description: "Entwicklung von Webanwendungen mit Angular und Node.js",
    company: "Google",
    location: "Berlin, Deutschland",
    tags: ["JavaScript", "Angular", "Node.js"],
    companyLogo: "https://logo.clearbit.com/google.com",
    startDate: "2023-01-01",
    completionDate: "2023-12-31",
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
    company: "Microsoft",
    location: "München, Deutschland",
    tags: ["Projektmanagement", "Scrum", "Agile"],
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    startDate: "2023-02-01",
    completionDate: "2023-11-30",
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
    company: "Spotify",
    location: "Remote",
    tags: ["Figma", "UX", "UI"],
    companyLogo: "https://logo.clearbit.com/spotify.com",
    startDate: "2023-03-01",
    completionDate: "2023-08-31",
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
export default sampleWorkStations;