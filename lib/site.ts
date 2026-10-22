// ============================================================
// CONFIGURAÇÃO DO SITE — edite aqui antes de publicar
// ============================================================

/** Endereço final do site (sem barra no fim). Usado em SEO, sitemap e Open Graph. */
export const SITE_URL = "https://www.impactacomunicacao.com.br";

/**
 * Contatos comerciais. Deixe "" para esconder.
 * whatsapp: só números com DDI e DDD, ex.: "5551999999999"
 * instagram: sem @, ex.: "impacta.digital"
 */
export const CONTATO = {
  email: "contato@impactacomunicacao.com.br",
  whatsapp: "5551993949307",
  whatsappExibicao: "(51) 99394-9307", // como o número aparece no site, ex.: "(51) 99999-9999"
  instagram: "",
};

export const EMPRESA = {
  nome: "Impacta Comunicação Digital",
  cidade: "Porto Alegre / RS",
  cnpj: "58.895.246/0001-59",
};

export function linkWhatsApp(texto: string) {
  if (!CONTATO.whatsapp) return null;
  return `https://wa.me/${CONTATO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(texto)}`;
}

// ------------------------------------------------------------
// Conteúdo (do portfólio institucional 2026)
// ------------------------------------------------------------

export const NAV_LINKS = [
  ["#quem-somos", "Quem somos"],
  ["#trajetoria", "Trajetória"],
  ["#solucoes", "Soluções"],
  ["#metodo", "Método"],
  ["#equipe", "Equipe"],
  ["#contato", "Contato"],
];

export const DESAFIOS = {
  pol: {
    num: "01",
    aba: "Política e eleitoral",
    titulo: "Comunicação política e eleitoral",
    chamada: "Do mandato à campanha, sem perder o fio.",
    texto: "Gestão de redes de mandatos, estratégia eleitoral, mobilização, reputação e comunicação em crises.",
    itens: ["Gestão de redes de mandatos", "Estratégia eleitoral", "Mobilização digital", "Gestão de crise e reputação", "Vídeos curtos e reels", "Mídia e performance"],
    modeloTexto: "Modelo indicado: gestão mensal + campanhas",
    modelo: "Gestão mensal",
  },
  inst: {
    num: "02",
    aba: "Institucional",
    titulo: "Comunicação institucional",
    chamada: "Clareza, consistência e leitura política.",
    texto: "Comunicação de mandatos, partidos e instituições públicas, com clareza, consistência e leitura política.",
    itens: ["Plano de comunicação", "Calendário editorial", "Comunicação pública clara", "Conteúdo multiformato", "Sites e presença digital", "Relatórios de desempenho"],
    modeloTexto: "Modelo indicado: gestão mensal",
    modelo: "Gestão mensal",
  },
  marca: {
    num: "03",
    aba: "Marcas, negócios e projetos",
    titulo: "Marcas, negócios e projetos",
    chamada: "Presença que vira conexão com clientes.",
    texto: "Presença digital, campanhas, diferenciação, conteúdo e conexão com potenciais clientes.",
    itens: ["Posicionamento e mensagem", "Identidade de campanha", "Redes sociais", "Anúncios e otimização", "Sites e páginas", "Vídeos e roteiros"],
    modeloTexto: "Modelo indicado: projeto especial ou gestão mensal",
    modelo: "Projeto especial",
  },
} as const;

export type DesafioKey = keyof typeof DESAFIOS;

export const MODELOS = ["Gestão mensal", "Projeto especial", "Campanha", "Ainda não sei"];

