import { Main } from "@/components/layout/main";
import { SignOutButton } from "@/components/ui/signout";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { userQuery } from "@/db/queries/findUser";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }

  const users = await userQuery.execute();

  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      <ThemeToggle />

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <h1 className="font-bricolage">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, harum.
      </h1>
      <p>{session?.user.id}</p>
      <Link href="/api/auth/signin/github">Sign In</Link>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
    </Main>
  );
}
