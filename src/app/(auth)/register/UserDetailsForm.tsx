"use client";

import { Input } from "@heroui/react";
import { useFormContext } from "react-hook-form";

export default function UserDetailsForm() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <Input 
        label="Name"
        defaultValue=""
        variant="bordered"
        {...register('name')}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message as string}
      />
      <Input 
        label="Email"
        defaultValue=""
        variant="bordered"
        {...register('email')}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message as string}
      />
      <Input 
        label="Password"
        defaultValue=""
        variant="bordered"
        type="password"
        {...register('password')}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message as string}
      />
    </div>
  )
}
