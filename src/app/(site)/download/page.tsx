import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-8 px-6 text-center">
      {/* Logo */}
      <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#D4A053] to-[#E8C078] text-[48px] shadow-[0_8px_32px_rgba(212,160,83,0.3)]">
        🍕
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold text-[#F5F5F5]">
          Deli&apos;Zza
        </h1>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-xs">
          Téléchargez l&apos;application pour commander, suivre vos livraisons
          et profiter d&apos;offres exclusives.
        </p>
      </div>

      {/* Store buttons (placeholder links) */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <a
          href="#apple-store-placeholder"
          className="flex items-center justify-center gap-3 rounded-[18px] bg-[#1A1A1A] border border-white/10 px-6 py-4 text-[15px] font-semibold text-[#F5F5F5] active:scale-95 transition-transform"
        >
          <span className="text-[24px]">🍎</span>
          App Store
        </a>
        <a
          href="#google-play-placeholder"
          className="flex items-center justify-center gap-3 rounded-[18px] bg-[#1A1A1A] border border-white/10 px-6 py-4 text-[15px] font-semibold text-[#F5F5F5] active:scale-95 transition-transform"
        >
          <span className="text-[24px]">▶️</span>
          Google Play
        </a>
      </div>

      <Link href="/" className="text-[13px] text-[#D4A053] hover:underline">
        ← Retour au site
      </Link>
    </div>
  );
}
