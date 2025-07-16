"use client";

import { CardHeader, Divider, CardBody } from "@heroui/react";
import React from "react";
import MemberPhotoUpload from "./MemberPhotoUpload";
import { Member } from "@/generated/prisma";
import MemberPhotos from "@/components/MemberPhotos";

type Photo = {
  id: string;
  url: string;
  publicId: string | null;
  memberId: string;
};

type Props = {
  member?: Member | null;
  photos: Photo[];
};

export default function PageClient({ member, photos }: Props) {

  
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotoUpload />
        <MemberPhotos photos={photos} editing={true} mainImageUrl={member?.image} />
      </CardBody>
    </>
  )
};
