import FadeInSection from "../../elements/home/FadeInSection"
import Sidebar, { SidebarItem } from "../../elements/home/SideBar"
import { Home, Settings, Bell } from "lucide-react"
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";



// import side elements
import ProfileCard from "../../elements/home/ProfileCard"
import SkillCard from "../../elements/home/SkillCard"
import ProjectCard from "../../elements/home/ProjectCard"
import CurriculumVitae from "../../elements/home/CurriclumVitae"

// import mock data
import profile from "../../assets/data/sampleProfile"



export default function HomePage() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar profile={profile}>
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" profile={profile} active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" profile={profile} />
        <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" profile={profile} />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col bg-gradient-to-tr from-white to-gray-300 pt-24 overflow-hidden">
        <div className="absolute h-24 top-0 left-0 right-0 px-6 py-4 border-b border-gray-400 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-white/30 z-10">
          
          {/* Left: Title */}
          <h1 className="text-2xl font-bold text-gray-800 flex-shrink-0">Your Profile</h1>

          

          {/* Right: Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/editProfile" state={{ profile }}>
              <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
                <FiEdit className="text-white w-5 h-5" />
                <span>Edit</span>
              </button>
            </Link>
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition flex items-center gap-2">
              <PiExportBold className="text-white" />
              <span>Export</span>
            </button>
          </div>
        </div>



        {/* Profile Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 ring-4 ring-white shadow-md"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">{profile.user.name}</h3>
              <span className="text-sm text-gray-500">@{profile.user.userName}</span>
            </div>
          </div>

          {/* Profile Card */}
          <FadeInSection>
            <ProfileCard
              jobTitle={profile.card.jobTitle}
              hobby={profile.card.hobby}
              location={profile.card.location}
            />
          </FadeInSection>

          {/* Skills, Projects, and Workstations */}
          <FadeInSection>
            <SkillCard skills={profile.skills} />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard projects={profile.projects} />
          </FadeInSection>
          <FadeInSection>
            <CurriculumVitae workStations={profile.workStations} />
          </FadeInSection>

        </div>
      </main >

    </div >

  )
}





