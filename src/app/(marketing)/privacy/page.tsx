import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Privacy",
    openGraph: {
      title: "Privacy",
    },
  };
}

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6 min-h-[100dvh] prose">
      <div>
        <h2 className="text-2xl font-bold">Anon Board プライバシーポリシー</h2>
        <p className="text-muted-foreground mt-2">最終更新日：2024年9月7日</p>
        <div className="text-muted-foreground mt-4 space-y-4">
          <h3 className="text-xl font-semibold">1. はじめに</h3>
          <p>
            Anon
            Board（以下「当社」または「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に最大限の注意を払っています。本プライバシーポリシーは、当社がどのような情報を収集し、それをどのように使用、保護、開示するかを説明するものです。本サービスを利用することで、ユーザーは本ポリシーに記載された実践に同意したものとみなされます。
          </p>

          <h3 className="text-xl font-semibold">2. 収集する情報</h3>
          <p>当社は、以下の種類の情報を収集する場合があります：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              自動的に収集される情報：
              <ul className="list-circle pl-6 space-y-1">
                <li>IPアドレス</li>
                <li>デバイス情報（種類、オペレーティングシステム）</li>
                <li>ブラウザの種類とバージョン</li>
                <li>アクセス日時</li>
                <li>リファラーURL</li>
              </ul>
            </li>
            <li>
              ユーザーが自発的に提供する情報：
              <ul className="list-circle pl-6 space-y-1">
                <li>投稿内容</li>
                <li>メールアドレス（オプション、問い合わせ時のみ）</li>
              </ul>
            </li>
            <li>
              クッキーを通じて収集される情報：
              <ul className="list-circle pl-6 space-y-1">
                <li>セッション情報</li>
                <li>利用状況の統計</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold">3. 情報の使用目的</h3>
          <p>収集した情報は、以下の目的で使用されます：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>本サービスの提供と維持</li>
            <li>ユーザーエクスペリエンスの向上</li>
            <li>サービスの利用状況の分析</li>
            <li>技術的問題の診断と解決</li>
            <li>不正利用の検出と防止</li>
            <li>法的義務の遵守</li>
          </ul>

          <h3 className="text-xl font-semibold">4. 情報の共有と開示</h3>
          <p>
            当社は、ユーザーの個人情報を以下の場合を除き、第三者と共有または開示しません：
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ユーザーの同意がある場合</li>
            <li>法的要請（裁判所の命令、令状など）に応じる必要がある場合</li>
            <li>
              当社の権利、財産、安全、またはサービス利用者の権利、財産、安全を保護するために必要な場合
            </li>
            <li>
              事業譲渡や合併など、当社の資産の一部または全部が第三者に譲渡される場合
            </li>
          </ul>

          <h3 className="text-xl font-semibold">5. データの保持と削除</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              ユーザーが投稿したコンテンツは、ユーザーが削除するまで、または当社が削除の必要があると判断するまで保持されます。
            </li>
            <li>
              自動的に収集される情報は、統計的な目的のために匿名化された形で無期限に保持される場合があります。
            </li>
            <li>
              法的要請や技術的な理由により、完全に削除されるまでに一定の期間がかかる場合があります。
            </li>
          </ul>

          <h3 className="text-xl font-semibold">6. ユーザーの権利</h3>
          <p>ユーザーには以下の権利があります：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>自身の投稿の削除を要請する権利</li>
            <li>当社が保有する自身の個人情報へのアクセスを要請する権利</li>
            <li>個人情報の訂正や更新を要請する権利</li>
            <li>個人情報の処理に対して異議を申し立てる権利</li>
            <li>データポータビリティの権利（技術的に可能な範囲内で）</li>
          </ul>

          <h3 className="text-xl font-semibold">7. セキュリティ</h3>
          <p>
            当社は、ユーザーの情報を保護するために以下の措置を講じています：
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>データの暗号化（SSL/TLS）</li>
            <li>定期的なセキュリティ監査</li>
            <li>アクセス制御と認証システム</li>
            <li>データのバックアップと冗長化</li>
            <li>従業員に対するプライバシーとセキュリティのトレーニング</li>
          </ul>

          <h3 className="text-xl font-semibold">8. 国際的なデータ転送</h3>
          <p>
            当社は日本を拠点としていますが、収集した情報が国外のサーバーに保存・処理される場合があります。本サービスを利用することで、ユーザーはこの情報の転送に同意したものとみなされます。
          </p>

          <h3 className="text-xl font-semibold">
            10. プライバシーポリシーの変更
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>当社は、必要に応じて本ポリシーを変更する権利を有します。</li>
            <li>重要な変更がある場合、本サービス上で通知を行います。</li>
            <li>
              変更後もサービスを継続して利用することで、ユーザーは変更後のポリシーに同意したものとみなされます。
            </li>
          </ul>

          <h3 className="text-xl font-semibold">9. クッキーポリシー</h3>
          <p>
            当社はクッキーを使用してユーザーエクスペリエンスを向上させています。クッキーの使用を望まない場合、ブラウザの設定でクッキーを無効にすることができますが、一部の機能が制限される可能性があります。
          </p>

          <h3 className="text-xl font-semibold">10. Do Not Track</h3>
          <p>
            当社は現在、Do Not
            Track（DNT）信号に対応していません。ただし、ユーザーのプライバシー設定を尊重し、可能な限り追跡を最小限に抑えるよう努めています。
          </p>

          <h3 className="text-xl font-semibold">11. お問い合わせ</h3>
          <p>
            本プライバシーポリシーに関するご質問やご意見、または個人情報に関するリクエストがある場合は、以下の連絡先までお問い合わせください：
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          <p className="mt-6">
            以上で、Anon Boardプライバシーポリシーの全文が終了します。
          </p>
        </div>
      </div>
    </div>
  );
}
