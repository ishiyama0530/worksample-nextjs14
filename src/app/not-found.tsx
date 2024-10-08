import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        ページが見つかりません
      </h2>
      <p className="text-gray-500 mb-8 px-4">
        申し訳ありませんが、お探しのページは存在しないようです。
      </p>
      <Link
        href="/"
        className="underline px-4 py-2 rounded hover:bg-gray-200 transition-colors"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
