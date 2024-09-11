# worksample-nextjs14

## 作ったもの

[Anon Board](https://worksample-nextjs14.vercel.app/)  | A simple anonymous message board.

至って一般的な匿名掲示板です。  
実際にスレッドを作成したり、投稿していただいてOKです 🙆‍♂️（おかしなところはIssueいただけると嬉しい…）  
また、スレッドの削除やコメントの投稿はパスワードや投稿用キーワードを知っている人のみ可能という仕組みにしています。

## 技術スタック

```sh
# Next.js
AppRouter, Server Actions（conform, zod）
# テスト
Jest, React Testing Library, Palywright
# CI
GitHub Actions
# インフラ
Vercel, Neon
# その他
Biome, v0 by Vercel, shadcn/ui, Tailwind, TypeScript
```

## URLs

- ◯ : 静的ルート
- ƒ : 動的ルート

```sh
Route (app)                              Size     First Load JS
┌ ○ /                                    5.24 kB        99.1 kB
├ ○ /_not-found                          148 B          87.2 kB
├ ○ /about                               148 B          87.2 kB
├ ○ /contact                             148 B          87.2 kB
├ ○ /privacy                             178 B            94 kB
├ ○ /robots.txt                          0 B                0 B
├ ○ /sitemap.xml                         0 B                0 B
├ ○ /terms                               178 B            94 kB
├ ƒ /threads                             2.64 kB         130 kB
└ ƒ /threads/[id]                        6.15 kB         134 kB
```

## ディレクトリ構成

今回はフロントエンド、バックエンドを1つで管理している小さなアプリケーションにしています。  

```sh
.
.github
├── workflows
│   ├── e2e_test.yml # tests/e2eのテストケースを実行。push or 朝9時定期実行。現在は死活監視のみ。
│   └── frontend_test.yml # tests/frontendのテストケースを実行。push時。
├── prisma # Prisma定義
├── public # 静的ファイル
├── src
│   ├── actions # Server Actions 格納場所
│   ├── app # ディレクトリ構成 （/app）参照
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── middleware.ts # 認証処理があったら。今回
│   └── styles
├── tests
│   ├── e2e # Playwright
│   └── frontend # Jest / react-testing-library
├── README.md # Me!!
├── biome.json # eslintからの卒業
├── components.json # for v0 or shadcn/ui
├── jest.config.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

実際にバックエンドを切り離す場合は、/src/actions内からAPIをリクエストする格好を想定します。  

```sh
# イメージ
.
├── server
│   ├── api
│   ├── usecase
│   ├── domain
│   └── infra
├── web
│   ├── src
│   │    ├──actions # ここでserverで定義しているAPIをリクエスト
```

## ディレクトリ構成 （/app）

Next.jsのディレクトリやファイル名が持つ仕様に関してもメモしていきます。

```sh
src/app
├── (application) # Route Group / URLに影響しない。
│   └── threads
│       ├── [id]
│       │   ├── loading.tsx # SuspenseのフォールバックUI / 同階層のpage.tsxに対応したloading。全体ローディングでなくスケルトンを表示させている。
│       │   ├── page.tsx
│       │   └── presentation.tsx
│       ├── loading.tsx
│       ├── page.tsx # サーバーコンポーネント fetchなどを行う。
│       └── presentation.tsx # 純粋なReactコンポーネント。RSC関係なく、react-testing-libraryでのテストを想定
├── (marketing)
│   ├── about
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── privacy
│   │   └── page.tsx
│   └── terms
│       └── page.tsx
├── client-side-setup.tsx # クライアント側の処理で初期化したい処理をここに記載している
├── error.tsx # 500
├── favicon.ico # /app直下に置くことでビルド時に反映される。
├── global-error.tsx # layout.tsxでエラー起きたとき
├── globals.css 
├── layout.tsx # 共通UI。ページ遷移しても再描画しない。（template.tsxは遷移の度、再描画される。）
├── loading.tsx # SuspenseのフォールバックUI
├── not-found.tsx # 404
├── page.tsx
├── robots.ts # /app直下に置くことでビルド時に反映される。
└── sitemap.ts # /app直下に置くことでビルド時に反映される。
```

## 環境構築

環境構築に関してはこちらに投稿しています。  
[Next.js14をVercelにデプロイするまで。+v0+Prisma+Neon](https://zenn.dev/ishiyama/articles/cbf7a0ee0d4a0e)

## Server Actions

基本的にConform+Zodの組み合わせを使用しています。  
本プリケーションの変更系の処理は全てServer Actionsで行っています。  

### バックエンド

```sh
src/actions/createThread
├── handler.ts # サーバーアクションの本体
├── index.ts
└── schema.ts # zodスキーマの定義、フロントエンド、バックエンド両方から使用される想定。
```

変更処理は、以下の用にサーバーアクション内で直接データベースを操作しています。

```ts
// src/actions/createThread/handler.ts
"use server";

// imports..

export async function createThread(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: createThreadSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const id = ulid().toLowerCase();
  await prisma.thread.create({
    data: {
      id,
      title: submission.value.title,
      description: submission.value.description,
      postKeyword: await hash(submission.value.postKeyword),
      password: await hash(submission.value.password),
      posts: {
        create: {
          id: ulid().toLowerCase(),
          content: submission.value.post,
          ipAddress: getIpAddress(),
        },
      },
    },
  });

  revalidateTag("get-threads");
  redirect(`/threads/${id}`);
}
```

### フロントエンド

ConformとZodに大変お世話になっています。  
Conformに関してはこちらに投稿しています。  
[Server Actionsではconformを使うのが良さそう@2024/09/05](https://zenn.dev/ishiyama/articles/725dd443234f8c)

```tsx
// src/components/thread-create-form.tsx
"use client";

// imports..

export type ThreadCreateFormProps = {
  className?: string;
};

export function ThreadCreateForm({ className }: ThreadCreateFormProps) {
  const { isTermsChecked, setTermsChecked } = usePersistenceTermsChecked();
  const [password, setPassword] = useState("");
  const [postKeyword, setPostKeyword] = useState("");

  const [lastResult, action] = useFormState(createThread, {
    initialValue: {
      title: "",
      description: "",
      post: "",
      postKeyword: "",
      password: "",
    } satisfies CreateThreadData,
  });
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createThreadSchema });
    },
    shouldRevalidate: "onInput",
  });

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4 prose">スレッドを作成する</h2>
      <form {...getFormProps(form)} action={action} className="grid gap-4">
        <Input
          {...getInputProps(fields.title, {
            type: "text",
          })}
          placeholder="スレッドのタイトルを入力してください"
          className={cn({ "border-destructive": fields.title.errors })}
        />
        <FormError>{fields.title.errors}</FormError>
        <Input
          {...getInputProps(fields.description, {
            type: "text",
          })}
          placeholder="スレッドの説明を記述してください（オプション）"
          className={cn({
            "border-destructive": fields.description.errors,
          })}
        />
        <FormError>{fields.description.errors}</FormError>
        <Textarea
          {...getTextareaProps(fields.post)}
          rows={4}
          placeholder="最初のコメントを記述してください"
          className={cn("field-sizing-content", {
            "border-destructive": fields.post.errors,
          })}
        />
        <FormError>{fields.post.errors}</FormError>
        <Input
          {...getInputProps(fields.password, {
            type: "password",
          })}
          placeholder="削除用パスワードを入力してください"
          onChange={(e) => setPassword(e.target.value)}
          className={cn({ "border-destructive": fields.password.errors })}
        />
        {password && (
          <p className="px-2 text-xs text-muted-foreground">{password}</p>
        )}
        <FormError>{fields.password.errors}</FormError>
        <Input
          {...getInputProps(fields.postKeyword, {
            type: "password",
          })}
          placeholder="投稿用キーワードを入力してください"
          onChange={(e) => setPostKeyword(e.target.value)}
          className={cn({ "border-destructive": fields.postKeyword.errors })}
        />
        {postKeyword && (
          <p className="px-2 text-xs text-muted-foreground">{postKeyword}</p>
        )}
        <FormError>{fields.postKeyword.errors}</FormError>

        <div className="flex justify-center py-2">
          <TermsCheckBox checked={isTermsChecked} onClick={setTermsChecked} />
        </div>
        <FormButton type="submit" disabled={!isTermsChecked}>
          作成する！
        </FormButton>
      </form>
    </div>
  );
}
```

## データ取得

本アプリケーションは直接DBを参照しているため、fetchは使用していません。  
そのため、Container層（page.tsx）でDBから値を取得しています。  
また、取得した値をunstable_cacheを使用することで、fetchに似たキャッシュ制御を行っています。  

```sh
src/app/(application)
├── loading.ts
├── page.ts # ※ Container層
└── presentation.tsx # Presentation層
```

[Next.jsの考え方 | Container/Presentationalパターン](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_presentational_pattern)

```tsx
// src/app/(application)/threads/page.tsx
const limit = 12;

