import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../Home/SideBar"

export default function NotfificationPage() {
    return (
        <div className="flex h-screen">
            <Sidebar profile="/profile">
                <SidebarItem icon={<Home size={20} />} text="Home" to="/home" />
                <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" active />
                <SidebarItem icon={<Settings size={20} />} text="Settings" to="/generalSettings" />
            </Sidebar>
            <main className="flex-1 flex flex-col bg-gradient-to-tr from-white to-gray-300">
                <div className="p-6 border-b border-gray-400 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Youre Notifications</h1>
                    {/* Optional: Buttons, User-Icon etc. */}
                    <div className="flex gap-4"></div>
                </div>

            </main>
        </div>

    );
};