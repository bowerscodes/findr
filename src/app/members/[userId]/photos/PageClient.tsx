"use client";

;
import { CardBody, CardHeader, Divider, Image } from "@heroui/react";

interface Props {
  photos: {
    id: string;
    url: string;
    publicId: string | null;
    memberId: string;
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
        <div className="grid grid-cols-5 gap-3">
          {photos && photos.map(photo => (
            <div key={photo.id}>
              <Image
                width={300}
                src={photo.url} 
                alt={`Photo of member`} 
                className="object-cover aspect-square"
            />
            </div>
          ))}
        </div>
      </CardBody>
    </div>
  )
}
