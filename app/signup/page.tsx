"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Mail, Lock, Eye, EyeOff, Loader2, UserPlus, Zap, Check } from "lucide-react"

const E = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const passwordChecks = [
    { label: "At least 6 characters", valid: password.length >= 6 },
    { label: "Contains a number", valid: /\d/.test(password) },
    { label: "Contains a letter", valid: /[a-zA-Z]/.test(password) },
  ]

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      toast.error("Please enter your email address")
      return
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) {
      toast.error(error.message)
      return
    }

    if (data.session) {
      toast.success("Account created! Welcome to Omix CRM.")
      router.refresh()
      router.push("/dashboard")
    } else {
      toast.success("Account created! Check your email to confirm before signing in.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute -bottom-48 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FACC15]/10 blur-[100px]"
        />
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
            <h1 className="text-2xl font-bold text-white">Create your account</h1>
            <p className="mt-1.5 text-[15px] text-[#A3A3A3]">
              Start managing leads in minutes
            </p>
          </div>

          <form onSubmit={signUp} className="space-y-5">
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
              <label htmlFor="password" className="text-[13px] font-medium text-[#A3A3A3]">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252]"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-glass pr-12"
                  autoComplete="new-password"
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

              {/* Password strength hints */}
              {password.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-1.5 pt-1"
                >
                  {passwordChecks.map((check) => (
                    <div key={check.label} className="flex items-center gap-2">
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-colors ${
                          check.valid
                            ? "bg-[#FACC15]/15 text-[#FACC15]"
                            : "bg-white/[0.04] text-[#404040]"
                        }`}
                      >
                        <Check size={10} />
                      </div>
                      <span
                        className={`text-[12px] transition-colors ${
                          check.valid ? "text-[#A3A3A3]" : "text-[#525252]"
                        }`}
                      >
                        {check.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

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
                  Creating account...
                </>
              ) : (
                <>
                  <UserPlus size={18} />
                  Create Account
                </>
              )}
            </motion.button>
          </form>

          {/* Sign in link */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
          </div>

          <p className="text-center text-[14px] text-[#737373]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#FACC15] transition-colors hover:text-[#FDE68A]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
