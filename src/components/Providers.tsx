"use client";

import { useNotificationChannel } from "@/hooks/useNotificationChannel";
import { usePresenceChannel } from "@/hooks/usePresenceChannel";
import { HeroUIProvider } from "@heroui/react"
import React from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({
  children, userId
}: {
  children: React.ReactNode,
  userId: string | null
}) {
  usePresenceChannel();
  useNotificationChannel(userId);
  return (
    <HeroUIProvider>
      <ToastContainer position="top-center" className="z-50" />
      {children}
    </HeroUIProvider>
  )
};
