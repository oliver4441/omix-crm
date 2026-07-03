"use client"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { fadeLeft, fadeRight, fadeUp, easeSmooth } from "./motion"
import { featureRows, miniKanban, chartData } from "./content"

/* ── Mini product visuals ─────────────────────────────────────────────────── */

function LeadsVisual() {
  const E = easeSmooth
  const contacts = [
    { init:"JO", name:"James Odhiambo",  co:"Two Rivers Holdings",  s:"Hot",  v:"KES 380K", col:"text-red-400   bg-red-500/10"    },
    { init:"GW", name:"Grace Wanjiku",    co:"Northbridge Realty",   s:"Warm", v:"KES 120K", col:"text-amber-400 bg-amber-500/10"  },
    { init:"SW", name:"Susan Waweru",     co:"Coastline Retailers",  s:"Hot",  v:"KES 900K", col:"text-red-400   bg-red-500/10"    },
    { init:"DM", name:"David Mwangi",     co:"Highlands Sacco",      s:"New",  v:"KES 55K",  col:"text-zinc-400  bg-zinc-500/10"   },
  ]
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#111111] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-white">All Leads</p>
        <span className="rounded-full bg-[#FACC15]/10 px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">2,847 total</span>
      </div>
      <div className="space-y-2">
        {contacts.map((c,i) => (
          <motion.div key={c.init}
            initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            transition={{delay:0.05*i,duration:0.5,ease:E}}
            className="flex items-center justify-between gap-3 rounded-[12px] border border-white/[0.05] bg-[#181818] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[11px] font-bold text-white">{c.init}</div>
              <div>
                <p className="text-[13px] font-medium text-zinc-100">{c.name}</p>
                <p className="text-[11px] text-[#525252]">{c.co}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.col}`}>{c.s}</span>
              <span className="hidden font-mono text-[12px] text-[#A3A3A3] sm:block">{c.v}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PipelineVisual() {
  const E = easeSmooth
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#111111] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-white">Sales Pipeline</p>
        <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[11px] text-[#A3A3A3]">KES 4.2M</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {miniKanban.map((col,ci) => (
          <div key={col.col} className="rounded-[12px] border border-white/[0.06] bg-[#181818] p-3">
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{background:col.color}}/>
              <span className="text-[11px] font-semibold text-[#A3A3A3]">{col.col}</span>
            </div>
            <div className="space-y-2">
              {col.deals.map((d,di) => (
                <motion.div key={d.n}
                  initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:0.07*(ci+di),duration:0.45,ease:E}}
                  className="rounded-[8px] border border-white/[0.04] bg-[#111111] p-2.5">
                  <p className="text-[10px] font-medium text-zinc-200">{d.n}</p>
                  <p className="mt-0.5 font-mono text-[9px] text-[#525252]">{d.v}</p>
                  <div className="mt-1.5 h-[2px] overflow-hidden rounded-full bg-white/[0.05]">
                    <div className="h-full rounded-full" style={{
                      width: col.col==="Won"?"100%":col.col==="Qualified"?"55%":"30%",
                      background: col.color
                    }}/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsVisual() {
  const E   = easeSmooth
  const max = Math.max(...chartData.map(d=>d.r))
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#111111] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-white">Revenue</p>
        <span className="rounded-full bg-[#FACC15]/10 px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">+18.4% YoY</span>
      </div>
      <div className="flex h-28 items-end gap-2">
        {chartData.map((d,i) => {
          const pct = (d.r/max)*100
          return (
            <div key={d.m} className="flex flex-1 flex-col items-center gap-1">
              <div className="relative w-full overflow-hidden rounded-t-[4px]" style={{height:96}}>
                <motion.div
                  initial={{height:0}} whileInView={{height:`${pct}%`}} viewport={{once:true}}
                  transition={{delay:0.04*i,duration:0.7,ease:E}}
                  className={`absolute bottom-0 w-full rounded-t-[4px] ${i===chartData.length-1?"bg-[#FACC15]":"bg-white/[0.08]"}`}/>
              </div>
              <span className="text-[9px] text-[#404040]">{d.m}</span>
            </div>
          )
        })}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
        {[{l:"Win Rate",v:"68%"},{l:"Avg Deal",v:"KES 110K"},{l:"Cycle",v:"12 days"}].map(s=>(
          <div key={s.l} className="text-center">
            <p className="text-[14px] font-bold tracking-[-0.02em] text-white">{s.v}</p>
            <p className="mt-0.5 text-[10px] text-[#525252]">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const VISUALS = { leads:<LeadsVisual/>, pipeline:<PipelineVisual/>, analytics:<AnalyticsVisual/> }

/* ── Main section ─────────────────────────────────────────────────────────── */
export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-20 text-center sm:mb-24">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Features</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Built to close more deals
          </h2>
          <p className="mx-auto mt-5 max-w-[460px] text-[18px] leading-[1.8] text-[#A3A3A3]">
            Every feature exists to help your team move faster and lose fewer leads.
          </p>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {featureRows.map(row => (
            <div key={row.label}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${row.flip?"":"lg:grid-flow-dense"}`}>

              {/* Copy */}
              <motion.div
                variants={row.flip ? fadeRight : fadeLeft}
                initial="hidden" whileInView="show" viewport={{once:true,margin:"-60px"}}
                className={row.flip ? "lg:col-start-2" : ""}>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">{row.label}</p>
                <h3 className="mt-5 text-[clamp(1.6rem,3.2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
                  {row.heading}
                </h3>
                <p className="mt-5 text-[18px] leading-[1.8] text-[#A3A3A3]">{row.body}</p>
                <ul className="mt-8 space-y-3.5">
                  {row.points.map(pt => (
                    <li key={pt} className="flex items-center gap-3 text-[15px] text-[#A3A3A3]">
                      <CheckCircle size={16} className="shrink-0 text-[#FACC15]"/>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <a href="/signup"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white underline-offset-4 hover:text-[#FACC15]">
                    Learn more <ArrowRight size={14}/>
                  </a>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                variants={row.flip ? fadeLeft : fadeRight}
                initial="hidden" whileInView="show" viewport={{once:true,margin:"-60px"}}
                className={row.flip ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-4 rounded-[28px]"
                    style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(250,204,21,0.05),transparent)"}}/>
                  {VISUALS[row.visual]}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
