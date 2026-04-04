import { useState, useEffect } from "react";

// Fases: "hold" → "split" → "done"
export default function IntroScreen() {
  const [phase, setPhase] = useState("hold");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 1600);
    const t2 = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const splitting = phase === "split";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none select-none">
      {/* Painel superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0a0a0a] transition-transform duration-700 ease-in-out"
        style={{ transform: splitting ? "translateY(-100%)" : "translateY(0)" }}
      />

      {/* Painel inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0a] transition-transform duration-700 ease-in-out"
        style={{ transform: splitting ? "translateY(100%)" : "translateY(0)" }}
      />

      {/* Conteúdo central */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300"
        style={{ opacity: splitting ? 0 : 1 }}
      >
        {/* Linha decorativa */}
        <div className="w-8 h-px bg-amber-600/60 animate-[fadeIn_.6s_ease_forwards]" />

        <span
          className="font-serif italic text-[clamp(2.5rem,8vw,5rem)] text-amber-400 leading-none"
          style={{
            animation: "fadeUp .8s .2s ease both",
            textShadow: "0 0 80px rgba(201,117,61,.35)",
          }}
        >
          Tiago Q.
        </span>

        <p
          className="font-mono text-[.6rem] uppercase tracking-[.3em] text-stone-600"
          style={{ animation: "fadeUp .8s .5s ease both" }}
        >
          Desenvolvedor &amp; Designer
        </p>

        {/* Linha decorativa inferior */}
        <div
          className="w-8 h-px bg-amber-600/60"
          style={{ animation: "fadeIn .6s .4s ease both" }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
