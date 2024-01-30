"use server";

import z, { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { songs } from "@/db/schema/user";
import { db } from "@/db";
import { songSchema } from "@/types/zod";

export async function createSong(values: z.infer<typeof songSchema>) {
  try {
    const parse = songSchema.parse({
      title: values.title,
      artist: values.artist,
      album: values.album,
      duration: values.duration,
    });

    await db.insert(songs).values({
      title: parse.title,
      artist: parse.artist,
      album: parse.album,
      duration: parse.duration,
    });

    return revalidatePath("/song");
  } catch (e) {
    const error = e as ZodError;

    if (!error.isEmpty) return error.message;
  }
}