const getThreads = (page: number) =>
  unstable_cache(
    async () => {
      const skip = (page - 1) * limit;
      const result = await prisma.thread.findMany({
        orderBy: { id: "desc" },
        skip,
        take: limit + 1,
      });
      const hasNext = result.length > limit;
      return { threads: result.slice(0, limit), hasNext };
    },
    ["get-threads", `get-threads-${page}`],
    { revalidate: 3600, tags: ["get-threads", `get-threads-${page}`] },
  )();

export default async function ThreadsPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const { threads, hasNext } = await getThreads(currentPage);
  return (
    <ThreadsPresentation
      threads={threads}
      currentPage={currentPage}
      hasNext={hasNext}
    />
  );
}
```

## テスト / CI

Jestとreact-testing-libraryを使用したフロントエンドテストとPlaywrightを使用したE2Eテストを実装しています。

```sh
.
.github
├── workflows
│   ├── e2e_test.yml # tests/e2eのテストケースを実行。push or 朝9時定期実行。現在は死活監視のみ。
│   └── frontend_test.yml # tests/frontendのテストケースを実行。push時。
省略
├── tests
│   ├── e2e # Playwright
│   └── frontend # Jest / react-testing-library
```

react-testing-libraryはReact Server Componentに対応していません。  
そのため、page.tsx（Container層）データ取得などのRSCならではの処理を行い、presentation.tsxではなるべく純粋なReactコンポーネントとして実装するようにしています。  
また、その配下のコンポーネントでConformを使用しているコンポーネントではreact-testing-libraryがエラーになってしまったので、そのコンポーネントだけモックにして対応しています。（これは想定できていませんでした🥲）

[※Container/Presentationalパターンはこちら](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_presentational_pattern)

```ts
// tests/frontend/app/(application)/threads/presentation.test.tsx
jest.mock("@/components/thread-create-form", () => ({
  ThreadCreateForm: jest.fn(({ className }) => (
    <div data-testid="thread-create-form" className={className}>
      Mocked Thread Create Form
    </div>
  )),
}));
```

また、E2Eテストに関しては死活監視にのみ使用しています。  
死活監視のためにPlaywrightをインストール（CI上でも）はToo muchだと思うので、有効活用したいです。  

Playwrightを使用した実践的な内容はこちらに記載しています。  
[Playwright+GitHub Actions*E2E with VRT 環境構築とCI/CD連携の知見](https://zenn.dev/ishiyama/articles/c85138b42e3e1f)

## セキュリティヘッダー

HTTPレスポンスへのセキュリティヘッダー付与は`next.config.mjs`で行っています。  
CSPに関してはNONCEを付与するためにmiddleware.tsに記載しています。

```ts
// src/middleware.ts

// nonce の生成と使用は next.config.mjs では直接行えないため、middleware.ts で行う（現状はnonce未使用）
function setCspResponseHeader(response: NextResponse) {
  const cspHeader = `
    default-src 'self';
    script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
    style-src 'self' https: 'unsafe-inline';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  response.headers.set("Content-Security-Policy", cspHeader);
}
```

セキュリティヘッダーは[helmet](https://github.com/helmetjs/helmet)を参考にしています。

## アナリティクス/パフォーマンス監視

Vercelのものを使用しました。

```tsx
// src/app/layout.tsx

// imports..
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 省略.. 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
        {/* ここと */}
        <Analytics />
        {/* ここです。 */}
        <SpeedInsights />
      </body>
      <ClientSideSetUp />
    </html>
  );
}
```

## やらなかったこと

認証機能はつけていません。AppRouter/Server Actionsからの遠のき防止です。  
Next.js界隈の認証は[NextAuth.js](https://next-auth.js.org/)やベンダー提供の[Cleark](https://clerk.com/)、[Auth0](https://auth0.com/jp)、パブリッククラウドの認証サービスなどが人気でしょうか。

