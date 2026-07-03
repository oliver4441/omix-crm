"use client"
import { motion } from "framer-motion"
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts"
import { TrendingUp } from "lucide-react"
import { chartData, analyticsMetrics } from "./content"
import { fadeLeft, fadeRight, stagger, fadeUp } from "./motion"

function Tip({ active, payload, label }: { active?:boolean; payload?:{value:number}[]; label?:string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-[10px] border border-white/[0.08] bg-[#181818] px-3.5 py-2.5 shadow-xl">
      <p className="text-[11px] text-[#A3A3A3]">{label}</p>
      <p className="mt-0.5 font-mono text-[13px] font-bold text-white">KES {(payload[0].value/1000).toFixed(0)}K</p>
    </div>
  )
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="border-t border-white/[0.05] py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Analytics</p>
          <h2 className="mt-5 max-w-[460px] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Data that drives decisions
          </h2>
          <p className="mt-5 max-w-[400px] text-[18px] leading-[1.8] text-[#A3A3A3]">
            Every metric updates live as your team closes deals. No manual exports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Metrics */}
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{once:true}}
            className="flex flex-col gap-4">
            {analyticsMetrics.map(m => (
              <motion.div key={m.label} variants={fadeLeft}
                className="group flex items-center justify-between rounded-[16px] border border-white/[0.06] bg-[#111111] px-7 py-6 transition-all duration-250 hover:border-white/[0.1] hover:bg-[#181818]">
                <div>
                  <p className="text-[13px] text-[#A3A3A3]">{m.label}</p>
                  <p className="mt-2 text-[28px] font-extrabold tracking-[-0.04em] text-white">{m.value}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#FACC15]/15 bg-[#FACC15]/[0.07] px-3.5 py-1.5">
                  <TrendingUp size={12} className="text-[#FACC15]"/>
                  <span className="text-[12px] font-bold text-[#FACC15]">{m.change}</span>
                </div>
              </motion.div>
            ))}

            {/* Circular progress */}
            <motion.div variants={fadeLeft}
              className="grid grid-cols-3 gap-4 rounded-[16px] border border-white/[0.06] bg-[#111111] p-6">
              {[{l:"Pipeline Health",p:82},{l:"Lead Quality",p:68},{l:"Follow-Up Rate",p:91}].map(c=>(
                <div key={c.l} className="flex flex-col items-center gap-3">
                  <svg viewBox="0 0 36 36" className="h-[60px] w-[60px] -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5"/>
                    <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#FACC15" strokeWidth="2.5"
                      strokeLinecap="round" strokeDasharray={`${2*Math.PI*14}`}
                      initial={{strokeDashoffset:2*Math.PI*14}}
                      whileInView={{strokeDashoffset:2*Math.PI*14*(1-c.p/100)}}
                      viewport={{once:true}} transition={{duration:1.3,delay:0.2,ease:"easeOut"}}/>
                  </svg>
                  <p className="text-[15px] font-bold text-white">{c.p}%</p>
                  <p className="text-center text-[11px] leading-[1.4] text-[#525252]">{c.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Charts */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{once:true}}
            className="flex flex-col gap-4">
            {/* Area chart */}
            <div className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-zinc-200">Monthly Revenue</p>
                <span className="rounded-full border border-[#FACC15]/15 bg-[#FACC15]/[0.07] px-3 py-1 text-[11px] font-bold text-[#FACC15]">+18.4% YoY</span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={chartData} margin={{top:4,right:4,left:-26,bottom:0}}>
                  <defs>
                    <linearGradient id="gY" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#FACC15" stopOpacity={0.18}/>
                      <stop offset="95%" stopColor="#FACC15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="m" tick={{fill:"#404040",fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#404040",fontSize:10}} axisLine={false} tickLine={false}
                    tickFormatter={(v:number)=>`${(v/1000).toFixed(0)}K`}/>
                  <Tooltip content={<Tip/>}/>
                  <Area type="monotone" dataKey="r" stroke="#FACC15" strokeWidth={2}
                    fill="url(#gY)" dot={false}
                    activeDot={{r:4,fill:"#FACC15",stroke:"#0A0A0A",strokeWidth:2}}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Bar chart */}
            <div className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-zinc-200">New Leads / Month</p>
                <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1 text-[11px] text-[#A3A3A3]">
                  92 this month
                </span>
              </div>
              <ResponsiveContainer width="100%" height={116}>
                <BarChart data={chartData} margin={{top:4,right:4,left:-26,bottom:0}} barSize={14}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="m" tick={{fill:"#404040",fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#404040",fontSize:10}} axisLine={false} tickLine={false}/>
                  <Tooltip cursor={{fill:"rgba(255,255,255,0.03)"}}
                    contentStyle={{background:"#181818",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,fontSize:12}}
                    labelStyle={{color:"#A3A3A3"}} itemStyle={{color:"#FACC15"}}/>
                  <Bar dataKey="l" fill="#FACC15" radius={[4,4,0,0]} opacity={0.7}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
