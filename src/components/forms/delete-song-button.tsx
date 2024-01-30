"use client";

import { Button } from "@/components/ui/button";
import { deleteSongAction } from "@/db/actions/deleteSong";
import { generateToast } from "@/lib/utils";

type DeleteSongButtonProps = {
  id: number;
  userId: string;
};

export const DeleteSongButton = ({ id, userId }: DeleteSongButtonProps) => {
  const onClick = async () => {
    try {
      await deleteSongAction({ id, userId });
      generateToast({
        type: "success",
        value: "You successfully deleted an item.",
      });
    } catch (error) {
      generateToast({ type: "error" });
    }
  };

  return (
    <Button variant={"destructive"} className="" onClick={onClick}>
      Delete
    </Button>
  );
};
