"use client";

import { HeroUIProvider } from "@heroui/react"
import React from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      <ToastContainer position="top-center" className="z-50" />
      {children}
    </HeroUIProvider>
  )
}
