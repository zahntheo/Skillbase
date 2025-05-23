import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { useLocation } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";
import NotificationCard from "../../elements/notifications/NotificationCard";

// import mock data
import sampleNotifications from "../../assets/data/sampleNotifications";


export default function NotfificationPage() {
    const groupedNotification = groupByDate(sampleNotifications);
    const location = useLocation();
    const profile = location.state?.profile as Profile;
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <Sidebar profile={profile}>

                <SidebarItem icon={<Home size={20} />} text="Home" to="/home" profile={profile} />
                <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" profile={profile} active />
                <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" profile={profile} />

            </Sidebar>

            {/* Main Content */}
            <main className="flex-1 flex flex-col bg-gradient-to-tr from-white to-gray-300">
                <div className="p-6 border-b border-gray-400 flex items-center justify-between">

                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-800">Youre Notifications</h1>
                    <div className="flex items-right gap-4">
                        {/*Buttons*/}
                        <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
                            Mark Notfications
                        </button>


                    </div>
                </div>

                {/* Notification Content */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="flex flex-col items-center justify-center mb-4">

                        {/* Notification Cards */}
                        {/* Group notifications by date */}
                        {Object.entries(groupedNotification)
                            .sort(([a], [b]) => b.localeCompare(a)) 
                            .map(([key, notifications]) => (
                                <div key={key} className="w-full max-w-2xl mb-6">
                                    <h2>{key}</h2>
                                    <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-800"></hr>
                                    {notifications.map((notification) => (
                                        <NotificationCard key={notification.id} notification={notification} />
                                    ))}
                                </div>
                            ))}



                    </div>
                </div>

            </main>
        </div>

    );
};

function groupByDate(notifications: any[]) {
    const groupedNotifications: { [key: string]: any[] } = {};

    notifications.forEach(notification => {
        const date = new Date(notification.timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        const key = `${year}-${month}`;

        if (!groupedNotifications[key]) {
            groupedNotifications[key] = [];
        }

        groupedNotifications[key].push(notification);
    });

    return groupedNotifications;



}

