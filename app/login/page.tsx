"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight, Zap } from "lucide-react"

const E = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [remember, setRemember] = useState(false)

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      toast.error("Please enter your email address")
      return
    }
    if (!password) {
      toast.error("Please enter your password")
      return
    }
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    if (error) {
      toast.error(error.message === "Invalid login credentials"
        ? "Invalid email or password. Please try again."
        : error.message)
      return
    }
    if (!data.session) {
      toast.error("Sign-in succeeded but no session was returned. Please try again.")
      return
    }

    toast.success("Welcome back!")
    router.refresh()
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FACC15]/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"
        />
        {/* Grid overlay */}
        <div className="grid-bg absolute inset-0 opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: E }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-10">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FACC15] shadow-lg shadow-[#FACC15]/20">
                <Zap size={16} className="text-black" fill="black" />
              </span>
              <span
                className="text-lg font-bold tracking-[-0.025em] text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Omix CRM
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="mt-1.5 text-[15px] text-[#A3A3A3]">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={signIn} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[13px] font-medium text-[#A3A3A3]">
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252]"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-[13px] font-medium text-[#A3A3A3]">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[12px] font-medium text-[#525252] transition-colors hover:text-[#FACC15]"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252]"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-glass pr-12"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[#525252] transition-colors hover:text-[#A3A3A3]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative flex h-5 w-5 items-center justify-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="h-5 w-5 rounded-[6px] border border-white/[0.12] bg-white/[0.04] transition-colors peer-checked:border-[#FACC15]/50 peer-checked:bg-[#FACC15]/10 group-hover:border-white/[0.2]" />
                {remember && (
                  <svg
                    className="absolute pointer-events-none text-[#FACC15]"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[13px] text-[#737373] group-hover:text-[#A3A3A3] transition-colors">
                Remember me
              </span>
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#FACC15] py-3.5 font-bold text-black shadow-lg shadow-[#FACC15]/15 transition-all hover:shadow-[#FACC15]/30 disabled:opacity-50 disabled:cursor-not-allowed text-[15px]"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
          </div>

          {/* Sign up link */}
          <p className="text-center text-[14px] text-[#737373]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#FACC15] transition-colors hover:text-[#FDE68A]"
            >
              Create account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
