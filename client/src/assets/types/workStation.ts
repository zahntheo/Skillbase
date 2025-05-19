export interface WorkStation {
    id: number;
    title: string;            // Life station title
    description: string;      // Life station description
    company?: string;         // Company name
    location?: string;       // Location of the life station
    tags?: string[];          // Tags for the life station
    companyLogo?: string;      // Company logo
    isVerified?: boolean;     // Verification status
    isFeatured?: boolean;     // Featured status
    isInProgress?: boolean;  // In progress status
    isArchived?: boolean;    // Archived status
    isDraft?: boolean;       // Draft status
    isPrivate?: boolean;     // Private status
    isDeleted?: boolean;     // Deleted status
    isPublic?: boolean;     // Public status
}

export default WorkStation;