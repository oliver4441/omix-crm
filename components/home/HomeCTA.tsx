"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"

const E=[0.16,1,0.3,1] as const

export function HomeCTA() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
          viewport={{once:true}} transition={{duration:.65,ease:E}}
          className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111] px-8 py-16 text-center sm:px-16 sm:py-20 lg:py-24">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-50"/>
          <div className="pointer-events-none absolute inset-0"
            style={{background:"radial-gradient(ellipse 70% 70% at 50% 50%,transparent 30%,#111111 85%)"}}/>
          <div className="animate-breathe pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2"
            style={{background:"radial-gradient(circle,rgba(250,204,21,0.12) 0%,transparent 70%)"}}/>
          <div className="relative">
            <h2 className="mx-auto max-w-[560px] text-[clamp(1.9rem,4vw,3.25rem)] font-extrabold leading-[1.07] tracking-[-0.04em] text-white">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-[1.8] text-[#A3A3A3]">
              Join hundreds of teams across Kenya already using Omix CRM to win more deals.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{scale:1.03}} whileTap={{scale:.97}}>
                <Link href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-8 py-4 text-[15px] font-bold text-black shadow-xl shadow-[#FACC15]/20 hover:shadow-[#FACC15]/35">
                  Start Free Today <ArrowRight size={17}/>
                </Link>
              </motion.div>
              <Link href="/contact"
                className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-[15px] font-semibold text-[#A3A3A3] hover:border-white/[0.2] hover:text-white">
                Book a Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
