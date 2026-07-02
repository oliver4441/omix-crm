"use client"
import { motion } from "framer-motion"
import { stagger, fadeUp, fadeLeft, fadeRight } from "./motion"
import { pipelineStages } from "./content"

export function PipelineSection() {
  return (
    <section id="workflow" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">Pipeline</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Watch deals move,<br/><span className="text-zinc-500">stage by stage</span>
          </h2>
          <p className="mt-5 text-base text-zinc-400">
            One drag forward the moment a call goes well. Your team sees it instantly.
          </p>
        </motion.div>

        {/* kanban */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {pipelineStages.map((col, ci) => (
            <motion.div key={col.name}
              variants={ci%2===0 ? fadeLeft : fadeRight}
              className="flex flex-col rounded-[20px] border border-white/[0.05] bg-[#111111] p-4">
              {/* column header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.color}`}/>
                  <span className="text-xs font-bold text-zinc-300">{col.name}</span>
                </div>
                <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-zinc-500">{col.count}</span>
              </div>

              {/* cards */}
              <div className="space-y-2.5">
                {col.cards.map((card) => (
                  <motion.div key={card.name} whileHover={{y:-3,scale:1.02}}
                    className={`group relative cursor-grab rounded-[14px] border bg-[#0f0f0f] p-3.5 shadow-lg transition-all duration-200 active:cursor-grabbing ${
                      card.hot ? "border-[#FACC15]/20 shadow-[#FACC15]/5" : "border-white/[0.05]"
                    }`}>
                    {card.hot && (
                      <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-[#FACC15]/5 to-transparent"/>
                    )}
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FACC15]/10 text-[10px] font-bold text-[#FACC15]">
                        {card.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-zinc-200">{card.name}</p>
                        <p className="font-mono text-[10px] text-zinc-600">{card.value}</p>
                      </div>
                    </div>
                    {/* progress bar */}
                    <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <div className={`h-full rounded-full ${
                        col.name==="Won" ? "w-full bg-green-400" :
                        col.name==="Proposal" ? "w-3/4 bg-[#FACC15]" :
                        col.name==="Qualified" ? "w-1/2 bg-amber-400" : "w-1/4 bg-zinc-500"
                      }`}/>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom stats row */}
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label:"Total Pipeline",   value:"KES 4.2M" },
            { label:"Avg. Stage Time",  value:"3.2 days"  },
            { label:"Win Rate",         value:"68%"       },
            { label:"Deals This Month", value:"38"        },
          ].map(s => (
            <motion.div key={s.label} variants={fadeUp}
              className="rounded-2xl border border-white/[0.05] bg-[#111111] px-5 py-4 text-center">
              <div className="text-xl font-extrabold text-[#FACC15]" style={{fontFamily:"'Space Grotesk',sans-serif"}}>{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
