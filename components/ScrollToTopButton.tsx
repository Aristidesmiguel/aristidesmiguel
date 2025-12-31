"use client";

import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6
        bg-cyan-500/20 text-white
        p-3 rounded-full
        shadow-lg
        hover:opacity-80
        transition cursor-pointer duration-200
"
      aria-label="Voltar para o topo"
    >
      <ArrowBigUpDash />
    </button>
  );
}
