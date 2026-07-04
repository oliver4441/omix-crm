"use client"
const NAMES = [
  "Northbridge Realty","Highlands Sacco","Westfield Logistics",
  "Two Rivers Holdings","Coastline Retailers","Riverside Motors",
  "Solid Rock Insurance","Acacia Agro Traders","Apex Agencies","Savanna Fintech",
]
export function HomeLogos() {
  const items = [...NAMES, ...NAMES]
  return (
    <div className="border-y border-white/[0.05] py-10 overflow-hidden">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#383838]">
        Trusted by businesses across East Africa
      </p>
      <div className="flex w-max marquee gap-14">
        {items.map((n,i) => (
          <span key={i} className="shrink-0 text-[13px] font-medium text-[#383838] transition-colors hover:text-[#737373]">
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}
