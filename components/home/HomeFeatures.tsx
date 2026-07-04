"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { KanbanSquare, BarChart3, Bell, Shield, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"

const FEATURES = [
  { icon:KanbanSquare, title:"Visual Pipeline",   desc:"Drag-and-drop Kanban board that moves deals from first contact to closed in seconds.", href:"/features#pipeline" },
  { icon:BarChart3,    title:"Live Analytics",    desc:"Revenue charts, conversion rates, and win-rate trends — all updating in real time.",   href:"/analytics"          },
  { icon:Bell,         title:"Smart Reminders",   desc:"Follow-up alerts surface at the right moment. Nothing slips through.",                 href:"/features#alerts"   },
  { icon:Shield,       title:"Secure by Design",  desc:"Row-level security on every account. Your data is completely isolated.",               href:"/features#security"  },
]

const E=[0.16,1,0.3,1] as const
const stagger={hidden:{},show:{transition:{staggerChildren:.09}}}
const item={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

export function HomeFeatures() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div variants={item} initial="hidden" whileInView="show" viewport={{once:true}}>
          <SectionLabel>Why Omix CRM</SectionLabel>
          <h2 className="mt-5 max-w-[480px] text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
            Built to help your team close more deals
          </h2>
          <p className="mt-4 max-w-[420px] text-[17px] leading-[1.8] text-[#A3A3A3]">
            Four capabilities that make the biggest difference.{" "}
            <Link href="/features" className="text-white underline underline-offset-4 hover:text-[#FACC15]">
              See all features →
            </Link>
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(f=>(
            <motion.div key={f.title} variants={item} whileHover={{y:-5}}
              className="group relative flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#171717]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/[0.05] transition-colors group-hover:bg-[#FACC15]/10">
                <f.icon size={20} className="text-[#FACC15]"/>
              </div>
              <h3 className="text-[16px] font-bold tracking-[-0.02em] text-white">{f.title}</h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-[1.7] text-[#737373]">{f.desc}</p>
              <Link href={f.href}
                className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-[#525252] transition-colors hover:text-[#FACC15]">
                Learn more <ArrowRight size={13}/>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
