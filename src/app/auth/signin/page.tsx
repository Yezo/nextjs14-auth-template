import { Main } from "@/components/layout/main";
import { auth } from "@/lib/auth";
import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/layout/signin-button";
import { SignInWithPasswordForm } from "@/components/forms/sign-in-form";

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
