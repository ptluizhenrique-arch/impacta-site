"use client";

import { useState } from "react";
import { Logo } from "./Icons";
import { NAV_LINKS as LINKS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="top">
      <div className="wrap">
        <Logo />
        <ul className={`nav${open ? " open" : ""}`} id="nav" onClick={(e) => (e.target as HTMLElement).tagName === "A" && setOpen(false)}>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-lime" href="#contato">Fale com a gente</a>
        <button className="menu-btn" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
