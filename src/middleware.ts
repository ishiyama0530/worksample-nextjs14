import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  setCspResponseHeader(response);

  return response;
}

// nonce の生成と使用は next.config.mjs では直接行えないため、middleware.ts で行う（現状はnonce未使用）
function setCspResponseHeader(response: NextResponse) {
  const cspHeader = `
    default-src 'self';
    script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
    style-src 'self' https: 'unsafe-inline';
  `;

  response.headers.set("Content-Security-Policy", cspHeader);
}

// NOTE: unused
// async function generateNonce(): Promise<string> {
//   const randomBytes = new Uint8Array(16);
//   crypto.getRandomValues(randomBytes);
//   return btoa(
//     String.fromCharCode.apply(null, randomBytes as unknown as number[]),
//   );
// }
