import Link from "next/link";

export default function TopPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover the Power of Anonymous Discussions
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our anonymous discussion board allows you to share your
                thoughts, ideas, and experiences without fear of judgment or
                identification. Join a vibrant community of open-minded
                individuals and explore a world of diverse perspectives.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/threads"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Check Thread List
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
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              // biome-ignore lint/a11y/noRedundantAlt: <explanation>
              alt="Site image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Speak Freely, Stay Anonymous
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our anonymous discussion board provides a safe and secure
                platform for you to share your thoughts, ideas, and experiences
                without fear of being identified. Engage in open and honest
                conversations, and connect with like-minded individuals from
                around the world.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore a Diverse Community
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our anonymous discussion board is a hub for individuals from all
                walks of life to come together and share their unique
                perspectives. Discover a wide range of topics, from
                thought-provoking discussions to lighthearted conversations, and
                engage with a diverse community of open-minded participants.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              // biome-ignore lint/a11y/noRedundantAlt: <explanation>
              alt="Site image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
