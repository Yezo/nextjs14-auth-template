import { SignUpWithPasswordForm } from "@/components/forms/sign-up-form";
import { Main } from "@/components/layout/main";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@/components/ui/signout";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      <h1>
        {session
          ? `Hello, ${session?.user.name} with id ${session?.user.id}.`
          : "You are currently not logged in."}
      </h1>
      <Separator className="my-4" />
      <Link href="/auth/signup">Sign Up</Link>
      <Link href="/auth/signin">Sign In</Link>
      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
    </Main>
  );
}
