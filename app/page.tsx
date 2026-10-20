import Header from "@/components/Header";
import HeroArt from "@/components/HeroArt";
import DesafioPicker from "@/components/DesafioPicker";
import Steps from "@/components/Steps";
import Brief from "@/components/Brief";
import { Arrow, Chev, Logo } from "@/components/Icons";
import { CONTATO, EMPRESA, NAV_LINKS, ENTREGAS, FAQ, FRENTES_2026, METRICAS, TRAJETORIA } from "@/lib/site";

const MARQUEE = ["Estratégia", "Redes sociais", "Design e criação", "Audiovisual", "Mídia e performance", "Sites"];

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        {/* HERO */}
        <section className="hero band dark">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="pill">Comunicação · Marketing · Campanhas</span>
                <h1>
                  <span>Estratégia</span>
                  <span>que conecta.</span>
                  <span className="hl">Comunicação</span>
                  <span className="hl" style={{ marginTop: 0 }}>que impacta.</span>
                </h1>
                <p>
                  Agência de comunicação digital em Porto Alegre. Estratégia, redes sociais e campanhas para mandatos,
                  instituições e marcas, com direção estratégica desde 2009.
                </p>
                <div className="ctas">
                  <a className="btn btn-lime" href="#contato">Quero um diagnóstico <Arrow /></a>
                  <a className="btn btn-ghost" href="#desafio">Qual é o meu desafio?</a>
                </div>
              </div>
              <HeroArt />
            </div>
            <div className="facts">
              <div className="fact"><b>2009</b><span>início da direção estratégica em comunicação pública</span></div>
              <div className="fact"><b>2018</b><span>abertura da Impacta em Porto Alegre</span></div>
              <div className="fact"><b>21</b><span>campanhas com gestão de redes em 2024</span></div>
              <div className="fact"><b>16</b><span>candidaturas eleitas em 2024</span></div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {MARQUEE.map((m) => (
                  <span key={m} className="mq-item">{m} <Chev size={14} /></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* VISÃO */}
        <section className="band light">
          <div className="wrap vision">
            <div>
              <span className="eyebrow">Nossa visão</span>
              <h2 style={{ marginTop: 18 }}>Não basta aparecer. <span className="hl">É preciso significar.</span></h2>
              <p className="lead">Transformamos informação em narrativa, presença em relevância e comunicação em conexão real com as pessoas.</p>
            </div>
            <div className="arrow-card">
              <svg viewBox="0 0 90 110" fill="none" stroke="var(--ink)" strokeWidth="11" aria-hidden="true"><path d="M45 108V12M8 48l37-37 37 37" /></svg>
              <span>Ideias<br />que movem</span>
            </div>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section className="band dark" id="quem-somos">
          <div className="wrap about">
            <div>
              <div className="head" style={{ marginBottom: 28 }}>
                <span className="eyebrow">Quem somos</span>
                <h2>A Impacta é estratégia.</h2>
              </div>
              <p className="lead">Uma agência de comunicação digital com direção estratégica experiente em mandatos, instituições e campanhas desde 2009.</p>
              <p className="claim">A Impacta atua desde 2018, apoiada na experiência de sua direção estratégica desde 2009.</p>
            </div>
            <aside className="cardbox">
              <div className="year">2018</div>
              <div className="cap">Ano de abertura<br />da empresa</div>
              <hr />
              <div className="city">PORTO ALEGRE / RS</div>
              <p>Estratégia digital, gestão de redes, comunicação institucional e campanhas.</p>
              <div className="cnpj">CNPJ {EMPRESA.cnpj}</div>
            </aside>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section className="band light" id="trajetoria">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Trajetória · 2009 a 2026</span>
              <h2>A origem do nosso repertório.</h2>
              <p className="lead">Comunicação política e estratégia digital em diferentes frentes. A mesma competência central: transformar cenários complexos em comunicação pública clara.</p>
            </div>
            <ol className="timeline">
              {TRAJETORIA.map((t) => (
                <li key={t.titulo} className={`tl${t.marco ? " key" : ""}`}>
                  <span className="when">{t.quando}</span>
                  <div><span className="tag">{t.tag}</span><h3>{t.titulo}</h3></div>
                  <p>{t.texto}</p>
                </li>
              ))}
            </ol>
            <p className="note">Resultados e reconhecimento apresentados conforme a trajetória profissional informada.</p>
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="band dark">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Atuação eleitoral</span>
              <h2>Resultado se constrói em equipe.</h2>
              <p className="lead">Planejamento, execução e acompanhamento de frentes digitais simultâneas.</p>
            </div>
            <p className="sub-h">Eleições municipais 2024</p>
            <div className="results">
              <div className="res a"><b>21</b><span>Campanhas com gestão de redes</span></div>
              <div className="res b"><b>16</b><span>Candidaturas eleitas</span></div>
            </div>
            <p className="sub-h">Eleições 2026 · três frentes</p>
            <div className="trio">
              {FRENTES_2026.map((f) => (
                <article key={f.titulo} className="mini">
                  <span className="n">{f.n}</span>
                  <h3>{f.titulo}</h3>
                  <span className="role">{f.papel}</span>
                  <p>{f.texto}</p>
                </article>
              ))}
            </div>
            <p className="note">Contribuições em comunicação. Resultados eleitorais dependem de múltiplos fatores além da atuação digital.</p>
          </div>
        </section>

        {/* DESAFIO */}
        <section className="band light" id="desafio">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Especialidades</span>
              <h2>Qual é o seu desafio?</h2>
              <p className="lead">A mensagem muda com o público. O rigor estratégico, não. Escolha o seu contexto e veja como a gente trabalha.</p>
            </div>
            <DesafioPicker />
            <div className="banner">
              <b>A linguagem das redes é nossa especialidade.</b>
              <p>Adequamos a imagem e a comunicação de cada político aos formatos e códigos de cada plataforma.</p>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section className="band dark" id="solucoes">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">O que fazemos</span>
              <h2>Soluções de ponta a ponta.</h2>
              <p className="lead">Planejamento, criação e operação conectados a um objetivo de comunicação.</p>
            </div>
            <div className="services">
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="16" stroke="var(--lime)" strokeWidth="3" /><circle cx="20" cy="20" r="6" fill="var(--lime)" /></svg><h3>Estratégia e posicionamento</h3><p>Diagnóstico, objetivos, mensagem-chave e arquitetura de comunicação.</p></article>
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" fill="none" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="square" aria-hidden="true"><path d="M6 34 34 6M14 6h20v20" /></svg><h3>Redes sociais</h3><p>Planejamento editorial, conteúdo, acompanhamento e gestão de presença.</p></article>
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><rect x="3" y="11" width="24" height="26" rx="3" fill="var(--lime)" /><rect x="12" y="3" width="25" height="25" rx="3" fill="var(--violet)" /></svg><h3>Design e criação</h3><p>Identidade de campanhas, peças gráficas e narrativas visuais.</p></article>
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" fill="none" stroke="var(--lime)" strokeWidth="3" aria-hidden="true"><circle cx="20" cy="20" r="16" /><path d="m17 13 7 7-7 7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg><h3>Audiovisual</h3><p>Roteiros, vídeos curtos, reels e adaptação de conteúdo para plataformas.</p></article>
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" fill="var(--lime)" aria-hidden="true"><rect x="5" y="22" width="7" height="14" /><rect x="16.5" y="14" width="7" height="22" /><rect x="28" y="5" width="7" height="31" /></svg><h3>Mídia e performance</h3><p>Estratégia de anúncios, otimização, indicadores e aprendizado.</p></article>
              <article className="svc"><svg className="ic" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="6" width="32" height="28" rx="3" stroke="var(--lime)" strokeWidth="3" /><path d="M4 13h32" stroke="var(--lime)" strokeWidth="3" /><circle cx="20" cy="23" r="4.5" fill="var(--lime)" /></svg><h3>Sites e presença digital</h3><p>Páginas, atualização de conteúdo e integração de canais digitais.</p></article>
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section className="band dark" id="metodo" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Nosso pensamento</span>
              <h2>Da mensagem ao movimento.</h2>
              <p className="lead">Uma comunicação forte começa por uma pergunta simples: o que precisamos transformar?</p>
            </div>
            <div className="think">
              <article><span className="n">01</span><h3>Entender</h3><p>Mergulhar no contexto, nas pessoas, nos desafios e no ambiente digital.</p><span className="lbl">Estratégia</span></article>
              <article className="on"><span className="n">02</span><h3>Conectar</h3><p>Encontrar as narrativas, os canais e os formatos capazes de gerar identificação.</p><span className="lbl">Criatividade</span></article>
              <article><span className="n">03</span><h3>Impactar</h3><p>Executar com consistência, acompanhar sinais e aperfeiçoar cada escolha.</p><span className="lbl">Resultados</span></article>
            </div>
            <div className="head">
              <span className="eyebrow">Nossa metodologia</span>
              <h2>Do insight à entrega.</h2>
              <p className="lead">Uma jornada estruturada para dar consistência à criatividade. Toque em cada etapa.</p>
            </div>
            <Steps />
            <p className="steps-note">Todas as etapas são adaptadas à necessidade de cada projeto.</p>
          </div>
        </section>

        {/* ENTREGAS */}
        <section className="band light">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">O que entregamos</span>
              <h2>Estratégia que vira rotina.</h2>
              <p className="lead">Cada parceria é desenhada conforme o escopo e o momento da marca.</p>
            </div>
            <ol className="deliver">
              {ENTREGAS.map(([t, d], i) => (
                <li key={t}><span className="n">{String(i + 1).padStart(2, "0")}</span><b>{t}</b><span>{d}</span></li>
              ))}
            </ol>
          </div>
        </section>

        {/* MENSURAÇÃO */}
        <section className="band dark">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Mensuração</span>
              <h2>Criatividade com direção.</h2>
              <p className="lead">Avaliamos o que importa para cada objetivo, sem confundir alcance com impacto.</p>
            </div>
            <div className="metrics">
              {METRICAS.map(([t, d]) => (
                <div key={t} className="metric"><b>{t}</b><span>{d}</span></div>
              ))}
            </div>
            <div className="claimline">
              <b>Relatórios claros. Decisões mais inteligentes.</b>
              <span>Indicadores definidos em conjunto, conforme o escopo e os dados disponíveis.</span>
            </div>
          </div>
        </section>

        {/* PARCERIAS */}
        <section className="band light">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Parcerias</span>
              <h2>Cada desafio pede uma solução.</h2>
              <p className="lead">Escopos flexíveis, conforme os objetivos, os canais e a intensidade de operação.</p>
            </div>
            <div className="models">
              <article className="model"><span className="chip">Contínua</span><h3>Gestão mensal</h3><p>Planejamento, produção e gestão de uma presença digital consistente.</p></article>
              <article className="model on"><span className="chip">Pontual</span><h3>Projeto especial</h3><p>Identidades, vídeos, peças, sites e demandas específicas com prazo definido.</p></article>
              <article className="model"><span className="chip">Intensiva</span><h3>Campanhas</h3><p>Estratégia, criação e operação coordenada em períodos de mobilização.</p></article>
            </div>
            <p className="note">As entregas, a cadência e a equipe envolvida são definidas em proposta comercial específica.</p>
          </div>
        </section>

        {/* POR QUE */}
        <section className="band dark why">
          <div className="wrap">
            <span className="eyebrow">Por que a Impacta</span>
            <h2 style={{ marginTop: 18 }}>Não entregamos apenas peças. <span className="hl">Entregamos direção.</span></h2>
            <div className="reasons">
              <div><b>Estratégia</b><span>Cada formato deve responder a um objetivo.</span></div>
              <div><b>Linguagem</b><span>Comunicação clara, contemporânea e contextual.</span></div>
              <div><b>Integração</b><span>Planejamento, criação e operação na mesma direção.</span></div>
              <div><b>Experiência</b><span>Repertório em comunicação política e institucional desde 2009.</span></div>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="band dark" id="equipe" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Liderança e direção de projetos</span>
              <h2>Nossa equipe. Nossa força.</h2>
            </div>
            <div className="team">
              <article className="person">
                <div className="photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/equipe/luiz.jpg" alt="Luiz Henrique Barbudinho" width={600} height={830} loading="lazy" />
                  <em>CEO</em>
                </div>
                <div>
                  <h3>Luiz Henrique Barbudinho</h3>
                  <span className="role">CEO · Estrategista digital</span>
                  <p>Consultor e palestrante, atua em estratégia digital desde 2009. Acumula experiência com comunicação de mandatos, partidos, campanhas e órgãos públicos, incluindo gestão de crises e mobilização nas redes.</p>
                  <p className="edu">Graduado em Marketing; pós-graduado em Política e Relações Internacionais (FAAP); MBA em Neurociência, Consumo e Marketing (PUCRS). Mestrando em Comunicação na UniAtlântico, Espanha.</p>
                </div>
              </article>
              <article className="person">
                <div className="photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/equipe/daniel.jpg" alt="Daniel Strunkis" width={600} height={830} loading="lazy" />
                  <em>DIRETOR</em>
                </div>
                <div>
                  <h3>Daniel Strunkis</h3>
                  <span className="role">Diretor de projetos</span>
                  <p>Responsável pela organização e execução de projetos, integrando planejamento, processos e entregas digitais com foco em eficiência, criatividade e qualidade.</p>
                  <p className="edu">Graduando em Engenharia, certificado em Gestão de Projetos e Metodologias Ágeis. Conhecimentos em inteligência artificial, análise de dados, criação de roteiros e edição de vídeos.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="band light">
          <div className="wrap faq">
            <div className="head" style={{ margin: 0 }}>
              <span className="eyebrow">Dúvidas</span>
              <h2>A gente responde.</h2>
              <p className="lead">Não achou o que procurava? Fale direto com a equipe.</p>
            </div>
            <div>
              {FAQ.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}<i>+</i></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="final" id="contato">
          <div className="l">
            <div className="in">
              <h2>O próximo impacto começa aqui.</h2>
              <p>Da estratégia à execução: comunicação digital com repertório, criatividade e impacto.</p>
              <Brief />
              <div className="contact-list">
                {CONTATO.email && <a href={`mailto:${CONTATO.email}`}>E-mail: {CONTATO.email}</a>}
                {CONTATO.whatsapp && (
                  <a href={`https://wa.me/${CONTATO.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener">
                    WhatsApp: {CONTATO.whatsappExibicao || CONTATO.whatsapp}
                  </a>
                )}
                {CONTATO.instagram && (
                  <a href={`https://www.instagram.com/${CONTATO.instagram}/`} target="_blank" rel="noopener">Instagram: @{CONTATO.instagram}</a>
                )}
                <span style={{ opacity: 0.7 }}>{EMPRESA.cidade} · CNPJ {EMPRESA.cnpj}</span>
              </div>
            </div>
          </div>
          <div className="r">
            <div className="art" aria-hidden="true">
              <div className="ring" />
              <div className="ring r2" />
              <Chev fill="var(--lime)" />
            </div>
            <p className="tagline">Estratégia<br />+ criação<br />+ impacto</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Logo />
          <nav aria-label="Rodapé">
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} {EMPRESA.nome} · {EMPRESA.cidade} · CNPJ {EMPRESA.cnpj}</span>
        </div>
      </footer>
    </>
  );
}
