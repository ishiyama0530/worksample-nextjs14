import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export type ApplicationLayoutProps = {
  children?: React.ReactNode;
};

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto">{children}</main>
      <Footer />
    </>
  );
}
