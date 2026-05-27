"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    setLoading(true)

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            Omix CRM
          </h1>

          <p className="text-zinc-400 mt-2">
            Sign in to continue
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-blue-400"
          />

          <button
            onClick={signIn}
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 p-4 font-semibold hover:opacity-90 transition"
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>
        </div>

        <p className="mt-6 text-center text-zinc-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-orange-400 hover:text-orange-300"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
