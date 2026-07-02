"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { fadeUp } from "./motion"

export function CTASection() {
  return (
    <section className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="relative overflow-hidden rounded-[28px] bg-[#111111] px-8 py-16 text-center sm:px-12 sm:py-20 lg:py-24"
          style={{boxShadow:"inset 0 0 0 1px rgba(250,204,21,0.15), 0 0 80px rgba(250,204,21,0.06)"}}>

          {/* background glow blobs */}
          <motion.div
            animate={{scale:[1,1.3,1],opacity:[0.3,0.6,0.3]}}
            transition={{duration:6,repeat:Infinity,ease:"easeInOut"}}
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/20 blur-[80px]"/>
          <motion.div
            animate={{scale:[1,1.2,1],opacity:[0.15,0.3,0.15]}}
            transition={{duration:8,repeat:Infinity,ease:"easeInOut",delay:2}}
            className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-amber-500/15 blur-[60px]"/>

          {/* hero grid overlay */}
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-50"/>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,#111111_90%)]"/>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/[0.07] px-4 py-1.5 text-xs font-bold text-[#FACC15]">
              <Zap size={12} fill="#FACC15"/> Free to start · No credit card needed
            </div>
            <h2
              className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{fontFamily:"'Space Grotesk',sans-serif"}}>
              Your next deal is already<br/>
              <span className="bg-gradient-to-r from-[#FACC15] via-amber-300 to-[#FACC15] bg-clip-text text-transparent text-glow">
                in your pipeline.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Join hundreds of sales teams across Kenya who use Omix CRM to track
              leads and close more deals every month.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{scale:1.04}} whileTap={{scale:0.97}}>
                <Link href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-8 py-4 text-base font-extrabold text-black shadow-2xl shadow-[#FACC15]/25 transition-all hover:bg-[#FDE68A] hover:shadow-[#FACC15]/40">
                  Start Free Today <ArrowRight size={18}/>
                </Link>
              </motion.div>
              <Link href="/login"
                className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-base font-semibold text-zinc-300 backdrop-blur-xl transition-all hover:border-white/[0.2] hover:text-white">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
