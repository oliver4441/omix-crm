"use client"
import { motion } from "framer-motion"
import { stagger, fadeUp, fadeLeft, fadeRight } from "./motion"
import { pipelineStages } from "./content"

export function PipelineSection() {
  return (
    <section id="pipeline" className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Heading — centred */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mx-auto mb-16 max-w-[540px] text-center sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#FACC15]">Pipeline</p>
          <h2 className="mt-5 text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Watch deals move, stage by stage
          </h2>
          <p className="mt-5 text-[18px] leading-[1.75] text-[#A1A1AA]">
            Drag a card forward the moment a call goes well. Your whole team sees the change instantly.
          </p>
        </motion.div>

        {/* Kanban board */}
        <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {pipelineStages.map((col, ci) => (
            <motion.div key={col.name} variants={ci%2===0 ? fadeLeft : fadeRight}
              className="flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-5">
              {/* Column header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`}/>
                  <span className="text-[13px] font-semibold text-zinc-300">{col.name}</span>
                </div>
                <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[11px] font-medium text-zinc-500">
                  {col.cards.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2.5">
                {col.cards.map(card => (
                  <motion.div key={card.n} whileHover={{y:-3}}
                    className={`cursor-grab rounded-2xl border bg-[#0f0f0f] p-4 shadow-sm transition-all duration-200 active:cursor-grabbing ${
                      card.hot
                        ? "border-[#FACC15]/15 shadow-[0_0_12px_rgba(250,204,21,0.04)]"
                        : "border-white/[0.05]"
                    }`}>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[10px] font-bold text-zinc-300">
                        {card.i}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-zinc-100">{card.n}</p>
                        <p className="font-mono text-[11px] text-zinc-500">{card.v}</p>
                      </div>
                    </div>
                    {/* Stage progress bar */}
                    <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/[0.05]">
                      <div className={`h-full rounded-full transition-all ${
                        col.name==="Won"       ? "w-full bg-emerald-400" :
                        col.name==="Proposal"  ? "w-3/4 bg-[#FACC15]"   :
                        col.name==="Qualified" ? "w-1/2 bg-amber-400"    : "w-1/4 bg-zinc-600"
                      }`}/>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics row */}
        <motion.div variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            {v:"KES 4.2M", l:"Total Pipeline"  },
            {v:"3.2 days",  l:"Avg. Stage Time" },
            {v:"68%",       l:"Win Rate"        },
            {v:"38",        l:"Deals Won"       },
          ].map(s => (
            <motion.div key={s.l} variants={fadeUp}
              className="rounded-[16px] border border-white/[0.06] bg-[#111111] px-6 py-5 text-center">
              <div className="text-[22px] font-extrabold tracking-[-0.03em] text-white">{s.v}</div>
              <div className="mt-1.5 text-[13px] text-zinc-500">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
