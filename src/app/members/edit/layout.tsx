import  { ReactNode } from "react"
import { getMemberById } from "@/app/actions/memberActions";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";
import LayoutClient from "./LayoutClient";
import { getAuthUserId } from "@/app/actions/authActions";



export default async function layout({ 
  children, 
}: { children: ReactNode }) {
  const userId = await getAuthUserId();;
  const member = await getMemberById(userId);

  if (!member) return notFound();

  const basePath = `/members/edit`;

  const navLinks = [
    { name: "Edit Profile", href: `${basePath}` },
    { name: "Upload Photos", href: `${basePath}/photos` },
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
