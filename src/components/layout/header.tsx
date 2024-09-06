import { Button } from "@/components/ui/button";
import { MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Anon Board</span>
      </Link>
      <nav className="hidden gap-4 md:flex">
        <Link
          href="/threads"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Threads
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Button variant="outline" size="sm" className="md:hidden">
        <MenuIcon className="h-4 w-4" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  );
};
