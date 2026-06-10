"use client"

import Link from "next/link"

import {
  LayoutDashboard,
  Users,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"

import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()

    router.push("/login")
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="hidden w-72 border-r border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">
        <h1 className="mb-10 text-2xl font-bold">
          Omix CRM
        </h1>

        <nav className="space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/leads"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"
          >
            <Users size={20} />
            Leads
          </Link>

          <Link
            href="/notifications"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"
          >
            <Bell size={20} />
            Notifications
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"
          >
            <Settings size={20} />
            Settings
          </Link>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-red-500/20"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
