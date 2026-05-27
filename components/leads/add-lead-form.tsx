"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

type Props = {
  refreshLeads: () => void
}

export default function AddLeadForm({
  refreshLeads,
}: Props) {
  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [phone, setPhone] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      toast.error(
        "You must be logged in"
      )

      setLoading(false)

      return
    }

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          phone,
          status: "New",
          user_id: user.id,
        },
      ])

    if (error) {
      toast.error(error.message)

      setLoading(false)

      return
    }

    toast.success("Lead added")

    setName("")
    setEmail("")
    setPhone("")

    refreshLeads()

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Client name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          required
        />

        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-3 font-semibold disabled:opacity-50"
      >
        {loading
          ? "Adding Lead..."
          : "Add Lead"}
      </button>
    </form>
  )
}
