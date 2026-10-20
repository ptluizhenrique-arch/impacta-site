"use client";

import { useEffect, useRef, useState } from "react";
import { DESAFIOS, MODELOS, linkWhatsApp } from "@/lib/site";
import { Arrow } from "./Icons";

/** Monta um briefing curto e abre o WhatsApp (ou copia o texto, se não houver número configurado). */
export default function Brief() {
  const [nome, setNome] = useState("");
  const [ctx, setCtx] = useState<string>(DESAFIOS.pol.titulo);
  const [modelo, setModelo] = useState(MODELOS[0]);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [texto, setTexto] = useState("");
  const out = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<{ ctx: string; modelo: string }>).detail;
      setCtx(d.ctx);
      setModelo(d.modelo);
    };
    window.addEventListener("impacta:desafio", on);
    return () => window.removeEventListener("impacta:desafio", on);
  }, []);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!msg.trim()) {
      setStatus("Escreva o desafio em poucas linhas para montar o briefing.");
      msgRef.current?.focus();
      return;
    }
    const t = `Olá, Impacta!${nome.trim() ? ` Sou ${nome.trim()}.` : ""}\nContexto: ${ctx}\nModelo: ${modelo}\nDesafio: ${msg.trim()}`;
    setTexto(t);
    const wa = linkWhatsApp(t);
    if (wa) {
      window.open(wa, "_blank", "noopener");
      setStatus("Abrimos o WhatsApp com o seu briefing.");
      return;
    }
    try {
      await navigator.clipboard.writeText(t);
      setStatus("Briefing copiado. Cole na mensagem para a equipe.");
    } catch {
      setStatus("Briefing pronto. Selecione o texto abaixo e copie.");
    }
  }

  return (
    <form className="brief" onSubmit={enviar} noValidate>
      <div className="row">
        <div>
          <label htmlFor="fNome">Seu nome</label>
          <input id="fNome" autoComplete="name" placeholder="Nome e sobrenome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fCtx">Contexto</label>
          <select id="fCtx" value={ctx} onChange={(e) => setCtx(e.target.value)}>
            {Object.values(DESAFIOS).map((d) => (
              <option key={d.titulo} value={d.titulo}>{d.aba}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="fMod">Modelo de parceria</label>
        <select id="fMod" value={modelo} onChange={(e) => setModelo(e.target.value)}>
          {MODELOS.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="fMsg">O que precisamos transformar?</label>
        <textarea id="fMsg" ref={msgRef} placeholder="Conte o desafio em poucas linhas" value={msg} onChange={(e) => setMsg(e.target.value)} />
      </div>
      <div className="brief-actions">
        <button className="btn btn-ink" type="submit">
          Montar meu briefing <Arrow />
        </button>
        <span className="status" role="status">{status}</span>
      </div>
      {texto && (
        <div className="out show" ref={out}>
          {texto}
        </div>
      )}
    </form>
  );
}
