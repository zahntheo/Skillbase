
import Sidebar, { SidebarItem } from "./SideBar"
import { Home, Settings, Bell } from "lucide-react"

// import side elements
import ProfileCard from "../../elements/home/ProfileCard"
import SkillCard from "../../elements/home/SkillCard"

// import mock data
import skills from "../../assets/data/sampleSkills"

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
              className="w-32 h-32 rounded-full mb-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <span className="text-sm text-gray-500">@johndoe</span>
            </div>
          </div>

          <div className="justify-items-center">
            <ProfileCard
              jobTitle="Software Engineer"
              hobby="Loves coding and coffee"
              location="Based in San Francisco"
            />

            <SkillCard skills={skills} />
          </div>

        </div>
      </main>

    </div>

  )
}

