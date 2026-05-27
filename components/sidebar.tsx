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
  Menu,
  X,
} from "lucide-react"

import { useState } from "react"

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

  const [open, setOpen] =
    useState(false)

  return (
    <>
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="fixed left-4 top-4 z-50 rounded-xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl lg:hidden"
      >
        {open ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() =>
            setOpen(false)
          }
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-black/90 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
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
            const Icon =
              link.icon

            const active =
              pathname ===
              link.href

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setOpen(false)
                }
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "border border-white/10 bg-gradient-to-r from-orange-500/20 to-blue-500/20 text-white"
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
    </>
  )
}
