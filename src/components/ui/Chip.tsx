"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

interface ChipProps {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Chip({ label, icon, active, onClick }: ChipProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
        active
          ? "bg-gradient-to-br from-[#D4A053] to-[#E8C078] text-[#0D0D0D] shadow-[0_4px_20px_rgba(212,160,83,0.3)]"
          : "bg-[#252525] text-[#A0A0A0] hover:bg-[#2F2F2F]",
      )}
    >
      {icon && <span>{icon}</span>}
      {label}
    </motion.button>
  );
}
