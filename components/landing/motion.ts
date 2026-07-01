export const easeOut = [0, 0, 0.2, 1] as [number, number, number, number]
export const easeInOut = [0.4, 0, 0.2, 1] as [number, number, number, number]

export const fadeUpContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}
