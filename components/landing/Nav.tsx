"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  {l:"Features",  h:"#features" },
  {l:"Pipeline",  h:"#pipeline" },
  {l:"Analytics", h:"#analytics"},
  {l:"Pricing",   h:"#pricing"  },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, {passive:true})
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.header
      initial={{opacity:0, y:-16}} animate={{opacity:1, y:0}}
      transition={{duration:0.6, ease:[0.25,0.1,0.25,1]}}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15]">
            <Zap size={15} className="text-black" fill="black"/>
          </span>
          <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
            Omix CRM
          </span>
        </Link>

        {/* Links — hidden on mobile */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(l => (
            <a key={l.h} href={l.h}
              className="text-[14px] font-medium text-zinc-500 transition-colors duration-150 hover:text-white">
              {l.l}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login"
            className="hidden rounded-full px-4 py-2 text-[14px] font-medium text-zinc-400 transition-colors hover:text-white sm:block">
            Sign in
          </Link>
          <Link href="/signup">
            <motion.span whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-2.5 text-[13px] font-bold text-black shadow-md shadow-[#FACC15]/20 transition-shadow hover:shadow-[#FACC15]/35">
              Get Started <ChevronRight size={14}/>
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
