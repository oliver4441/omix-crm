"use client"
import { motion } from "framer-motion"
import {
  LayoutDashboard, Users, KanbanSquare, BarChart3,
  Bell, Search, TrendingUp, CheckCircle, Clock, Zap,
} from "lucide-react"
import { dashMetrics, previewLeads, sidebarItems } from "./content"

const ICONS: Record<string,React.ComponentType<{size?:number;className?:string}>> = {
  LayoutDashboard, Users, KanbanSquare, BarChart3, Bell,
}
const E = [0.16,1,0.3,1] as const
const bars=[{l:"Jan",h:40},{l:"Feb",h:62},{l:"Mar",h:34},{l:"Apr",h:76},{l:"May",h:54},{l:"Jun",h:91}]
const tasks=[{t:"Call James — proposal",ok:true},{t:"Send Grace's contract",ok:false},{t:"Follow up KCB demo",ok:false}]

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Yellow radial glow beneath */}
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] opacity-70"
        style={{background:"radial-gradient(ellipse 70% 50% at 50% 110%,rgba(250,204,21,0.12),transparent)"}}/>

      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.09] shadow-[0_48px_120px_rgba(0,0,0,0.75)]"
        style={{background:"rgba(14,14,14,0.95)"}}>

        {/* ── Chrome ── */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0c0c0c] px-4 py-3">
          <span className="h-[11px] w-[11px] rounded-full bg-red-500/70"/>
          <span className="h-[11px] w-[11px] rounded-full bg-yellow-500/70"/>
          <span className="h-[11px] w-[11px] rounded-full bg-green-500/70"/>
          <div className="ml-4 flex items-center gap-2 rounded-[6px] border border-white/[0.05] bg-white/[0.03] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]"/>
            <span className="font-mono text-[11px] text-[#525252]">app.omixcrm.com</span>
          </div>
        </div>

        {/* ── App ── */}
        <div className="flex h-[500px] overflow-hidden">
          {/* Sidebar */}
          <aside className="hidden w-[176px] shrink-0 flex-col border-r border-white/[0.05] bg-[#0a0a0a] sm:flex">
            <div className="flex items-center gap-2 px-4 py-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#FACC15]">
                <Zap size={13} className="text-black" fill="black"/>
              </span>
              <span className="text-[13px] font-bold tracking-[-0.02em] text-white">Omix CRM</span>
            </div>
            <nav className="flex-1 space-y-0.5 px-2.5">
              {sidebarItems.map(s => {
                const Icon = ICONS[s.icon] ?? LayoutDashboard
                return (
                  <div key={s.label} className={`flex items-center gap-2.5 rounded-[8px] px-3 py-[7px] text-[12px] font-medium ${
                    s.active ? "bg-white/[0.07] text-white" : "text-[#525252] hover:text-[#A3A3A3]"}`}>
                    <Icon size={13} className={s.active ? "text-[#FACC15]" : ""}/>
                    {s.label}
                    {s.badge && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#FACC15]/15 text-[8px] font-bold text-[#FACC15]">
                        {s.badge}
                      </span>
                    )}
                  </div>
                )
              })}
            </nav>
            <div className="border-t border-white/[0.05] p-3">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-zinc-300">MK</div>
                <div><p className="text-[11px] font-medium text-zinc-300">Manu K.</p><p className="text-[9px] text-[#525252]">Admin</p></div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex flex-1 flex-col overflow-hidden bg-[#0f0f0f]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.05] px-5 py-3.5">
              <div>
                <p className="text-[13px] font-semibold tracking-[-0.01em] text-white">Dashboard</p>
                <p className="text-[10px] text-[#525252]">Wed · 2 Jul 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-[8px] border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5">
                  <Search size={11} className="text-[#525252]"/>
                  <span className="text-[11px] text-[#525252]">Search…</span>
                </div>
                <div className="relative flex h-7 w-7 items-center justify-center rounded-[8px] border border-white/[0.06] bg-white/[0.02]">
                  <Bell size={12} className="text-[#525252]"/>
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FACC15] text-[7px] font-bold text-black">3</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
              {/* KPI row */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {dashMetrics.map((m,i) => (
                  <motion.div key={m.label}
                    initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                    transition={{delay:0.06*i,duration:0.5,ease:E}}
                    className="rounded-[12px] border border-white/[0.05] bg-[#181818] p-3">
                    <p className="text-[10px] text-[#525252]">{m.label}</p>
                    <p className="mt-1 text-[13px] font-bold tracking-[-0.02em] text-white">{m.value}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <TrendingUp size={8} className="text-[#FACC15]"/>
                      <span className="text-[9px] font-semibold text-[#FACC15]">{m.delta}</span>
                    </div>
                    <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/[0.04]">
                      <motion.div initial={{width:0}} whileInView={{width:`${m.bar}%`}} viewport={{once:true}}
                        transition={{delay:0.3+0.06*i,duration:0.8,ease:E}}
                        className="h-full rounded-full bg-[#FACC15]/60"/>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart + Leads + Tasks */}
              <div className="mt-3 grid grid-cols-1 gap-2.5 lg:grid-cols-[1.2fr_1.4fr_0.9fr]">
                {/* Bar chart */}
                <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:0.3,duration:0.55,ease:E}}
                  className="rounded-[12px] border border-white/[0.05] bg-[#181818] p-3">
                  <p className="mb-2 text-[11px] font-semibold text-[#A3A3A3]">Pipeline by Stage</p>
                  <div className="flex h-[72px] items-end gap-1.5">
                    {bars.map((b,i)=>(
                      <div key={b.l} className="flex flex-1 flex-col items-center gap-1">
                        <div className="relative w-full overflow-hidden rounded-t-[3px]" style={{height:64}}>
                          <motion.div initial={{height:0}} whileInView={{height:`${b.h}%`}} viewport={{once:true}}
                            transition={{delay:0.35+i*0.05,duration:0.65,ease:E}}
                            className={`absolute bottom-0 w-full rounded-t-[3px] ${b.l==="Jun"?"bg-[#FACC15]":"bg-white/[0.07]"}`}/>
                        </div>
                        <span className="text-[8px] text-[#404040]">{b.l}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Leads */}
                <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:0.38,duration:0.55,ease:E}}
                  className="rounded-[12px] border border-white/[0.05] bg-[#181818] p-3">
                  <p className="mb-2 text-[11px] font-semibold text-[#A3A3A3]">Recent Leads</p>
                  <div className="space-y-1.5">
                    {previewLeads.map(l => (
                      <div key={l.name} className="flex items-center justify-between gap-2 rounded-[8px] bg-white/[0.03] px-2.5 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[8px] font-bold text-zinc-300">{l.i}</div>
                          <div>
                            <p className="text-[10px] font-medium text-zinc-100">{l.name}</p>
                            <p className="text-[9px] text-[#525252]">{l.co}</p>
                          </div>
                        </div>
                        <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                          l.status==="Hot"?"bg-red-500/10 text-red-400":l.status==="Warm"?"bg-amber-500/10 text-amber-400":"bg-zinc-500/10 text-zinc-400"
                        }`}>{l.status}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Tasks */}
                <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:0.45,duration:0.55,ease:E}}
                  className="rounded-[12px] border border-white/[0.05] bg-[#181818] p-3">
                  <p className="mb-2 text-[11px] font-semibold text-[#A3A3A3]">Today&apos;s Tasks</p>
                  <div className="space-y-2.5">
                    {tasks.map(t=>(
                      <div key={t.t} className="flex items-start gap-1.5">
                        {t.ok?<CheckCircle size={10} className="mt-0.5 shrink-0 text-[#FACC15]"/>
                              :<Clock size={10} className="mt-0.5 shrink-0 text-[#404040]"/>}
                        <p className={`text-[10px] leading-tight ${t.ok?"text-[#404040] line-through":"text-zinc-300"}`}>{t.t}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
