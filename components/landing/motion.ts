// Easing curves — tuned for premium, unhurried feel
export const spring      = { type:"spring", stiffness:80, damping:20 } as const
export const easeSmooth  = [0.16, 1, 0.3, 1]     as const   // expo-like out
export const easeStd     = [0.25, 0.1, 0.25, 1.0] as const   // css ease

export const fadeUp = {
  hidden: { opacity:0, y:32 },
  show:   { opacity:1, y:0,  transition:{ duration:0.7, ease:easeSmooth } },
}
export const fadeLeft = {
  hidden: { opacity:0, x:-36 },
  show:   { opacity:1, x:0,   transition:{ duration:0.7, ease:easeSmooth } },
}
export const fadeRight = {
  hidden: { opacity:0, x:36 },
  show:   { opacity:1, x:0,  transition:{ duration:0.7, ease:easeSmooth } },
}
export const scaleUp = {
  hidden: { opacity:0, scale:0.92 },
  show:   { opacity:1, scale:1,    transition:{ duration:0.65, ease:easeSmooth } },
}
export const stagger = (delay=0.08) => ({
  hidden: {},
  show:   { transition:{ staggerChildren:delay } },
})
