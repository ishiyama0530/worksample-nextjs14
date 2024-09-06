export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6 min-h-[100dvh]">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">About Anonymous Board</h1>
          <p className="text-muted-foreground mt-2">
            Anonymous Board is a secure and private platform for open
            discussions. We believe in the power of anonymous communication to
            foster honest and meaningful conversations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Anonymity Guaranteed</h2>
          <p className="text-muted-foreground mt-2">
            At Anonymous Board, we take your privacy seriously. We do not
            collect any personal information, and your identity is completely
            hidden from other users. You can express yourself freely without
            fear of being identified.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Terms of Service</h2>
          <div className="text-muted-foreground mt-2 space-y-2">
            <p>By using Anonymous Board, you agree to our terms of service:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                No illegal or harmful content is allowed, including hate speech,
                explicit violence, or copyrighted material.
              </li>
              <li>
                Respect other users and their anonymity. Do not attempt to
                identify or harass other users.
              </li>
              <li>
                Report any inappropriate or abusive content to our moderation
                team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
