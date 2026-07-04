"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { StatCounter } from "@/components/ui/StatCounter"
import { ParallaxCard } from "@/components/ui/ParallaxCard"

const E=[0.16,1,0.3,1] as const
const STATS=[
  {end:10000,suffix:"+",prefix:"",label:"Leads tracked"},
  {end:4.2,suffix:"M",prefix:"KES ",label:"Pipeline value"},
  {end:380,suffix:"+",prefix:"",label:"Active teams"},
  {end:99.9,suffix:"%",prefix:"",label:"Uptime"},
]
const bars=[{h:42},{h:61},{h:35},{h:78},{h:53},{h:95}]
const leads=[
  {i:"JO",n:"James Odhiambo",s:"Hot",   c:"text-red-400 bg-red-500/10"},
  {i:"GW",n:"Grace Wanjiku",  s:"Warm",  c:"text-amber-400 bg-amber-500/10"},
  {i:"SW",n:"Susan Waweru",   s:"Closed",c:"text-emerald-400 bg-emerald-500/10"},
]

function MiniDashboard() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
      {/* chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.05] bg-[#0d0d0d] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60"/>
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60"/>
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60"/>
        <span className="ml-3 font-mono text-[10px] text-[#404040]">app.omixcrm.com</span>
      </div>
      <div className="p-5">
        {/* KPIs */}
        <div className="mb-4 grid grid-cols-3 gap-2.5">
          {[{l:"Pipeline",v:"KES 4.2M",d:"+14%"},{l:"Won Deals",v:"38",d:"+5%"},{l:"Win Rate",v:"68%",d:"+3%"}].map(k=>(
            <div key={k.l} className="rounded-[10px] border border-white/[0.05] bg-[#171717] p-3">
              <p className="text-[10px] text-[#525252]">{k.l}</p>
              <p className="mt-1 text-[13px] font-bold text-white">{k.v}</p>
              <p className="mt-0.5 text-[9px] font-semibold text-[#FACC15]">{k.d}</p>
            </div>
          ))}
        </div>
        {/* Chart row */}
        <div className="mb-4 flex h-16 items-end gap-1.5 rounded-[10px] border border-white/[0.05] bg-[#171717] p-3">
          {bars.map((b,i)=>(
            <motion.div key={i} initial={{height:0}} animate={{height:`${b.h}%`}}
              transition={{delay:.1+i*.06,duration:.6,ease:E}}
              className={`flex-1 rounded-t-[3px] ${i===5?"bg-[#FACC15]":"bg-white/[0.08]"}`}/>
          ))}
        </div>
        {/* Leads */}
        <div className="space-y-1.5">
          {leads.map(l=>(
            <div key={l.i} className="flex items-center justify-between rounded-[8px] border border-white/[0.04] bg-[#171717] px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.07] text-[8px] font-bold">{l.i}</div>
                <span className="text-[11px] font-medium text-zinc-200">{l.n}</span>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${l.c}`}>{l.s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-0 pt-10 sm:pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0"/>
      <div className="pointer-events-none absolute inset-0"
        style={{background:"radial-gradient(ellipse 80% 55% at 50% 0%,transparent 25%,#0A0A0A 80%)"}}/>
      <div className="animate-breathe pointer-events-none absolute left-1/2 top-[-60px] h-[480px] w-[480px] -translate-x-1/2"
        style={{background:"radial-gradient(circle,rgba(250,204,21,0.11) 0%,transparent 70%)"}}/>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col items-center pt-10 text-center sm:pt-16 lg:pt-20">
          {/* Eyebrow */}
          <motion.span initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}
            transition={{duration:.5,ease:E}}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-[#A3A3A3]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#FACC15]"/>
            CRM built for African businesses
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
            transition={{duration:.75,delay:.1,ease:E}}
            className="mt-8 max-w-[680px] text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-white">
            Manage Leads.<br/>Close Deals.<br/>
            <span className="text-[#FACC15]">Grow Faster.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            transition={{duration:.7,delay:.2,ease:E}}
            className="mt-7 max-w-[500px] text-[clamp(16px,1.8vw,19px)] leading-[1.8] text-[#A3A3A3]">
            The modern CRM built for African businesses. Track leads, manage follow-ups,
            and close more deals from one beautiful dashboard.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
            transition={{duration:.65,delay:.3,ease:E}}
            className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup">
              <motion.span whileHover={{scale:1.03}} whileTap={{scale:.97}}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20 hover:shadow-xl hover:shadow-[#FACC15]/30">
                Start Free <ArrowRight size={16}/>
              </motion.span>
            </Link>
            <Link href="/features"
              className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] transition-all hover:border-white/[0.2] hover:text-white">
              See Features
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}}
            transition={{delay:.5,duration:.6}}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {STATS.map(s=>(
              <div key={s.label} className="text-center">
                <div className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold tracking-[-0.04em] text-white">
                  <StatCounter end={s.end} suffix={s.suffix} prefix={s.prefix}/>
                </div>
                <div className="mt-1 text-[12px] text-[#525252]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard */}
        <motion.div
          initial={{opacity:0,y:56,scale:.96}} animate={{opacity:1,y:0,scale:1}}
          transition={{duration:1,delay:.55,ease:E}}
          className="relative mt-16 animate-float">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"/>
          <div className="pointer-events-none absolute -inset-4 rounded-3xl"
            style={{background:"radial-gradient(ellipse 60% 40% at 50% 100%,rgba(250,204,21,0.07),transparent)"}}/>
          <ParallaxCard><MiniDashboard/></ParallaxCard>
        </motion.div>
      </div>
    </section>
  )
}
