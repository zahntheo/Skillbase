
import Sidebar, { SidebarItem } from "./SideBar"
import { Home, Settings, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Sidebar>

      <main className="flex-1 flex flex-col bg-gradient-to-tr from-white to-gray-300">
        {/* Top Bar */}
        <div className="p-6 border-b border-gray-400 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Your Profile</h1>
          {/* Optional: Buttons, User-Icon etc. */}
          <div className="flex gap-4"></div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src="/images/profile1.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4" // Abstand unter dem Bild
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <span className="text-sm text-gray-500">@johndoe</span>
            </div>
          </div>

          {/* Profilbeschreibung */}
          <div className="flex flex-wrap justify-center items-center bg-white p-4 rounded-lg shadow-md gap-x-6 gap-y-3 w-full max-w-lg mx-auto">
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">Loves coding and coffee</p>
            <p className="text-gray-600">Based in San Francisco</p>
          </div>

        </div>
      </main>

    </div>

  )
}

