"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "./content"
import { easeOut } from "./motion"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">FAQ</p>
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Questions,
              <br />
              <span className="text-zinc-400">answered</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Still have questions? Email us at{" "}
              <a href="mailto:hello@omixcrm.com" className="text-violet-400 hover:text-violet-300">
                hello@omixcrm.com
              </a>
            </p>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="divide-y divide-white/[0.06]">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className={`text-sm font-medium transition-colors duration-200 sm:text-base ${isOpen ? "text-white" : "text-zinc-400"}`}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: easeOut }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${isOpen ? "border-violet-500/30 bg-violet-500/10 text-violet-400" : "border-white/[0.08] bg-white/[0.03] text-zinc-600"}`}
                      >
                        <Plus size={14} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm leading-relaxed text-zinc-500 sm:text-base">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
