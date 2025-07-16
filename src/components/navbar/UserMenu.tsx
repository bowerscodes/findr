"use client"

import { signOutUser } from "@/app/actions/authActions";
import { UserInfo } from "@/types";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
import React from "react";

type Props = {
  userInfo: UserInfo | null;
};

export default function UserMenu({ userInfo }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar 
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userInfo?.name || "user avatar"}
          size="sm"
          src={userInfo?.image || "/images/user.png"}
        /> 
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem isReadOnly as="span" className="h-14 flex flex-row" aria-label="username" key="username" >
            Signed in as {userInfo?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/members/edit" key="editProfile">
          Edit profile
        </DropdownItem>
        <DropdownItem onPress={async () => signOutUser()} color="danger" key="logOut">
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};
