"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#080A12]/90 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          href="#top"
          className="text-base font-bold tracking-tight sm:text-lg"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Omix</span>{" "}
          <span className="text-white">CRM</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border border-white/[0.1] px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-white/20 hover:text-white sm:inline-block sm:px-5 sm:py-2.5"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold shadow-md shadow-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:brightness-110 sm:px-5 sm:py-2.5"
          >
            Get Started
            <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
