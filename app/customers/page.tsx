"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav }      from "@/components/layout/SiteNav"
import { SiteFooter }   from "@/components/layout/SiteFooter"
import { PageHero }     from "@/components/ui/PageHero"
import { Container }    from "@/components/ui/Container"
import { Star, ArrowRight } from "lucide-react"
import { StatCounter } from "@/components/ui/StatCounter"

const E=[0.16,1,0.3,1] as const
const s={hidden:{},show:{transition:{staggerChildren:.09}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

const TESTIMONIALS=[
  {i:"AO",name:"Amani Otieno",  role:"Sales Lead",         co:"Northbridge Realty",
   q:"The pipeline view alone saves our team hours every week. We closed 40% more deals in the first month of using Omix CRM. The visibility into every deal stage changed how we run our sales process completely."},
  {i:"FC",name:"Faith Chebet",  role:"Operations Manager",  co:"Highlands Sacco",
   q:"Follow-up reminders used to fall through the cracks. Now nothing gets missed. Our members notice the difference in response speed, and the team feels far more organised than before."},
  {i:"KM",name:"Kevin Mwangi",  role:"Founder",             co:"Westfield Logistics",
   q:"Setup took an afternoon, not a quarter. Our reps adopted it immediately because the interface shows them exactly what to do next. It has genuinely changed how we operate."},
  {i:"JA",name:"James Abuoga",  role:"Business Development",co:"Coastal Finance Ltd",
   q:"We tried two other CRMs before Omix. Neither stuck. This one did because it maps to how we actually sell — not how some US startup thinks we should sell."},
  {i:"SR",name:"Sharon Rop",    role:"Sales Manager",       co:"Savanna Fintech",
   q:"The analytics dashboard gives me everything I need for our weekly report in one view. No exports, no spreadsheets. Just the data, clean and live."},
  {i:"DM",name:"David Mutisya", role:"Director",            co:"Two Rivers Holdings",
   q:"We manage a complex multi-stage deal cycle with long timelines. Omix handles it beautifully — the pipeline stages are flexible enough to match our actual workflow."},
]

const METRICS=[
  {end:10000,suffix:"+",prefix:"",    label:"Leads tracked"},
  {end:4.2,  suffix:"M",prefix:"KES ",label:"Pipeline value"},
  {end:380,  suffix:"+",prefix:"",    label:"Active teams"},
  {end:40,   suffix:"%",prefix:"",    label:"Avg. deal increase"},
]

const INDUSTRIES=["Real Estate","Financial Services","SACCO & Co-ops","Logistics","Insurance","Agencies","Manufacturing","Consulting"]

export default function CustomersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <SiteNav/>
      <PageHero label="Customers" heading="Trusted by teams across East Africa"
        sub="Hundreds of sales teams use Omix CRM every day to track leads, manage pipelines, and close more deals."/>

      {/* Metrics */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {METRICS.map(m=>(
              <motion.div key={m.label} variants={it} className="text-center">
                <div className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-white">
                  <StatCounter end={m.end} suffix={m.suffix} prefix={m.prefix}/>
                </div>
                <div className="mt-1.5 text-[13px] text-[#525252]">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-t border-white/[0.06] py-14 sm:py-16">
        <Container>
          <p className="mb-6 text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#383838]">Industries using Omix CRM</p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map(ind=>(
              <span key={ind} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-[14px] text-[#737373]">{ind}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <Container>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,ease:E}} className="mb-12">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FACC15]">Stories</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.035em] text-white">What our customers say</h2>
          </motion.div>
          <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(t=>(
              <motion.div key={t.i} variants={it} whileHover={{y:-5}}
                className="flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-8 transition-all hover:border-white/[0.1] hover:bg-[#171717]">
                <div className="mb-5 flex gap-1">
                  {Array.from({length:5}).map((_,i)=><Star key={i} size={13} className="fill-[#FACC15] text-[#FACC15]"/>)}
                </div>
                <p className="flex-1 text-[15px] leading-[1.75] text-[#A3A3A3]">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[11px] font-bold text-white">{t.i}</div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                    <p className="text-[12px] text-[#525252]">{t.role} · {t.co}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.035em] text-white">Join them today</h2>
            <p className="mx-auto mt-4 max-w-sm text-[17px] leading-[1.8] text-[#A3A3A3]">Start your free trial and see why hundreds of teams across East Africa trust Omix CRM.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-7 py-4 text-[15px] font-bold text-black shadow-lg shadow-[#FACC15]/20">
                Start Free <ArrowRight size={16}/>
              </Link>
              <Link href="/contact" className="inline-flex rounded-full border border-white/[0.1] px-7 py-4 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.2] hover:text-white">
                Book a Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </main>
  )
}
