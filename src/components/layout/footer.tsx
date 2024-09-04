import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full shrink-0">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="#" prefetch={false}>
            About Us
          </Link>
          <Link href="#" prefetch={false}>
            Our Team
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
          <Link href="#" prefetch={false}>
            News
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" prefetch={false}>
            Support
          </Link>
          <Link href="#" prefetch={false}>
            FAQs
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" prefetch={false}>
            Support
          </Link>
          <Link href="#" prefetch={false}>
            Sales
          </Link>
          <Link href="#" prefetch={false}>
            Press
          </Link>
          <Link href="#" prefetch={false}>
            Partnerships
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Follow Us</h3>
          <Link href="#" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="#" prefetch={false}>
            Instagram
          </Link>
          <Link href="#" prefetch={false}>
            Facebook
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 text-center text-sm text-muted-foreground">
        &copy; 2024 Bulletin Board. All rights reserved.
      </div>
    </footer>
  );
};
