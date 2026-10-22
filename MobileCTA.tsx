"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./Icons";

/** Botão fixo no rodapé da tela (só no celular). Some quando a seção de contato aparece. */
export default function MobileCTA() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("contato");
    if (!alvo || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { threshold: 0.05 });
    io.observe(alvo);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`mcta${hide ? " hide" : ""}`} aria-hidden={hide}>
      <a className="btn btn-lime" href="#contato" tabIndex={hide ? -1 : 0}>
        Fale com a gente <Arrow />
      </a>
    </div>
  );
}
