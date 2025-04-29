import { ReactNode, useState, createContext, useContext } from "react"
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"

interface SidebarProps {
  children: ReactNode
}

interface SidebarItemProps {
  icon: ReactNode
  text: string
  active?: boolean
  alert?: boolean
}

interface SidebarContextType {
  expanded: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#2D2A3C] border-r border-[#6B5CA5] shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/images/logo2.png"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[#4A3F75] hover:bg-[#6B5CA5]"
          >
            {expanded ? <ChevronFirst className="text-white" /> : <ChevronLast className="text-white" />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 bg-[#2D2A3C]">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0 ml-0"
            }`}
          >
            <div className="leading-4 text-white">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-[#6B5CA5]">johndoe@gmail.com</span>
            </div>
            <MoreVertical className="text-[#6B5CA5]" size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const context = useContext(SidebarContext)
  if (!context) throw new Error("SidebarItem must be used within a Sidebar")

  const { expanded } = context

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-[#4A3F75]"
          : "hover:bg-indigo-50 text-gray-600"}`
      }
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 ml-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-[#6B5CA5] ${expanded ? "" : "top-2"}`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
            bg-[#6B5CA5] text-white text-sm
            invisible opacity-0 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  )
}

