"use client"
import { motion } from "framer-motion"
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts"
import { TrendingUp } from "lucide-react"
import { revenueData, analyticsMetrics } from "./content"
import { fadeLeft, fadeRight, stagger, fadeUp } from "./motion"

function ChartTooltip({ active, payload, label }:
  { active?:boolean; payload?:{value:number}[]; label?:string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#171717] px-3.5 py-2.5 shadow-xl">
      <p className="text-[11px] text-zinc-500">{label}</p>
      <p className="mt-0.5 font-mono text-[13px] font-bold text-white">
        KES {(payload[0].value / 1000).toFixed(0)}K
      </p>
    </div>
  )
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-16 sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">Analytics</p>
          <h2 className="mt-5 max-w-[480px] text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Data that tells you what to do next
          </h2>
          <p className="mt-5 max-w-[400px] text-[18px] leading-[1.75] text-[#A1A1AA]">
            Live charts update as deals move. No exports. No guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — metric rows */}
          <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{once:true}}
            className="space-y-3">
            {analyticsMetrics.map(m => (
              <motion.div key={m.label} variants={fadeLeft}
                className="group flex items-center justify-between rounded-[16px] border border-white/[0.06] bg-[#111111] px-6 py-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#171717]">
                <div>
                  <p className="text-[13px] text-zinc-500">{m.label}</p>
                  <p className="mt-1.5 text-[24px] font-extrabold tracking-[-0.03em] text-white">{m.value}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#FACC15]/15 bg-[#FACC15]/[0.07] px-3 py-1.5">
                  <TrendingUp size={12} className="text-[#FACC15]"/>
                  <span className="text-[12px] font-bold text-[#FACC15]">{m.change}</span>
                </div>
              </motion.div>
            ))}

            {/* Circular progress */}
            <motion.div variants={fadeLeft}
              className="grid grid-cols-3 gap-3 rounded-[16px] border border-white/[0.06] bg-[#111111] p-6">
              {[
                {label:"Pipeline Health", pct:82},
                {label:"Lead Quality",    pct:68},
                {label:"Follow-Up Rate",  pct:91},
              ].map(c => (
                <div key={c.label} className="flex flex-col items-center gap-2">
                  <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5"/>
                    <motion.circle cx="18" cy="18" r="14" fill="none"
                      stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 14}`}
                      initial={{strokeDashoffset: 2 * Math.PI * 14}}
                      whileInView={{strokeDashoffset: 2 * Math.PI * 14 * (1 - c.pct/100)}}
                      viewport={{once:true}}
                      transition={{duration:1.3, delay:0.3, ease:"easeOut"}}/>
                  </svg>
                  <p className="text-[15px] font-extrabold tracking-[-0.02em] text-white">{c.pct}%</p>
                  <p className="text-center text-[11px] leading-[1.4] text-zinc-500">{c.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — charts */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{once:true}}
            className="space-y-4">
            {/* Area chart */}
            <div className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-zinc-200">Monthly Revenue</p>
                <span className="rounded-full border border-[#FACC15]/15 bg-[#FACC15]/[0.07] px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">
                  +18.4% YoY
                </span>
              </div>
              <ResponsiveContainer width="100%" height={165}>
                <AreaChart data={revenueData} margin={{top:4, right:4, left:-24, bottom:0}}>
                  <defs>
                    <linearGradient id="areaYellow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#FACC15" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#FACC15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="month" tick={{fill:"#52525b", fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#52525b", fontSize:10}} axisLine={false} tickLine={false}
                    tickFormatter={v => `${(v/1000).toFixed(0)}K`}/>
                  <Tooltip content={<ChartTooltip/>}/>
                  <Area type="monotone" dataKey="revenue"
                    stroke="#FACC15" strokeWidth={2}
                    fill="url(#areaYellow)" dot={false}
                    activeDot={{r:4, fill:"#FACC15", stroke:"#0A0A0A", strokeWidth:2}}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Bar chart */}
            <div className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-zinc-200">New Leads per Month</p>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-400">
                  92 this month
                </span>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={revenueData} margin={{top:4, right:4, left:-24, bottom:0}} barSize={14}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="month" tick={{fill:"#52525b", fontSize:10}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fill:"#52525b", fontSize:10}} axisLine={false} tickLine={false}/>
                  <Tooltip
                    cursor={{fill:"rgba(255,255,255,0.03)"}}
                    contentStyle={{background:"#171717", border:"1px solid rgba(255,255,255,0.08)", borderRadius:12, fontSize:12}}
                    labelStyle={{color:"#a1a1aa"}} itemStyle={{color:"#FACC15"}}/>
                  <Bar dataKey="leads" fill="#FACC15" radius={[4,4,0,0]} opacity={0.75}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
