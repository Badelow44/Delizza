import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-6 text-center md:px-10">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <Link
          href="/privacy"
          className="text-[12px] text-[#6B6B6B] transition-colors hover:text-[#A0A0A0]"
        >
          Politique de confidentialité
        </Link>
        <span className="text-[12px] text-[#3A3A3A]" aria-hidden="true">·</span>
        <Link
          href="/terms"
          className="text-[12px] text-[#6B6B6B] transition-colors hover:text-[#A0A0A0]"
        >
          Conditions d&apos;utilisation
        </Link>
        <span className="text-[12px] text-[#3A3A3A]" aria-hidden="true">·</span>
        <span className="text-[12px] text-[#3A3A3A]">
          © {new Date().getFullYear()} Deli&apos;Zza
        </span>
      </div>
    </footer>
  );
}
