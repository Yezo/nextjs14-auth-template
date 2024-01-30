"use client";

import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { UpdateIcon } from "@radix-ui/react-icons";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={twMerge(
        "disabled flex gap-2",
        pending && "cursor-not-allowed ",
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending && <UpdateIcon className="animate-spin" />}
      Submit
    </Button>
  );
};
