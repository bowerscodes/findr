"use client";

import DeleteButton from "@/components/DeleteButton";
import StarButton from "@/components/StarButton";
import { CardHeader, Divider, CardBody, Image } from "@heroui/react";
import React from "react";

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
        <div className="grid grid-cols-5 gap-3 p-5">
          {photos && photos.map(photo => (
            <div key={photo.id} className="relative">
              <Image 
                width="100%"
                className="aspect-square object-cover"
                src={photo.url} 
                alt="Image of user"
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
