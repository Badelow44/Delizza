/**
 * Smart redirect helpers.
 * For now all CTAs redirect to /go?trigger=<action> which itself
 * redirects to /download. Deep-link URLs are placeholders.
 */

const DISMISS_KEY = "delizza_app_banner_dismissed";
const DISMISS_DAYS = 7;

export function buildGoUrl(trigger: string): string {
  return `/go?trigger=${encodeURIComponent(trigger)}`;
}

export function isBannerDismissed(): boolean {
  if (typeof window === "undefined") return false;
  const raw = localStorage.getItem(DISMISS_KEY);
  if (!raw) return false;
  const ts = Number(raw);
  if (Number.isNaN(ts)) return false;
  return Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000;
}

export function dismissBanner(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(DISMISS_KEY, String(Date.now()));
}
