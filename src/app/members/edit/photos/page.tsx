import React from "react";
import PageClient from "./PageClient";
import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberPhotosByUserId } from "@/app/actions/memberActions";

export default async function PhotosPage() {
  const userId = await getAuthUserId();

  const photos = await getMemberPhotosByUserId(userId);

  return (
    <PageClient photos={photos} />
  )
};
