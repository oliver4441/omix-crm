"use client"

import { ArrowUpRight, CircleDot, Trophy } from "lucide-react"
import { tickerDeals } from "./content"

function TickerCard({ deal }: { deal: (typeof tickerDeals)[number] }) {
  const isWon = deal.stage === "Won"
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-xl">
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          isWon ? "bg-emerald-500/15 text-emerald-400" : "bg-purple-500/15 text-purple-300"
        }`}
      >
        {isWon ? <Trophy size={12} /> : <CircleDot size={12} />}
      </span>
      <div className="flex items-center gap-2 whitespace-nowrap text-xs">
        <span className="font-medium text-zinc-200">{deal.company}</span>
        <span className="text-zinc-600">·</span>
        <span className={isWon ? "text-emerald-400" : "text-zinc-500"}>{deal.stage}</span>
        <span className="text-zinc-600">·</span>
        <span className="font-mono font-medium text-zinc-300">{deal.value}</span>
      </div>
    </div>
  )
}

export function PipelineTicker() {
  return (
    <div className="relative w-full overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B1020] to-transparent sm:w-28"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B1020] to-transparent sm:w-28"
      />

      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500 mb-2.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Live pipeline
        <ArrowUpRight size={12} className="text-zinc-600" />
      </div>

      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-3 motion-reduce:animate-none">
        {[...tickerDeals, ...tickerDeals].map((deal, i) => (
          <TickerCard key={`${deal.company}-${i}`} deal={deal} />
        ))}
      </div>
    </div>
  )
}
