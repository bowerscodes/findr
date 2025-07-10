import { getUserById } from '@/app/actions/authActions'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function MemberDetailedPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const member = await getUserById(userId);
  
  if (!member) return notFound();
  
  return (
    <div>
      {member.name}
    </div>
  )
};
