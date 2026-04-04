import RevealOnScroll from "./RevealOnScroll";

const courses = [
  { name: "Pacote Office Avançado", info: "Enjoy · 120h" },
  { name: "Inglês Instrumental", info: "CNA Palmas · 88h" },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 bg-[#111] border-y border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 05 — Formação
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-10">
            Educação &<br />
            <em className="italic text-amber-400">certificações</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row items-center gap-6 p-8 border border-white/5 rounded-2xl bg-[#0a0a0a] mb-6">
            <div className="text-5xl">🎓</div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl mb-1">
                Tecnologia em Sistemas para Internet
              </h3>
              <p className="text-amber-400 text-sm mb-1">
                IFTO – Instituto Federal do Tocantins, Campus Palmas
              </p>
              <p className="font-mono text-xs text-stone-500 tracking-wider">
                2023 → 2027 · 4° Período
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div
                key={c.name}
                className="p-5 border border-white/5 rounded-xl bg-[#0a0a0a] hover:border-amber-600/30 transition-colors"
              >
                <h4 className="font-medium mb-1">{c.name}</h4>
                <p className="text-sm text-stone-500">{c.info}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
