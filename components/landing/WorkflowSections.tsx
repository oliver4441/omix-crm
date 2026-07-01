"use client"

import { motion } from "framer-motion"
import { workflowSteps, pipelineStages, previewLeads } from "./content"
import { easeOut } from "./motion"
import {
  TrendingUp, CheckCircle, MoreHorizontal, Trophy, BarChart3,
} from "lucide-react"

function PipelineMini() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {pipelineStages.map((stage) => (
        <div key={stage.name} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-zinc-400">{stage.name}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${stage.accent}`} />
          </div>
          <div className="space-y-1.5">
            {stage.cards.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 rounded-lg border border-white/[0.05] bg-[#0a0c16] px-2 py-1.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-blue-500/40 text-[8px] font-semibold">
                  {c.avatar}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-medium text-zinc-300">{c.name}</p>
                  <p className="text-[8px] font-mono text-zinc-600">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function LeadsMini() {
  return (
    <div className="space-y-2">
      {previewLeads.map((lead) => (
        <div key={lead.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-blue-500/40 text-[10px] font-bold">
              {lead.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">{lead.name}</p>
              <p className="text-xs text-zinc-600">{lead.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${lead.color}`}>{lead.status}</span>
            <span className="hidden font-mono text-xs font-medium text-zinc-400 sm:block">{lead.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function AnalyticsMini() {
  const bars = [
    { label: "Jan", v: 45 }, { label: "Feb", v: 60 }, { label: "Mar", v: 38 },
    { label: "Apr", v: 75 }, { label: "May", v: 55 }, { label: "Jun", v: 95 },
  ]
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-violet-400" />
          <p className="text-sm font-medium text-zinc-300">Revenue by Month</p>
        </div>
        <MoreHorizontal size={16} className="text-zinc-700" />
      </div>
      <div className="flex h-32 items-end gap-2.5">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-1.5">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.v}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: easeOut }}
              className={`w-full rounded-t-lg ${bar.label === "Jun" ? "bg-gradient-to-t from-violet-500 to-blue-400" : "bg-white/[0.08]"}`}
            />
            <span className="text-[9px] text-zinc-600">{bar.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
        {[
          { icon: TrendingUp, label: "Win rate", value: "68%", color: "text-emerald-400" },
          { icon: Trophy, label: "Best month", value: "Jun", color: "text-violet-400" },
          { icon: CheckCircle, label: "Closed", value: "38", color: "text-blue-400" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon size={13} className={`mx-auto mb-1 ${stat.color}`} />
            <p className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</p>
            <p className="text-[10px] text-zinc-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const stepVisuals = [<LeadsMini key="leads" />, <PipelineMini key="pipeline" />, <AnalyticsMini key="analytics" />]

export function WorkflowSections() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
      {workflowSteps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className={`grid grid-cols-1 items-center gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
        >
          {/* copy side */}
          <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-zinc-600">{step.num}</span>
              <span className="h-px w-8 bg-white/10" />
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{step.label}</span>
            </div>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {step.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              {step.body}
            </p>
            <div className="mt-8 flex gap-8">
              {step.stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.v}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className={`relative ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
          >
            <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accent} blur-2xl`} />
            <div className="relative rounded-2xl border border-white/[0.07] bg-[#0a0c18] p-4 sm:p-5">
              {stepVisuals[i]}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
