"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function StatCounter({ end, suffix, prefix="", dur=1600 }:
  { end:number; suffix:string; prefix?:string; dur?:number }) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once:true, margin:"-60px" })
  const [val, setVal] = useState("0")

  useEffect(() => {
    if (!inView) return
    const dec = end % 1 !== 0
    const t0  = performance.now()
    const tick = (t:number) => {
      const p = Math.min((t-t0)/dur,1)
      const e = 1 - (1-p)**3
      const v = end*e
      setVal(dec ? v.toFixed(1) : Math.floor(v).toLocaleString())
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  },[inView,end,dur])

  return <span ref={ref}>{prefix}{val}{suffix}</span>
}
