"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react"
import { ease, fadeUp } from "./motion"
import { stats, audiences } from "./content"
import { DashboardMockup } from "./DashboardMockup"
import { StatCounter } from "./StatCounter"

const particles = [
  { w:300, h:300, top:"10%",  left:"5%",   delay:0   },
  { w:200, h:200, top:"60%",  right:"8%",  delay:1.5 },
  { w:150, h:150, top:"30%",  right:"20%", delay:3   },
  { w:80,  h:80,  top:"80%",  left:"15%",  delay:2   },
  { w:120, h:120, top:"15%",  left:"45%",  delay:4   },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] })
  const mockY   = useTransform(scrollYProgress, [0,1], [0,80])
  const mockOp  = useTransform(scrollYProgress, [0,0.6], [1,0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col items-center overflow-hidden pb-0 pt-32">
      {/* animated grid */}
      <div className="hero-grid pointer-events-none absolute inset-0"/>

      {/* radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,transparent_30%,#0A0A0A_90%)]"/>

      {/* yellow ambient blobs */}
      <motion.div animate={{scale:[1,1.2,1],opacity:[0.3,0.6,0.3]}}
        transition={{duration:7,repeat:Infinity,ease:"easeInOut"}}
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/20 blur-[100px]"/>
      <motion.div animate={{scale:[1,1.15,1],opacity:[0.1,0.2,0.1]}}
        transition={{duration:9,repeat:Infinity,ease:"easeInOut",delay:2}}
        className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-amber-500/15 blur-[80px]"/>

      {/* floating particles */}
      {particles.map((p,i) => (
        <motion.div key={i}
          animate={{y:[0,-p.h/6,0],opacity:[0.15,0.35,0.15]}}
          transition={{duration:5+i,repeat:Infinity,ease:"easeInOut",delay:p.delay}}
          className="pointer-events-none absolute rounded-full bg-[#FACC15]/10 blur-2xl"
          style={{width:p.w,height:p.h,...(p.top?{top:p.top}:{}),
            ...(("left" in p) ? {left:p.left}:{}),
            ...(("right" in p) ? {right:p.right}:{})}}/>
      ))}

      {/* content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-5 sm:px-6 lg:px-8">
        {/* eyebrow */}
        <motion.div variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-2 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/[0.07] px-4 py-1.5 text-xs font-medium text-[#FACC15]">
          <Sparkles size={12}/>
          Built for Africa&apos;s fastest-growing businesses
        </motion.div>

        {/* headline */}
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
          transition={{duration:0.8,delay:0.15,ease}}
          className="mt-7 max-w-4xl text-center text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]"
          style={{fontFamily:"'Space Grotesk',sans-serif"}}>
          <span className="text-white">Manage Leads.</span>{" "}
          <span className="text-white">Close Deals.</span>
          <br/>
          <span className="bg-gradient-to-r from-[#FACC15] via-amber-300 to-[#FACC15] bg-clip-text text-transparent text-glow">
            Grow Faster.
          </span>
        </motion.h1>

        {/* subheading */}
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.25,ease}}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
          The modern CRM built for African businesses. Track leads, automate
          follow-ups, and close more sales from one beautiful dashboard.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.35,ease}}
          className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/signup">
            <motion.span whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FACC15] px-7 py-3.5 text-sm font-extrabold text-black shadow-xl shadow-[#FACC15]/25 transition-all hover:bg-[#FDE68A] hover:shadow-[#FACC15]/40 sm:text-base">
              Start Free <ArrowRight size={18}/>
            </motion.span>
          </Link>
          <a href="#pricing">
            <motion.span whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-all hover:border-white/20 hover:text-white sm:text-base">
              <CalendarDays size={16} className="text-zinc-500"/> Book Demo
            </motion.span>
          </a>
        </motion.div>

        {/* trust strip */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
          className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-zinc-600">Used by</span>
          {audiences.map(a => (
            <span key={a} className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-zinc-500">{a}</span>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.55,ease}}
          className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-[#FACC15] sm:text-3xl"
                style={{fontFamily:"'Space Grotesk',sans-serif"}}>
                <StatCounter value={s.value} suffix={s.suffix} prefix={s.prefix}/>
              </div>
              <div className="mt-1 text-[11px] text-zinc-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* floating dashboard */}
        <motion.div
          initial={{opacity:0,y:60,scale:0.95}} animate={{opacity:1,y:0,scale:1}}
          transition={{duration:1,delay:0.6,ease}}
          style={{y:mockY,opacity:mockOp}}
          className="relative mt-14 w-full max-w-6xl animate-float-slow">
          {/* top fade to blend into next section */}
          <div className="pointer-events-none absolute -bottom-1 inset-x-0 z-10 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent"/>
          <DashboardMockup/>
        </motion.div>
      </div>
    </section>
  )
}
