"use client"

import { useCallback, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useParams } from "next/navigation"
import { toast } from "sonner"
import { logActivity } from "@/lib/log-activity"

type Lead = {
  id: string
  name: string
  email: string
  phone: string
  status: string
  follow_up_at: string | null
}

type Note = {
  id: string
  content: string
  created_at: string
}

type Activity = {
  id: string
  action: string
  created_at: string
}

export default function LeadDetailsPage() {
  const params = useParams()

  const [lead, setLead] =
    useState<Lead | null>(null)

  const [notes, setNotes] =
    useState<Note[]>([])

  const [activities, setActivities] =
    useState<Activity[]>([])

  const [newNote, setNewNote] =
    useState("")

  const [followUpDate, setFollowUpDate] =
    useState("")

  const [generatedMessage, setGeneratedMessage] =
    useState("")

  const fetchLead = useCallback(async () => {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .eq("id", params.id)
      .single()

    if (data) {
      setLead(data)

      if (data.follow_up_at) {
        setFollowUpDate(
          data.follow_up_at.slice(0, 16)
        )
      }
    }
  }, [params.id])

  const fetchNotes = useCallback(async () => {
    const { data } = await supabase
      .from("lead_notes")
      .select("*")
      .eq("lead_id", params.id)
      .order("created_at", {
        ascending: false,
      })

    if (data) {
      setNotes(data)
    }
  }, [params.id])

  const fetchActivities =
    useCallback(async () => {
      const { data } =
        await supabase
          .from(
            "lead_activities"
          )
          .select("*")
          .eq(
            "lead_id",
            params.id
          )
          .order(
            "created_at",
            {
              ascending: false,
            }
          )

      if (data) {
        setActivities(data)
      }
    }, [params.id])

  useEffect(() => {
    const init = async () => {
      await fetchLead()
      await fetchNotes()
      await fetchActivities()
    }
    init()
  }, [fetchLead, fetchNotes, fetchActivities])

  const addNote = async () => {
    if (!newNote) return

    await supabase
      .from("lead_notes")
      .insert([
        {
          lead_id: params.id,
          content: newNote,
        },
      ])

    await logActivity(
      params.id as string,
      "Note added"
    )

    setNewNote("")

    fetchNotes()
    fetchActivities()

    toast.success("Note added")
  }

  const generateMessage = () => {
    if (!lead) return

    const templates = [
      `Hello ${lead.name}, just following up regarding our previous conversation. Let me know if you're ready to proceed or if you have any questions.`,

      `Hi ${lead.name}, I wanted to check in and see if you're still interested in moving forward. I’d be happy to assist you further.`,

      `Hey ${lead.name}, I hope you're doing well. I wanted to follow up and see if you had time to review our proposal.`,

      `Hello ${lead.name}, I’m reaching out to follow up on your inquiry. Let me know a good time to continue the discussion.`,
    ]

    const random =
      templates[
        Math.floor(
          Math.random() *
            templates.length
        )
      ]

    setGeneratedMessage(random)

    toast.success(
      "AI follow-up generated"
    )
  }

  const sendWhatsApp = () => {
    if (
      !lead ||
      !generatedMessage
    ) {
      toast.error(
        "Generate a message first"
      )
      return
    }

    const encoded =
      encodeURIComponent(
        generatedMessage
      )

    const url =
      `https://wa.me/${lead.phone}?text=${encoded}`

    window.open(url, "_blank")
  }

  const saveFollowUp =
    async () => {
      const { error } =
        await supabase
          .from("leads")
          .update({
            follow_up_at:
              followUpDate,
          })
          .eq(
            "id",
            params.id
          )

      if (error) {
        toast.error(
          error.message
        )
        return
      }

      await logActivity(
        params.id as string,
        "Follow-up reminder updated"
      )

      toast.success(
        "Follow-up reminder saved"
      )

      fetchLead()
      fetchActivities()
    }

  if (!lead) {
    return (
      <div className="text-white p-8">
        Loading...
      </div>
    )
  }

  const overdue =
    lead.follow_up_at &&
    new Date(
      lead.follow_up_at
    ) < new Date()

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              {lead.name}
            </h1>

            <div className="mt-6 space-y-2 text-zinc-300">
              <p>
                Email: {lead.email}
              </p>

              <p>
                Phone: {lead.phone}
              </p>

              <p>
                Status: {lead.status}
              </p>
            </div>
          </div>

          {overdue && (
            <div className="rounded-full bg-red-500/20 px-4 py-2 text-sm text-red-400">
              Follow-up overdue
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-bold mb-6">
          Follow-Up Reminder
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="datetime-local"
            value={followUpDate}
            onChange={(e) =>
              setFollowUpDate(
                e.target.value
              )
            }
            className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          />

          <button
            onClick={
              saveFollowUp
            }
            className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-4 font-semibold"
          >
            Save Reminder
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            AI Follow-Up Generator
          </h2>

          <button
            onClick={
              generateMessage
            }
            className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-3 font-semibold"
          >
            Generate Message
          </button>
        </div>

        <textarea
          value={generatedMessage}
          onChange={(e) =>
            setGeneratedMessage(
              e.target.value
            )
          }
          placeholder="AI-generated follow-up will appear here..."
          className="mt-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none min-h-[180px]"
        />

        {generatedMessage && (
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  generatedMessage
                )

                toast.success(
                  "Copied to clipboard"
                )
              }}
              className="rounded-xl border border-white/10 px-6 py-3"
            >
              Copy Message
            </button>

            <button
              onClick={
                sendWhatsApp
              }
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              Send via WhatsApp
            </button>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-bold mb-4">
          Notes
        </h2>

        <div className="space-y-4">
          <textarea
            placeholder="Add note..."
            value={newNote}
            onChange={(e) =>
              setNewNote(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none min-h-[120px]"
          />

          <button
            onClick={addNote}
            className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-3 font-semibold"
          >
            Add Note
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="rounded-xl border border-white/10 bg-black/30 p-4"
            >
              <p>
                {note.content}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {new Date(
                  note.created_at
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-bold mb-6">
          Activity Timeline
        </h2>

        <div className="space-y-4">
          {activities.map(
            (activity) => (
              <div
                key={
                  activity.id
                }
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <p>
                  {
                    activity.action
                  }
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {new Date(
                    activity.created_at
                  ).toLocaleString()}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
