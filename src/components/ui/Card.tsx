import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[18px] bg-[#1A1A1A] shadow-[0_4px_16px_rgba(0,0,0,0.4)] overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
