"use client";

import { useState, useSyncExternalStore, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBannerDismissed, dismissBanner } from "@/lib/redirect";
import Link from "next/link";

function useBannerVisible() {
  const subscribe = useCallback((cb: () => void) => {
    window.addEventListener("storage", cb);
    return () => window.removeEventListener("storage", cb);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => !isBannerDismissed(),
    () => false,
  );
}

export default function AppBanner() {
  const shouldShow = useBannerVisible();
  const [dismissed, setDismissed] = useState(false);

  const visible = shouldShow && !dismissed;

  const handleDismiss = () => {
    dismissBanner();
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#D4A053] to-[#E8C078] px-4 py-3 flex items-center justify-between gap-3 safe-top"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[20px]">🍕</span>
            <p className="text-[13px] font-semibold text-[#0D0D0D] truncate">
              Télécharge l&apos;app Deli&apos;Zza pour commander&nbsp;!
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/download"
              className="rounded-full bg-[#0D0D0D] px-4 py-1.5 text-[12px] font-bold text-[#D4A053]"
            >
              Installer
            </Link>
            <button
              onClick={handleDismiss}
              className="text-[#0D0D0D]/60 hover:text-[#0D0D0D] text-[18px] font-bold leading-none"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
