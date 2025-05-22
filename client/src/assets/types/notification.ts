export interface Notification {
    id: string;
    type: string; // e.g., "message", "comment", "like"
    content: string; // e.g., "You have a new message from John"
    timestamp: Date; // e.g., "2023-10-01T12:00:00Z"
    isRead: boolean; // e.g., true or false
    senderId: string; // e.g., "user123"
    senderName: string; // e.g., "John Doe"
    senderProfilePicture: string; // e.g., "https://example.com/profile.jpg"
    relatedContentId?: string; // e.g., "post456" (optional, for comments or likes)
    relatedContentType?: string; // e.g., "post", "comment" (optional, for comments or likes)
    relatedContentTitle?: string; // e.g., "Check out this post!" (optional, for comments or likes)
    relatedContentUrl?: string; // e.g., "https://example.com/post/456" (optional, for comments or likes)
    relatedContentImage?: string; // e.g., "https://example
    
}