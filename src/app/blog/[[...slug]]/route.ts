const removalHeaders = {
  "Cache-Control": "public, max-age=86400",
  "Content-Type": "text/plain; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

export const dynamic = "force-static";

export function GET() {
  return new Response("This content has been permanently removed.\n", {
    status: 410,
    headers: removalHeaders,
  });
}

export function HEAD() {
  // Keep a non-empty cached payload. The HTTP server strips it for HEAD, while
  // Next.js can still size the force-static cache entry correctly.
  return new Response("This content has been permanently removed.\n", {
    status: 410,
    headers: removalHeaders,
  });
}
