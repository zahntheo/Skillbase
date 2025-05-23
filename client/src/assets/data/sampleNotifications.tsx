// sampleNotifications.ts
import { Notification } from "../types/notification";

const sampleNotifications: Notification[] = [
  {
    id: "notif1",
    type: "message",
    content: "You have a new message from John",
    timestamp: new Date("2025-02-21T10:15:00Z"),
    isRead: false,
    senderId: "user123",
    senderName: "John Doe",
    senderProfilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "notif2",
    type: "comment",
    content: "Anna commented on your post",
    timestamp: new Date("2025-05-20T14:30:00Z"),
    isRead: true,
    senderId: "user456",
    senderName: "Anna Smith",
    senderProfilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    relatedContentId: "post789",
    relatedContentType: "post",
    relatedContentTitle: "My latest travel story",
    relatedContentUrl: "https://example.com/posts/789",
    relatedContentImage: "https://source.unsplash.com/random/400x200?travel",
  },
  {
    id: "notif3",
    type: "like",
    content: "Mike liked your comment",
    timestamp: new Date("2025-06-19T08:45:00Z"),
    isRead: false,
    senderId: "user789",
    senderName: "Mike Johnson",
    senderProfilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
    relatedContentId: "comment123",
    relatedContentType: "comment",
    relatedContentTitle: "Great insight!",
    relatedContentUrl: "https://example.com/comments/123",
    relatedContentImage: "https://source.unsplash.com/random/400x200?discussion",
  },
];

export default sampleNotifications;
