import portrait from "@/assets/elci-portrait.jpeg";
import { whatsappLink } from "@/lib/whatsapp";

const badges = [
  "Atendimento Personalizado",
  "Estética Avançada",
  "Ambiente Premium",
  "Procedimentos Especializados",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-warm" />
      <div className="glow-blob float-soft" style={{ width: 520, height: 520, left: "-10%", top: "-10%", background: "var(--gradient-glow)" }} />
      <div className="glow-blob float-soft" style={{ width: 440, height: 440, right: "-8%", bottom: "-8%", background: "radial-gradient(circle, oklch(0.92 0.04 70 / 0.6), transparent 70%)", animationDelay: "-3s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Copy */}
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-rose-deep/60" />
            <span className="eyebrow">Centro de Estética Avançada · Matinhos</span>
          </div>

          <h1 className="serif text-balance text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.02] text-ink">
            Realçando sua beleza com{" "}
            <em className="not-italic text-rose-deep">cuidado</em>, técnica e{" "}
            <span className="italic text-rose-deep/90">feminilidade.</span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-foreground/70">
            No Espaço Elci Gomes, cada protocolo é desenhado para revelar a sua melhor
            versão — unindo estética avançada, cuidado humanizado e o conforto de um
            ambiente pensado para a sua autoestima.
          </p>

          <p className="mt-6 text-sm tracking-[0.18em] uppercase text-muted-foreground">
            Atendimento humanizado em Matinhos · Estética avançada personalizada
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm tracking-[0.18em] uppercase text-background hover:bg-rose-deep transition-colors"
            >
              Agendar Avaliação
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm tracking-[0.18em] uppercase text-foreground hover:border-foreground/60 hover:bg-background/50 transition-all"
            >
              Conhecer Tratamentos
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5 reveal reveal-delay-2">
          <div className="relative mx-auto aspect-[3/4] max-w-md">
            <div className="absolute -inset-6 rounded-[200px] bg-gradient-to-br from-rose/30 via-champagne/40 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-t-[260px] rounded-b-3xl border border-white/60 shadow-[var(--shadow-soft)]">
              <img
                src={portrait}
                alt="Elci Gomes, esteticista do Espaço Elci Gomes em Matinhos"
                className="mask-reveal h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>

          {/* Trust badges — discreet row beneath the portrait */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-foreground/70"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

