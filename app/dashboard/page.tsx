"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Users,
  CheckCircle,
  XCircle,
  ClipboardList,
} from "lucide-react"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"

export default function DashboardPage() {
  const [stats, setStats] =
    useState({
      totalLeads: 0,
      wonDeals: 0,
      lostDeals: 0,
      tasks: 0,
    })

  const [chartData, setChartData] =
    useState<any[]>([])

  const fetchDashboard = async () => {
    const { data: leads } =
      await supabase
        .from("leads")
        .select("*")

    const { data: tasks } =
      await supabase
        .from("tasks")
        .select("*")

    const totalLeads =
      leads?.length || 0

    const wonDeals =
      leads?.filter(
        (lead) =>
          lead.status === "Won"
      ).length || 0

    const lostDeals =
      leads?.filter(
        (lead) =>
          lead.status === "Lost"
      ).length || 0

    setStats({
      totalLeads,
      wonDeals,
      lostDeals,
      tasks: tasks?.length || 0,
    })

    const grouped = [
      {
        name: "New",
        value:
          leads?.filter(
            (l) =>
              l.status === "New"
          ).length || 0,
      },
      {
        name: "Contacted",
        value:
          leads?.filter(
            (l) =>
              l.status ===
              "Contacted"
          ).length || 0,
      },
      {
        name: "Qualified",
        value:
          leads?.filter(
            (l) =>
              l.status ===
              "Qualified"
          ).length || 0,
      },
      {
        name: "Proposal",
        value:
          leads?.filter(
            (l) =>
              l.status ===
              "Proposal"
          ).length || 0,
      },
      {
        name: "Won",
        value:
          leads?.filter(
            (l) =>
              l.status === "Won"
          ).length || 0,
      },
      {
        name: "Lost",
        value:
          leads?.filter(
            (l) =>
              l.status === "Lost"
          ).length || 0,
      },
    ]

    setChartData(grouped)
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  const conversionRate =
    stats.totalLeads > 0
      ? (
          (stats.wonDeals /
            stats.totalLeads) *
          100
        ).toFixed(1)
      : 0

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          CRM performance overview
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Users size={24} />

            <span className="text-3xl font-bold">
              {stats.totalLeads}
            </span>
          </div>

          <p className="mt-4 text-zinc-400">
            Total Leads
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <CheckCircle size={24} />

            <span className="text-3xl font-bold">
              {stats.wonDeals}
            </span>
          </div>

          <p className="mt-4 text-zinc-400">
            Won Deals
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <XCircle size={24} />

            <span className="text-3xl font-bold">
              {stats.lostDeals}
            </span>
          </div>

          <p className="mt-4 text-zinc-400">
            Lost Deals
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <ClipboardList size={24} />

            <span className="text-3xl font-bold">
              {stats.tasks}
            </span>
          </div>

          <p className="mt-4 text-zinc-400">
            Active Tasks
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Pipeline Analytics
          </h2>

          <div className="rounded-full bg-orange-500/20 px-4 py-2 text-sm text-orange-400">
            {conversionRate}% Conversion
          </div>
        </div>

        <div className="h-[400px] min-h-[400px] w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart data={chartData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
