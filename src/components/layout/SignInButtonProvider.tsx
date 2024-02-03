"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon, GoogleIcon } from "@/styles/icons";
import { signIn } from "next-auth/react";

type SignInButtonWithProviderProps = {
  provider: string;
};

export function SignInButtonWithProvider({
  provider,
}: SignInButtonWithProviderProps) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleClick = () => {
    signIn(provider);
  };

  return (
    <Button
      onClick={handleClick}
      className="border-[#ffffff14]] text-gray my-2 flex h-11 w-80 items-center justify-center rounded-full border bg-[#ffffff0f] px-10 py-5 font-bricolage text-sm backdrop-blur-sm transition-colors duration-300 hover:bg-[#ffffff14]"
    >
      {provider === "google" && <GoogleIcon />}
      {provider === "github" && <GithubIcon />}
      <span className="ml-4">
        Signup with {capitalizeFirstLetter(provider)}
      </span>
    </Button>
  );
}
