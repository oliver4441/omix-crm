"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Mail, Lock, Loader2, UserPlus } from "lucide-react"

const inputCls = "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 pl-11 text-sm text-white outline-none transition focus:border-orange-400/60 placeholder:text-zinc-600"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) { toast.error("Password must be at least 6 characters"); return }
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) { toast.error(error.message); return }
    toast.success("Account created! Check your email to confirm.")
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 right-1/3 h-80 w-80 rounded-full bg-blue-500/15 blur-[80px]" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-orange-500/15 blur-[80px]" />
      </div>

      <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Omix</span> CRM
          </h1>
          <p className="mt-2 text-zinc-400">Create your free account</p>
        </div>

        <form onSubmit={signUp} className="space-y-4">
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} required />
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input type="password" placeholder="Password (min 6 chars)" value={password} onChange={(e) => setPassword(e.target.value)} className={inputCls} required />
          </div>

          <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 py-4 font-semibold transition hover:opacity-95 disabled:opacity-60">
            {loading ? <><Loader2 size={18} className="animate-spin" /> Creating…</> : <><UserPlus size={18} /> Create Account</>}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-400 transition hover:text-orange-300">Sign in</Link>
        </p>
      </motion.div>
    </div>
  )
}
