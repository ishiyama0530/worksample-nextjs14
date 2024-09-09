import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function TopPage() {
  return (
    <div className="h-[calc(100dvh-4rem)] overflow-y-auto snap-y snap-mandatory">
      <section className="snap-start w-full h-[calc(100dvh-4rem)] grid place-content-center py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="prose">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the Power of Anonymous Discussions.
            </h1>
            <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Anon Boardは気軽に使用できるシンプルな掲示板です。
              <br />
              URLをSNSやメールで共有することで、誰でも匿名でスレッドに参加できます。
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/threads"
                className={cn(buttonVariants(), "no-underline")}
              >
                スレッドリストを見てみる
              </Link>
              {/* <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link> */}
            </div>
          </div>

          <Image
            src="/home1.svg"
            width="500"
            height="340"
            alt="Hero"
            className="justify-self-end"
            priority
          />
        </div>
      </section>

      <section className="snap-start w-full h-[calc(100dvh-4rem)] grid place-content-center py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/home2.svg"
            width="500"
            height="300"
            alt="Site image"
            className="justify-self-start py-10 lg:py-0"
          />
          <div className="space-y-4 prose">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Built with Next.js AppRouter.
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Anon Boardは、Next.jsのAppRouterを使用しています。
              <br />
              Next.jsはReactを使用したフルスタックのWebアプリケーションフレームワークです。
              <br />
              App Routerは、React Server
              Componentsを活用したNext.jsの新たなビルドシステムです。
            </p>
          </div>
        </div>
      </section>

      <section className="snap-start w-full h-[calc(100dvh-4rem)] grid place-content-center py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 prose">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Update Element by SSR and Server Actions.
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Anon
              Boardは、サーバーサイドレンダリングを主に使用して画面を描画しています。
              <br />
              データの更新は、サーバーアクションを使用して行います。
              <br />
              これらはページの読み込み精度を高め、SEOを向上させます。
            </p>
          </div>
          <Image
            src="/home3.svg"
            width="500"
            height="290"
            alt="Site image"
            className="justify-self-end  py-10 lg:py-0"
          />
        </div>
      </section>
    </div>
  );
}
