"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

const links = [
  { label:"Features",  href:"#features"  },
  { label:"Pipeline",  href:"#pipeline"  },
  { label:"Analytics", href:"#analytics" },
  { label:"Pricing",   href:"#pricing"   },
]

export function Nav() {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const h = () => setPast(window.scrollY > 48)
    window.addEventListener("scroll", h, { passive:true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <motion.header
      initial={{ y:-20, opacity:0 }}
      animate={{ y:0,   opacity:1 }}
      transition={{ duration:0.55, ease:[0.25,0.1,0.25,1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        past
          ? "border-b border-white/[0.06] bg-[#0A0A0A]/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#FACC15]">
            <Zap size={14} className="text-black" fill="black" />
          </span>
          <span className="text-[15px] font-bold tracking-[-0.025em] text-white">Omix CRM</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-[14px] font-medium text-[#A3A3A3] transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login"
            className="hidden text-[14px] font-medium text-[#A3A3A3] transition-colors hover:text-white sm:block">
            Sign in
          </Link>
          <Link href="/signup">
            <motion.span whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
              className="inline-flex cursor-pointer items-center rounded-full bg-[#FACC15] px-5 py-2.5 text-[13px] font-bold text-black shadow-md shadow-[#FACC15]/15 transition-shadow hover:shadow-lg hover:shadow-[#FACC15]/25">
              Get Started
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
