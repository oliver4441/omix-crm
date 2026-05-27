"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react"

import { supabase } from "@/lib/supabase"

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
    icon: BarChart3,
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
  const logout = async () => {
    await supabase.auth.signOut()

    window.location.href = "/login"
  }

  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            Omix CRM
          </h1>
        </div>

        <nav className="space-y-2 px-4">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white transition"
              >
                <Icon size={20} />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  )
}
