// Premium easing — matches Apple / Linear feel
export const ease    = [0.25, 0.1, 0.25, 1.0] as const
export const easeOut = [0.0,  0.0, 0.2,  1.0] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}
export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease } },
}
export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.6, ease } },
}
export const stagger = (d = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: d } },
})
