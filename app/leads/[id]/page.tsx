"use client"

import { useEffect, useState } from "react"

import {
  useParams,
  useRouter,
} from "next/navigation"

import { supabase } from "@/lib/supabase"

export default function LeadDetailsPage() {
  const params = useParams()

  const router = useRouter()

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

  const [files, setFiles] =
    useState<any[]>([])

  const [uploading, setUploading] =
    useState(false)

  const [editing, setEditing] =
    useState(false)

  const [formData, setFormData] =
    useState({
      name: "",
      company: "",
      email: "",
      phone: "",
      status: "",
    })

  const fetchLead = async () => {
    const { data } =
      await supabase
        .from("leads")
        .select("*")
        .eq("id", params.id)
        .single()

    setLead(data)

    if (data) {
      setFormData({
        name: data.name || "",
        company:
          data.company || "",
        email: data.email || "",
        phone: data.phone || "",
        status: data.status || "",
      })
    }
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

  const fetchFiles = async () => {
    const { data } =
      await supabase
        .from("files")
        .select("*")
        .eq("lead_id", params.id)
        .order("created_at", {
          ascending: false,
        })

    setFiles(data || [])
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

  const uploadFile = async (
    event: any
  ) => {
    const file =
      event.target.files?.[0]

    if (!file) return

    setUploading(true)

    const filePath = `${Date.now()}-${file.name}`

    const {
      error: uploadError,
    } = await supabase.storage
      .from("crm-files")
      .upload(filePath, file)

    if (uploadError) {
      console.error(uploadError)

      setUploading(false)

      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("crm-files")
      .getPublicUrl(filePath)

    await supabase
      .from("files")
      .insert({
        lead_id: params.id,
        file_name: file.name,
        file_url: publicUrl,
      })

    fetchFiles()

    setUploading(false)
  }

  const updateLead = async () => {
    await supabase
      .from("leads")
      .update(formData)
      .eq("id", params.id)

    setEditing(false)

    fetchLead()
  }

  const deleteLead = async () => {
    const confirmed = confirm(
      "Delete this lead?"
    )

    if (!confirmed) return

    await supabase
      .from("leads")
      .delete()
      .eq("id", params.id)

    router.push("/leads")
  }

  useEffect(() => {
    fetchLead()
    fetchNotes()
    fetchTasks()
    fetchFiles()
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
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Lead Details
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() =>
                setEditing(
                  !editing
                )
              }
              className="rounded-xl bg-blue-500 px-5 py-2 transition hover:bg-blue-600"
            >
              {editing
                ? "Cancel"
                : "Edit"}
            </button>

            <button
              onClick={deleteLead}
              className="rounded-xl bg-red-500 px-5 py-2 transition hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        {editing ? (
          <div className="grid gap-4 md:grid-cols-2">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name:
                    e.target.value,
                })
              }
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
            />

            <input
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company:
                    e.target.value,
                })
              }
              placeholder="Company"
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
            />

            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email:
                    e.target.value,
                })
              }
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
            />

            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone:
                    e.target.value,
                })
              }
              placeholder="Phone"
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
            />

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status:
                    e.target.value,
                })
              }
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 outline-none"
            >
              <option>New</option>
              <option>
                Contacted
              </option>
              <option>
                Qualified
              </option>
              <option>
                Proposal
              </option>
              <option>Won</option>
              <option>Lost</option>
            </select>

            <button
              onClick={updateLead}
              className="rounded-xl bg-orange-500 px-6 py-3 font-medium transition hover:bg-orange-600"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold">
              {lead.name}
            </h2>

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
          </>
        )}
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

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Files
          </h2>

          <label className="cursor-pointer rounded-xl bg-purple-500 px-5 py-3 transition hover:bg-purple-600">
            {uploading
              ? "Uploading..."
              : "Upload File"}

            <input
              type="file"
              hidden
              onChange={uploadFile}
            />
          </label>
        </div>

        <div className="space-y-4">
          {files.map((file) => (
            <a
              key={file.id}
              href={file.file_url}
              target="_blank"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-4 transition hover:border-purple-500"
            >
              <div>
                <h3 className="font-medium">
                  {file.file_name}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  {new Date(
                    file.created_at
                  ).toLocaleString()}
                </p>
              </div>

              <span className="text-sm text-purple-400">
                Open
              </span>
            </a>
          ))}

          {files.length === 0 && (
            <div className="text-zinc-500">
              No files uploaded
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
