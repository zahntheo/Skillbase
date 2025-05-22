import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../Home/SideBar"
import { useLocation } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";


export default function EditProfile() {
  
  // get the profile from the location state
  const location = useLocation();
  const profile = location.state?.profile as Profile;
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar profile={profile}>
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" to="/generalSettings" />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gradient-to-tr from-white to-gray-300">
        <div className="p-6 border-b border-gray-400 flex items-center justify-between">
          
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
          <div className="flex gap-4"></div>
        </div>
      </main>
    </div>
  );
};