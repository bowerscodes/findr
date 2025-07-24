"use client";

import { CardHeader, Divider, CardBody } from "@heroui/react";
import MemberPhotoUpload from "./MemberPhotoUpload";
import { Member } from "@/generated/prisma";
import MemberPhotos from "@/components/MemberPhotos";

type Photo = {
  id: string;
  url: string;
  publicId: string | null;
  memberId: string;
  isApproved: boolean;
};

type Props = {
  member?: Member | null;
  photos: Photo[];
};

export default function PageClient({ member, photos }: Props) {

  
  return (
    <>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold text-primary">
          Edit Photos
        </div>
        <MemberPhotoUpload />
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotos photos={photos} editing={true} mainImageUrl={member?.image} />
      </CardBody>
    </>
  )
};
