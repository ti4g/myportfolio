export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-[30%] -right-[20%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(201,117,61,.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,169,106,.05)_0%,transparent_70%)] pointer-events-none" />

      <span className="font-mono text-xs text-amber-600 tracking-[.2em] uppercase mb-6 animate-fade-up opacity-0 [animation-delay:.3s] [animation-fill-mode:forwards]">
        // Desenvolvedor Web &amp; Designer UI/UX
      </span>

      <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[1] font-normal mb-4 animate-fade-up opacity-0 [animation-delay:.5s] [animation-fill-mode:forwards]">
        Prazer,
        <br />
        <em className="italic text-amber-400">Tiago Quixaba</em>
      </h1>

      <p className="text-[clamp(1rem,2vw,1.25rem)] text-stone-500 max-w-xl font-light mb-10 animate-fade-up opacity-0 [animation-delay:.7s] [animation-fill-mode:forwards]">
        Faço design com propósito. Porque estética sem sentido é só enfeite.
        Construo interfaces modernas, responsivas e centradas no usuário.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 flex-wrap animate-fade-up opacity-0 [animation-delay:.9s] [animation-fill-mode:forwards]">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm uppercase tracking-wider font-medium rounded-full bg-amber-600 border border-amber-600 text-[#0a0a0a] hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 hover:-translate-y-0.5"
        >
          Ver projetos
        </a>
        <a
          href="https://www.linkedin.com/in/tiagokxb"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm uppercase tracking-wider rounded-full border border-white/10 text-stone-300 hover:border-amber-600 hover:text-amber-300 transition-all duration-300 hover:-translate-y-0.5"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:tiagokxb@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm uppercase tracking-wider rounded-full border border-white/10 text-stone-300 hover:border-amber-600 hover:text-amber-300 transition-all duration-300 hover:-translate-y-0.5"
        >
          Contato
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
        <span className="text-[.65rem] text-stone-600 tracking-[.15em] uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-amber-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
