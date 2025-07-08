'use client';

import { HeroUIProvider } from "@heroui/react"
import React from "react"

export default function providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
