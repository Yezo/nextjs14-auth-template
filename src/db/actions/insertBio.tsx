"use server";

import { revalidatePath } from "next/cache";
import z, { ZodError } from "zod";
import { bios } from "@/db/schema/user";
import { db } from "@/db";
import { auth } from "@/lib/auth";

const scheme = z.object({
  bio: z.string().min(1),
  userId: z.string().min(1),
});

export async function createBio(formData: FormData) {
  const session = await auth();
  try {
    const parse = scheme.parse({
      bio: formData.get("bio"),
      userId: session?.user.id,
    });

    await db.insert(bios).values({
      bio: parse.bio,
      userId: parse.userId,
    });

    return revalidatePath("/");
  } catch (e) {
    const error = e as ZodError;

    if (!error.isEmpty) return error.message;
  }
}
