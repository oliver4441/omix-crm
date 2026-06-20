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
  Globe,
  ChevronRight,
} from "lucide-react"

const features = [
  {
    icon: KanbanSquare,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    title: "Sales Pipeline",
    desc: "Drag-and-drop Kanban board to move leads through every stage of your sales cycle.",
  },
  {
    icon: Bell,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Smart Notifications",
    desc: "Never miss a follow-up. Get overdue task alerts and real-time CRM activity reminders.",
  },
  {
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    title: "Analytics Dashboard",
    desc: "Monitor conversion rates, pipeline value, and business growth with live charts.",
  },
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Client Management",
    desc: "Organise all customer relationships, notes, files, and task history in one place.",
  },
  {
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    title: "Fast & Responsive",
    desc: "Built on Next.js 15 and Supabase for a lightning-fast experience on any device.",
  },
  {
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Secure & Private",
    desc: "Row-level security powered by Supabase Auth ensures your data stays yours.",
  },
]

const stats = [
  { label: "Leads Tracked", value: "10K+" },
  { label: "Deals Closed", value: "2,400+" },
  { label: "Active Teams", value: "380+" },
  { label: "Uptime", value: "99.9%" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span
            className="text-xl font-bold"
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
              className="rounded-xl border border-white/10 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-5 py-2 text-sm font-semibold transition hover:opacity-90"
            >
              Get Started <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* animated background orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 2 }}
          className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 backdrop-blur-xl"
          >
            ✦ Modern CRM Platform for Growing Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl bg-gradient-to-r from-white via-orange-200 to-blue-300 bg-clip-text text-6xl font-extrabold leading-tight text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Manage Leads, Clients & Sales From One Powerful Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg text-zinc-400"
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
            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get Started Free <ArrowRight size={20} />
            </Link>
            <Link
              href="/login"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              Login
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                <div
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything You Need To Run Your CRM
          </h2>
          <p className="mt-4 text-zinc-400">
            Built for modern businesses, agencies, SACCOs, and sales teams across Africa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={item}
                className={`card-lift rounded-3xl border ${f.bg} p-8 backdrop-blur-xl`}
              >
                <div className={`inline-flex rounded-xl border ${f.bg} p-3`}>
                  <Icon className={f.color} size={28} />
                </div>
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center"
        >
          <h2
            className="max-w-3xl text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready To Scale Your Business?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Start managing leads, follow-ups, clients, and sales operations with Omix CRM today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <Link
              href="/signup"
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 px-10 py-5 text-lg font-semibold shadow-lg shadow-orange-500/20 transition hover:shadow-orange-500/40"
            >
              Create Free Account
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Omix CRM · Built with Next.js & Supabase
      </footer>
    </main>
  )
}
