import { notFound } from 'next/navigation';

import PageClient from './PageClient';
import { getMemberById } from '@/app/actions/memberActions';

export default async function MemberDetailedPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const member = await getMemberById(userId);
  
  if (!member) return notFound();
  
  return (
    <PageClient member={member} />
  )
};
