// components/notifications/NotificationCard.tsx
import { Link } from "react-router-dom";
import type { Notification } from "../../assets/types/notification";

interface Props {
  notification: Notification;
}

export default function NotificationCard({ notification }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 w-full max-w-xl">
      {/* Sender Info */}
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={notification.senderProfilePicture}
          alt={notification.senderName}
          className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm"
          loading="lazy"
        />
        <div>
          <h3 className="text-md font-semibold">{notification.senderName}</h3>
          <p className="text-xs text-gray-500">{new Date(notification.timestamp).toLocaleString()}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-800 mb-2">{notification.content}</p>
      <span className="text-xs text-indigo-600 uppercase font-medium">{notification.type}</span>

      {/* Related content */}
      {notification.relatedContentTitle && (
        <div className="mt-3 bg-gray-50 border border-gray-200 p-3 rounded-lg">
          <p className="text-sm font-medium text-gray-700">{notification.relatedContentTitle}</p>
          {notification.relatedContentUrl && (
            <Link
              to={notification.relatedContentUrl}
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehr ansehen
            </Link>
          )}
        </div>
      )}

      {/* Read status */}
      <div className="mt-3 flex justify-end">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            notification.isRead ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {notification.isRead ? "Gelesen" : "Ungelesen"}
        </span>
      </div>
    </div>
  );
}

