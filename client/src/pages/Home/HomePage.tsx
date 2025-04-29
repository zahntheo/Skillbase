
import Sidebar, { SidebarItem } from "./SideBar"
import { Home, Settings, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Dashboard" active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Sidebar>

      <main className="flex-1 p-6 bg-gradient-to-tr from-indigo-200 to-indigo-100">
        <h1 className="text-2xl font-bold">Willkommen auf  Startseite!</h1>
        <p className="mt-4 text-gray-600">
  
        </p>
      </main>
    </div>
  )
}

