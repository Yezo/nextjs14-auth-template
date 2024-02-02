"use client";

import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2  border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
    >
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}
