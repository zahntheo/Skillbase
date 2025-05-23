import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { useLocation } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";
import NotificationCard from "../../elements/notifications/NotificationCard";
import FadeInSection from "../../elements/home/FadeInSection"
import { FaFilter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";


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
            <main className="flex-1 relative flex flex-col bg-gradient-to-tr from-white to-gray-300 pt-24 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 p-6 border-b border-gray-400 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-white/30 bg-opacity-30 z-10">

                    {/* Left: Title */}
                    <h1 className="text-2xl font-bold text-gray-800 flex-shrink-0">Your Notifications</h1>

                    {/* Middle: Searchbar */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <form className="relative w-[300px]">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full px-4 py-2 pl-10 text-sm text-white bg-gray-800 border-none rounded-xl shadow-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
                            <FiChevronDown className="text-white" />
                        </button>
                        <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
                            <FaFilter className="text-white" />
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

                                        // FadeInSection for each notification
                                        <FadeInSection>
                                            <NotificationCard key={notification.id} notification={notification} />
                                        </FadeInSection>
                                    ))}
                                </div>
                            ))}



                    </div>
                </div>

            </main >
        </div >

    );
};

// Function to group notifications by date
// This function takes an array of notifications and groups them by month and year
// It returns an object where the keys are the month-year strings and the values are arrays of notifications
// The function uses the Date object to extract the month and year from the notification's timestamp
// The month is formatted to be two digits (e.g., "01" for January) using padStart
// The year is extracted using getFullYear
// The function checks if the key already exists in the groupedNotifications object
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

