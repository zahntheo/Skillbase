import FadeInSection from "../../elements/home/FadeInSection"
import Sidebar, { SidebarItem } from "./SideBar"
import { Home, Settings, Bell } from "lucide-react"
import { Link } from "react-router-dom";

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
        <SidebarItem icon={<Home size={20} />} text="Home" to="/home" active />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" to="/notifications" />
        <SidebarItem icon={<Settings size={20} />} text="General Settings" to="/generalSettings" />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gradient-to-tr from-white to-gray-300">
        <div className="p-6 border-b border-gray-400 flex items-center justify-between">

          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800">Your Profile</h1>
          <div className="flex items-right gap-4">

            {/*Buttons*/}
            <Link to="/editProfile">
              <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
                Edit Profile
              </button>
            </Link>
            <button className="bg-gray-800 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-700 transition">
              Export CV
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





