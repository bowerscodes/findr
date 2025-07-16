import React from "react";
import PageClient from "./PageClient";
import { getMemberById } from "@/app/actions/memberActions";
import { getMessageThread } from "@/app/actions/messageActions";


export default async function ChatPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const member = await getMemberById(userId);
  const messages = await getMessageThread(userId);

  console.log({ messages });

  return (
    <PageClient member={member} />
  )
};
