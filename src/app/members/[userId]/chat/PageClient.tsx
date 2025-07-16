"use client";

import React from "react";
import { Member } from "@/generated/prisma";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import ChatForm from "./ChatForm";

interface Props {
  member: Member;
}

export default function PageClient({ member }: Props) {
  return (
    <CardInnerWrapper 
      header="chat"
      body={<div>Chat goes here</div>}
      footer={<ChatForm />}
    />
  )
}
