"use client"

import { Toaster as SonnerToaster, type ToasterProps } from "sonner"

export const Toaster = (props: ToasterProps) => {
  return <SonnerToaster richColors position="top-right" {...props} />
}
