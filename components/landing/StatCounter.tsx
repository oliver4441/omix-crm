"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface Props { value: number; suffix: string; prefix?: string; duration?: number }

export function StatCounter({ value, suffix, prefix="", duration=2000 }: Props) {
  const ref  = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once:true, margin:"-60px" })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (!inView) return
    const isDecimal = value % 1 !== 0
    const start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const cur = start + (value - start) * eased
      setDisplay(isDecimal ? cur.toFixed(1) : Math.floor(cur).toLocaleString())
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}
