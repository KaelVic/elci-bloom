import portrait from "@/assets/elci-portrait.jpeg";

const credentials = [
  "Formação técnica em estética",
  "Certificação em preenchimento facial e toxina botulínica",
  "Certificado de Qualidade 2024",
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-champagne-grad opacity-60" />
      <div className="glow-blob" style={{ width: 380, height: 380, right: "-6%", top: "20%", background: "radial-gradient(circle, oklch(0.86 0.05 25 / 0.4), transparent 70%)" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5 reveal">
          <div className="relative mx-auto aspect-[4/5] max-w-sm">
            <div className="absolute -inset-4 rotate-[-2deg] rounded-2xl bg-gradient-to-br from-blush via-champagne to-nude" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/70 shadow-[var(--shadow-soft)]">
              <img src={portrait} alt="Elci Gomes em seu espaço" className="h-full w-full object-cover" loading="lazy" />
            </div>
            {/* Certificate inset */}
            <div className="absolute -bottom-8 -right-6 w-44 rotate-[3deg] rounded-lg border border-white/80 bg-background p-3 shadow-[var(--shadow-card)]">
              <div className="aspect-[4/3] rounded bg-gradient-to-br from-champagne to-blush flex items-center justify-center">
                <div className="text-center">
                  <div className="serif text-[10px] tracking-[0.2em] uppercase text-rose-deep">Certificado</div>
                  <div className="serif text-2xl text-ink mt-1">2024</div>
                  <div className="text-[8px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Qualidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 reveal reveal-delay-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-rose-deep/60" />
            <span className="eyebrow">Quem Conduz</span>
          </div>
          <h2 className="serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-ink text-balance">
            Anos de dedicação à arte de cuidar da{" "}
            <em className="text-rose-deep not-italic">beleza feminina</em>.
          </h2>

          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed text-pretty">
            <p>
              Elci Gomes construiu uma trajetória de mais de duas décadas dedicada
              à estética avançada — guiada pela escuta atenta, pelo rigor técnico
              e pela convicção de que cada mulher merece um protocolo desenhado
              exclusivamente para si.
            </p>
            <p>
              Do primeiro acolhimento aos cuidados de pós-operatório, cada gesto
              é conduzido com sensibilidade e profundidade clínica. Aqui, técnica
              e afeto caminham lado a lado.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {credentials.map((c) => (
              <div key={c} className="flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <span className="text-sm tracking-[0.12em] uppercase text-foreground/80">{c}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 serif italic text-2xl text-rose-deep">
            — Elci Gomes
          </p>
        </div>
      </div>
    </section>
  );
}
