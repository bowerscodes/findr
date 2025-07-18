import { useCallback, useEffect, useRef } from "react";
import { pusherClient } from "@/lib/pusher";
import { MessageDto } from "@/types";
import { Channel } from "pusher-js";
import { usePathname, useSearchParams } from "next/navigation";
import useMessageStore from "./useMessageStore";
import { newMessageToast } from "@/components/NewMessageToast";

export const useNotificationChannel = (userId: string | null) => {
  const channelRef = useRef<Channel | null>(null);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const add = useMessageStore(state => state.add);
  const updateUnreadCount = useMessageStore(state => state.updateUnreadCount);
  
  const handleNewMessage = useCallback((message: MessageDto) => {
    if (pathName === "/messages" && searchParams.get("container") !== "outbox" ) {
      
      add(message);
      updateUnreadCount(1);

    } else if (pathName !== `/members/${message.senderId}/chat`) {

      newMessageToast(message);
      updateUnreadCount(1);

    }
  }, [add, pathName, searchParams, updateUnreadCount]);

  useEffect(() => {
    if (!userId) return;
    if(!channelRef.current) {
      channelRef.current = pusherClient.subscribe(`private-${userId}`);

      channelRef.current.bind("message:new", handleNewMessage)
    }

    return () => {
      if (channelRef.current && channelRef.current.subscribed) {
        channelRef.current.unsubscribe();
        channelRef.current.unbind_all();
        channelRef.current = null;
      }
    }
  }, [userId, handleNewMessage])
};
