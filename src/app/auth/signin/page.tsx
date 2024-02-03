import { Main } from "@/components/layout/Main";
import { auth } from "@/lib/auth";
import { SignInWithPasswordForm } from "@/components/forms/SignInForm";

export default async function SignInPage() {
  const session = await auth();

  return (
    <Main className="flex min-h-screen flex-col items-center p-24">
      any sign iners
      <SignInWithPasswordForm />
    </Main>
  );
}
