"use client";

export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center">
          <div className="text-primary text-4xl font-bold prose">
            Anon Board
          </div>
        </div>
        <p className="animate-bounce text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
