"use client";

import { Button } from "@heroui/button";
import { Selection, Select, SelectItem, Slider } from "@heroui/react";
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

  const selectedGender = searchParams.get("gender")?.split(",") || ["male", "female"];

  const handleAgeSelect = (value: number[]) => {
    const params = new URLSearchParams(searchParams);
    params.set("ageRange", value.join(","));
    router.replace(`${pathName}?${params}`);
  };

  const handleOrderSelect = (value: Selection) => {
    if (value instanceof Set) {
      const params = new URLSearchParams(searchParams);
      params.set("orderBy", value.values().next().value as string);
      router.replace(`${pathName}?${params}`);
    }
  };

  const handleGenderSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (selectedGender.includes(value)) {
      params.set("gender", selectedGender.filter(g => g !== value).toString())
    } else {
      params.set("gender", [...selectedGender, value].toString());
    }
    router.replace(`${pathName}?${params}`);
  };

  if (pathName !== "/members") return null;

  return (
    <div className="shadow-md py-2">
      <div className="flex flex-row justify-around items-center">
        <div className="text-secondary font-semibold text-xl"> Results: 10</div>
        <div>Gender:</div>
        <div className="flex gap-2 items-center">
          {genders.map(({icon: Icon, value}) => (
            <Button 
              key={value} 
              size="sm" 
              isIconOnly 
              color={selectedGender.includes(value) ? "secondary" : "default"}
              onPress={() => handleGenderSelect(value)}
            >
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
            label="Order by"
            variant="bordered"
            color="secondary"
            selectedKeys={new Set([searchParams.get("orderBy") || "updated"])}
            onSelectionChange={handleOrderSelect}
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
