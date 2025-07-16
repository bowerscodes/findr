import React from "react";
import PageClient from "./PageClient";
import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberById, getMemberPhotosByUserId } from "@/app/actions/memberActions";

export default async function PhotosPage() {
  const userId = await getAuthUserId();
  const member = await getMemberById(userId)
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <PageClient member={member} photos={photos} />
  )
};
