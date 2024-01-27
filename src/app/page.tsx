import { BioForm } from "@/components/forms/createBio";
import { SongForm } from "@/components/forms/createSong";
import { Main } from "@/components/layout/main";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@/components/ui/signout";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { db } from "@/db";
import { userQuery } from "@/db/queries/findUser";
import { profileQuery } from "@/db/queries/findUserProfile";
import { bios, songs } from "@/db/schema/user";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

async function getSongs() {
  try {
    const allSongs = await db.select().from(songs);

    return {
      success: true,
      status: 200,
      data: allSongs,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
}

async function getBios() {
  try {
    const allBios = await db.select().from(bios);

    return {
      success: true,
      status: 200,
      data: allBios,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
}

export default async function Home() {
  const session = await auth();
  const { data } = await getSongs();
  const bios = await getBios();
  // if (!session?.user) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }

  const users = await profileQuery.execute();

  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      <Link href="/api/auth/signin/github">Sign In</Link>
      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
      {/* <pre>{JSON.stringify(session, null, 2)}</pre>
      <pre>{JSON.stringify(users, null, 2)}</pre> */}
      {/* <ThemeToggle />

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <h1 className="font-bricolage">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, harum.
      </h1>
      <p>{session?.user.id}</p>
      <Link href="/api/auth/signin/github">Sign In</Link>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      /> */}

      {data?.map((item) => (
        <div key={`song-${item.id}`} className="grid grid-cols-5 px-2 py-1">
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.artist}</div>
          <div>{item.album}</div>
          <div>{item.duration}</div>
        </div>
      ))}

      <Separator className="my-4" />
      <SongForm />

      <Separator className="my-4" />

      <BioForm />

      {bios.data?.map((item) => (
        <div key={`song-${item.id}`} className="grid grid-cols-5 px-2 py-1">
          <div>{item.id}</div>
          <div>{item.bio}</div>
          <div>{item.userId}</div>
        </div>
      ))}
      {/* <ProfileForm userId={session?.user.id} /> */}
    </Main>
  );
}
