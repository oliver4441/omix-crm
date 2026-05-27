import Link from "next/link"

import {
  ArrowRight,
  BarChart3,
  Bell,
  KanbanSquare,
  Users,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
          <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 backdrop-blur-xl">
            Modern CRM Platform
          </div>

          <h1 className="mt-8 max-w-4xl bg-gradient-to-r from-white via-orange-200 to-blue-300 bg-clip-text text-6xl font-extrabold leading-tight text-transparent">
            Manage Leads, Clients &
            Sales From One Powerful
            Dashboard
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-zinc-400">
            Omix CRM helps businesses
            track leads, manage
            follow-ups, monitor sales
            pipelines, and automate
            client workflows with a
            modern SaaS experience.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 text-lg font-semibold transition hover:scale-105"
            >
              Get Started

              <ArrowRight size={20} />
            </Link>

            <Link
              href="/login"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need To Run
            Your CRM
          </h2>

          <p className="mt-4 text-zinc-400">
            Built for modern businesses,
            agencies, SACCOs, and sales
            teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <KanbanSquare
              className="text-orange-400"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Sales Pipeline
            </h3>

            <p className="mt-4 text-zinc-400">
              Track leads through every
              stage of your sales
              process.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Bell
              className="text-blue-400"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Smart Notifications
            </h3>

            <p className="mt-4 text-zinc-400">
              Never miss follow-ups or
              overdue client tasks.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <BarChart3
              className="text-orange-400"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Analytics Dashboard
            </h3>

            <p className="mt-4 text-zinc-400">
              Monitor conversions,
              performance, and business
              growth.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Users
              className="text-blue-400"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Client Management
            </h3>

            <p className="mt-4 text-zinc-400">
              Organize customer
              relationships and
              communication in one
              place.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
          <h2 className="max-w-3xl text-5xl font-bold leading-tight">
            Ready To Scale Your
            Business?
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Start managing leads,
            follow-ups, clients, and
            sales operations with Omix
            CRM today.
          </p>

          <Link
            href="/signup"
            className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 text-lg font-semibold transition hover:scale-105"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  )
}
