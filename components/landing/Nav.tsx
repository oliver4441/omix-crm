"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  { label:"Features",    href:"#features"   },
  { label:"How It Works",href:"#workflow"   },
  { label:"Analytics",   href:"#analytics"  },
  { label:"Pricing",     href:"#pricing"    },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", fn, { passive:true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.header
      initial={{ opacity:0, y:-20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-[#0A0A0A]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/50" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15]">
            <Zap size={16} className="text-black" fill="black" />
          </span>
          <span className="text-base font-bold tracking-tight text-white" style={{fontFamily:"'Space Grotesk',sans-serif"}}>
            Omix <span className="text-[#FACC15]">CRM</span>
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/login"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-white sm:block sm:px-5">
            Login
          </Link>
          <Link href="/signup">
            <motion.span whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              className="flex cursor-pointer items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-2 text-sm font-bold text-black shadow-lg shadow-[#FACC15]/20 transition-all hover:bg-[#FDE68A] hover:shadow-[#FACC15]/30 sm:px-5 sm:py-2.5">
              Get Started <ChevronRight size={14} />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
