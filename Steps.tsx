"use client";

import { useState } from "react";
import { PASSOS } from "@/lib/site";

export default function Steps() {
  const [ativo, setAtivo] = useState(0);
  return (
    <ol className="steps" style={{ "--p": `${(ativo / PASSOS.length) * 100}%` } as React.CSSProperties}>
      {PASSOS.map((p, i) => (
        <li key={p.titulo}>
          <button className="step" aria-pressed={ativo === i} onClick={() => setAtivo(i)}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <span className="b" />
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </button>
        </li>
      ))}
    </ol>
  );
}
