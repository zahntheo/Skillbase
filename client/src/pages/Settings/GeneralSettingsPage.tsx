import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { Link } from "react-router-dom";
// import mock data
import profile from "../../assets/data/sampleProfile"
import { MdAccountBox } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";


export default function GeneralSettingsPage() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar profile={profile}>
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" profile={profile} />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" profile={profile} />
        <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" profile={profile} active />
      </Sidebar>
      {/* Main Content */}
     <main className="flex-1 relative flex flex-col bg-gradient-to-tr from-white to-gray-300 pt-24 overflow-hidden">
        <div className="absolute h-24 top-0 left-0 right-0 px-6 py-4 border-b border-gray-400 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-white/30 z-10">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800">General Settings</h1>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/editProfile" state={{ profile }}>
              <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
                <FaLock className="text-white w-5 h-5" />
                <span>Security</span>
              </button>
            </Link>
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <FaEye className="text-white" />
              <span>Visability</span>
            </button>
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <MdAccountBox className="text-white" />
              <span>Account settings</span>
            </button>
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <MdPrivacyTip className="text-white" />
              <span>Privacy</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};