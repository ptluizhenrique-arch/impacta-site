import { ImageResponse } from "next/og";

export const alt = "Impacta Comunicação Digital: estratégia que conecta, comunicação que impacta.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de compartilhamento (WhatsApp, LinkedIn, etc.), gerada no build. */
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0e1228", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, fontWeight: 800, letterSpacing: 3 }}>
            <svg width="40" height="40" viewBox="0 0 100 100"><polygon points="0,48 50,0 100,48 100,100 50,54 0,100" fill="#cdfe62" /></svg>
            IMPACTA
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 48, fontSize: 76, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
            <span>ESTRATÉGIA</span>
            <span>QUE CONECTA.</span>
            <span style={{ color: "#cdfe62", marginTop: 14 }}>COMUNICAÇÃO</span>
            <span style={{ color: "#cdfe62" }}>QUE IMPACTA.</span>
          </div>
          <div style={{ marginTop: 40, fontSize: 22, letterSpacing: 4, color: "#a7abc0" }}>COMUNICAÇÃO • MARKETING • CAMPANHAS</div>
        </div>
        <div style={{ display: "flex", flex: 1, background: "#20243e", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", width: 300, height: 300, borderRadius: 300, background: "#cdfe62", alignItems: "center", justifyContent: "center" }}>
            <svg width="150" height="150" viewBox="0 0 100 100"><polygon points="0,48 50,0 100,48 100,100 50,54 0,100" fill="#0e1228" /></svg>
          </div>
        </div>
      </div>
    ),
    size
  );
}