export const TRAJETORIA = [
  { quando: "2009", tag: "Início", titulo: "Mandatos e comunicação pública", texto: "Começa a experiência da direção estratégica, que antecede a constituição da Impacta como empresa.", marco: true },
  { quando: "2010–2017", tag: "Mandato federal", titulo: "Paulo Pimenta", texto: "Atuação na comunicação digital do mandato do deputado federal Paulo Pimenta." },
  { quando: "Câmara", tag: "Câmara dos Deputados", titulo: "Direitos Humanos", texto: "Assessor especial técnico da Comissão de Direitos Humanos e Minorias, na área de comunicação e estratégia digital." },
  { quando: "2018", tag: "Gestão de crise", titulo: "Pompeo de Mattos", texto: "Gestão de crise e coordenação digital do mandato do deputado do PDT, entre os mais influentes nas redes por dezenas de semanas consecutivas, segundo rankings semanais do Instituto FSB.", marco: true },
  { quando: "2018", tag: "Mobilização nacional", titulo: "Ciro Gomes", texto: "Criação e coordenação da maior rede digital de apoio à candidatura presidencial, conectando perfis, páginas e canais paralelos de mobilização em todo o país." },
  { quando: "2019–2022", tag: "Partido", titulo: "PDT Nacional", texto: "Assessoria de comunicação digital e atuação estratégica na estrutura nacional do partido." },
  { quando: "Desde 2021", tag: "Mandato federal", titulo: "Fernanda Melchionna", texto: "Atuação contínua na comunicação do mandato da deputada federal." },
  { quando: "2023–2024", tag: "Governo federal", titulo: "Secom / Presidência", texto: "Cerca de um ano na Secretaria de Comunicação Social da Presidência da República, no gabinete do ministro." },
];

export const FRENTES_2026 = [
  { n: "Senado", titulo: "Paulo Pimenta", papel: "Senado Federal", texto: "Direção criativa de vídeos virais nas redes sociais na candidatura ao Senado." },
  { n: "Câmara", titulo: "Fernanda Melchionna", papel: "Deputada federal · reeleita", texto: "Comunicação digital do mandato e da campanha de reeleição." },
  { n: "Assembleia", titulo: "Karen Santos", papel: "Deputada estadual · eleita", texto: "Participação na operação de comunicação digital da campanha vitoriosa." },
];

export const PASSOS = [
  { titulo: "Imersão", texto: "Contexto, briefing, público e objetivos." },
  { titulo: "Estratégia", texto: "Conceito, narrativa e direcionamento." },
  { titulo: "Criação", texto: "Peças, roteiros, formatos e campanhas." },
  { titulo: "Operação", texto: "Publicação, anúncios e acompanhamento." },
  { titulo: "Evolução", texto: "Métricas, aprendizados e otimização." },
];

export const ENTREGAS = [
  ["Plano de comunicação", "Direção estratégica e mensagens prioritárias."],
  ["Calendário editorial", "Pautas, formatos e sequência de publicações."],
  ["Conteúdo multiformato", "Cards, carrosséis, textos, roteiros e vídeos."],
  ["Campanhas digitais", "Peças, segmentação, mídia e desdobramentos."],
  ["Acompanhamento", "Indicadores, ajustes e aprendizados."],
];

export const METRICAS = [
  ["Visibilidade", "Alcance, impressões e frequência."],
  ["Atenção", "Retenção, visualizações e interação."],
  ["Qualidade", "Engajamento, respostas e percepção."],
  ["Eficiência", "Custos de mídia e evolução de desempenho."],
  ["Ação", "Cliques, contatos, cadastros ou conversões."],
];

export const FAQ = [
  ["A Impacta só trabalha com política?", "Não. Atuamos em três contextos: comunicação política e eleitoral, comunicação institucional (mandatos, partidos e instituições públicas) e marcas, negócios e projetos."],
  ["Como funciona a contratação?", "Existem três modelos: gestão mensal contínua, projeto especial com prazo definido e campanhas em períodos de mobilização. Entregas, cadência e equipe são definidas em proposta comercial específica."],
  ["Por onde começa o trabalho?", "Pela imersão: contexto, briefing, público e objetivos. Depois vêm estratégia, criação, operação e evolução, sempre adaptadas à necessidade de cada projeto."],
  ["Como vocês medem os resultados?", "Com indicadores definidos em conjunto, em cinco frentes: visibilidade, atenção, qualidade, eficiência e ação. O objetivo é não confundir alcance com impacto."],
  ["Vocês garantem resultado eleitoral?", "Não. Entregamos estratégia, conteúdo e operação digital. O resultado de uma eleição depende de muitos fatores além da comunicação nas redes."],
  ["Onde a Impacta fica?", "Em Porto Alegre, no Rio Grande do Sul. CNPJ 58.895.246/0001-59."],
];
