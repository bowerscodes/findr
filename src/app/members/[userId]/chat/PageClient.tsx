"use client";

import React from "react";
import { Member } from "@/generated/prisma";
import CardInnerWrapper from "@/components/CardInnerWrapper";
import ChatForm from "./ChatForm";
import { MessageThread } from "@/types";
import MessageBox from "./MessageBox";

interface Props {
  member: Member;
  messages: MessageThread;
  userId: string;
}

export default function PageClient({ member, messages, userId }: Props) {
    const body = (
    <div>
      {messages.length === 0 ? "No messages to display" : (
        <div>
          {messages.map(message => (
            <MessageBox key={message.id} message={message} currentUserId={userId} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <CardInnerWrapper 
      header="chat"
      body={body}
      footer={<ChatForm />}
    />
  )
}
