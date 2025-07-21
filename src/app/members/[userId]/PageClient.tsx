"use client";

;
import { Member } from "@/generated/prisma";
import CardInnerWrapper from "@/components/CardInnerWrapper";


export default function PageClient({ member }: { member: Member } ) {
  return (
    <CardInnerWrapper 
      header="Profile"
      body={<div>{member.description}</div>}
    />
  )
}
