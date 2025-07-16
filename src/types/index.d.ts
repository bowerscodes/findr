import { ZodIssue } from "zod";

type ActionResult<T> = 
  { status: "success"; data: T } | { status: "error"; error: string | ZodIssue[] };

export interface UserInfo {
  image: string | null;
  name: string | null;
};
