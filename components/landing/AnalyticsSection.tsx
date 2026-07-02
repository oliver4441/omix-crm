"use client"
import { motion } from "framer-motion"
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts"
import { TrendingUp } from "lucide-react"
import { revenueData, analyticsMetrics } from "./content"
import { fadeLeft, fadeRight, stagger, fadeUp } from "./motion"

function CustomTooltip({ active, payload, label }: {active?:boolean;payload?:{value:number}[];label?:string}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-[#FACC15]/15 bg-[#111111] px-3 py-2 shadow-2xl shadow-black/50">
      <p className="text-[11px] font-semibold text-zinc-400">{label}</p>
      <p className="font-mono text-sm font-bold text-[#FACC15]">
        KES {(payload[0].value/1000).toFixed(0)}K
      </p>
    </div>
  )
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">Analytics</p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Data that tells you<br/><span className="text-zinc-500">what to do next</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* left — metrics */}
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{once:true}}
            className="space-y-4">
            {analyticsMetrics.map(m => (
              <motion.div key={m.label} variants={fadeLeft}
                className="group flex items-center justify-between rounded-[20px] border border-white/[0.05] bg-[#111111] px-6 py-5 transition-all duration-300 hover:border-[#FACC15]/15 hover:bg-[#161616]">
                <div>
                  <p className="text-xs text-zinc-500">{m.label}</p>
                  <p className="mt-1 text-2xl font-extrabold text-white" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{m.value}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/[0.08] px-3 py-1.5">
                  <TrendingUp size={12} className="text-[#FACC15]"/>
                  <span className="text-xs font-bold text-[#FACC15]">{m.change}</span>
                </div>
              </motion.div>
            ))}

            {/* circular progress row */}
            <motion.div variants={fadeLeft}
              className="grid grid-cols-3 gap-3 rounded-[20px] border border-white/[0.05] bg-[#111111] p-5">
              {[
                { label:"Pipeline Health", pct:82 },
                { label:"Lead Quality",    pct:68 },
                { label:"Follow-Up Rate",  pct:91 },
              ].map(c => (
                <div key={c.label} className="flex flex-col items-center gap-2">
                  <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#1a1a1a" strokeWidth="3"/>
                    <motion.circle cx="18" cy="18" r="14" fill="none"
                      stroke="#FACC15" strokeWidth="3" strokeLinecap="round"
                      strokeDasharray={`${2*Math.PI*14}`}
                      initial={{strokeDashoffset: 2*Math.PI*14}}
                      whileInView={{strokeDashoffset: 2*Math.PI*14*(1-c.pct/100)}}
                      viewport={{once:true}}
                      transition={{duration:1.2, delay:0.3, ease:"easeOut"}}/>
                  </svg>
                  <p className="-mt-1 text-base font-extrabold text-[#FACC15]" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{c.pct}%</p>
                  <p className="text-center text-[10px] text-zinc-500">{c.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* right — charts */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{once:true}}
            className="space-y-4">
            {/* area chart */}
            <div className="rounded-[20px] border border-white/[0.05] bg-[#111111] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold text-zinc-300">Monthly Revenue</p>
                <span className="rounded-full bg-[#FACC15]/10 px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">+18.4% YoY</span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={revenueData} margin={{top:4,right:4,left:-20,bottom:0}}>
                  <defs>
                    <linearGradient id="ylw" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#FACC15" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#FACC15" stopOpacity={0.01}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="month" tick={{fill:"#52525b",fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#52525b",fontSize:10}} axisLine={false} tickLine={false} tickFormatter={v=>`${(v/1000).toFixed(0)}K`}/>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area type="monotone" dataKey="revenue" stroke="#FACC15" strokeWidth={2} fill="url(#ylw)" dot={false} activeDot={{r:4,fill:"#FACC15",stroke:"#0A0A0A",strokeWidth:2}}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* bar chart — leads */}
            <div className="rounded-[20px] border border-white/[0.05] bg-[#111111] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold text-zinc-300">New Leads</p>
                <span className="rounded-full bg-[#FACC15]/10 px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">92 this month</span>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={revenueData} margin={{top:4,right:4,left:-20,bottom:0}} barSize={12}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="month" tick={{fill:"#52525b",fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#52525b",fontSize:10}} axisLine={false} tickLine={false}/>
                  <Tooltip
                    cursor={{fill:"rgba(250,204,21,0.04)"}}
                    contentStyle={{background:"#111",border:"1px solid rgba(250,204,21,0.15)",borderRadius:10,fontSize:11}}
                    labelStyle={{color:"#a1a1aa"}} itemStyle={{color:"#FACC15"}}/>
                  <Bar dataKey="leads" fill="#FACC15" radius={[4,4,0,0]} opacity={0.8}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
