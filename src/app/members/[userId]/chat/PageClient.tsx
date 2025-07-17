"use client";

import React from "react";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import ChatForm from "./ChatForm";
import { MessageThread } from "@/types";
import MessageList from "./MessageList";

interface Props {
  messages: MessageThread;
  userId: string;
  chatId: string;
}

export default function PageClient({ messages, userId, chatId }: Props) {

  return (
    <CardInnerWrapper 
      header="chat"
      body={
        <MessageList 
          initialMessages={messages} 
          currentUserId={userId}
          chatId={chatId} 
        />
      }
      footer={<ChatForm />}
    />
  )
};
