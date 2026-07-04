"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, Zap } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"

const E=[0.16,1,0.3,1] as const
const PLANS=[
  { name:"Starter",      price:"KES 1,500", per:"/user/mo", featured:false, perks:["Up to 3 members","500 active leads","Kanban pipeline","Email support"],            href:"/signup" },
  { name:"Professional", price:"KES 4,500", per:"/user/mo", featured:true,  perks:["Unlimited members","Live analytics","File storage","Priority support"],            href:"/signup" },
  { name:"Enterprise",   price:"Custom",    per:"talk to us",featured:false, perks:["Everything in Pro","Custom roles","SLA guarantee","Dedicated onboarding"],        href:"/contact" },
]
const s={hidden:{},show:{transition:{staggerChildren:.09}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

export function HomePricingPreview() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:.6,ease:E}} className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 max-w-sm text-[16px] leading-[1.75] text-[#A3A3A3]">
              Billed in KES. Free trial on every plan. No credit card required.
            </p>
          </div>
          <Link href="/pricing"
            className="hidden shrink-0 items-center gap-1.5 text-[14px] font-semibold text-[#737373] transition-colors hover:text-white sm:flex">
            Compare plans <ArrowRight size={15}/>
          </Link>
        </motion.div>

        <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-5 lg:grid-cols-3">
          {PLANS.map(p => (
            <motion.div key={p.name} variants={it} whileHover={{y:p.featured?-7:-4}}
              className={`relative flex flex-col rounded-[20px] border p-8 transition-all duration-300 ${
                p.featured
                  ? "border-[#FACC15]/20 bg-[#171717] shadow-[0_0_60px_rgba(250,204,21,0.05)]"
                  : "border-white/[0.06] bg-[#111111] hover:border-white/[0.1] hover:bg-[#171717]"
              }`}>
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-1.5 text-[11px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                  <Zap size={10} fill="black"/> Most Popular
                </span>
              )}
              <h3 className="text-[15px] font-bold text-white">{p.name}</h3>
              <div className="mt-5 mb-6 border-b border-white/[0.06] pb-6">
                <span className="text-[32px] font-extrabold tracking-[-0.04em] text-white">{p.price}</span>
                <span className="ml-1 text-[13px] text-[#525252]">{p.per}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-7">
                {p.perks.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#A3A3A3]">
                    <Check size={14} className={p.featured?"text-[#FACC15]":"text-[#525252]"}/>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={p.href}
                className={`flex items-center justify-center rounded-[12px] py-3 text-[14px] font-bold transition-all ${
                  p.featured
                    ? "bg-[#FACC15] text-black hover:bg-[#FDE68A]"
                    : "border border-white/[0.1] text-[#A3A3A3] hover:border-white/[0.2] hover:text-white"
                }`}>
                {p.featured?"Start Free Trial":"Get Started"}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link href="/pricing"
            className="text-[14px] font-semibold text-[#525252] underline underline-offset-4 hover:text-white">
            See full feature comparison →
          </Link>
        </div>
      </Container>
    </section>
  )
}
