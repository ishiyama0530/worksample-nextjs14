import { MobileMenu } from "@/components/layout/moblie-menu";
import { Button } from "@/components/ui/button";
import { Blend, Info, MenuIcon, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Blend className="h-7 w-7" />
        <span className="text-xl tracking-tighter">Anon Board</span>
      </Link>
      <nav className="hidden gap-4 md:flex">
        <Link
          href="/threads"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
          prefetch={false}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Threads
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
          prefetch={false}
        >
          <Info className="mr-2 h-4 w-4" />
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
          prefetch={false}
        >
          <Phone className="mr-2 h-4 w-4" />
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <MobileMenu>
          <Button variant="outline" size="sm">
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </MobileMenu>
      </div>
    </header>
  );
};
