"use server";

import z, { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { songs } from "@/db/schema/user";
import { and, db, eq } from "@/db";
import { auth } from "@/lib/auth";
import { deleteSongSchema } from "@/types/zod";

export async function deleteSongAction(
  values: z.infer<typeof deleteSongSchema>,
) {
  const session = await auth();

  if (!session?.user.id) {
    throw new Error("There is no user.");
  }

  try {
    const parse = deleteSongSchema.parse({
      id: values.id,
      userId: values.userId,
    });

    await db
      .delete(songs)
      .where(and(eq(songs.id, parse.id), eq(songs.userId, parse.userId)));

    return revalidatePath("/bio");
  } catch (e) {
    const error = e as ZodError;

    if (!error.isEmpty) return error.message;
  }
}
