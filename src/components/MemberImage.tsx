"use client";

import { Photo } from "@/generated/prisma";
import { CldImage } from "next-cloudinary";
import { Image } from "@heroui/image";
import React from "react"

type Props = {
  photo: Photo | null;
}

export default function MemberImage({ photo }: Props) {
  const isCloudinaryImage = photo?.url?.includes("cloudinary");
  
  return (
    <div>
      {photo?.publicId && isCloudinaryImage ? (
        <CldImage 
          alt="Image of member"
          src={photo.publicId}
          width={300}
          height={300}
          crop="fill"
          gravity="faces"
          className="rounded-2xl"
        />
      ) : (
        <Image 
          width="100%"
          className="aspect-square object-cover"
          src={photo?.url || "/images/user.png"} 
          alt="Image of user"
        />
      )}
    </div>
  )
}
