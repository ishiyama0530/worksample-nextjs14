export async function generateMetadata() {
  return {
    title: "About",
    openGraph: {
      title: "About",
    },
  };
}

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6 min-h-[100dvh] prose">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">About Anon Board</h1>
          <p className="text-muted-foreground mt-2">
            Anon
            Boardは、公開討論のための安全でプライベートなプラットフォームです。私たちは匿名のコミュニケーションの力を信じて、誠実で意味のある会話を育むことを目指しています。
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Anonymity Guaranteed</h2>
          <p className="text-muted-foreground mt-2">
            Anon
            Boardでは、プライバシーを真剣に考えています。個人情報は一切収集せず、他のユーザーからは完全に隠されています。自己表現することができ、身元が特定される心配なく自由に意見を述べることができます。
          </p>
        </div>
      </div>
    </div>
  );
}
