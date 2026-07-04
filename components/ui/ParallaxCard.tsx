"use client"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
export function ParallaxCard({children,className=""}:{children:React.ReactNode;className?:string}) {
  const el=useRef<HTMLDivElement>(null)
  const mx=useMotionValue(0); const my=useMotionValue(0)
  const sx=useSpring(mx,{stiffness:100,damping:22}); const sy=useSpring(my,{stiffness:100,damping:22})
  const rx=useTransform(sy,[-0.5,0.5],[3.5,-3.5]); const ry=useTransform(sx,[-0.5,0.5],[-3.5,3.5])
  const move=(e:React.MouseEvent<HTMLDivElement>)=>{
    if(!el.current)return; const r=el.current.getBoundingClientRect()
    mx.set((e.clientX-r.left)/r.width-.5); my.set((e.clientY-r.top)/r.height-.5)
  }
  return (
    <div ref={el} onMouseMove={move} onMouseLeave={()=>{mx.set(0);my.set(0)}}
      className={className} style={{perspective:1400}}>
      <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}}>{children}</motion.div>
    </div>
  )
}
