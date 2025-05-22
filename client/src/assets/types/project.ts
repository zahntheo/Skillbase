export interface Project {
    id: number;
    title: string;            // Project title
    description: string;      // Project description
    completionDate: string;    // Completion date
    startDate: string;       // Start date
    tags?: string[];          // Tags for the project
    company?: string;         // Company name
    location?: string;       // Location of the project
    isVerified?: boolean;     // Verification status
    isFeatured?: boolean;     // Featured status
    isInProgress?: boolean;  // In progress status
    isArchived?: boolean;    // Archived status
    isDraft?: boolean;       // Draft status
    isPrivate?: boolean;     // Private status
    isDeleted?: boolean;     // Deleted status
    isPublic?: boolean;     // Public status
    isHidden?: boolean;     // Hidden status
    isNew?: boolean;        // New status
    isUpdated?: boolean;    // Updated status
    isRemoved?: boolean;    // Removed status
    isOutdated?: boolean;   // Outdated status
    isDeprecated?: boolean; // Deprecated status
    isObsolete?: boolean;   // Obsolete status
    isLegacy?: boolean;     // Legacy status
    isExperimental?: boolean; // Experimental status
    isBeta?: boolean;      // Beta status
    isAlpha?: boolean;     // Alpha status
    isStable?: boolean;   // Stable status
    isProductionReady?: boolean; // Production ready status
    isTested?: boolean;    // Tested status
    isVerifiedBy?: string; // Verified by
    isReviewed?: boolean;  // Reviewed status
    isApproved?: boolean;  // Approved status
    isRejected?: boolean;  // Rejected status
    isFlagged?: boolean;   // Flagged status
    isReported?: boolean;  // Reported status

}