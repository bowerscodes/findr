"use client";

import DeleteButton from "@/components/DeleteButton";
import StarButton from "@/components/StarButton";
import { CardHeader, Divider, CardBody } from "@heroui/react";
import React from "react";
import MemberPhotoUpload from "./MemberPhotoUpload";
import MemberImage from "@/components/MemberImage";

type Photo = {
  id: string;
  url: string;
  publicId: string | null;
  memberId: string;
};

type Props = {
  photos: Photo[]
};

export default function PageClient({ photos }: Props) {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotoUpload />
        <div className="grid grid-cols-5 gap-3 p-5">
          {photos && photos.map(photo => (
            <div key={photo.id} className="relative">
              <MemberImage 
                photo={photo}
              />
              <div className="absolute top-3 left-3 z-50">
                <StarButton selected={true} loading={false} />
              </div>
              <div className="absolute top-3 right-3 z-50">
                <DeleteButton loading={false} />
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </>
  )
};
