import RevealOnScroll from "./RevealOnScroll";

const skills = [
  {
    icon: "🎨",
    name: "Design",
    items: "Figma · Canva · Photoshop\nUI/UX Design · Identidade Visual\nHierarquia visual · Teoria das cores",
  },
  {
    icon: "⟨/⟩",
    name: "Front-End",
    items: "HTML5 · CSS3 · JavaScript\nDesign Responsivo · Git / GitHub\nPerformance · Acessibilidade (WCAG)",
  },
  {
    icon: "⚙️",
    name: "Gestão & Ferramentas",
    items: "Trello · NocoDB · Zeev · SIAGRI\nExcel · Word · PowerPoint · Teams\nOrganização de processos",
  },
  {
    icon: "🧠",
    name: "Competências",
    items: "Pensamento analítico\nArquitetura de informação\nAutonomia e foco em resultado\nAdaptação a novos sistemas",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 02 — Habilidades
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-12">
            Ferramentas &<br />
            <em className="italic text-amber-400">competências</em>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <RevealOnScroll key={s.name}>
              <div className="group relative p-6 border border-white/5 rounded-2xl bg-[#111] overflow-hidden hover:-translate-y-1 transition-all duration-400 hover:border-amber-600/40">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-600 to-amber-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-lg mb-3">{s.name}</h3>
                <p className="text-sm text-stone-500 leading-7 whitespace-pre-line">
                  {s.items}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
