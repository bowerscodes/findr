"use client";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { PiSpinnerGap } from "react-icons/pi";


type Props = {
  loading: boolean;
  hasLiked: boolean;
  toggleLike: () => void;
};

export default function LikeButton({ loading, toggleLike, hasLiked }: Props) {

  return (
    <>
      {!loading ? (
        <div onClick={toggleLike} className="relative hover:opacity-80 transition cursor-pointer">
          <FaRegHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]"/>
          <FaHeart size={24} className={hasLiked ? "fill-rose-500" : "fill-neutral-500/70"}/>
        </div>
      ) : (
        <PiSpinnerGap size={32} className="fill-white animate-spin" />
      )}
    </>
  );
};
