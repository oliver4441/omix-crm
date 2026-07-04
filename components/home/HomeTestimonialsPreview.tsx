"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"

const E = [0.16,1,0.3,1] as const
const T = [
  { i:"AO", name:"Amani Otieno",  role:"Sales Lead · Northbridge Realty",  q:"The pipeline view alone saves our team hours every week. We closed 40% more deals in the first month." },
  { i:"FC", name:"Faith Chebet",  role:"Ops Manager · Highlands Sacco",     q:"Follow-up reminders used to slip through the cracks. Now nothing gets missed and our members notice." },
  { i:"KM", name:"Kevin Mwangi",  role:"Founder · Westfield Logistics",     q:"Setup took an afternoon. Our reps adopted it immediately because it shows them exactly what to do next." },
]
const s={hidden:{},show:{transition:{staggerChildren:.1}}}
const it={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:E}}}

export function HomeTestimonialsPreview() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:.6,ease:E}} className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Customer Stories</SectionLabel>
            <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
              Trusted by teams across Kenya
            </h2>
          </div>
          <Link href="/customers"
            className="hidden shrink-0 items-center gap-1.5 text-[14px] font-semibold text-[#737373] transition-colors hover:text-white sm:flex">
            All stories <ArrowRight size={15}/>
          </Link>
        </motion.div>

        <motion.div variants={s} initial="hidden" whileInView="show" viewport={{once:true}}
          className="grid gap-5 md:grid-cols-3">
          {T.map(t => (
            <motion.div key={t.i} variants={it} whileHover={{y:-4}}
              className="flex flex-col rounded-[20px] border border-white/[0.06] bg-[#111111] p-7 transition-all hover:border-white/[0.1] hover:bg-[#171717]">
              <div className="mb-5 flex gap-1">
                {Array.from({length:5}).map((_,i) => <Star key={i} size={13} className="fill-[#FACC15] text-[#FACC15]"/>)}
              </div>
              <p className="flex-1 text-[15px] leading-[1.75] text-[#A3A3A3]">&ldquo;{t.q}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[12px] font-bold text-white">{t.i}</div>
                <div>
                  <p className="text-[13px] font-semibold text-white">{t.name}</p>
                  <p className="text-[12px] text-[#525252]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:hidden">
          <Link href="/customers"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#737373] hover:text-white">
            Read all stories <ArrowRight size={15}/>
          </Link>
        </div>
      </Container>
    </section>
  )
}
