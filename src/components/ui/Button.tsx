"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
  full?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus:outline-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-br from-[#D4A053] to-[#E8C078] text-[#0D0D0D] shadow-[0_4px_20px_rgba(212,160,83,0.3)]",
  outline:
    "border border-[#D4A053] text-[#D4A053] bg-transparent hover:bg-[#D4A053]/10",
  ghost: "text-[#A0A0A0] bg-transparent hover:bg-white/5",
  dark: "bg-[#252525] text-[#F5F5F5] hover:bg-[#2F2F2F]",
};

export default function Button({
  variant = "gold",
  children,
  icon,
  full,
  className,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(
        base,
        variants[variant],
        "rounded-[18px] px-6 py-3 text-[15px]",
        full && "w-full",
        className,
      )}
      {...(rest as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {icon}
      {children}
    </motion.button>
  );
}
