"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "./content"
import { fadeUp, easeSmooth } from "./motion"

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="border-t border-white/[0.05] py-20 sm:py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr] lg:gap-24">
          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">FAQ</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
              Questions,<br />
              <span className="text-[#A3A3A3]">answered.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-[#525252]">
              Still need help?{" "}
              <a href="mailto:hello@omixcrm.com"
                className="text-[#A3A3A3] underline underline-offset-4 transition-colors hover:text-white">
                hello@omixcrm.com
              </a>
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15, ease: easeSmooth }}>
            <div className="divide-y divide-white/[0.05]">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q}>
                    <button type="button" onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-8 py-7 text-left">
                      <span className={`text-[17px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-[#A3A3A3]"}`}>
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: easeSmooth }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? "border-[#FACC15]/25 bg-[#FACC15]/[0.08] text-[#FACC15]"
                            : "border-white/[0.08] text-[#525252]"
                        }`}>
                        <Plus size={15} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: easeSmooth }}
                          className="overflow-hidden">
                          <p className="pb-7 text-[17px] leading-[1.8] text-[#525252]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
