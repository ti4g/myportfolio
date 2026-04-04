import RevealOnScroll from "./RevealOnScroll";

const timeline = [
  {
    date: "09/2025 – 03/2026",
    role: "Assistente Corporativo",
    company: "Motta (AGROJEM) · Palmas-TO",
    desc: "Gestão de contratos de TI e serviços recorrentes, uso do sistema SIAGRI e Zeev. Organização de dados e controle operacional de processos internos. Experiência direta com fluxos e sistemas de gestão (ERP).",
  },
  {
    date: "04/2024 – 09/2025",
    role: "Assistente Administrativo",
    company: "AABB Palmas · Palmas-TO",
    desc: "Controle financeiro, gestão de contratos e uso diário do pacote Office. Atendimento e suporte a processos internos com foco em organização e prazo.",
  },
  {
    date: "2023 – 2024",
    role: "Designer Visual",
    company: "Boutique Bella Chic · Palmas-TO",
    desc: "Criação da identidade visual e conteúdos digitais para redes sociais. Desenvolvimento de artes com foco em hierarquia visual, teoria das cores e engajamento. Padronização visual e atuação na presença digital da marca.",
  },
  {
    date: "07/2023 – 04/2024",
    role: "Assistente Administrativo",
    company: "SESC Sede Administrativa · Palmas-TO",
    desc: "Atualização de bancos de dados internos com controle de pedidos e fornecedores. Garantia de entregas no prazo e organização de informações operacionais.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 04 — Experiência
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-12">
            Trajetória
            <br />
            <em className="italic text-amber-400">profissional</em>
          </h2>
        </RevealOnScroll>

        <div className="relative pl-8 border-l border-gradient">
          {/* Gradient line overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600 via-white/10 to-transparent" />

          {timeline.map((item, i) => (
            <RevealOnScroll key={i}>
              <div className="relative pb-12 pl-8">
                {/* Dot */}
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-amber-600 border-2 border-[#0a0a0a] -translate-x-[calc(50%-0.5px)]" />

                <div className="font-mono text-xs text-amber-600 tracking-wider mb-1">
                  {item.date}
                </div>
                <h3 className="font-serif text-xl mb-1">{item.role}</h3>
                <div className="text-sm text-amber-400 mb-3">
                  {item.company}
                </div>
                <p className="text-sm text-stone-500 leading-7">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
