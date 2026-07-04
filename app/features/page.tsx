"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav }      from "@/components/layout/SiteNav"
import { SiteFooter }   from "@/components/layout/SiteFooter"
import { PageHero }     from "@/components/ui/PageHero"
import { Container }    from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { KanbanSquare, BarChart3, Bell, Shield, Users, Zap, CheckCircle, ArrowRight, Smartphone, Globe } from "lucide-react"

const E=[0.16,1,0.3,1] as const
const s={hidden:{},show:{transition:{staggerChildren:.08}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

const ALL=[
  {icon:KanbanSquare,title:"Visual Pipeline",    desc:"Kanban board for every stage of your sales cycle."},
  {icon:Users,       title:"Lead Management",    desc:"Capture, organise, and follow up on every lead."},
  {icon:BarChart3,   title:"Live Analytics",     desc:"Revenue, conversion, and pipeline charts live."},
  {icon:Bell,        title:"Smart Reminders",    desc:"Automated follow-up alerts before things slip."},
  {icon:Shield,      title:"Row-Level Security", desc:"Every account isolated by Supabase RLS."},
  {icon:Zap,         title:"Real-time Sync",     desc:"Team changes appear instantly everywhere."},
  {icon:Globe,       title:"Works Everywhere",   desc:"Browser-based — no install required."},
  {icon:Smartphone,  title:"Mobile Ready",       desc:"Fully responsive on any phone or tablet."},
]

function Row({id,label,heading,body,points,flip,visual}:{id:string;label:string;heading:string;body:string;points:string[];flip:boolean;visual:React.ReactNode}) {
  return (
    <div id={id} className={`grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 ${flip?"lg:grid-flow-dense":""}`}>
      <motion.div initial={{opacity:0,x:flip?28:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-60px"}}
        transition={{duration:.65,ease:E}} className={flip?"lg:col-start-2":""}>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">{heading}</h2>
        <p className="mt-4 text-[17px] leading-[1.8] text-[#A3A3A3]">{body}</p>
        <ul className="mt-7 space-y-3">
          {points.map(p=>(
            <li key={p} className="flex items-center gap-3 text-[15px] text-[#A3A3A3]">
              <CheckCircle size={16} className="shrink-0 text-[#FACC15]"/>{p}
            </li>
          ))}
        </ul>
        <Link href="/signup" className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white hover:text-[#FACC15]">
          Try it free <ArrowRight size={14}/>
        </Link>
      </motion.div>
      <motion.div initial={{opacity:0,x:flip?-28:28}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-60px"}}
        transition={{duration:.65,ease:E}} className={flip?"lg:col-start-1 lg:row-start-1":""}>
        <div className="relative rounded-[20px] border border-white/[0.07] bg-[#111111] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
          <div className="pointer-events-none absolute -inset-3 rounded-[28px]"
            style={{background:"radial-gradient(ellipse 60% 50% at 50% 50%,rgba(250,204,21,0.04),transparent)"}}/>
          {visual}
        </div>
      </motion.div>
    </div>
  )
}

function PipelineViz() {
  const cols=[
    {n:"New",     c:"#71717a",cards:["Acacia Agro · 220K","Solid Rock · 95K"]},
    {n:"Qualified",c:"#f59e0b",cards:["Northbridge · 1.2M","Westfield · 690K"]},
    {n:"Won",     c:"#22c55e", cards:["Highlands · 875K","Riverside · 1.05M"]},
  ]
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {cols.map(c=>(
        <div key={c.n} className="rounded-[12px] border border-white/[0.05] bg-[#171717] p-3">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{background:c.c}}/>
            <span className="text-[11px] font-semibold text-[#A3A3A3]">{c.n}</span>
          </div>
          {c.cards.map(card=>(
            <div key={card} className="mb-1.5 rounded-[8px] border border-white/[0.04] bg-[#111111] px-2.5 py-2">
              <p className="text-[10px] font-medium text-zinc-200">{card.split(" · ")[0]}</p>
              <p className="text-[9px] text-[#525252]">KES {card.split(" · ")[1]}</p>
              <div className="mt-1.5 h-[2px] rounded-full" style={{background:c.c,opacity:.5,width:c.n==="Won"?"100%":c.n==="Qualified"?"55%":"28%"}}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function LeadsViz() {
  const rows=[
    {i:"JO",n:"James Odhiambo",  co:"Two Rivers",     s:"Hot",  sc:"text-red-400 bg-red-500/10",    v:"380K"},
    {i:"GW",n:"Grace Wanjiku",   co:"Northbridge",    s:"Warm", sc:"text-amber-400 bg-amber-500/10", v:"120K"},
    {i:"SW",n:"Susan Waweru",    co:"Coastline",      s:"Hot",  sc:"text-red-400 bg-red-500/10",    v:"900K"},
    {i:"DM",n:"David Mwangi",    co:"Highlands Sacco",s:"New",  sc:"text-zinc-400 bg-zinc-500/10",  v:"55K"},
  ]
  return (
    <div className="space-y-2">
      {rows.map(r=>(
        <div key={r.i} className="flex items-center justify-between gap-3 rounded-[10px] border border-white/[0.05] bg-[#171717] px-3.5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[10px] font-bold">{r.i}</div>
            <div><p className="text-[12px] font-semibold text-zinc-100">{r.n}</p><p className="text-[10px] text-[#525252]">{r.co}</p></div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.sc}`}>{r.s}</span>
            <span className="hidden font-mono text-[11px] text-[#737373] sm:block">KES {r.v}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function SecurityViz() {
  const items=[
    {t:"Row-Level Security",  d:"Every row protected by Supabase RLS policies"},
    {t:"Account Isolation",   d:"Zero cross-tenant data leakage by design"},
    {t:"JWT Auth Sessions",   d:"Secure session management via Supabase Auth"},
    {t:"Storage Permissions", d:"File access controlled per user role"},
  ]
  return (
    <div className="space-y-3">
      {items.map(i=>(
        <div key={i.t} className="flex items-start gap-3 rounded-[10px] border border-white/[0.05] bg-[#171717] px-4 py-3.5">
          <CheckCircle size={15} className="mt-0.5 shrink-0 text-[#FACC15]"/>
          <div><p className="text-[13px] font-semibold text-white">{i.t}</p><p className="text-[12px] text-[#525252]">{i.d}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav/>
      <PageHero label="Features" heading="Everything you need to close more deals"
        sub="Every feature exists to help your team capture leads faster, move deals forward, and win more business.">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-7 py-3.5 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
            Start Free <ArrowRight size={16}/>
          </Link>
          <Link href="/pricing" className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.22] hover:text-white">
            See Pricing
          </Link>
        </div>
      </PageHero>

      <section className="border-t border-white/[0.06] py-20">
        <Container>
          <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ALL.map(f=>(
              <motion.div key={f.title} variants={it} whileHover={{y:-4}}
                className="rounded-[18px] border border-white/[0.06] bg-[#111111] p-6 transition-all hover:border-white/[0.1] hover:bg-[#171717]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#FACC15]/10">
                  <f.icon size={18} className="text-[#FACC15]"/>
                </div>
                <h3 className="text-[15px] font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#737373]">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-white/[0.06]">
        <Container>
          <Row id="pipeline" label="Sales Pipeline" heading="Move deals forward with one drag"
            body="A Kanban board built for speed. Every stage change appears for your whole team in real time. No manual updates, no status meetings."
            points={["Custom pipeline stages","Drag-and-drop between stages","Stage-level probability tracking","Real-time team activity feed"]}
            flip={false} visual={<PipelineViz/>}/>
          <div className="border-t border-white/[0.06]"/>
          <Row id="leads" label="Lead Management" heading="Never lose a lead again"
            body="Capture leads from any channel — email, WhatsApp, referral, or web form. Every lead is logged with source, timestamp, and contact details automatically."
            points={["One-click lead creation","Source and campaign tracking","Overdue follow-up alerts","Assign to any team member"]}
            flip={true} visual={<LeadsViz/>}/>
          <div className="border-t border-white/[0.06]"/>
          <Row id="security" label="Security" heading="Bank-grade security, built in"
            body="Row-level security policies ensure that no account can ever access another account's data — even at the database level. Security is not an add-on."
            points={["Supabase Auth with JWT sessions","Row-Level Security on every table","Account isolation by design","Storage permissions per role"]}
            flip={false} visual={<SecurityViz/>}/>
        </Container>
      </div>

      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.035em] text-white">
              Ready to see it in action?
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[17px] leading-[1.8] text-[#A3A3A3]">
              Start your free trial and have your team set up in minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                Start Free <ArrowRight size={16}/>
              </Link>
              <Link href="/contact" className="inline-flex rounded-full border border-white/[0.1] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.2] hover:text-white">
                Talk to Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </main>
  )
}
