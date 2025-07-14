import React from "react"
import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberById } from "@/app/actions/memberActions";
import PageClient from "./PageClient";
import { notFound } from "next/navigation";

export default async function MemberEditPage() {
  const userId = await getAuthUserId();
  const member = await getMemberById(userId);

  if (!member) return notFound();

  return (
    <PageClient member={member} />
  )
}
