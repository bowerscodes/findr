"use client";

import { Spinner } from "@heroui/react";
;

export default function Loading() {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="loading..." color="secondary" labelColor="secondary" />
    </div>
  )
};
