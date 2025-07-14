"use client";

import React from "react";
import { CardBody, CardHeader, Divider } from "@heroui/react"
import EditForm from "./EditForm";
import { Member } from "@/generated/prisma";

export default function PageClient({ member }: { member: Member }) {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Profile
      </CardHeader>
      <Divider />
      <CardBody>
        <EditForm member={member} />
      </CardBody>
    </>
  )
}
