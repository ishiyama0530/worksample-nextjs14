import { ClientSideSetUp } from "@/app/client-side-setup";
import "./globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "dayjs/locale/ja";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

dayjs.locale("ja");
dayjs.extend(relativeTime);

export const metadata: Metadata = {
  title: {
    template: "%s | Anon Board",
    default: "Anon Board",
  },
  description: "A simple anonymous message board.",
  openGraph: {
    title: {
      template: "%s - Anon Board",
      default: "Anon Board",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <ClientSideSetUp />
    </html>
  );
}
