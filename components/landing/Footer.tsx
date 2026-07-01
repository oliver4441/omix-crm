import Link from "next/link"
import { Github } from "lucide-react"

const cols = [
  { heading: "Product", links: [{ l: "Features", h: "#features" }, { l: "How It Works", h: "#workflow" }, { l: "Pricing", h: "#pricing" }, { l: "FAQ", h: "#faq" }] },
  { heading: "Account", links: [{ l: "Log in", h: "/login" }, { l: "Sign up free", h: "/signup" }] },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <span className="text-base font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Omix</span>{" "}
              <span className="text-white">CRM</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600">
              Lead tracking and client management for sales teams, agencies, and SACCOs across Africa.
            </p>
            <a
              href="https://github.com/Manu-del-source/omix-crm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-500 transition-colors hover:border-white/[0.15] hover:text-zinc-300"
            >
              <Github size={13} />
              View on GitHub
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.l}>
                    {link.h.startsWith("#") || link.h.startsWith("/") ? (
                      <Link href={link.h} className="text-sm text-zinc-500 transition-colors hover:text-zinc-200">
                        {link.l}
                      </Link>
                    ) : (
                      <a href={link.h} className="text-sm text-zinc-500 transition-colors hover:text-zinc-200">{link.l}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-zinc-700">© {new Date().getFullYear()} Omix CRM · Built with Next.js &amp; Supabase</p>
          <p className="text-xs text-zinc-700">Made in Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  )
}
