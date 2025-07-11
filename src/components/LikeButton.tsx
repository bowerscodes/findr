"use client";

import React from "react";
import { toggleLikeMember } from "@/app/actions/likeActions";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


type Props = {
  targetId: string;
  hasLiked: boolean;
}

export default function LikeButton({ targetId, hasLiked }: Props) {
  const router = useRouter();

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked);
    router.refresh();
  }

  return (
    <div onClick={toggleLike} className="relative hover:opacity-80 transition cursor-pointer">
      <FaRegHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]"/>
      <FaHeart size={24} className={hasLiked ? "fill-rose-500" : "fill-neutral-500/70"}/>
    </div>
  )
};
