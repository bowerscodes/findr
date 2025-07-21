import  { ReactNode } from "react"
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

  const basePath = `/members/${member.userId}`;

  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    { name: "Photos", href: `${basePath}/photos` },
    { name: "Chat", href: `${basePath}/chat` },
  ];

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className="col-span-9">
        <LayoutClient>
          {children}
        </LayoutClient>
      </div>
    </div>
  )
};
