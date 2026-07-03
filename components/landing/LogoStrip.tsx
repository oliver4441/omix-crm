"use client"
import { logoNames } from "./content"

export function LogoStrip() {
  const items = [...logoNames, ...logoNames]
  return (
    <div className="border-y border-white/[0.05] bg-[#0A0A0A] py-10 overflow-hidden">
      <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-[#404040]">
        Trusted by businesses across Kenya &amp; East Africa
      </p>
      <div className="flex w-max marquee gap-12">
        {items.map((n,i) => (
          <span key={i} className="shrink-0 text-[13px] font-medium text-[#404040] transition-colors hover:text-[#A3A3A3]">
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}
