"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { supabase } from "@/lib/supabase"

import AddLeadForm from "@/components/leads/add-lead-form"

import { toast } from "sonner"

type Lead = {
  id: string
  name: string
  email: string
  phone: string
  status: string
  created_at: string
}

export default function LeadsPage() {
  const [leads, setLeads] =
    useState<Lead[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setLoading(false)
      return
    }

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      })

    if (error) {
      toast.error(error.message)
    }

    if (data) {
      setLeads(data)
    }

    setLoading(false)
  }

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success(
      "Lead updated"
    )

    fetchLeads()
  }

  const deleteLead = async (
    id: string
  ) => {
    const confirmed =
      confirm(
        "Delete this lead?"
      )

    if (!confirmed) return

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success(
      "Lead deleted"
    )

    fetchLeads()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Leads
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage your customer pipeline.
        </p>
      </div>

      <AddLeadForm
        refreshLeads={fetchLeads}
      />

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        {loading ? (
          <div className="text-zinc-400">
            Loading leads...
          </div>
        ) : leads.length === 0 ? (
          <div className="text-zinc-400">
            No leads yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-zinc-400">
                  <th className="pb-4">
                    Name
                  </th>

                  <th className="pb-4">
                    Email
                  </th>

                  <th className="pb-4">
                    Phone
                  </th>

                  <th className="pb-4">
                    Status
                  </th>

                  <th className="pb-4">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-white/5"
                  >
                    <td className="py-4">
                      <Link
                        href={`/leads/${lead.id}`}
                        className="font-semibold hover:text-orange-400"
                      >
                        {lead.name}
                      </Link>
                    </td>

                    <td className="py-4 text-zinc-300">
                      {lead.email}
                    </td>

                    <td className="py-4 text-zinc-300">
                      {lead.phone}
                    </td>

                    <td className="py-4">
                      <select
                        value={
                          lead.status
                        }
                        onChange={(e) =>
                          updateStatus(
                            lead.id,
                            e.target
                              .value
                          )
                        }
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none"
                      >
                        <option>
                          New
                        </option>

                        <option>
                          Contacted
                        </option>

                        <option>
                          Qualified
                        </option>

                        <option>
                          Proposal
                        </option>

                        <option>
                          Won
                        </option>
                      </select>
                    </td>

                    <td className="py-4">
                      <button
                        onClick={() =>
                          deleteLead(
                            lead.id
                          )
                        }
                        className="rounded-lg bg-red-500/20 px-4 py-2 text-red-400 hover:bg-red-500/30"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
