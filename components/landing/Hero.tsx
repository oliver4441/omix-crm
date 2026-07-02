"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, CalendarDays } from "lucide-react"
import { fadeUp, stagger, ease } from "./motion"
import { stats, audiences } from "./content"
import { DashboardMockup } from "./DashboardMockup"
import { StatCounter } from "./StatCounter"
import { ParallaxCard } from "./ParallaxCard"

export function Hero() {
  const ref   = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] })
  const dashY  = useTransform(scrollYProgress, [0,1], [0, 70])
  const dashOp = useTransform(scrollYProgress, [0,0.55], [1, 0])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-100"/>
      {/* Radial mask — fades grid to black at edges */}
      <div className="pointer-events-none absolute inset-0"
        style={{background:"radial-gradient(ellipse 80% 60% at 50% 0%, transparent 20%, #0A0A0A 80%)"}}/>

      {/* Single yellow glow — centred, breathing */}
      <div className="glow-breathe pointer-events-none absolute left-1/2 top-[-120px] h-[560px] w-[560px] -translate-x-1/2 rounded-full"
        style={{background:"radial-gradient(circle, rgba(250,204,21,0.14) 0%, transparent 70%)"}}/>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-0 pt-40 sm:px-8 sm:pt-48">
        {/* Eyebrow */}
        <motion.div variants={fadeUp} initial="hidden" animate="show"
          className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-zinc-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]"/>
            CRM built for African businesses
          </span>
        </motion.div>

        {/* Headline — each phrase on its own line with breathing room */}
        <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
          transition={{duration:0.75, delay:0.12, ease}}
          className="mt-10 text-center">
          <h1 className="mx-auto max-w-[680px] text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
            Manage Leads.<br/>
            Close Deals.<br/>
            <span className="text-[#FACC15]">Grow Faster.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:0.7, delay:0.22, ease}}
          className="mx-auto mt-8 max-w-[540px] text-center text-[18px] leading-[1.75] text-[#A1A1AA]">
          The modern CRM built for African businesses. Track leads, automate
          follow-ups, and close more sales from one beautiful dashboard.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{duration:0.65, delay:0.32, ease}}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/signup">
            <motion.span whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FACC15] px-7 py-3.5 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20 transition-shadow hover:shadow-[#FACC15]/35">
              Start Free <ArrowRight size={17}/>
            </motion.span>
          </Link>
          <a href="#pipeline">
            <motion.span whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-white/[0.2] hover:text-white">
              <CalendarDays size={16} className="text-zinc-500"/> Book Demo
            </motion.span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}}
          transition={{delay:0.45, duration:0.6}}
          className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[13px] text-zinc-600">Used by</span>
          {audiences.map(a => (
            <span key={a} className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[13px] text-zinc-500">{a}</span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show"
          className="mx-auto mt-14 grid max-w-lg grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-4">
          {stats.map(s => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className="text-3xl font-extrabold tracking-[-0.04em] text-white">
                <StatCounter value={s.value} suffix={s.suffix} prefix={s.prefix}/>
              </div>
              <div className="mt-1.5 text-[13px] text-zinc-600">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating dashboard */}
        <motion.div
          initial={{opacity:0, y:60, scale:0.96}} animate={{opacity:1, y:0, scale:1}}
          transition={{duration:1.0, delay:0.55, ease}}
          style={{y:dashY, opacity:dashOp}}
          className="relative mt-20 w-full animate-float">
          {/* Glow beneath */}
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-1/2 rounded-full opacity-60"
            style={{background:"radial-gradient(ellipse 60% 40% at 50% 100%, rgba(250,204,21,0.1), transparent)"}}/>
          {/* Bottom fade into next section */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-1 z-10 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"/>

          <ParallaxCard>
            <DashboardMockup/>
          </ParallaxCard>
        </motion.div>
      </div>
    </section>
  )
}
