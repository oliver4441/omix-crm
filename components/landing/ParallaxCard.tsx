"use client"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Props { children: React.ReactNode; className?: string }

export function ParallaxCard({ children, className = "" }: Props) {
  const ref   = useRef<HTMLDivElement>(null)
  const rawX  = useMotionValue(0)
  const rawY  = useMotionValue(0)

  // Smooth spring — feels silky, not snappy
  const x = useSpring(rawX, { stiffness: 120, damping: 22 })
  const y = useSpring(rawY, { stiffness: 120, damping: 22 })

  // Limit rotation to ±4°
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4])

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const r  = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - r.left) / r.width  - 0.5)
    rawY.set((e.clientY - r.top)  / r.height - 0.5)
  }
  function onLeave() { rawX.set(0); rawY.set(0) }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={className} style={{ perspective: 1200 }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  )
}
