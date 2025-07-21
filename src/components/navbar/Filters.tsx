"use client";

import { useFilters } from "@/hooks/useFilters";
import { Button } from "@heroui/button";
import { Select, SelectItem, Slider } from "@heroui/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function Filters() {
    const pathName = usePathname();
    const { genderList, orderByList, filters, selectAge, selectGender, selectOrder } = useFilters();

    if (pathName !== "/members") return null;

  return (
    <div className="shadow-md py-2">
      <div className="flex flex-row justify-around items-center">
        <div className="text-secondary font-semibold text-xl"> Results: 10</div>
        <div>Gender:</div>
        <div className="flex gap-2 items-center">
          {genderList.map(({icon: Icon, value}) => (
            <Button 
              key={value} 
              size="sm" 
              isIconOnly 
              color={filters.gender.includes(value) ? "secondary" : "default"}
              onPress={() => selectGender(value)}
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
            defaultValue={filters.ageRange}
            onChangeEnd={(value) => selectAge(value as number[])}
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
            selectedKeys={new Set([filters.orderBy])}
            onSelectionChange={selectOrder}
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
