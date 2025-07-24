"use client";

import MemberPhotos from "@/components/MemberPhotos";
import { CardBody, CardHeader, Divider } from "@heroui/react";

interface Props {
  photos: {
    id: string;
    url: string;
    publicId: string | null;
    memberId: string;
    isApproved: boolean;
}[];
};

export default function PageClient({ photos }: Props) {
  return (
    <div>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotos photos={photos} />
      </CardBody>
    </div>
  )
}
