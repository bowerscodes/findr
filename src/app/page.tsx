"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Welcome to findr</h1>
      <Button 
        as={Link}
        href="/members"
        color="primary" 
        variant="bordered" 
        startContent={<FaRegSmile size={20}/>}
      >
        Get Started
      </Button>
    </div>
  );
}
