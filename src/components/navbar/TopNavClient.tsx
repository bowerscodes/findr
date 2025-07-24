"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Link from "next/link";
import { TbHeartSearch } from "react-icons/tb";

import NavLink from "./NavLink";
import UserMenu from "./UserMenu";
import { UserInfo } from "@/types";
import FiltersWrapper from "./FiltersWrapper";

interface TopNavClientProps {
  userInfo: UserInfo | undefined;
  links: { href: string; label: string }[];
}

export default function TopNavClient({ userInfo, links }: TopNavClientProps) {
  return (
    <>
      <Navbar
        maxWidth="xl"
        className="bg-gradient-to-r from-red-400 to-red-600"
        classNames={{
          item: [
            "text-xl",
            "text-white",
            "uppercase",
            "data-[active=true]:text-yellow-200",
          ],
        }}
      >
        <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
          <TbHeartSearch size={36} className="text-gray-200" />
          <div className="font-bold text-3xl flex">
            <span className="text-gray-900">
              <em>findr</em>
            </span>
          </div>
        </NavbarBrand>
        <NavbarContent justify="center">
          {userInfo &&
            links.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))
          }
        </NavbarContent>
        <NavbarContent justify="end">
          {userInfo ? (
            <UserMenu userInfo={userInfo} />
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="bordered"
                radius="sm"
                className="text-white"
              >
                Login
              </Button>
              <Button
                as={Link}
                href="/register"
                variant="bordered"
                radius="sm"
                className="text-white"
              >
                Register
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>
      <FiltersWrapper />
    </>
  );
}
