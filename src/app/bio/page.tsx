import { BioForm } from "@/components/forms/create-bio-form";
import { Main } from "@/components/layout/main";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { bios } from "@/db/schema/user";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SongPage() {
  const session = await auth();
  const data = await db.select().from(bios);

  if (!data) throw new Error("Failed to fetch data");
  if (!session?.user) redirect("/api/auth/signin?callbackUrl=/");

  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      {data?.map((item) => (
        <div key={`song-${item.id}`} className="grid grid-cols-5 px-2 py-1">
          <div>{item.id}</div>
          <div>{item.bio}</div>
          <div>{item.userId}</div>
        </div>
      ))}

      <Separator className="my-4" />
      <BioForm />
    </Main>
  );
}
