"use client";

import { Button } from "@/components/ui/button";

type SignOutButtonProps = {
  signOut: () => void;
};

export const SignOutButton = ({ signOut }: SignOutButtonProps) => {
  return (
    <Button
      className="text-neutral-500 hover:text-neutral-700"
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </Button>
  );
};
