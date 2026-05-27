"use client"

import { useEffect, useState } from "react"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { supabase } from "@/lib/supabase"

import { createNotification } from "@/lib/notifications"

type Lead = {
  id: string
  status: string
  follow_up_at: string | null
}

export default function DashboardPage() {
  const [leads, setLeads] =
    useState<Lead[]>([])

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("user_id", user.id)

    if (!error && data) {
      const overdue = data.filter(
        (lead) =>
          lead.follow_up_at &&
          new Date(
            lead.follow_up_at
          ) < new Date()
      )

      for (const lead of overdue) {
        await createNotification(
          "Overdue Follow-Up",
          `${lead.status} lead requires attention`,
          "overdue_followup",
          lead.id
        )
      }

      setLeads(data)
    }
  }

  const totalLeads =
    leads.length

  const wonDeals =
    leads.filter(
      (lead) =>
        lead.status === "Won"
    ).length

  const overdueFollowUps =
    leads.filter(
      (lead) =>
        lead.follow_up_at &&
        new Date(
          lead.follow_up_at
        ) < new Date()
    ).length

  const conversionRate =
    totalLeads > 0
      ? (
          (wonDeals /
            totalLeads) *
          100
        ).toFixed(1)
      : 0

  const pipelineData = [
    {
      name: "New",
      total: leads.filter(
        (lead) =>
          lead.status === "New"
      ).length,
    },
    {
      name: "Contacted",
      total: leads.filter(
        (lead) =>
          lead.status ===
          "Contacted"
      ).length,
    },
    {
      name: "Qualified",
      total: leads.filter(
        (lead) =>
          lead.status ===
          "Qualified"
      ).length,
    },
    {
      name: "Proposal",
      total: leads.filter(
        (lead) =>
          lead.status ===
          "Proposal"
      ).length,
    },
    {
      name: "Won",
      total: leads.filter(
        (lead) =>
          lead.status === "Won"
      ).length,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          CRM Analytics
        </h1>

        <p className="mt-2 text-zinc-400">
          Sales performance overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Total Leads
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {totalLeads}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Won Deals
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {wonDeals}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Conversion Rate
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {conversionRate}%
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Overdue Follow-Ups
          </p>

          <h2 className="mt-4 text-4xl font-bold text-red-400">
            {
              overdueFollowUps
            }
          </h2>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Pipeline Overview
          </h2>

          <p className="text-zinc-400">
            Lead distribution by stage.
          </p>
        </div>

        <div className="h-[400px] w-full min-w-0">
          <ResponsiveContainer
            width="100%"
            height={400}
          >
            <BarChart
              data={pipelineData}
            >
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="total" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
