"use client"
import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"

interface Props {
  label:    string
  heading:  string
  sub:      string
  centered?: boolean
  children?: React.ReactNode
}

const ease = [0.16,1,0.3,1] as const

export function PageHero({ label, heading, sub, centered=true, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-0 pt-16 sm:pt-20">
      <div className="grid-bg pointer-events-none absolute inset-0"/>
      <div className="pointer-events-none absolute inset-0"
        style={{background:"radial-gradient(ellipse 80% 60% at 50% 0%,transparent 20%,#0A0A0A 80%)"}}/>
      <div className="animate-breathe pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2"
        style={{background:"radial-gradient(circle,rgba(250,204,21,0.1) 0%,transparent 70%)"}}/>

      <div className={`relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-20 lg:py-24 ${centered ? "text-center":"" }`}>
        <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}
          transition={{duration:0.5,ease}}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.1,ease}}
          className={`mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.07] tracking-[-0.04em] text-white ${centered?"mx-auto max-w-[680px]":""}`}>
          {heading}
        </motion.h1>
        <motion.p
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{duration:0.65,delay:0.18,ease}}
          className={`mt-5 text-[17px] leading-[1.8] text-[#A3A3A3] sm:text-[19px] ${centered?"mx-auto max-w-[540px]":"max-w-[580px]"}`}>
          {sub}
        </motion.p>
        {children && (
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.26,ease}} className="mt-8">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
