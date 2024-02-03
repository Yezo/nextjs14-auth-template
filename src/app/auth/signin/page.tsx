import { Main } from "@/components/layout/main";
import { auth } from "@/lib/auth";
import { SignInWithPasswordForm } from "@/components/forms/SignInForm";
import { GithubSignInButton } from "@/components/layout/SignInButtonGitHub";
import { GoogleSignInButton } from "@/components/layout/SignInButtonGoogle";

export default async function SignInPage() {
  const session = await auth();

  return (
    <Main className="flex min-h-screen flex-col items-center p-24">
      any sign iners
      <GoogleSignInButton />
      <GithubSignInButton />
      <SignInWithPasswordForm />
    </Main>
  );
}
