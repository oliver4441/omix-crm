"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface Props { value: number; suffix: string; prefix?: string; duration?: number }

export function StatCounter({ value, suffix, prefix = "", duration = 1800 }: Props) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (!inView) return
    const isDecimal = value % 1 !== 0
    const t0        = performance.now()
    const tick      = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3) // cubic ease-out
      const v = value * e
      setDisplay(isDecimal ? v.toFixed(1) : Math.floor(v).toLocaleString())
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}
