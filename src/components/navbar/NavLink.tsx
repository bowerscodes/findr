"use client";

import useMessageStore from '@/hooks/useMessageStore';
import { NavbarItem } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  href: string,
  label: string,
}

export default function NavLink({ href, label}: Props) {
  const pathName = usePathname();

  const unreadCount = useMessageStore(state => state.unreadCount);

  return (
    <div>
        <NavbarItem isActive={pathName === href} as={Link} href={href}>
          <span>{label}</span>
          {href === "/messages" && (
            <span> ({unreadCount})</span>
          )}
        </NavbarItem>
    </div>
  )
}
