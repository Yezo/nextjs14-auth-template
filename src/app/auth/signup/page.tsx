import { SignUpWithPasswordForm } from "@/components/forms/SignUpForm";
import { Main } from "@/components/layout/main";
import { auth } from "@/lib/auth";

export default async function SignUpPage() {
  const session = await auth();

  return (
    <Main className="flex min-h-screen flex-col items-center p-24">
      any sign uppers
      <SignUpWithPasswordForm />
    </Main>
  );
}
