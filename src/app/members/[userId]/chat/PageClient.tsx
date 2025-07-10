"use client";

import React from "react";
import { CardBody, CardHeader, Divider } from "@heroui/react";
import { Member } from "@/generated/prisma";

interface Props {
  member: Member;
}

export default function PageClient({ member }: Props) {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>
        Chat goes here
      </CardBody>
    </>
  )
}
