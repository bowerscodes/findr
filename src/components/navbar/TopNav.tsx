import { auth } from "@/auth";
import TopNavClient from "./TopNavClient";
import { getUserInfoForNav } from "@/app/actions/userActions";

export default async function TopNav() {
  const session = await auth();
  const userInfo = session?.user && await getUserInfoForNav();

  const memberLinks = [
    { href: "/members", label: "Matches" },
    { href: "/lists", label: "Lists" },
    { href: "/messages", label: "Messages" }
  ];

  const adminLinks = [
    { href: "/admin/moderation", label: "Photo Moderation" }
  ];

  const links = session?.user.role === "ADMIN" ? adminLinks : memberLinks

  return <TopNavClient userInfo={userInfo} links={links} />;
};
