"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { supabase } from "@/lib/supabase"

export default function LeadDetailsPage() {
  const params = useParams()

  const [lead, setLead] =
    useState<any>(null)

  const [notes, setNotes] =
    useState<any[]>([])

  const [note, setNote] =
    useState("")

  const [tasks, setTasks] =
    useState<any[]>([])

  const [taskTitle, setTaskTitle] =
    useState("")

  const [dueDate, setDueDate] =
    useState("")

  const fetchLead = async () => {
    const { data } =
      await supabase
        .from("leads")
        .select("*")
        .eq("id", params.id)
        .single()

    setLead(data)
  }

  const fetchNotes = async () => {
    const { data } =
      await supabase
        .from("notes")
        .select("*")
        .eq("lead_id", params.id)
        .order("created_at", {
          ascending: false,
        })

    setNotes(data || [])
  }

  const fetchTasks = async () => {
    const { data } =
      await supabase
        .from("tasks")
        .select("*")
        .eq("lead_id", params.id)
        .order("created_at", {
          ascending: false,
        })

    setTasks(data || [])
  }

  const addNote = async () => {
    if (!note) return

    await supabase
      .from("notes")
      .insert({
        lead_id: params.id,
        content: note,
      })

    setNote("")

    fetchNotes()
  }

  const addTask = async () => {
    if (!taskTitle) return

    await supabase
      .from("tasks")
      .insert({
        lead_id: params.id,
        title: taskTitle,
        due_date: dueDate,
      })

    setTaskTitle("")
    setDueDate("")

    fetchTasks()
  }

  useEffect(() => {
    fetchLead()
    fetchNotes()
    fetchTasks()
  }, [])

  if (!lead) {
    return (
      <div className="p-10 text-white">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h1 className="text-3xl font-bold">
          {lead.name}
        </h1>

        <p className="mt-2 text-zinc-400">
          {lead.company}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">
              Email
            </p>

            <p>{lead.email}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Phone
            </p>

            <p>{lead.phone}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Status
            </p>

            <p>{lead.status}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-4 text-xl font-semibold">
          Notes
        </h2>

        <textarea
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
          placeholder="Add a follow-up note..."
          className="mb-4 h-32 w-full rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
        />

        <button
          onClick={addNote}
          className="rounded-xl bg-orange-500 px-6 py-3 font-medium transition hover:bg-orange-600"
        >
          Add Note
        </button>

        <div className="mt-8 space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="rounded-xl border border-white/10 bg-zinc-900 p-4"
            >
              <p>{note.content}</p>

              <p className="mt-2 text-xs text-zinc-500">
                {new Date(
                  note.created_at
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-4 text-xl font-semibold">
          Follow-Up Tasks
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <input
            value={taskTitle}
            onChange={(e) =>
              setTaskTitle(e.target.value)
            }
            placeholder="Task title"
            className="rounded-xl border border-white/10 bg-zinc-900 p-3 outline-none"
          />

          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className="rounded-xl border border-white/10 bg-zinc-900 p-3 outline-none"
          />

          <button
            onClick={addTask}
            className="rounded-xl bg-blue-500 px-6 py-3 font-medium transition hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border border-white/10 bg-zinc-900 p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  {task.title}
                </h3>

                <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-400">
                  Pending
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-500">
                Due{" "}
                {task.due_date
                  ? new Date(
                      task.due_date
                    ).toLocaleString()
                  : "No deadline"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
