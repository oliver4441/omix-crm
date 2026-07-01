"use client"

import { motion } from "framer-motion"
import {
  BarChart3, Bell, KanbanSquare, Users, Settings,
  LayoutDashboard, TrendingUp, TrendingDown, Search,
  MoreHorizontal, CheckCircle, Clock,
} from "lucide-react"
import { easeOut } from "./motion"
import { previewLeads, sidebarItems } from "./content"

const metrics = [
  { label: "Total Leads", value: "2,847", trend: "+8.2%", up: true, bar: "60%" },
  { label: "Pipeline Value", value: "KES 4.2M", trend: "+14.5%", up: true, bar: "75%" },
  { label: "Won This Month", value: "38", trend: "+5.1%", up: true, bar: "45%" },
  { label: "Avg. Deal Size", value: "KES 110K", trend: "-2.3%", up: false, bar: "44%" },
]

const sidebarIcons: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  Dashboard: LayoutDashboard, Leads: Users, Pipeline: KanbanSquare,
  Clients: Users, Analytics: BarChart3, Notifications: Bell, Settings: Settings,
}

const tasks = [
  { label: "Call James re: proposal", done: true },
  { label: "Send contract to Grace", done: false },
  { label: "Follow up on KCB demo", done: false },
]

export function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -inset-4 bg-gradient-to-b from-violet-500/10 via-blue-500/5 to-transparent blur-3xl rounded-3xl" />
      <div className="overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/70">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0c0e1a] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-4 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-500">
            app.omixcrm.com/dashboard
          </span>
        </div>

        {/* app shell */}
        <div className="flex h-[520px] bg-[#080A12] overflow-hidden">
          {/* sidebar */}
          <div className="hidden w-48 shrink-0 flex-col border-r border-white/[0.06] bg-[#0a0c16] pt-4 sm:flex">
            <div className="px-4 pb-5">
              <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Omix</span> CRM
              </span>
            </div>
            <nav className="flex-1 space-y-0.5 px-2">
              {sidebarItems.map((item) => {
                const Icon = sidebarIcons[item.label] ?? LayoutDashboard
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-violet-500/15 text-violet-300"
                        : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                    {item.label === "Notifications" && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-violet-500/20 text-[9px] text-violet-300">3</span>
                    )}
                  </div>
                )
              })}
            </nav>
            <div className="border-t border-white/[0.06] p-3">
              <div className="flex items-center gap-2 rounded-lg px-2 py-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500/50 to-blue-500/50 text-[10px] flex items-center justify-center font-semibold">MK</div>
                <div>
                  <p className="text-[10px] font-medium text-zinc-300">Manu K.</p>
                  <p className="text-[9px] text-zinc-600">Admin</p>
                </div>
              </div>
            </div>
          </div>

          {/* main content */}
          <div className="flex-1 overflow-auto p-4 sm:p-5">
            {/* header row */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-zinc-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Dashboard</h2>
                <p className="text-[11px] text-zinc-600">Tuesday, 1 July 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5">
                  <Search size={11} className="text-zinc-600" />
                  <span className="text-[11px] text-zinc-600">Search…</span>
                </div>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-zinc-500 hover:text-zinc-300">
                  <Bell size={13} />
                </button>
              </div>
            </div>

            {/* metric cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, ease: easeOut }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3"
                >
                  <p className="text-[10px] text-zinc-500">{m.label}</p>
                  <p className="mt-1 text-sm font-bold text-white sm:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.value}</p>
                  <div className="mt-1.5 flex items-center gap-1">
                    {m.up ? <TrendingUp size={9} className="text-emerald-400" /> : <TrendingDown size={9} className="text-red-400" />}
                    <span className={`text-[9px] font-medium ${m.up ? "text-emerald-400" : "text-red-400"}`}>{m.trend}</span>
                  </div>
                  <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.bar }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.07, duration: 0.7, ease: easeOut }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* bottom row: chart + leads + tasks */}
            <div className="mt-3 grid grid-cols-1 gap-2.5 lg:grid-cols-5">
              {/* pipeline bar chart */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 lg:col-span-2"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-medium text-zinc-400">Pipeline by Stage</p>
                  <MoreHorizontal size={13} className="text-zinc-700" />
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[
                    { h: 40, l: "Lead" }, { h: 65, l: "Qual" }, { h: 50, l: "Prop" },
                    { h: 80, l: "Neg" }, { h: 35, l: "Lost" }, { h: 95, l: "Won" },
                  ].map((bar, i) => (
                    <div key={bar.l} className="flex flex-1 flex-col items-center gap-1">
                      <div className="w-full overflow-hidden rounded-t" style={{ height: 80 }}>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${bar.h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.06, duration: 0.6, ease: easeOut }}
                          className="w-full rounded-t bg-gradient-to-t from-violet-500/50 to-blue-500/80 mt-auto"
                          style={{ marginTop: 'auto' }}
                        />
                      </div>
                      <span className="text-[8px] text-zinc-600">{bar.l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* recent leads */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 lg:col-span-2"
              >
                <p className="mb-3 text-[11px] font-medium text-zinc-400">Recent Leads</p>
                <div className="space-y-2">
                  {previewLeads.slice(0, 3).map((lead) => (
                    <div key={lead.name} className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.02] px-2.5 py-2 border border-white/[0.04]">
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-blue-500/40 text-[9px] font-semibold">
                          {lead.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-medium text-zinc-300">{lead.name}</p>
                          <p className="truncate text-[9px] text-zinc-600">{lead.company}</p>
                        </div>
                      </div>
                      <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-medium ${lead.color}`}>{lead.status}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* tasks */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 lg:col-span-1"
              >
                <p className="mb-3 text-[11px] font-medium text-zinc-400">Today&apos;s Tasks</p>
                <div className="space-y-2">
                  {tasks.map((t) => (
                    <div key={t.label} className="flex items-start gap-2">
                      {t.done
                        ? <CheckCircle size={11} className="mt-0.5 shrink-0 text-emerald-400" />
                        : <Clock size={11} className="mt-0.5 shrink-0 text-zinc-600" />}
                      <p className={`text-[10px] leading-tight ${t.done ? "line-through text-zinc-600" : "text-zinc-300"}`}>{t.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
