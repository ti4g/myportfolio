import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { number: "5+", label: "Projetos publicados" },
  { number: "20", label: "Anos — Palmas, TO" },
  { number: "3+", label: "Anos de experiência" },
  { number: "4°", label: "Período — IFTO" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-[#111] border-y border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 01 — Sobre mim
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-12">
            Visão técnica com
            <br />
            <em className="italic text-amber-400">sensibilidade de design</em>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealOnScroll>
            <div className="text-[1.05rem] text-stone-500 font-light leading-relaxed space-y-5">
              <p>
                Desenvolvedor web e designer digital com foco em interfaces{" "}
                <strong className="text-stone-200 font-medium">
                  modernas, responsivas e centradas no usuário
                </strong>
                . Cursando Tecnologia em Sistemas para Internet no IFTO –
                Campus Palmas, atualmente no 4° período.
              </p>
              <p>
                Meu diferencial está na junção de{" "}
                <strong className="text-stone-200 font-medium">
                  visão técnica
                </strong>{" "}
                (HTML/CSS/JS) com{" "}
                <strong className="text-stone-200 font-medium">
                  sensibilidade de design
                </strong>{" "}
                o que me permite pensar em fluxos, hierarquia visual e
                experiência do usuário de forma completa.
              </p>
              <p>
                Tenho experiência prática na criação de identidades visuais,
                layouts funcionais e aplicações web que unem{" "}
                <strong className="text-stone-200 font-medium">
                  estética e usabilidade
                </strong>
                .
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 border border-white/5 rounded-xl bg-[#1a1a1a] hover:border-amber-600/40 transition-colors duration-300"
                >
                  <div className="font-serif text-4xl text-amber-400 leading-none">
                    {s.number}
                  </div>
                  <div className="text-xs text-stone-500 mt-2 tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
