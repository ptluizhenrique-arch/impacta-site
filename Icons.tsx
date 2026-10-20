type P = { className?: string; fill?: string; size?: number; id?: string; style?: React.CSSProperties };

/** Seta-chevron da marca Impacta */
export function Chev({ className, fill = "currentColor", size, id, style }: P) {
  return (
    <svg id={id} className={className} style={style} viewBox="0 0 100 100" width={size} height={size} fill={fill} aria-hidden="true">
      <polygon points="0,48 50,0 100,48 100,100 50,54 0,100" />
    </svg>
  );
}

export function Arrow({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Impacta Comunicação Digital, início">
      <Chev fill="var(--lime)" />
      <span>
        <b>IMPACTA</b>
        <small>COMUNICAÇÃO DIGITAL</small>
      </span>
    </a>
  );
}
