import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-[#0a0a0a]/85 backdrop-blur-xl">
        <a
          href="#"
          className="font-serif italic text-xl text-amber-400 tracking-wide"
        >
          Tiago Q.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[.12em] text-stone-500 hover:text-amber-300 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-[70] relative"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block w-5 h-[2px] bg-stone-200 transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-stone-200 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-stone-200 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu — fora da <nav> para não herdar o containing block do backdrop-filter */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="font-serif italic text-amber-400 text-sm tracking-wide mb-2">
          Tiago Q.
        </span>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-2xl uppercase tracking-[.15em] text-stone-300 hover:text-amber-300 transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
