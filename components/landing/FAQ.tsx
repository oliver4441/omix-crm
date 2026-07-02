"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "./content"
import { fadeUp } from "./motion"

export function FAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <section id="faq" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-20">
          {/* left */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              style={{fontFamily:"'Space Grotesk',sans-serif"}}>
              Questions,<br/><span className="text-zinc-500">answered.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-500">
              Still need help?{" "}
              <a href="mailto:hello@omixcrm.com" className="text-[#FACC15] hover:underline">hello@omixcrm.com</a>
            </p>
          </motion.div>

          {/* right */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-white/[0.05]">
              {faqs.map((f,i) => {
                const isOpen = open===i
                return (
                  <div key={f.q}>
                    <button type="button" onClick={() => setOpen(isOpen?null:i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left">
                      <span className={`text-sm font-semibold transition-colors duration-200 sm:text-base ${isOpen?"text-[#FACC15]":"text-zinc-300"}`}>
                        {f.q}
                      </span>
                      <motion.span animate={{rotate:isOpen?45:0}} transition={{duration:0.2}}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen?"border-[#FACC15]/30 bg-[#FACC15]/10 text-[#FACC15]":"border-white/[0.07] text-zinc-600"}`}>
                        <Plus size={14}/>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div key="body"
                          initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
                          transition={{duration:0.22,ease:[0.16,1,0.3,1]}} className="overflow-hidden">
                          <p className="pb-5 text-sm leading-relaxed text-zinc-500 sm:text-base">{f.a}</p>
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
