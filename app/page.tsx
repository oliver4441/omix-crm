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
  TrendingDown,
  CheckCircle2,
  Search,
  MoreHorizontal,
} from "lucide-react"

const easeOut = [0, 0, 0.2, 1] as [number, number, number, number]
const easeInOut = [0.4, 0, 0.2, 1] as [number, number, number, number]

const features = [
  {
    icon: KanbanSquare,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
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
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
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
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
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

const previewLeads = [
  { name: "James Odhiambo", company: "KCB Group", status: "Hot", value: "KES 380K", color: "bg-red-500/15 text-red-400" },
  { name: "Grace Wanjiku", company: "Equity Bank", status: "Warm", value: "KES 120K", color: "bg-orange-500/15 text-orange-400" },
  { name: "Susan Waweru", company: "Jumia Kenya", status: "Hot", value: "KES 900K", color: "bg-red-500/15 text-red-400" },
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
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#0B1120" }}
    >
      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
          <span
            className="text-lg font-bold tracking-tight sm:text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Omix
            </span>{" "}
            CRM
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-5 sm:py-2.5"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-purple-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:brightness-110 sm:px-5 sm:py-2.5"
            >
              Get Started
              <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO — reduced ~40% vertical padding vs previous version */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* animated gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/[0.06] via-transparent to-blue-500/[0.05]" />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
          className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-purple-500/25 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: easeInOut, delay: 2 }}
          className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-blue-500/22 blur-[110px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: easeInOut, delay: 1 }}
          className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[130px]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-1.5 text-xs text-purple-300 backdrop-blur-xl sm:text-sm"
          >
            <Sparkles size={13} className="text-purple-400" />
            Modern CRM Platform for Growing Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-balance bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-[2.25rem] font-bold leading-[1.15] tracking-tight text-transparent sm:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Manage Leads & Sales From One Powerful Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl px-2 text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Omix CRM helps businesses track leads, manage follow-ups, monitor sales
            pipelines, and automate client workflows with a modern SaaS experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/signup">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-purple-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/30 sm:px-8 sm:py-4 sm:text-base"
              >
                Get Started Free <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link href="/login">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:px-8 sm:py-4 sm:text-base"
              >
                Login
              </motion.span>
            </Link>
          </motion.div>

          {/* ===== Realistic Dashboard Preview ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="relative mt-14 w-full max-w-5xl px-1 sm:mt-16"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-purple-500/15 via-blue-500/5 to-transparent blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/60 backdrop-blur-2xl">
              {/* browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-zinc-600">app.omixcrm.com/dashboard</span>
              </div>

              <div className="bg-gradient-to-br from-[#0d1424] to-[#0B1120] p-4 sm:p-7">
                {/* revenue / metric cards */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {[
                    { label: "Total Leads", value: "2,847", color: "text-blue-400", bar: "60%", trend: "+8.2%", up: true },
                    { label: "Pipeline Value", value: "KES 4.2M", color: "text-purple-400", bar: "75%", trend: "+14.5%", up: true },
                    { label: "Deals Won", value: "38", color: "text-green-400", bar: "45%", trend: "+5.1%", up: true },
                    { label: "Avg. Deal Size", value: "KES 110K", color: "text-indigo-300", bar: "44%", trend: "-2.3%", up: false },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="rounded-xl border border-white/5 bg-white/[0.04] p-3.5 text-left backdrop-blur-xl sm:p-4"
                    >
                      <p className="text-[11px] text-zinc-500 sm:text-xs">{s.label}</p>
                      <p className={`mt-1.5 text-base font-bold sm:text-xl ${s.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {s.value}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        {s.up ? (
                          <TrendingUp size={10} className="text-green-400" />
                        ) : (
                          <TrendingDown size={10} className="text-red-400" />
                        )}
                        <span className={`text-[10px] ${s.up ? "text-green-400" : "text-red-400"}`}>{s.trend}</span>
                      </div>
                      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: s.bar }}
                          transition={{ delay: 1 + i * 0.08, duration: 0.8, ease: easeOut }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* chart + leads table row */}
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
                  {/* pipeline bar chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 }}
                    className="rounded-xl border border-white/5 bg-white/[0.04] p-4 text-left backdrop-blur-xl lg:col-span-2"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs text-zinc-500">Pipeline by Stage</p>
                      <MoreHorizontal size={14} className="text-zinc-700" />
                    </div>
                    <div className="flex h-28 items-end gap-2.5 sm:h-32">
                      {[40, 65, 50, 80, 35, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1.15 + i * 0.06, duration: 0.6, ease: easeOut }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500/40 to-blue-500/70"
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex justify-between text-[9px] text-zinc-600">
                      <span>Lead</span><span>Qual.</span><span>Prop.</span><span>Neg.</span><span>Won</span>
                    </div>
                  </motion.div>

                  {/* leads table */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="rounded-xl border border-white/5 bg-white/[0.04] p-4 text-left backdrop-blur-xl lg:col-span-3"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs text-zinc-500">Recent Leads</p>
                      <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.03] px-2 py-1">
                        <Search size={10} className="text-zinc-600" />
                        <span className="text-[10px] text-zinc-600">Search…</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {previewLeads.map((lead, i) => (
                        <motion.div
                          key={lead.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.25 + i * 0.08 }}
                          className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 sm:px-3.5"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 text-[9px] font-semibold sm:h-7 sm:w-7">
                              {lead.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-[11px] font-medium text-zinc-200 sm:text-xs">{lead.name}</p>
                              <p className="truncate text-[10px] text-zinc-600">{lead.company}</p>
                            </div>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${lead.color}`}>{lead.status}</span>
                            <span className="hidden text-[10px] font-medium text-zinc-400 sm:inline">{lead.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== Floating Stat Cards ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-4"
          >
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-2xl p-[1px] transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(59,130,246,0.35))",
                  }}
                >
                  <div className="relative h-full rounded-2xl bg-[#0d1424]/90 px-5 py-6 backdrop-blur-xl transition-all duration-300 group-hover:bg-[#101a2e]/90 sm:px-6">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-purple-500/[0.06] group-hover:to-blue-500/[0.06]" />
                    <Icon size={18} className="mx-auto mb-3 text-zinc-500 transition-colors duration-300 group-hover:text-purple-400" />
                    <div
                      className="text-2xl font-bold text-white sm:text-3xl"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-xs text-zinc-500 sm:text-sm">{s.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything You Need To Run Your CRM
          </h2>
          <p className="mt-4 px-2 text-base text-zinc-400 sm:mt-5 sm:text-lg">
            Built for modern businesses, agencies, SACCOs, and sales teams across Africa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-5 sm:mt-20 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[20px] border ${f.border} bg-white/[0.03] p-7 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] hover:shadow-2xl sm:p-9 ${f.glow}`}
              >
                <div className={`inline-flex rounded-2xl border ${f.border} ${f.bg} p-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={f.color} size={30} />
                </div>
                <h3
                  className="mt-6 text-lg font-semibold tracking-tight sm:mt-7 sm:text-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{f.desc}</p>
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
          className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[90vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-28 lg:py-32"
        >
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready To Scale Your Business?
          </h2>
          <p className="mt-5 max-w-xl px-2 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
            Start managing leads, follow-ups, clients, and sales operations with Omix CRM today.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-base font-semibold shadow-xl shadow-purple-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/30 sm:px-10 sm:py-5 sm:text-lg"
            >
              Create Free Account <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-10 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Omix CRM · Built with Next.js & Supabase
      </footer>
    </main>
  )
}
