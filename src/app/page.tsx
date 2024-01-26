import { Main } from "@/components/layout/main";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <Main className="flex min-h-screen flex-col items-center  p-24">
      <ThemeToggle />

      <h1 className="font-bricolage">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, harum.
      </h1>
    </Main>
  );
}
