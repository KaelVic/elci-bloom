import { whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div className="absolute inset-0 bg-rose-grad" />
      <div className="absolute inset-0 grain" />
      <div className="glow-blob float-soft" style={{ width: 600, height: 600, left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(circle, oklch(0.97 0.02 60 / 0.6), transparent 70%)" }} />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="reveal flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-foreground/40" />
          <span className="eyebrow text-foreground/70">Seu próximo capítulo</span>
          <span className="h-px w-10 bg-foreground/40" />
        </div>

        <h2 className="reveal serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink text-balance">
          Seu momento de{" "}
          <em className="text-rose-deep not-italic">autocuidado</em>{" "}
          começa aqui.
        </h2>

        <p className="reveal reveal-delay-1 mt-8 text-lg text-foreground/70 text-pretty max-w-xl mx-auto">
          Marque sua avaliação e descubra o protocolo desenhado para revelar
          o melhor de você — com técnica, sensibilidade e tempo.
        </p>

        <div className="reveal reveal-delay-2 mt-12">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine relative inline-flex items-center gap-3 rounded-full bg-foreground px-10 py-5 text-sm tracking-[0.2em] uppercase text-background hover:bg-rose-deep transition-colors shadow-[var(--shadow-glow)]"
          >
            Agendar Minha Avaliação
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
