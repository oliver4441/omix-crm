"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import {
  ArrowLeft, Edit2, Trash2, Save, X, Plus, Upload,
  FileText, Clock, CheckCircle, Loader2, StickyNote, ClipboardList,
} from "lucide-react"
import Link from "next/link"

const statuses = ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"]
const statusColors: Record<string, string> = {
  New: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Contacted: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Qualified: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Proposal: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Won: "bg-green-500/20 text-green-400 border-green-500/30",
  Lost: "bg-red-500/20 text-red-400 border-red-500/30",
}

const inputCls = "rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/60 placeholder:text-zinc-600 w-full"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
}

export default function LeadDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [lead, setLead] = useState<any>(null)
  const [notes, setNotes] = useState<any[]>([])
  const [note, setNote] = useState("")
  const [tasks, setTasks] = useState<any[]>([])
  const [taskTitle, setTaskTitle] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [files, setFiles] = useState<any[]>([])
  const [uploading, setUploading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", status: "" })

  const fetchAll = async () => {
    const [{ data: l }, { data: n }, { data: t }, { data: f }] = await Promise.all([
      supabase.from("leads").select("*").eq("id", id).single(),
      supabase.from("notes").select("*").eq("lead_id", id).order("created_at", { ascending: false }),
      supabase.from("tasks").select("*").eq("lead_id", id).order("created_at", { ascending: false }),
      supabase.from("files").select("*").eq("lead_id", id).order("created_at", { ascending: false }),
    ])
    if (l) { setLead(l); setFormData({ name: l.name || "", company: l.company || "", email: l.email || "", phone: l.phone || "", status: l.status || "" }) }
    setNotes(n || []); setTasks(t || []); setFiles(f || [])
    setLoading(false)
  }

  useEffect(() => { fetchAll() }, [id])

  const addNote = async () => {
    if (!note.trim()) return
    const { error } = await supabase.from("notes").insert({ lead_id: id, content: note })
    if (error) { toast.error(error.message); return }
    setNote(""); toast.success("Note added"); fetchAll()
  }

  const addTask = async () => {
    if (!taskTitle.trim()) return
    const { error } = await supabase.from("tasks").insert({ lead_id: id, title: taskTitle, due_date: dueDate || null })
    if (error) { toast.error(error.message); return }
    setTaskTitle(""); setDueDate(""); toast.success("Task added"); fetchAll()
  }

  const completeTask = async (taskId: string, done: boolean) => {
    await supabase.from("tasks").update({ completed: !done }).eq("id", taskId)
    fetchAll()
  }

  const uploadFile = async (event: any) => {
    const file = event.target.files?.[0]
    if (!file) return
    setUploading(true)
    const filePath = `${Date.now()}-${file.name}`
    const { error: upErr } = await supabase.storage.from("crm-files").upload(filePath, file)
    if (upErr) { toast.error(upErr.message); setUploading(false); return }
    const { data: { publicUrl } } = supabase.storage.from("crm-files").getPublicUrl(filePath)
    await supabase.from("files").insert({ lead_id: id, file_name: file.name, file_url: publicUrl })
    toast.success("File uploaded"); setUploading(false); fetchAll()
  }

  const updateLead = async () => {
    setSaving(true)
    const { error } = await supabase.from("leads").update(formData).eq("id", id)
    setSaving(false)
    if (error) { toast.error(error.message); return }
    toast.success("Lead updated"); setEditing(false); fetchAll()
  }

  const deleteLead = async () => {
    if (!confirm("Delete this lead? This cannot be undone.")) return
    await supabase.from("leads").delete().eq("id", id)
    toast.success("Lead deleted"); router.push("/leads")
  }

  if (loading) return (
    <div className="min-h-screen bg-black p-6">
      <div className="mb-4 h-6 w-32 skeleton" />
      <div className="h-56 rounded-2xl skeleton" />
    </div>
  )
  if (!lead) return <div className="p-10 text-zinc-500">Lead not found.</div>

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      {/* Back */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link href="/leads" className="mb-6 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          <ArrowLeft size={15} /> Back to Leads
        </Link>
      </motion.div>

      {/* Lead Card */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/30 to-blue-500/30 text-lg font-bold">
              {lead.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {editing ? formData.name || "—" : lead.name}
              </h1>
              <span className={`mt-1 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[lead.status] || "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
                {lead.status || "New"}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setEditing(!editing)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${editing ? "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10" : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"}`}>
              {editing ? <><X size={15} /> Cancel</> : <><Edit2 size={15} /> Edit</>}
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={deleteLead}
              className="flex items-center gap-2 rounded-xl bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/30">
              <Trash2 size={15} /> Delete
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {editing ? (
            <motion.div key="edit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4 md:grid-cols-2">
              {(["name","company","email","phone"] as const).map((k) => (
                <input key={k} value={formData[k]} onChange={(e) => setFormData({ ...formData, [k]: e.target.value })}
                  placeholder={k.charAt(0).toUpperCase() + k.slice(1)} className={inputCls} />
              ))}
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className={inputCls}>
                {statuses.map((s) => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
              </select>
              <motion.button whileTap={{ scale: 0.96 }} onClick={updateLead} disabled={saving}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 py-3 font-semibold transition disabled:opacity-60">
                {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />} Save Changes
              </motion.button>
            </motion.div>
          ) : (
            <motion.div key="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid gap-4 md:grid-cols-3">
              {[["Company", lead.company], ["Email", lead.email], ["Phone", lead.phone]].map(([label, val]) => (
                <div key={label}>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm">{val || "—"}</p>
                </div>
              ))}
              <div>
                <p className="text-xs text-zinc-500">Added</p>
                <p className="mt-1 text-sm">{new Date(lead.created_at).toLocaleDateString()}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-2">
        {/* Notes */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <StickyNote size={18} className="text-orange-400" /> Notes
          </h2>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a follow-up note…"
            className={`${inputCls} mb-3 h-24 resize-none`} />
          <motion.button whileTap={{ scale: 0.96 }} onClick={addNote}
            className="rounded-xl bg-orange-500/20 px-5 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500/30">
            <Plus size={14} className="mr-1 inline" /> Add Note
          </motion.button>
          <div className="mt-5 space-y-3">
            <AnimatePresence>
              {notes.map((n) => (
                <motion.div key={n.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                  className="rounded-xl border border-white/10 bg-zinc-900 p-4">
                  <p className="text-sm leading-relaxed text-zinc-300">{n.content}</p>
                  <p className="mt-2 text-xs text-zinc-600">{new Date(n.created_at).toLocaleString()}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {notes.length === 0 && <p className="text-sm text-zinc-600">No notes yet.</p>}
          </div>
        </motion.div>

        {/* Tasks */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <ClipboardList size={18} className="text-blue-400" /> Follow-Up Tasks
          </h2>
          <div className="mb-3 grid gap-3 md:grid-cols-2">
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Task title"
              className={inputCls} />
            <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)}
              className={inputCls} />
          </div>
          <motion.button whileTap={{ scale: 0.96 }} onClick={addTask}
            className="rounded-xl bg-blue-500/20 px-5 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/30">
            <Plus size={14} className="mr-1 inline" /> Add Task
          </motion.button>
          <div className="mt-5 space-y-3">
            <AnimatePresence>
              {tasks.map((t) => {
                const overdue = t.due_date && !t.completed && new Date(t.due_date) < new Date()
                return (
                  <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className={`rounded-xl border p-4 transition ${t.completed ? "border-green-500/20 bg-green-500/5" : overdue ? "border-red-500/20 bg-red-500/5" : "border-white/10 bg-zinc-900"}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button onClick={() => completeTask(t.id, t.completed)} className="shrink-0">
                          <CheckCircle size={18} className={t.completed ? "text-green-400" : "text-zinc-600 hover:text-green-400 transition"} />
                        </button>
                        <h3 className={`text-sm font-medium ${t.completed ? "text-zinc-500 line-through" : "text-white"}`}>{t.title}</h3>
                      </div>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${t.completed ? "bg-green-500/20 text-green-400" : overdue ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"}`}>
                        {t.completed ? "Done" : overdue ? "Overdue" : "Pending"}
                      </span>
                    </div>
                    {t.due_date && (
                      <p className="ml-7 mt-2 flex items-center gap-1 text-xs text-zinc-500">
                        <Clock size={11} /> {new Date(t.due_date).toLocaleString()}
                      </p>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
            {tasks.length === 0 && <p className="text-sm text-zinc-600">No tasks yet.</p>}
          </div>
        </motion.div>
      </div>

      {/* Files */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}
        className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <FileText size={18} className="text-purple-400" /> Files
          </h2>
          <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-purple-500/20 px-5 py-2 text-sm font-medium text-purple-400 transition hover:bg-purple-500/30">
            {uploading ? <><Loader2 size={14} className="animate-spin" /> Uploading…</> : <><Upload size={14} /> Upload File</>}
            <input type="file" hidden onChange={uploadFile} />
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <AnimatePresence>
            {files.map((f) => (
              <motion.a key={f.id} href={f.file_url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-4 transition hover:border-purple-500/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/20 p-2"><FileText size={16} className="text-purple-400" /></div>
                  <div>
                    <p className="text-sm font-medium">{f.file_name}</p>
                    <p className="text-xs text-zinc-600">{new Date(f.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <span className="text-xs text-purple-400">Open →</span>
              </motion.a>
            ))}
          </AnimatePresence>
          {files.length === 0 && <p className="text-sm text-zinc-600">No files uploaded yet.</p>}
        </div>
      </motion.div>
    </div>
  )
}
