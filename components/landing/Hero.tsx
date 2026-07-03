"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { easeSmooth, stagger, fadeUp } from "./motion"
import { stats } from "./content"
import { DashboardMockup } from "./DashboardMockup"
import { ParallaxCard } from "./ParallaxCard"
import { StatCounter } from "./StatCounter"

export function Hero() {
  const ref  = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] })
  const y  = useTransform(scrollYProgress,[0,1],[0,80])
  const op = useTransform(scrollYProgress,[0,0.5],[1,0])

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-0 pt-28">
      {/* ── Background ── */}
      <div className="grid-bg pointer-events-none absolute inset-0"/>
      {/* radial vignette over grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{background:"radial-gradient(ellipse 90% 70% at 50% 0%, transparent 0%, #0A0A0A 70%)"}}/>

      {/* Yellow glow — single, centered */}
      <div className="animate-breathe pointer-events-none absolute left-1/2 top-[-80px] h-[500px] w-[500px] -translate-x-1/2"
        style={{background:"radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 68%)"}}/>

      {/* ── Text content ── */}
      <div className="relative z-10 w-full max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}}
            transition={{duration:0.5,ease:easeSmooth}}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-[#A3A3A3]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#FACC15]"/>
              Modern CRM for African sales teams
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
            transition={{duration:0.75,delay:0.1,ease:easeSmooth}}
            className="mt-10 text-[clamp(2.75rem,7.5vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
            Manage Leads.<br/>
            Close Deals.<br/>
            <span className="text-[#FACC15]">Grow Faster.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            transition={{duration:0.7,delay:0.2,ease:easeSmooth}}
            className="mt-8 max-w-[520px] text-[clamp(16px,2vw,20px)] leading-[1.8] text-[#A3A3A3]">
            The modern CRM built for African businesses. Track leads, automate
            follow-ups, and close more deals from one beautiful dashboard.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
            transition={{duration:0.65,delay:0.3,ease:easeSmooth}}
            className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup">
              <motion.span whileHover={{scale:1.035}} whileTap={{scale:0.965}}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20 transition-shadow hover:shadow-xl hover:shadow-[#FACC15]/30">
                Start Free <ArrowRight size={17}/>
              </motion.span>
            </Link>
            <a href="#features">
              <motion.span whileHover={{scale:1.035}} whileTap={{scale:0.965}}
                className="inline-flex cursor-pointer items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] transition-all hover:border-white/[0.22] hover:text-white">
                See Features
              </motion.span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger(0.07)} initial="hidden" animate="show"
            className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {stats.map(s => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.04em] text-white">
                  <StatCounter end={s.end} suffix={s.suffix} prefix={s.prefix}/>
                </div>
                <div className="mt-1 text-[13px] text-[#525252]">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard */}
        <motion.div
          initial={{opacity:0,y:64,scale:0.95}}
          animate={{opacity:1,y:0,scale:1}}
          transition={{duration:1,delay:0.5,ease:easeSmooth}}
          style={{y,opacity:op}}
          className="relative mt-20 animate-float">
          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#0A0A0A] to-transparent"/>
          <ParallaxCard>
            <DashboardMockup/>
          </ParallaxCard>
        </motion.div>
      </div>
    </section>
  )
}
