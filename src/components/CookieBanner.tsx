"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentChoice = "accepted" | "refused" | "custom";

type ConsentData = {
  choice: ConsentChoice;
  analytics?: boolean;
  marketing?: boolean;
};

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function saveConsent(data: ConsentData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setVisible(false);
  }

  function handleAcceptAll() {
    saveConsent({ choice: "accepted", analytics: true, marketing: true });
  }

  function handleRefuseAll() {
    saveConsent({ choice: "refused", analytics: false, marketing: false });
  }

  function handleSaveCustom() {
    saveConsent({ choice: "custom", analytics, marketing });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#161616] px-4 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] md:bottom-6 md:left-1/2 md:right-auto md:w-[480px] md:-translate-x-1/2 md:rounded-2xl md:border md:border-white/10"
    >
      {!showCustomize ? (
        <>
          <p className="mb-1 text-[15px] font-semibold text-[#F5F5F5]">
            Nous utilisons des cookies 🍪
          </p>
          <p className="mb-4 text-[13px] text-[#A0A0A0]">
            Ce site utilise des cookies pour améliorer votre expérience. Consultez notre{" "}
            <Link href="/privacy" className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]">
              politique de confidentialité
            </Link>{" "}
            pour en savoir plus.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={handleAcceptAll}
              className="flex-1 rounded-xl bg-[#D4A053] px-4 py-2.5 text-[14px] font-semibold text-[#0D0D0D] transition-colors hover:bg-[#E8C078] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A053]"
            >
              Accepter tout
            </button>
            <button
              onClick={() => setShowCustomize(true)}
              className="flex-1 rounded-xl border border-white/15 px-4 py-2.5 text-[14px] font-medium text-[#F5F5F5] transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A053]"
            >
              Personnaliser
            </button>
            <button
              onClick={handleRefuseAll}
              className="flex-1 rounded-xl border border-white/15 px-4 py-2.5 text-[14px] font-medium text-[#A0A0A0] transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A053]"
            >
              Refuser
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-3 text-[15px] font-semibold text-[#F5F5F5]">
            Personnaliser mes préférences
          </p>
          <div className="mb-4 flex flex-col gap-3">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 h-4 w-4 accent-[#D4A053]"
                aria-label="Cookies essentiels (obligatoires)"
              />
              <span className="text-[13px] text-[#A0A0A0]">
                <span className="font-medium text-[#F5F5F5]">Essentiels</span> — nécessaires au bon
                fonctionnement du site (toujours actifs).
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#D4A053]"
                aria-label="Cookies analytiques"
              />
              <span className="text-[13px] text-[#A0A0A0]">
                <span className="font-medium text-[#F5F5F5]">Analytiques</span> — nous aident à
                comprendre comment vous utilisez le site.
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#D4A053]"
                aria-label="Cookies marketing"
              />
              <span className="text-[13px] text-[#A0A0A0]">
                <span className="font-medium text-[#F5F5F5]">Marketing</span> — utilisés pour vous
                proposer des offres personnalisées.
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={handleSaveCustom}
              className="flex-1 rounded-xl bg-[#D4A053] px-4 py-2.5 text-[14px] font-semibold text-[#0D0D0D] transition-colors hover:bg-[#E8C078] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A053]"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setShowCustomize(false)}
              className="flex-1 rounded-xl border border-white/15 px-4 py-2.5 text-[14px] font-medium text-[#A0A0A0] transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A053]"
            >
              Retour
            </button>
          </div>
        </>
      )}
    </div>
  );
}
