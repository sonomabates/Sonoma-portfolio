"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-[#EADBC8] bg-[#FFFDF8] px-4 py-2.5 text-sm font-medium text-[#4A4136] shadow-[0_6px_24px_rgba(180,140,80,0.12)] transition-all duration-300 hover:border-[#D4C4B0] hover:shadow-[0_8px_28px_rgba(180,140,80,0.16)] hover:text-[#C97A5A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      aria-label="Back to top"
    >
      Back to top
    </button>
  );
}
