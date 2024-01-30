import { Main } from "@/components/layout/main";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@/components/ui/signout";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Hello, {session?.user.name}.</h1>
      <h2>You are currently {session ? "logged in." : "logged out"}</h2>
      <Separator className="my-4" />
      <Link href="/api/auth/signin/github">Sign In</Link>
      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
    </Main>
  );
}
