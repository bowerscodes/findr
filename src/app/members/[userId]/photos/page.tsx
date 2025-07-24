import PageClient from "./PageClient";
import { getMemberPhotosByUserId } from "@/app/actions/memberActions";

export default async function PhotosPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <PageClient photos={photos} />
    </>
  )
}
