import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    tag: "Plataforma de Revenda",
    name: "JaFoiMeu",
    url: "https://ti4g.github.io/JaFoiMeu/",
    desc: "Plataforma de revenda digital com foco em organização, visualização e navegação intuitiva. Interface responsiva priorizando experiência do usuário e usabilidade.",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    tag: "Catálogo Digital",
    name: "Sneaker Drops",
    url: "https://ti4g.github.io/Sneaker-Drops/",
    desc: "Catálogo digital de tênis com design moderno e UX centrada no produto. Exibição dinâmica com organização de informações e integração de conceitos de design.",
    stack: ["HTML", "CSS", "JavaScript", "UI Design"],
  },
  {
    tag: "Aplicação Temática",
    name: "CyberCoffee",
    url: "https://ti4g.github.io/CyberCoffee/",
    desc: "Aplicação web temática com identidade visual imersiva e design responsivo. Exploração de layouts, estilos e interatividade no desenvolvimento front-end.",
    stack: ["HTML", "CSS", "JavaScript", "Responsivo"],
  },
  {
    tag: "Plataforma Interativa",
    name: "WhatIsAllmosso",
    url: "https://ti4g.github.io/whatisallmosso/",
    desc: "Aplicação web interativa com foco em experiência do usuário e navegação dinâmica. Layout moderno e responsivo com manipulação de conteúdos via JavaScript.",
    stack: ["JavaScript", "HTML", "CSS", "Front-End"],
  },
  {
    tag: "Interface Temática",
    name: "AceVolley",
    url: "https://ti4g.github.io/AceVolley/",
    desc: "Interface temática com foco em hierarquia visual e responsividade. Design moderno para apresentação de conteúdo esportivo com navegação fluida.",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <RevealOnScroll>
      <div
        className={`group grid md:grid-cols-2 border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0a] hover:border-amber-600/30 transition-all duration-400 hover:-translate-y-1 ${isReversed ? "md:direction-rtl" : ""}`}
      >
        {/* Preview */}
        <div
          className={`relative aspect-video md:aspect-auto overflow-hidden bg-[#1a1a1a] ${isReversed ? "md:order-2" : ""}`}
        >
          <iframe
            src={project.url}
            title={project.name}
            loading="lazy"
            className="w-[200%] h-[200%] border-none scale-50 origin-top-left pointer-events-none"
          />
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-[#0a0a0a]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          >
            <span className="px-6 py-2.5 text-sm uppercase tracking-wider rounded-full border border-amber-600 text-amber-300 bg-[#0a0a0a]/80 hover:bg-amber-600 hover:text-[#0a0a0a] transition-all">
              Acessar ↗
            </span>
          </a>
        </div>

        {/* Info */}
        <div
          className={`p-8 md:p-10 flex flex-col justify-center ${isReversed ? "md:order-1 md:text-right md:items-end" : ""}`}
        >
          <span className="inline-block font-mono text-[.6rem] text-amber-600 tracking-[.12em] uppercase border border-amber-600/30 px-3 py-1 rounded-full mb-4 w-fit">
            {project.tag}
          </span>
          <h3 className="font-serif text-2xl mb-3">{project.name}</h3>
          <p className="text-sm text-stone-500 leading-7 mb-5">
            {project.desc}
          </p>
          <div
            className={`flex gap-2 flex-wrap mb-5 ${isReversed ? "md:justify-end" : ""}`}
          >
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-[.65rem] px-3 py-1 rounded-full bg-[#1a1a1a] text-stone-500 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
          {/* Botão acessível em mobile (hover não funciona em touch) */}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={`md:hidden self-start inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-amber-600/60 text-amber-400 hover:bg-amber-600 hover:text-[#0a0a0a] transition-all ${isReversed ? "md:self-end" : ""}`}
          >
            Acessar ↗
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-[#111] border-y border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 03 — Projetos
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-12">
            Projetos em
            <br />
            <em className="italic text-amber-400">destaque</em>
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
