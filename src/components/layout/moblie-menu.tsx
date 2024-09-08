import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Info, MessageCircle, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export type MobileMenuProps = {
  children?: React.ReactNode;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 mr-2">
        <DropdownMenuItem>
          <MessageCircle className="mr-2 h-4 w-4" />
          <Link href="/threads">Threads</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Info className="mr-2 h-4 w-4" />
          <Link href="/about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Phone className="mr-2 h-4 w-4" />
          <Link href="/contact">Contact</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <a
            href="https://github.com/ishiyama0530"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Twitter className="mr-2 h-4 w-4" />
          <a
            href="https://x.com/otsukarestful"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
