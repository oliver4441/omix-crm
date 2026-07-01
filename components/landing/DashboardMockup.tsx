"use client"

import { motion } from "framer-motion"
import { Search, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"
import { easeOut } from "./motion"
import { previewLeads } from "./content"

const metrics = [
  { label: "Total Leads", value: "2,847", color: "text-blue-400", bar: "60%", trend: "+8.2%", up: true },
  { label: "Pipeline Value", value: "KES 4.2M", color: "text-purple-400", bar: "75%", trend: "+14.5%", up: true },
  { label: "Deals Won", value: "38", color: "text-green-400", bar: "45%", trend: "+5.1%", up: true },
  { label: "Avg. Deal Size", value: "KES 110K", color: "text-indigo-300", bar: "44%", trend: "-2.3%", up: false },
]

export function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-purple-500/15 via-blue-500/5 to-transparent blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/60 backdrop-blur-2xl">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          <span className="ml-3 font-mono text-xs text-zinc-600">app.omixcrm.com/dashboard</span>
        </div>

        <div className="bg-gradient-to-br from-[#0d1424] to-[#0B1020] p-4 sm:p-6">
          {/* metric cards */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="rounded-xl border border-white/5 bg-white/[0.04] p-3.5 text-left backdrop-blur-xl"
              >
                <p className="text-[11px] text-zinc-500">{s.label}</p>
                <p
                  className={`mt-1.5 font-mono text-base font-bold sm:text-lg ${s.color}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  {s.up ? (
                    <TrendingUp size={10} className="text-green-400" />
                  ) : (
                    <TrendingDown size={10} className="text-red-400" />
                  )}
                  <span className={`text-[10px] ${s.up ? "text-green-400" : "text-red-400"}`}>{s.trend}</span>
                </div>
                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.bar }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: easeOut }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* pipeline bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-4 rounded-xl border border-white/5 bg-white/[0.04] p-4 text-left backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs text-zinc-500">Pipeline by Stage</p>
              <MoreHorizontal size={14} className="text-zinc-700" />
            </div>
            <div className="flex h-24 items-end gap-2.5">
              {[40, 65, 50, 80, 35, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.6, ease: easeOut }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500/40 to-blue-500/70"
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[9px] text-zinc-600">
              <span>Lead</span><span>Qual.</span><span>Prop.</span><span>Neg.</span><span>Won</span>
            </div>
          </motion.div>

          {/* recent leads */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-4 rounded-xl border border-white/5 bg-white/[0.04] p-4 text-left backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-zinc-500">Recent Leads</p>
              <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.03] px-2 py-1">
                <Search size={10} className="text-zinc-600" />
                <span className="text-[10px] text-zinc-600">Search…</span>
              </div>
            </div>
            <div className="space-y-2">
              {previewLeads.map((lead, i) => (
                <motion.div
                  key={lead.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.08 }}
                  className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 text-[9px] font-semibold sm:h-7 sm:w-7">
                      {lead.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium text-zinc-200 sm:text-xs">{lead.name}</p>
                      <p className="truncate text-[10px] text-zinc-600">{lead.company}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${lead.color}`}>{lead.status}</span>
                    <span className="hidden font-mono text-[10px] font-medium text-zinc-400 sm:inline">{lead.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
