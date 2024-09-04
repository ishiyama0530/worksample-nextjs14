import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * This middleware implements various security headers and best practices:
 * - Content-Security-Policy (CSP): Prevents XSS and other injection attacks
 * - Cross-Origin policies: Protects against various cross-origin attacks
 * - Referrer-Policy: Controls the Referer header
 * - Strict-Transport-Security (HSTS): Enforces HTTPS
 * - X-Content-Type-Options: Prevents MIME type sniffing
 * - X-Frame-Options: Protects against clickjacking
 * - Permissions-Policy: Restricts browser features
 * - Removal of X-Powered-By: Reduces information disclosure
 *
 * Note: Some settings may need adjustment based on your application's needs.
 * Always test thoroughly before deploying to production.
 */
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const nonce = await generateNonce();

  const cspHeader = `
    default-src 'self';
    base-uri 'self';
    font-src 'self' https: data:;
    form-action 'self';
    frame-ancestors 'self';
    img-src 'self' data:;
    object-src 'none';
    script-src 'self' 'nonce-${nonce}';
    script-src-attr 'none';
    style-src 'self' https: 'unsafe-inline';
    upgrade-insecure-requests;
    block-all-mixed-content;
    require-trusted-types-for 'script';
  `
    .replace(/\s{2,}/g, " ")
    .trim();
  response.headers.set("Content-Security-Policy", cspHeader);

  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  response.headers.set("Origin-Agent-Cluster", "?1");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Download-Options", "noopen");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  response.headers.set("X-XSS-Protection", "0");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  );

  return response;
}

async function generateNonce(): Promise<string> {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return btoa(
    String.fromCharCode.apply(null, randomBytes as unknown as number[]),
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
