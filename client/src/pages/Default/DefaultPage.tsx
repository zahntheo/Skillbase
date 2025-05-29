import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { useLocation } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";


export default function DefaultPage() {

  // get the profile from the location state
  const location = useLocation();
  const profile = location.state?.profile as Profile;
  return (
    <div className="flex h-screen">

      {/* Sidebar -> add active for active page display*/}
      <Sidebar profile={profile}>

        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" profile={profile} active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" profile={profile} />
        <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" profile={profile} />

      </Sidebar>

      {/* Main Content */}
       <main className="flex-1 relative flex flex-col bg-gradient-to-tr from-white to-gray-300 pt-24 overflow-hidden">
        <div className="absolute h-24 top-0 left-0 right-0 px-6 py-4 border-b border-gray-400 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-white/30 z-10">
          
          {/* Left: Title */}
          <h1 className="text-2xl font-bold text-gray-800 flex-shrink-0">Your Default</h1>


          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800">Default Page</h1>
          <div className="flex items-right gap-4">
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
              Default Top Right Button
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};