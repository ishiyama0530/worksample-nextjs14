import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Anon Board. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/terms"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <div className="flex gap-2">
          <a
            href="https://github.com/ishiyama0530"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
          </a>
          <a
            href="https://x.com/otsukarestful"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="mr-2 h-4 w-4" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
