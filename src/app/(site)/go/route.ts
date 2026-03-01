import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

/**
 * Smart redirect route.
 * Detects OS (placeholder) and redirects to /download for now.
 * In the future this will deep-link into the native app.
 */
export function GET(request: NextRequest) {
  const trigger = request.nextUrl.searchParams.get("trigger") ?? "unknown";

  // TODO: detect OS via User-Agent and redirect to appropriate store
  // const ua = request.headers.get("user-agent") ?? "";
  // const isIOS = /iPhone|iPad|iPod/i.test(ua);
  // const isAndroid = /Android/i.test(ua);

  // For now always redirect to the download page with the trigger info
  redirect(`/download?from=${encodeURIComponent(trigger)}`);
}
