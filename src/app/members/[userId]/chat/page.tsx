import React from "react";
import PageClient from "./PageClient";
import { getMessageThread } from "@/app/actions/messageActions";
import { MessageThread } from "@/types";


export default async function ChatPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const messages: MessageThread = await getMessageThread(userId);

  console.log({ messages });

  return (
    <PageClient messages={messages} userId={userId} />
  )
};
