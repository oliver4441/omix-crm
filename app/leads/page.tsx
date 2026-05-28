"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"

const statuses = [
  "All",
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
  "Lost",
]

export default function LeadsPage() {
  const [leads, setLeads] =
    useState<any[]>([])

  const [filteredLeads, setFilteredLeads] =
    useState<any[]>([])

  const [search, setSearch] =
    useState("")

  const [status, setStatus] =
    useState("All")

  const fetchLeads = async () => {
    const { data, error } =
      await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        })

    if (error) {
      console.error(error)
      return
    }

    setLeads(data || [])
    setFilteredLeads(data || [])
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    let filtered = [...leads]

    if (search) {
      filtered = filtered.filter(
        (lead) =>
          lead.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          lead.company
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          lead.email
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
    }

    if (status !== "All") {
      filtered = filtered.filter(
        (lead) =>
          lead.status === status
      )
    }

    setFilteredLeads(filtered)
  }, [search, status, leads])

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Leads
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage and track your clients
          </p>
        </div>

        <Link
          href="/pipeline"
          className="rounded-xl bg-orange-500 px-5 py-3 font-medium transition hover:bg-orange-600"
        >
          Open Pipeline
        </Link>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search leads..."
          className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none backdrop-blur-xl"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none backdrop-blur-xl"
        >
          {statuses.map((item) => (
            <option
              key={item}
              value={item}
              className="bg-black"
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredLeads.map((lead) => (
          <Link
            href={`/leads/${lead.id}`}
            key={lead.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {lead.name}
                </h2>

                <p className="mt-1 text-zinc-400">
                  {lead.company}
                </p>
              </div>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-400">
                {lead.status || "New"}
              </span>
            </div>

            <div className="mt-6 space-y-2 text-sm text-zinc-400">
              <p>{lead.email}</p>

              <p>{lead.phone}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredLeads.length === 0 && (
        <div className="mt-20 text-center text-zinc-500">
          No leads found
        </div>
      )}
    </div>
  )
}
