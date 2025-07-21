import { getMessageThread } from "@/app/actions/messageActions";
import { Prisma } from "@prisma/client";
import { ZodIssue } from "zod";

type ActionResult<T> = 
  { status: "success"; data: T } | { status: "error"; error: string | ZodIssue[] };

export interface UserInfo {
  image: string | null;
  name: string | null;
};

type MessageWithSenderRecipient = Prisma.MessageGetPayload<{
  select: {
    id: true,
    text: true,
    created: true,
    dateRead: true,
    sender: {
      select: { userId, name, image }
    },
    recipient: {
      select: { userId, name, image }
    }
  }
}>;

type MessageDto = {
  id: string;
  text: string;
  created: string;
  dateRead: string | null;
  senderId?: string;
  senderName?: string;
  senderImage?: string | null;
  recipientId?: string;
  recipientName?: string;
  recipientImage?: string | null;
};

export type MessageThread = Awaited<ReturnType<typeof getMessageThread>>;

type UserFilters = {
  ageRange: number[];
  orderBy: string;
  gender: string[];
};

type PagingParams = {
  pageNumber: number;
  pageSize: number;
};

type pagingResult = {
  totalPages: number;
  totalCount: number;
} & PagingParams;

type PaginatedResponse<T> = {
  items: T[];
  totalCount: number;
};
