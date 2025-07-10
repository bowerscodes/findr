import React from "react";
import PageClient from "./PageClient";
import { getMemberById } from "@/app/actions/memberActions";


export default async function ChatPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const member = await getMemberById(userId);

  return (
    <PageClient member={member} />
  )
};
