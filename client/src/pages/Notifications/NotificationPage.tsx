import { Home, Settings, Bell } from "lucide-react"
import Sidebar, { SidebarItem } from "../Home/SideBar"

export default function NotfificationPage(){
    return(
        <div className="flex h-screen">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" active />
        <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings"/>
      </Sidebar>
      </div>
    );
};