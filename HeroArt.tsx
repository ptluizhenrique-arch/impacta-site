"use client";

import { useEffect, useRef } from "react";
import { Chev } from "./Icons";

/** Círculo da marca: a seta gira para apontar ao cursor. */
export default function HeroArt() {
  const box = useRef<HTMLDivElement>(null);
  const chev = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = box.current?.getBoundingClientRect();
      if (!r || !r.width || !chev.current) return;
      const a = (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI + 90;
      chev.current.style.transform = `rotate(${a}deg)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="hero-art" ref={box} aria-hidden="true">
      <div className="ring r1" />
      <div className="ring r2" />
      <span className="dot l" />
      <span className="dot v" />
      <div className="disc">
        <div className="chev-wrap" ref={chev}>
          <Chev fill="var(--navy)" />
        </div>
      </div>
      <span className="hint">a seta aponta pra onde você vai</span>
    </div>
  );
}
