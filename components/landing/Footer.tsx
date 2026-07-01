import Link from "next/link"
import { Github } from "lucide-react"

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

const accountLinks = [
  { label: "Login", href: "/login" },
  { label: "Create account", href: "/signup" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Omix
              </span>{" "}
              CRM
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Lead tracking and client management for sales teams, agencies, and SACCOs across Africa.
            </p>
            <a
              href="https://github.com/Manu-del-source/omix-crm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              <Github size={14} />
              View on GitHub
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Product</p>
            <ul className="mt-4 space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Account</p>
            <ul className="mt-4 space-y-3">
              {accountLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-6 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Omix CRM · Built with Next.js &amp; Supabase
        </div>
      </div>
    </footer>
  )
}
