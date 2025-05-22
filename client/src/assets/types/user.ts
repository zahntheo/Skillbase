
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    dateOfBirth: string;
    phoneNumber?: string;
    address?: string;
    dateCreated: string;
    dateUpdated: string;
    isVerified: boolean;
    userName: string
}
