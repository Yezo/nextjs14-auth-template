"use server";

import z, { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { bios } from "@/db/schema/user";
import { and, db, eq } from "@/db";
import { auth } from "@/lib/auth";
import { deleteBioSchema } from "@/types/zod";

export async function deleteBioAction(values: z.infer<typeof deleteBioSchema>) {
  const session = await auth();

  if (!session?.user.id) {
    throw new Error("There is no user.");
  }

  try {
    const parse = deleteBioSchema.parse({
      id: values.id,
      userId: values.userId,
    });

    await db
      .delete(bios)
      .where(and(eq(bios.id, parse.id), eq(bios.userId, parse.userId)));

    return revalidatePath("/bio");
  } catch (e) {
    const error = e as ZodError;

    if (!error.isEmpty) return error.message;
  }
}
