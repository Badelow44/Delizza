"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { HeroSlide } from "@/types";
import { cn } from "@/lib/cn";
import { buildGoUrl } from "@/lib/redirect";
import Link from "next/link";

interface CarouselProps {
  slides: HeroSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <div className="relative overflow-hidden rounded-[24px] bg-[#1A1A1A]">
      {/* Image area */}
      <div className="relative aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Badge */}
        <span className="absolute top-3 left-3 z-10 rounded-full bg-gradient-to-br from-[#D4A053] to-[#E8C078] px-3 py-1 text-[11px] font-bold text-[#0D0D0D]">
          {slide.badge}
        </span>

        {/* Price pill */}
        <span className="absolute top-3 right-3 z-10 rounded-full bg-[#0D0D0D]/70 backdrop-blur-sm px-3 py-1 text-[13px] font-bold text-[#D4A053]">
          {slide.price.toFixed(2)}&nbsp;€
        </span>
      </div>

      {/* Bottom content */}
      <div className="px-4 pb-4 pt-3">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#D4A053]">
          {slide.subtitle}
        </p>
        <h2 className="mt-1 text-[22px] font-bold text-[#F5F5F5]">
          {slide.title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <Link
            href={buildGoUrl("hero_cta_" + slide.id)}
            className={cn(
              "inline-flex items-center justify-center rounded-[18px] px-6 py-2.5",
              "bg-gradient-to-br from-[#D4A053] to-[#E8C078] text-[15px] font-semibold text-[#0D0D0D]",
              "shadow-[0_4px_20px_rgba(212,160,83,0.3)] active:scale-95 transition-transform",
            )}
          >
            {slide.ctaLabel}
          </Link>

          {/* Dots */}
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-6 bg-[#D4A053]"
                    : "w-2 bg-[#6B6B6B] hover:bg-[#A0A0A0]",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Swipe zones (tap arrows) */}
      <button
        onClick={prev}
        className="absolute left-0 top-0 h-full w-1/4 z-10"
        aria-label="Précédent"
      />
      <button
        onClick={next}
        className="absolute right-0 top-0 h-full w-1/4 z-10"
        aria-label="Suivant"
      />
    </div>
  );
}
