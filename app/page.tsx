"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Bell,
  KanbanSquare,
  Users,
  Shield,
  Zap,
  ChevronRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

const easeOut = [0, 0, 0.2, 1] as [number, number, number, number]
const easeInOut = [0.4, 0, 0.2, 1] as [number, number, number, number]

const features = [
  {
    icon: KanbanSquare,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-orange-500/10",
    title: "Sales Pipeline",
    desc: "Drag-and-drop Kanban board to move leads through every stage of your sales cycle.",
  },
  {
    icon: Bell,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Smart Notifications",
    desc: "Never miss a follow-up. Get overdue task alerts and real-time CRM activity reminders.",
  },
  {
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-orange-500/10",
    title: "Analytics Dashboard",
    desc: "Monitor conversion rates, pipeline value, and business growth with live charts.",
  },
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Client Management",
    desc: "Organise all customer relationships, notes, files, and task history in one place.",
  },
  {
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-orange-500/10",
    title: "Fast & Responsive",
    desc: "Built on Next.js 15 and Supabase for a lightning-fast experience on any device.",
  },
  {
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    title: "Secure & Private",
    desc: "Row-level security powered by Supabase Auth ensures your data stays yours.",
  },
]

const stats = [
  { label: "Leads Tracked", value: "10K+", icon: Users },
  { label: "Deals Closed", value: "2,400+", icon: CheckCircle2 },
  { label: "Active Teams", value: "380+", icon: TrendingUp },
  { label: "Uptime", value: "99.9%", icon: Shield },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Omix
            </span>{" "}
            CRM
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-orange-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:brightness-110"
            >
              Get Started
              <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* soft gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/[0.04] via-transparent to-blue-500/[0.04]" />

        {/* animated background orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
          className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: easeInOut, delay: 2 }}
          className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: easeInOut, delay: 1 }}
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-4 py-2 text-sm text-orange-300 backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-orange-400" />
            Modern CRM Platform for Growing Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl bg-gradient-to-r from-white via-orange-200 to-blue-300 bg-clip-text text-5xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Manage Leads, Clients & Sales From One Powerful Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            Omix CRM helps businesses track leads, manage follow-ups, monitor sales
            pipelines, and automate client workflows with a modern SaaS experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/signup">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 text-base font-semibold shadow-lg shadow-orange-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Get Started Free <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link href="/login">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Login
              </motion.span>
            </Link>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="relative mt-20 w-full max-w-5xl"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-orange-500/10 via-blue-500/5 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-zinc-600">app.omixcrm.com/dashboard</span>
              </div>
              <div className="grid grid-cols-1 gap-4 bg-gradient-to-br from-zinc-950 to-black p-6 sm:grid-cols-3">
                <div className="col-span-1 space-y-3 sm:col-span-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:space-y-0">
                  {[
                    { label: "Total Leads", value: "2,847", color: "text-blue-400", bar: "60%" },
                    { label: "Pipeline Value", value: "KES 4.2M", color: "text-orange-400", bar: "75%" },
                    { label: "Deals Won", value: "38", color: "text-green-400", bar: "45%" },
                    { label: "Conversion", value: "44.9%", color: "text-purple-400", bar: "44%" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-left"
                    >
                      <p className="text-xs text-zinc-500">{s.label}</p>
                      <p className={`mt-1.5 text-xl font-bold ${s.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {s.value}
                      </p>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: s.bar }}
                          transition={{ delay: 1 + i * 0.08, duration: 0.8, ease: easeOut }}
                          className={`h-full rounded-full bg-gradient-to-r from-orange-500 to-blue-500`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="col-span-1 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-left sm:col-span-3">
                  <p className="mb-4 text-xs text-zinc-500">Pipeline by Stage</p>
                  <div className="flex items-end gap-3 h-24">
                    {[40, 65, 50, 80, 35, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.1 + i * 0.06, duration: 0.6, ease: easeOut }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-orange-500/40 to-blue-500/60"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4"
          >
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-black/30"
                >
                  <Icon size={18} className="mx-auto mb-3 text-zinc-500 transition-colors duration-300 group-hover:text-orange-400" />
                  <div
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-sm text-zinc-500">{s.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything You Need To Run Your CRM
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Built for modern businesses, agencies, SACCOs, and sales teams across Africa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[20px] border ${f.border} bg-white/[0.03] p-9 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] hover:shadow-2xl ${f.glow}`}
              >
                <div className={`inline-flex rounded-2xl border ${f.border} ${f.bg} p-3.5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={f.color} size={26} />
                </div>
                <h3
                  className="mt-7 text-xl font-semibold tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.08]">
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: easeInOut }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-32"
        >
          <h2
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready To Scale Your Business?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Start managing leads, follow-ups, clients, and sales operations with Omix CRM today.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 px-10 py-5 text-lg font-semibold shadow-xl shadow-orange-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              Create Free Account <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/[0.08] py-10 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Omix CRM · Built with Next.js & Supabase
      </footer>
    </main>
  )
}
