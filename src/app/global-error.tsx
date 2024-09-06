"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            予期せぬエラーが発生しました
          </h2>
          <p className="text-gray-500 mb-8 px-4">
            申し訳ありませんが、時間をおいてお試しください。
          </p>
          <Link
            href="/"
            className="underline px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </body>
    </html>
  );
}
