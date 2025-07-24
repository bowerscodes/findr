import { auth } from "@/auth";
import { Button } from "@heroui/button";
import Link from "next/link";
import { TbHeartSearch } from "react-icons/tb";


export default async function Home() {
  const session = await auth();

  return (
<div className="flex flex-col justify-center items-center mt-20 gap-6 text-secondary">
      <TbHeartSearch size={100} />
      <h1 className="text-4xl font-bold">Welcome to findr</h1>
      {session ? (
        <Button
          as={Link}
          href="/members"
          size="lg"
          color="secondary"
          variant="bordered"
        >
          Continue
        </Button>
      ) : (
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="/login"
            size="lg"
            color="secondary"
            variant="bordered"
          >
            Sign in
          </Button>
          <Button
            as={Link}
            href="/register"
            size="lg"
            color="secondary"
            variant="bordered"
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
}
