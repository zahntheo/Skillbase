import FadeInSection from "../../elements/home/FadeInSection"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { Home, Settings, Bell } from "lucide-react"
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { PiExportBold } from "react-icons/pi";

// import side elements
import ProfileCard from "../../elements/home/ProfileCard"
import SkillCard from "../../elements/home/SkillCard"
import ProjectCard from "../../elements/home/ProjectCard"
import CurriculumVitae from "../../elements/home/CurriculumVitae"

// import mock data
import profile from "../../assets/data/sampleProfile"


export default function HomePage() {
  return (
    <div className="flex h-screen bg-white">

      {/* Sidebar */}
      <Sidebar profile={profile}>
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" profile={profile} active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" profile={profile} />
        <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" profile={profile} />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-gray-200 flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold text-black">Your Profile</h1>
            <p className="text-sm text-gray-500">{profile.user.email}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/editProfile" state={{ profile }}>
              <button className="bg-black text-white px-5 py-2 rounded-lg shadow-sm hover:bg-gray-800 transition flex items-center gap-2 text-sm font-medium">
                <FiEdit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </Link>
            <button className="bg-black text-white px-5 py-2 rounded-lg shadow-sm hover:bg-gray-800 transition flex items-center gap-2 text-sm font-medium">
              <PiExportBold className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg"
            />
            <h2 className="text-2xl font-bold text-black">{profile.user.name}</h2>
            <span className="text-gray-500">@{profile.user.userName}</span>
          </div>

          {/* Profile Card */}
          <FadeInSection>
            <ProfileCard
              jobTitle={profile.card.jobTitle}
              hobby={profile.card.hobby}
              location={profile.card.location}
            />
          </FadeInSection>

          {/* Skills Section */}
          <FadeInSection>
            <SkillCard skills={profile.skills} />
          </FadeInSection>

          {/* Projects Section */}
          <FadeInSection>
            <ProjectCard projects={profile.projects} />
          </FadeInSection>

          {/* Work Stations */}
          <FadeInSection>
            <CurriculumVitae workStations={profile.workStations} />
          </FadeInSection>
        </div>
      </main>
    </div>
  )
}
