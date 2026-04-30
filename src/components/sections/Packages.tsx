import { whatsappLink } from "@/lib/whatsapp";

const packages = [
  {
    name: "Tratamento de Acne",
    sessions: "Protocolo de 10 sessões",
    price: "R$ 2.200",
    perks: ["Avaliação dermofuncional", "Limpeza profunda", "Acompanhamento contínuo"],
    benefit: "Pele renovada, controlada e luminosa.",
  },
  {
    name: "Tratamento de Melasma",
    sessions: "Protocolo de 5 sessões",
    price: "R$ 1.500",
    perks: ["Clareadores de alta performance", "Peeling especializado", "Plano de manutenção"],
    benefit: "Tom uniforme, manchas atenuadas, viço restaurado.",
    featured: true,
  },
  {
    name: "Drenagem Pós-Cirúrgica + Modeladora",
    sessions: "Pacote completo",
    price: "R$ 2.640",
    perks: ["Pós-operatório minucioso", "Modelagem corporal", "Cuidado contínuo"],
    benefit: "Recuperação serena com resultados refinados.",
  },
];

export function Packages() {
  return (
    <section id="pacotes" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-warm opacity-70" />
      <div className="glow-blob" style={{ width: 500, height: 500, left: "-12%", top: "30%", background: "radial-gradient(circle, oklch(0.9 0.04 25 / 0.5), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-rose-deep/60" />
            <span className="eyebrow">Pacotes Signature</span>
            <span className="h-px w-10 bg-rose-deep/60" />
          </div>
          <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink text-balance">
            Protocolos completos, resultados que se{" "}
            <em className="text-rose-deep not-italic">prolongam no tempo.</em>
          </h2>
          <p className="mt-6 text-foreground/65 text-pretty">
            Investimento consciente em uma jornada estética desenhada para
            entregar transformação real e duradoura.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <article
              key={p.name}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-3xl border bg-card/70 p-10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] ${
                p.featured ? "border-rose/60 lg:scale-[1.03] bg-card" : "border-border/60 hover:border-rose/40"
              }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-rose-deep px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-background">
                  Mais procurado
                </span>
              )}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(80% 60% at 50% 0%, oklch(0.92 0.05 25 / 0.5), transparent 70%)" }} />

              <div className="relative">
                <div className="text-xs tracking-[0.22em] uppercase text-rose-deep/80">
                  {p.sessions}
                </div>
                <h3 className="serif mt-4 text-3xl leading-tight text-ink">{p.name}</h3>
                <p className="mt-3 italic serif text-rose-deep/90 text-lg">
                  {p.benefit}
                </p>

                <div className="hairline my-8" />

                <ul className="space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-foreground/75">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-gold shrink-0">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      Investimento
                    </div>
                    <div className="serif text-4xl text-ink">{p.price}</div>
                  </div>
                  <a
                    href={whatsappLink(`Olá, gostaria de agendar o pacote ${p.name} no Espaço Elci Gomes.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-background hover:bg-rose-deep transition-colors"
                  >
                    Quero Agendar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
