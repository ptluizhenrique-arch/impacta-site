import { CONTATO, linkWhatsApp } from "@/lib/site";

/** Botão flutuante do WhatsApp, fixo no canto inferior direito. */
export default function WhatsAppFloat() {
  const href = linkWhatsApp("Olá, Impacta! Vim pelo site e quero conversar sobre comunicação.");
  if (!href) return null;
  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`Conversar no WhatsApp: ${CONTATO.whatsappExibicao || CONTATO.whatsapp}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        {/* balão de conversa */}
        <path
          d="M16 3.5C9.1 3.5 3.5 9 3.5 15.8c0 2.3.6 4.5 1.8 6.4L3.5 28.5l6.5-1.7c1.8 1 3.9 1.5 6 1.5 6.9 0 12.5-5.5 12.5-12.3S22.9 3.5 16 3.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* telefone */}
        <path
          d="M12.2 9.6c-.3-.6-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.8 4.5 7 6.1 3.5 1.4 4.2 1.1 4.9 1 .8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7l-1.2-3z"
          fill="currentColor"
        />
      </svg>
      <span className="wa-tip">Fale no WhatsApp</span>
    </a>
  );
}
