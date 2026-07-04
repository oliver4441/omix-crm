"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav }      from "@/components/layout/SiteNav"
import { SiteFooter }   from "@/components/layout/SiteFooter"
import { PageHero }     from "@/components/ui/PageHero"
import { Container }    from "@/components/ui/Container"
import { Check, Minus, Zap, ArrowRight, Plus } from "lucide-react"
import { useState } from "react"

const E=[0.16,1,0.3,1] as const
const s={hidden:{},show:{transition:{staggerChildren:.09}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

const PLANS=[
  {name:"Starter",      price:"KES 1,500",per:"/user/mo",featured:false,desc:"For solo agents and small teams.",href:"/signup",cta:"Start Free Trial",
   perks:["Up to 3 members","500 active leads","Kanban pipeline","Follow-up reminders","Email support","Mobile access"]},
  {name:"Professional",price:"KES 4,500",per:"/user/mo",featured:true, desc:"For growing teams needing full visibility.",href:"/signup",cta:"Start Free Trial",
   perks:["Unlimited members","Unlimited leads","Live analytics","File uploads & storage","Priority support","Custom pipeline stages","Reporting exports"]},
  {name:"Enterprise",  price:"Custom",    per:"talk to us",featured:false,desc:"For large orgs with compliance needs.",href:"/contact",cta:"Talk to Sales",
   perks:["Everything in Pro","Dedicated onboarding","Custom roles & RLS","SLA guarantee","Priority phone support","White-label option","API access"]},
]

const TABLE_FEATURES=[
  {label:"Active leads",      s:"500",     p:"Unlimited",e:"Unlimited"},
  {label:"Team members",      s:"Up to 3", p:"Unlimited", e:"Unlimited"},
  {label:"Pipeline stages",   s:"3",       p:"Unlimited", e:"Unlimited"},
  {label:"Analytics dashboard",s:false,    p:true,        e:true},
  {label:"File uploads",      s:false,     p:true,        e:true},
  {label:"Priority support",  s:false,     p:true,        e:true},
  {label:"Custom roles",      s:false,     p:false,       e:true},
  {label:"SLA guarantee",     s:false,     p:false,       e:true},
  {label:"White-label",       s:false,     p:false,       e:true},
]

const FAQS=[
  {q:"Is there a free trial?",          a:"Yes — every plan starts with a free trial. No credit card required. Run real leads before committing."},
  {q:"Can I change plans later?",        a:"Yes, upgrade or downgrade at any time. Changes take effect at the next billing cycle."},
  {q:"Is pricing in KES?",              a:"Yes. All plans are billed in Kenyan Shillings. No currency conversion needed."},
  {q:"What happens to my data if I cancel?",a:"Nothing is deleted. Your records stay safely stored and you regain full access upon resubscribing."},
  {q:"Do you offer custom contracts?",   a:"Yes — Enterprise plans can be customised with custom terms, SLAs, and invoicing. Contact sales."},
]

function Cell({v}:{v:boolean|string}) {
  if(v===true)  return <Check size={16} className="mx-auto text-[#FACC15]"/>
  if(v===false) return <Minus size={16} className="mx-auto text-[#383838]"/>
  return <span className="text-[13px] text-[#A3A3A3]">{v}</span>
}

export default function PricingPage() {
  const [open,setOpen]=useState<number|null>(null)
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav/>
      <PageHero label="Pricing" heading="Simple, transparent pricing"
        sub="Billed in Kenyan Shillings. Free trial on every plan. No credit card required."/>

      {/* Cards */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
            className="grid gap-6 lg:grid-cols-3">
            {PLANS.map(p=>(
              <motion.div key={p.name} variants={it} whileHover={{y:p.featured?-8:-4}}
                className={`relative flex flex-col rounded-[20px] border p-8 transition-all duration-300 sm:p-10 ${
                  p.featured
                    ?"border-[#FACC15]/20 bg-[#171717] shadow-[0_0_80px_rgba(250,204,21,0.06)]"
                    :"border-white/[0.06] bg-[#111111] hover:border-white/[0.1] hover:bg-[#171717]"
                }`}>
                {p.featured&&(
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-1.5 text-[12px] font-bold text-black shadow-lg shadow-[#FACC15]/25">
                    <Zap size={10} fill="black"/> Most Popular
                  </span>
                )}
                <h3 className="text-[16px] font-bold text-white">{p.name}</h3>
                <p className="mt-1.5 text-[14px] text-[#525252]">{p.desc}</p>
                <div className="my-7 border-b border-white/[0.06] pb-7">
                  <span className="text-[38px] font-extrabold tracking-[-0.045em] text-white">{p.price}</span>
                  <span className="ml-1 text-[13px] text-[#525252]">{p.per}</span>
                </div>
                <ul className="flex-1 space-y-3.5 mb-8">
                  {p.perks.map(f=>(
                    <li key={f} className="flex items-center gap-3 text-[14px] text-[#A3A3A3]">
                      <Check size={14} className={p.featured?"text-[#FACC15]":"text-[#525252]"}/>{f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href}
                  className={`flex items-center justify-center rounded-[12px] py-3.5 text-[14px] font-bold transition-all ${
                    p.featured?"bg-[#FACC15] text-black hover:bg-[#FDE68A]"
                    :"border border-white/[0.1] text-[#A3A3A3] hover:border-white/[0.2] hover:text-white"
                  }`}>
                  {p.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.6,ease:E}} className="mb-10">
            <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold tracking-[-0.035em] text-white">Compare plans</h2>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.6,delay:.1,ease:E}}
            className="overflow-hidden rounded-[20px] border border-white/[0.06]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06] bg-[#111111]">
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#737373] w-1/2">Feature</th>
                  {PLANS.map(p=>(
                    <th key={p.name} className={`px-4 py-4 text-center text-[13px] font-bold ${p.featured?"text-[#FACC15]":"text-white"}`}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_FEATURES.map((f,i)=>(
                  <tr key={f.label} className={`border-b border-white/[0.04] ${i%2===0?"bg-[#0f0f0f]":"bg-[#111111]"}`}>
                    <td className="px-6 py-3.5 text-[14px] text-[#A3A3A3]">{f.label}</td>
                    <td className="px-4 py-3.5 text-center"><Cell v={f.s}/></td>
                    <td className="px-4 py-3.5 text-center"><Cell v={f.p}/></td>
                    <td className="px-4 py-3.5 text-center"><Cell v={f.e}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </Container>
      </section>

      {/* Enterprise */}
      <section className="border-t border-white/[0.06] py-20">
        <Container>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.6,ease:E}}
            className="rounded-[20px] border border-white/[0.07] bg-[#111111] p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#FACC15]">Enterprise</span>
                <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold tracking-[-0.035em] text-white">
                  Need a custom plan?
                </h2>
                <p className="mt-4 text-[17px] leading-[1.8] text-[#A3A3A3]">
                  For large organisations with custom workflows, compliance requirements, or white-label needs. We&apos;ll build a plan around your team.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                  Talk to Sales <ArrowRight size={16}/>
                </Link>
                <Link href="/features" className="inline-flex rounded-full border border-white/[0.1] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.2] hover:text-white">
                  See Features
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[340px_1fr] lg:gap-20">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,ease:E}}>
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">FAQ</span>
              <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold tracking-[-0.035em] text-white">Pricing questions</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#525252]">Still unsure? <a href="mailto:hello@omixcrm.com" className="text-[#A3A3A3] underline underline-offset-4 hover:text-white">Email us</a></p>
            </motion.div>
            <div className="divide-y divide-white/[0.05]">
              {FAQS.map((f,i)=>{
                const isOpen=open===i
                return (
                  <div key={f.q}>
                    <button type="button" onClick={()=>setOpen(isOpen?null:i)}
                      className="flex w-full items-center justify-between gap-8 py-6 text-left">
                      <span className={`text-[16px] font-semibold transition-colors ${isOpen?"text-white":"text-[#A3A3A3]"}`}>{f.q}</span>
                      <motion.span animate={{rotate:isOpen?45:0}} transition={{duration:.2}}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen?"border-[#FACC15]/25 bg-[#FACC15]/[0.08] text-[#FACC15]":"border-white/[0.08] text-[#525252]"}`}>
                        <Plus size={14}/>
                      </motion.span>
                    </button>
                    {isOpen&&<p className="pb-6 text-[16px] leading-[1.8] text-[#525252]">{f.a}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </main>
  )
}
