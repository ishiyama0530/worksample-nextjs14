import { MountainIcon } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Bulletin Board</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};
