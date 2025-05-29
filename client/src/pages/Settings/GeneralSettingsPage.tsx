import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { Link } from "react-router-dom";
// import mock data
import profile from "../../assets/data/sampleProfile"
import { MdPrivacyTip } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";


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
        <div className="absolute h-24 top-0 left-0 right-0 px-6 border-b border-gray-400 flex items-center backdrop-filter backdrop-blur-lg bg-white/30 bg-opacity-30 z-10">

          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap mr-6">General Settings</h1>

          {/* Searchbar - flexible */}
          <form className="relative flex-grow w-100">
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

          {/* Buttons */}
          <div className="flex items-center gap-3 ml-6 flex-shrink-0">
            <Link to="/editProfile" state={{ profile }}>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
                <FaLock className="w-5 h-5" />
                <span>Security</span>
              </button>
            </Link>

            <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <FaEye className="w-5 h-5" />
              <span>Visibility</span>
            </button>

            <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <MdPrivacyTip className="w-5 h-5" />
              <span>Privacy</span>
            </button>

            <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <RiAccountBoxFill className="w-5 h-5" />
              <span>Account Settings</span>
            </button>


          </div>

        </div>
      </main>

    </div>
  );
};