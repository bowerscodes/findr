import PageClient from "./PageClient";
import { getMessageThread } from "@/app/actions/messageActions";
import { MessageThread } from "@/types";
import { createChatId } from "@/lib/util";
import { getAuthUserId } from "@/app/actions/authActions";


export default async function ChatPage({ params }: { params: Promise<{ userId: string }> }) {
  const currentUserId = await getAuthUserId();
  const { userId: recipientId } = await params;
  const messages: MessageThread = await getMessageThread(recipientId);
  const chatId = createChatId(currentUserId, recipientId)

  return (
    <PageClient messages={messages} userId={currentUserId} chatId={chatId} />
  )
};
