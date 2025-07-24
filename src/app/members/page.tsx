import { getMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";
import { fetchCurrentUserLikeIds } from "../actions/likeActions";
import PaginationComponent from "@/components/PaginationComponent";
import { GetMemberParams } from "@/types";
import EmptyState from "@/components/EmptyState";

export const dynamic = "force-dynamic";

export default async function MembersPage({ searchParams }: { searchParams: Promise<GetMemberParams> }) {
  const [resolvedSearchParams, likeIds] = await Promise.all([
    searchParams,
    fetchCurrentUserLikeIds()
  ])
  const { items: members, totalCount } = await getMembers(resolvedSearchParams);

  return (
    <>
      {!members || members.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {members && members.map(member => (
                <MemberCard member={member} key={member.id} likeIds={likeIds} />
              ))}
          </div>
          <PaginationComponent totalCount={totalCount}/>
        </>
      )}
    </>
  );
};
