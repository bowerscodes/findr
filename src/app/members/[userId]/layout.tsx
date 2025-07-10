import React, { ReactNode } from "react"
import { getMemberById } from "@/app/actions/memberActions";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";
import LayoutClient from "./LayoutClient";

type Props = {
  children: ReactNode;
  params: Promise<{ userId: string }>;
};

export default async function layout({ 
  children, 
  params 
}: Props ) {
  const { userId } = await params;
  const member = await getMemberById(userId);

  if (!member) return notFound();

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">
        <LayoutClient>
          {children}
        </LayoutClient>
      </div>
    </div>
  )
};
