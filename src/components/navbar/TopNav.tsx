import { auth } from "@/auth";
import TopNavClient from "./TopNavClient";
import { getUserInfoForNav } from "@/app/actions/userActions";

export default async function TopNav() {
  const session = await auth();
  const userInfo = session?.user && await getUserInfoForNav();

  return <TopNavClient userInfo={userInfo} />;
};
