import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../Home/SideBar"
import { useLocation } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";
import NotificationCard from "./NotificationCard";

// import mock data
import sampleNotifications from "../../assets/data/sampleNotifications";   

export default function NotfificationPage() {
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
                        {sampleNotifications.map((notification) => (
                            <NotificationCard
                                notification={notification}
                            />
                        ))}

                    </div>
                </div>

            </main>
        </div>

    );
};