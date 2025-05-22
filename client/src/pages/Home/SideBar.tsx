import { ReactNode, useState, createContext, useContext } from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import type { Profile } from "../../assets/types/profile";

interface SidebarProps {
  children: ReactNode;
  profile: Profile
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  to: string
  profile: Profile
}

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children, profile }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-black border-r border-gray-700 shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1
            className={`text-white text-4xl font-bold overflow-hidden transition-all ${expanded ? "w-48" : "w-0"}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Skillbase
          </h1>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            {expanded ? <ChevronFirst className="text-white" /> : <ChevronLast className="text-white" />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t border-gray-800 flex p-3 bg-black relative">
          <Link to="/profile" state={{ profile }} className="flex items-center flex-grow overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?background=888888&color=ffffff&bold=true"
              alt="User avatar"
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0"
                }`}
            >
              <div className="leading-4 text-white">
                <h4 className="font-semibold">{profile.user.name}</h4>
                <span className="text-xs text-gray-400">{profile.user.email}</span>
              </div>
            </div>
          </Link>

          {expanded && (
            <div className="ml-2 relative">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-1"
              >
                <MoreVertical className="text-gray-400" size={20} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-md shadow-lg z-50">
                  <ul className="text-sm text-gray-700">
                    <Link to="/profileSettings" state={{ profile }}>
                      <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Profil settings</li>
                    </Link>

                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Log off</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>


      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, to , profile}: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("SidebarItem must be used within a Sidebar");

  const { expanded } = context;

  return (
    <Link to={to} state={{profile}}>
      <li
        className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
            ? "bg-gray-800 text-white"
            : "hover:bg-gray-800 text-gray-300"}`
        }
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0"
            }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded-full bg-white ${expanded ? "" : "top-2"}`}
          />
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6
            bg-gray-900 text-white text-sm
            invisible opacity-0 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}



