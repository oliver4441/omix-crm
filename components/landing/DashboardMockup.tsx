"use client"
import { motion } from "framer-motion"
import {
  LayoutDashboard, Users, KanbanSquare, BarChart3,
  Bell, Settings, Search, TrendingUp, CheckCircle, Clock, Zap,
} from "lucide-react"
import { dashMetrics, previewLeads, sidebarItems } from "./content"
import { easeOut } from "./motion"

const ICON_MAP: Record<string, React.ComponentType<{size?:number;className?:string}>> = {
  LayoutDashboard, Users, KanbanSquare, BarChart3, Bell, Settings,
}
const bars = [
  {l:"Jan",h:40},{l:"Feb",h:58},{l:"Mar",h:35},
  {l:"Apr",h:72},{l:"May",h:52},{l:"Jun",h:90},{l:"Jul",h:78},
]
const tasks = [
  {t:"Call James re: proposal",done:true },
  {t:"Send contract to Grace",  done:false},
  {t:"Follow up on KCB demo",   done:false},
]

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
      {/* ── Browser chrome ── */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0d0d0d] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70"/>
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"/>
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70"/>
        <div className="ml-3 flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]/80"/>
          <span className="font-mono text-[11px] text-zinc-600">app.omixcrm.com/dashboard</span>
        </div>
      </div>

      {/* ── App shell ── */}
      <div className="flex h-[520px] overflow-hidden">
        {/* Sidebar */}
        <div className="hidden w-44 shrink-0 flex-col border-r border-white/[0.05] bg-[#0d0d0d] sm:flex">
          <div className="flex items-center gap-2 px-4 py-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FACC15]">
              <Zap size={13} className="text-black" fill="black"/>
            </span>
            <span className="text-sm font-bold text-white" style={{fontFamily:"'Inter',sans-serif",letterSpacing:"-0.02em"}}>
              Omix CRM
            </span>
          </div>
          <nav className="flex-1 space-y-0.5 px-2">
            {sidebarItems.map(item => {
              const Icon = ICON_MAP[item.icon] ?? LayoutDashboard
              return (
                <div key={item.label} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[11px] font-medium transition-colors ${
                  item.active ? "bg-white/[0.06] text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
                  <Icon size={13} className={item.active ? "text-[#FACC15]" : ""}/>
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#FACC15]/15 text-[8px] font-bold text-[#FACC15]">
                      {item.badge}
                    </span>
                  )}
                </div>
              )
            })}
          </nav>
          <div className="border-t border-white/[0.05] p-3">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-[9px] font-bold">MK</div>
              <div>
                <p className="text-[10px] font-semibold text-zinc-300">Manu K.</p>
                <p className="text-[9px] text-zinc-600">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto bg-[#0f0f0f] p-4 sm:p-5">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white" style={{letterSpacing:"-0.02em"}}>Dashboard</h2>
              <p className="text-[11px] text-zinc-600">Wednesday, 2 July 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5">
                <Search size={11} className="text-zinc-600"/>
                <span className="text-[11px] text-zinc-600">Search…</span>
              </div>
              <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                <Bell size={12} className="text-zinc-500"/>
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FACC15] text-[7px] font-bold text-black">3</span>
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {dashMetrics.map((m, i) => (
              <motion.div key={m.label}
                initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:0.08*i, ease:easeOut, duration:0.5}}
                className="rounded-xl border border-white/[0.05] bg-[#171717] p-3">
                <p className="text-[10px] text-zinc-500">{m.label}</p>
                <p className="mt-1 text-sm font-bold text-white" style={{letterSpacing:"-0.02em"}}>{m.value}</p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp size={9} className="text-[#FACC15]"/>
                  <span className="text-[9px] font-medium text-[#FACC15]">{m.change}</span>
                </div>
                <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/[0.04]">
                  <motion.div
                    initial={{width:0}} whileInView={{width:`${m.bar}%`}} viewport={{once:true}}
                    transition={{delay:0.3+0.08*i, duration:0.8, ease:easeOut}}
                    className="h-full rounded-full bg-[#FACC15]/70"/>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart + Leads + Tasks */}
          <div className="mt-3 grid grid-cols-1 gap-2.5 lg:grid-cols-5">
            {/* Bar chart */}
            <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{delay:0.35, ease:easeOut}}
              className="rounded-xl border border-white/[0.05] bg-[#171717] p-3 lg:col-span-2">
              <p className="mb-3 text-[11px] font-semibold text-zinc-400">Pipeline by Stage</p>
              <div className="flex h-20 items-end gap-1.5">
                {bars.map((b, i) => (
                  <div key={b.l} className="flex flex-1 flex-col items-center gap-1">
                    <div className="relative w-full overflow-hidden rounded-t" style={{height:72}}>
                      <motion.div
                        initial={{height:0}} whileInView={{height:`${b.h}%`}} viewport={{once:true}}
                        transition={{delay:0.4+i*0.05, duration:0.6, ease:easeOut}}
                        className={`absolute bottom-0 w-full rounded-t ${
                          b.l==="Jun" ? "bg-[#FACC15]" : b.l==="Jul" ? "bg-[#FACC15]/60" : "bg-white/[0.08]"
                        }`}/>
                    </div>
                    <span className="text-[8px] text-zinc-700">{b.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent leads */}
            <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{delay:0.42, ease:easeOut}}
              className="rounded-xl border border-white/[0.05] bg-[#171717] p-3 lg:col-span-2">
              <p className="mb-3 text-[11px] font-semibold text-zinc-400">Recent Leads</p>
              <div className="space-y-2">
                {previewLeads.slice(0,3).map(l => (
                  <div key={l.name} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.04] bg-[#111111] px-2.5 py-1.5">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[8px] font-bold text-zinc-300">{l.initials}</div>
                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-medium text-zinc-200">{l.name}</p>
                        <p className="truncate text-[9px] text-zinc-600">{l.company}</p>
                      </div>
                    </div>
                    <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                      l.status==="Hot" ? "bg-red-500/10 text-red-400" :
                      l.status==="Warm"? "bg-amber-500/10 text-amber-400" :
                      "bg-zinc-500/10 text-zinc-400"}`}>{l.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tasks */}
            <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{delay:0.49, ease:easeOut}}
              className="rounded-xl border border-white/[0.05] bg-[#171717] p-3 lg:col-span-1">
              <p className="mb-3 text-[11px] font-semibold text-zinc-400">Today&apos;s Tasks</p>
              <div className="space-y-2.5">
                {tasks.map(t => (
                  <div key={t.t} className="flex items-start gap-1.5">
                    {t.done
                      ? <CheckCircle size={10} className="mt-0.5 shrink-0 text-[#FACC15]"/>
                      : <Clock       size={10} className="mt-0.5 shrink-0 text-zinc-700"/>}
                    <p className={`text-[10px] leading-tight ${t.done ? "text-zinc-600 line-through" : "text-zinc-300"}`}>{t.t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
