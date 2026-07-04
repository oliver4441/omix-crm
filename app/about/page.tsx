"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav }      from "@/components/layout/SiteNav"
import { SiteFooter }   from "@/components/layout/SiteFooter"
import { PageHero }     from "@/components/ui/PageHero"
import { Container }    from "@/components/ui/Container"
import { ArrowRight, Target, Heart, Globe, Zap } from "lucide-react"

const E=[0.16,1,0.3,1] as const
const s={hidden:{},show:{transition:{staggerChildren:.09}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

const VALUES=[
  {icon:Target, title:"Built for purpose",  desc:"Every feature exists to help one thing: close more deals. We don't add features for the sake of features."},
  {icon:Globe,  title:"Africa first",       desc:"We build for the realities of doing business in Kenya and East Africa — not for hypothetical US enterprise customers."},
  {icon:Heart,  title:"Honest product",     desc:"No dark patterns, no vendor lock-in, no hidden fees. If you cancel, your data is still yours."},
  {icon:Zap,    title:"Move fast",          desc:"We ship fast, respond to customers fast, and iterate quickly based on what teams actually need in the field."},
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav/>
      <PageHero label="About" heading="Built for Africa's businesses" centered={false}
        sub="Omix CRM was built because every CRM we tried was designed for US enterprise customers with unlimited budgets and large ops teams. We needed something different."/>

      {/* Story */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div initial={{opacity:0,x:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.65,ease:E}}>
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Our Story</span>
              <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
                A CRM that actually fits
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-[1.8] text-[#A3A3A3]">
                <p>Most CRMs are built for Silicon Valley-style sales teams: large budgets, dedicated admins, months of onboarding, and workflows that don&apos;t match how deals actually happen in Nairobi, Mombasa, or Kisumu.</p>
                <p>Omix CRM was built from the ground up for African sales teams. Fast to set up, easy to adopt, and designed around the actual rhythms of doing business here — WhatsApp follow-ups, M-Pesa payments, and tight-knit teams wearing multiple hats.</p>
                <p>We built the product we wished we had. And we keep making it better based on what our customers tell us every week.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.65,ease:E}}
              className="rounded-[20px] border border-white/[0.07] bg-[#111111] p-8">
              <div className="space-y-6">
                {[
                  {y:"2023",t:"Started",  d:"First version built to solve our own lead management problem."},
                  {y:"2024",t:"Launched", d:"Opened to early customers across Kenya. First 50 teams in 60 days."},
                  {y:"2025",t:"Grew",     d:"Expanded to SACCOs, real estate firms, and logistics companies."},
                  {y:"2026",t:"Today",    d:"380+ active teams tracking over 10,000 leads across East Africa."},
                ].map(ev=>(
                  <div key={ev.y} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FACC15]/10 text-[11px] font-bold text-[#FACC15]">{ev.y.slice(2)}</span>
                      <div className="mt-2 flex-1 w-[1px] bg-white/[0.06]"/>
                    </div>
                    <div className="pb-4">
                      <p className="text-[15px] font-bold text-white">{ev.t}</p>
                      <p className="mt-1 text-[14px] leading-[1.7] text-[#737373]">{ev.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,ease:E}} className="mb-12">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Values</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.035em] text-white">What we believe</h2>
          </motion.div>
          <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}} className="grid gap-5 sm:grid-cols-2">
            {VALUES.map(v=>(
              <motion.div key={v.title} variants={it}
                className="rounded-[20px] border border-white/[0.06] bg-[#111111] p-7 transition-all hover:border-white/[0.1] hover:bg-[#171717]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#FACC15]/10">
                  <v.icon size={20} className="text-[#FACC15]"/>
                </div>
                <h3 className="text-[17px] font-bold text-white">{v.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.75] text-[#737373]">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.035em] text-white">Come work with us</h2>
            <p className="mx-auto mt-4 max-w-sm text-[17px] leading-[1.8] text-[#A3A3A3]">We&apos;re building the CRM that Africa deserves. Reach out if you want to be part of it.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                Get in Touch <ArrowRight size={16}/>
              </Link>
              <Link href="/customers" className="inline-flex rounded-full border border-white/[0.1] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.2] hover:text-white">
                Customer Stories
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </main>
  )
}
