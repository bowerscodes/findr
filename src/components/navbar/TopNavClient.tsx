"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Link from 'next/link';
import React from 'react'
import { TbHeartSearch } from "react-icons/tb";
import NavLink from './NavLink';
import { Session } from 'next-auth';
import UserMenu from './UserMenu';

interface TopNavClientProps {
  session: Session | null
};

export default function TopNavClient({ session }: TopNavClientProps) {
  return (
    <Navbar
    maxWidth="xl"
    className="bg-gradient-to-r from-red-400 to-red-600"
    classNames={{
      item: [
        "text-xl",
        "text-white",
        "uppercase",
        "data-[active=true]:text-yellow-200",
      ]
    }}
    >
      <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
        <TbHeartSearch size={36} className="text-gray-200"/>
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900"><em>findr</em></span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button as={Link} href="/login" variant="bordered" radius="sm" className="text-white">
              Login
            </Button>
            <Button as={Link} href="/register" variant="bordered" radius="sm" className="text-white">
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
