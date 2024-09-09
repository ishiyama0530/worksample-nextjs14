"use client";

import { useEffect, useState } from "react";

export default function RootLoading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ちらつき防止で1秒待つ
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {show && (
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center">
            <div className="text-primary text-4xl font-bold prose">
              Anon Board
            </div>
          </div>
          <p className="animate-bounce text-muted-foreground">Loading...</p>
        </div>
      )}
    </div>
  );
}
