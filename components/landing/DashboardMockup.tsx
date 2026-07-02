"use client"
import { motion } from "framer-motion"
import {
  LayoutDashboard, Users, KanbanSquare, BarChart3, Bell,
  Settings, Search, TrendingUp, CheckCircle, Clock, Zap,
} from "lucide-react"
import { previewLeads } from "./content"
import { ease } from "./motion"

const metrics = [
  { label:"Total Leads",    value:"2,847", change:"+8.2%",  w:"60%" },
  { label:"Pipeline Value", value:"KES 4.2M",change:"+14.5%",w:"75%" },
  { label:"Won Deals",      value:"38",    change:"+5.1%",  w:"45%" },
  { label:"Avg. Deal",      value:"KES 110K",change:"+12%", w:"55%" },
]
const sideNav = [
  { icon:LayoutDashboard, label:"Dashboard", active:true  },
  { icon:Users,           label:"Leads",     active:false },
  { icon:KanbanSquare,    label:"Pipeline",  active:false },
  { icon:BarChart3,       label:"Analytics", active:false },
  { icon:Bell,            label:"Alerts",    active:false, badge:3 },
  { icon:Settings,        label:"Settings",  active:false },
]
const bars = [
  { label:"Jan", h:42 },{ label:"Feb", h:58 },{ label:"Mar", h:35 },
  { label:"Apr", h:72 },{ label:"May", h:52 },{ label:"Jun", h:90 },
]
const tasks = [
  { label:"Call James re: proposal", done:true  },
  { label:"Send contract to Grace",  done:false },
  { label:"Follow up on KCB demo",   done:false },
]

export function DashboardMockup() {
  return (
    <div className="relative w-full">
      {/* outer glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[#FACC15]/8 blur-3xl" />
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#FACC15]/5 to-transparent blur-xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[#FACC15]/10 shadow-2xl shadow-black/80"
        style={{background:"linear-gradient(135deg,#111111,#0f0f0f)"}}>
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0d0d0d] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70"/>
          <span className="h-3 w-3 rounded-full bg-yellow-500/70"/>
          <span className="h-3 w-3 rounded-full bg-green-500/70"/>
          <div className="ml-3 flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.03] px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FACC15]"/>
            <span className="font-mono text-[11px] text-zinc-500">app.omixcrm.com/dashboard</span>
          </div>
        </div>

        {/* app shell */}
        <div className="flex h-[540px] overflow-hidden">
          {/* sidebar */}
          <div className="hidden w-44 shrink-0 flex-col border-r border-white/[0.05] bg-[#0d0d0d] sm:flex">
            <div className="flex items-center gap-2 px-4 py-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FACC15]">
                <Zap size={13} className="text-black" fill="black"/>
              </span>
              <span className="text-sm font-bold" style={{fontFamily:"'Space Grotesk',sans-serif"}}>
                Omix <span className="text-[#FACC15]">CRM</span>
              </span>
            </div>
            <nav className="flex-1 space-y-0.5 px-2">
              {sideNav.map(item => (
                <div key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    item.active
                      ? "bg-[#FACC15]/10 text-[#FACC15]"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300"
                  }`}>
                  <item.icon size={13}/>
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#FACC15]/20 text-[9px] font-bold text-[#FACC15]">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-white/[0.05] p-3">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#FACC15]/60 to-amber-600/60 flex items-center justify-center text-[9px] font-bold text-black">MK</div>
                <div>
                  <p className="text-[10px] font-semibold text-zinc-300">Manu K.</p>
                  <p className="text-[9px] text-zinc-600">Admin</p>
                </div>
              </div>
            </div>
          </div>

          {/* main */}
          <div className="flex-1 overflow-auto bg-[#0f0f0f] p-4 sm:p-5">
            {/* top bar */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white" style={{fontFamily:"'Space Grotesk',sans-serif"}}>Dashboard</h2>
                <p className="text-[11px] text-zinc-600">Wednesday · July 2026</p>
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
              {metrics.map((m,i) => (
                <motion.div key={m.label}
                  initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:0.1+i*0.07, ease}}
                  className="rounded-xl border border-white/[0.05] bg-[#111111] p-3">
                  <p className="text-[10px] text-zinc-500">{m.label}</p>
                  <p className="mt-1 text-sm font-bold text-white sm:text-base" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{m.value}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <TrendingUp size={9} className="text-[#FACC15]"/>
                    <span className="text-[9px] font-medium text-[#FACC15]">{m.change}</span>
                  </div>
                  <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div initial={{width:0}} whileInView={{width:m.w}} viewport={{once:true}}
                      transition={{delay:0.4+i*0.07,duration:0.8,ease}}
                      className="h-full rounded-full bg-gradient-to-r from-[#FACC15] to-amber-400"/>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* chart + leads + tasks */}
            <div className="mt-3 grid grid-cols-1 gap-2.5 lg:grid-cols-5">
              {/* bar chart */}
              <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:0.4, ease}}
                className="rounded-xl border border-white/[0.05] bg-[#111111] p-3 lg:col-span-2">
                <p className="mb-3 text-[11px] font-semibold text-zinc-400">Pipeline by Stage</p>
                <div className="flex h-24 items-end gap-2">
                  {bars.map((b,i) => (
                    <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
                      <div className="relative w-full overflow-hidden rounded-t" style={{height:80}}>
                        <motion.div initial={{height:0}} whileInView={{height:`${b.h}%`}} viewport={{once:true}}
                          transition={{delay:0.5+i*0.06,duration:0.7,ease}}
                          className={`absolute bottom-0 w-full rounded-t ${b.label==="Jun"?"bg-[#FACC15]":"bg-[#2a2a2a]"}`}/>
                      </div>
                      <span className="text-[8px] text-zinc-600">{b.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* recent leads */}
              <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:0.5, ease}}
                className="rounded-xl border border-white/[0.05] bg-[#111111] p-3 lg:col-span-2">
                <p className="mb-3 text-[11px] font-semibold text-zinc-400">Recent Leads</p>
                <div className="space-y-2">
                  {previewLeads.slice(0,3).map(l => (
                    <div key={l.name}
                      className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.04] bg-[#0f0f0f] px-2.5 py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FACC15]/15 text-[9px] font-bold text-[#FACC15]">{l.initials}</div>
                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-medium text-zinc-200">{l.name}</p>
                          <p className="truncate text-[9px] text-zinc-600">{l.company}</p>
                        </div>
                      </div>
                      <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                        l.status==="Hot" ? "bg-red-500/15 text-red-400" :
                        l.status==="Warm"? "bg-[#FACC15]/15 text-[#FACC15]" :
                        "bg-blue-500/15 text-blue-400"}`}>{l.status}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* tasks */}
              <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:0.6, ease}}
                className="rounded-xl border border-white/[0.05] bg-[#111111] p-3 lg:col-span-1">
                <p className="mb-3 text-[11px] font-semibold text-zinc-400">Today&apos;s Tasks</p>
                <div className="space-y-2.5">
                  {tasks.map(t => (
                    <div key={t.label} className="flex items-start gap-2">
                      {t.done
                        ? <CheckCircle size={11} className="mt-0.5 shrink-0 text-[#FACC15]"/>
                        : <Clock        size={11} className="mt-0.5 shrink-0 text-zinc-600"/>}
                      <p className={`text-[10px] leading-tight ${t.done?"line-through text-zinc-600":"text-zinc-300"}`}>{t.label}</p>
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
