"use client";

import { Button } from "@heroui/button";
import { Select, SelectItem, Slider } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaFemale, FaGenderless, FaMale } from "react-icons/fa";

export default function Filters() {

  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const orderByList = [
    { label: "Last active", value: "updated" },
    { label: "Newest members", value: "created" }
  ];

  const genders = [
    { value: "male", icon: FaMale },
    { value: "female", icon: FaFemale },
    { value: "Non-binary", icon: FaGenderless }
  ];

  const handleAgeSelect = (value: number[]) => {
    const params = new URLSearchParams(searchParams);
    params.set("ageRange", value.join(","));
    router.replace(`${pathName}?${params}`);
  };

  if (pathName !== "/members") return null;

  return (
    <div className="shadow-md py-2">
      <div className="flex flex-row justify-around items-center">
        <div className="text-secondary font-semibold text-xl"> Resuls: 10</div>
        <div>Gender:</div>
        <div className="flex gap-2 items-center">
          {genders.map(({icon: Icon, value}) => (
            <Button key={value} size="sm" isIconOnly color="secondary">
              <Icon size={24} />
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2 w-1/4">
          <Slider 
            aria-label="Slider for age selection"
            label="Age range"
            color="secondary"
            size="sm"
            minValue={18} 
            maxValue={100}
            defaultValue={[18,100]}
            onChangeEnd={(value) => handleAgeSelect(value as number[])}
          />
        </div>
        <div className="w-1/4">
          <Select 
            aria-label="Order by selector"
            size="sm"
            fullWidth
            placeholder="Order by"
            variant="bordered"
            color="secondary"
          >
            {orderByList.map(item => (
              <SelectItem key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}
