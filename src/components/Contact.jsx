import RevealOnScroll from "./RevealOnScroll";

const contacts = [
  {
    icon: "✉",
    label: "E-mail",
    value: "tiagokxb@gmail.com",
    href: "mailto:tiagokxb@gmail.com",
  },
  {
    icon: "📱",
    label: "Telefone",
    value: "(63) 99961-4831",
    href: "tel:+5563999614831",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/tiagokxb",
    href: "https://www.linkedin.com/in/tiagokxb",
  },
  {
    icon: "⟨/⟩",
    label: "GitHub",
    value: "github.com/ti4g",
    href: "https://github.com/ti4g",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="font-mono text-[.65rem] text-amber-600 tracking-[.2em] uppercase block mb-3">
            // 06 — Contato
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-4">
            Vamos <em className="italic text-amber-400">conversar?</em>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="text-lg text-stone-500 max-w-lg mx-auto font-light mb-12">
            Estou disponível para oportunidades, projetos freelance e
            colaborações. Vamos transformar ideias em interfaces.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 px-5 py-4 border border-white/5 rounded-xl bg-[#111] hover:border-amber-600/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-xl">{c.icon}</span>
                <div className="text-left">
                  <div className="text-[.6rem] text-stone-500 tracking-widest uppercase">
                    {c.label}
                  </div>
                  <div className="text-sm text-stone-300">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <a
            href="mailto:tiagokxb@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm uppercase tracking-wider font-medium rounded-full bg-amber-600 border border-amber-600 text-[#0a0a0a] hover:bg-amber-400 hover:border-amber-400 transition-all duration-300"
          >
            Entrar em contato ↗
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
