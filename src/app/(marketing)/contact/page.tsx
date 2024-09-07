export async function generateMetadata() {
  return {
    title: "Contact",
    openGraph: {
      title: "Contact",
    },
  };
}

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6 min-h-[100dvh] prose">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="text-muted-foreground mt-2 space-y-2">
            <p>
              If you have any questions or concerns, please don't hesitate to
              reach out to our support team:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                GitHub:{" "}
                <a href="https://github.com/ishiyama0530" className="underline">
                  ishiyama
                </a>
              </li>
              <li>
                Twitter:{" "}
                <a href="https://x.com/otsukarestful" className="underline">
                  @otsukarestful
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
