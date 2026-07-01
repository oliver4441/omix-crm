"use client"

import { motion } from "framer-motion"
import { fadeUpContainer, fadeUpItem } from "./motion"
import { pipelineStages } from "./content"

export function PipelinePreview() {
  return (
    <section id="pipeline" className="border-t border-white/[0.08] bg-white/[0.015] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Watch Deals Move, Stage By Stage
          </h2>
          <p className="mt-4 px-2 text-base text-zinc-400 sm:mt-5 sm:text-lg">
            Drag a card forward the moment a call goes well. Your whole team sees the
            pipeline shift in real time.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {pipelineStages.map((stage) => (
            <motion.div
              key={stage.name}
              variants={fadeUpItem}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-xl sm:p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-zinc-300">{stage.name}</span>
                <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-zinc-500">
                  {stage.cards.length}
                </span>
              </div>
              <div className={`mb-3 h-1 rounded-full bg-gradient-to-r ${stage.accent}`} />
              <div className="space-y-2">
                {stage.cards.map((card) => (
                  <motion.div
                    key={card.name}
                    whileHover={{ y: -3 }}
                    className="cursor-grab rounded-lg border border-white/[0.06] bg-[#0d1424]/80 p-3 text-left transition-colors duration-200 hover:border-white/[0.14] active:cursor-grabbing"
                  >
                    <p className="truncate text-xs font-medium text-zinc-200">{card.name}</p>
                    <p className="mt-1 font-mono text-[11px] text-zinc-500">{card.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
