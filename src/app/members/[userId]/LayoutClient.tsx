"use client";

import { Card } from "@heroui/react";
;

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full mt-10 h-[80vh]">
      {children}
    </Card>
  )
}
