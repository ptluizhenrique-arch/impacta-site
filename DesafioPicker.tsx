"use client";

import { useRef, useState } from "react";
import { DESAFIOS, type DesafioKey } from "@/lib/site";
import { Arrow } from "./Icons";

const KEYS = Object.keys(DESAFIOS) as DesafioKey[];

/** Seletor "Qual é o seu desafio?" — equivalente ao "Qual é a sua fase?" do BL Move. */
export default function DesafioPicker() {
  const [cur, setCur] = useState<DesafioKey>("pol");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const d = DESAFIOS[cur];

  function onKey(e: React.KeyboardEvent, i: number) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowDown" ? 1 : KEYS.length - 1)) % KEYS.length;
    tabs.current[n]?.focus();
    setCur(KEYS[n]);
  }

  function levarAoBriefing() {
    window.dispatchEvent(new CustomEvent("impacta:desafio", { detail: { ctx: d.titulo, modelo: d.modelo } }));
  }

  return (
    <div className="picker">
      <div className="tabs" role="tablist" aria-label="Contextos de atuação">
        {KEYS.map((k, i) => (
          <button
            key={k}
            ref={(el) => { tabs.current[i] = el; }}
            className="tab"
            role="tab"
            id={`t-${k}`}
            aria-controls="panel"
            aria-selected={cur === k}
            tabIndex={cur === k ? 0 : -1}
            onClick={() => setCur(k)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <small>{DESAFIOS[k].num}</small>
            {DESAFIOS[k].aba}
            <Arrow />
          </button>
        ))}
      </div>
      <div className="panel" role="tabpanel" id="panel" aria-labelledby={`t-${cur}`} aria-live="polite">
        <span className="k">{d.titulo}</span>
        <h3>{d.chamada}</h3>
        <p>{d.texto}</p>
        <ul>
          {d.itens.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className="foot">
          <span>{d.modeloTexto}</span>
          <a className="btn btn-ink" href="#contato" onClick={levarAoBriefing}>
            Conversar sobre isso <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
