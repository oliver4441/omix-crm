"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  Bell,
  KanbanSquare,
} from "lucide-react"

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Leads",
    href: "/leads",
    icon: Users,
  },
  {
    name: "Pipeline",
    href: "/pipeline",
    icon: KanbanSquare,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: Briefcase,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname =
    usePathname()

  return (
    <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="p-6">
        <h1 className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
          Omix CRM
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Smart client management
        </p>
      </div>

      <nav className="space-y-2 px-4">
        {links.map((link) => {
          const Icon = link.icon

          const active =
            pathname ===
            link.href

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-gradient-to-r from-orange-500/20 to-blue-500/20 text-white border border-white/10"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>
                {link.name}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
