const items = [
  {
    title: "Atendimento Humanizado",
    desc: "Cada cliente é recebida com escuta atenta e tempo dedicado.",
    icon: (
      <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Técnicas Especializadas",
    desc: "Protocolos avançados conduzidos com rigor e precisão.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" /></>,
  },
  {
    title: "Pós-operatório de Excelência",
    desc: "Acompanhamento minucioso para uma recuperação confortável.",
    icon: <><path d="M3 12h4l2-7 4 14 2-7h6" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
  {
    title: "Ambiente Aconchegante",
    desc: "Espaço pensado em cada detalhe para o seu conforto.",
    icon: <><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
  {
    title: "Tratamentos Personalizados",
    desc: "Cada protocolo nasce da sua história e dos seus objetivos.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
  {
    title: "Atendimento Feminino Premium",
    desc: "Uma experiência de luxo, sensível e exclusivamente sua.",
    icon: <><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
];

export function Why() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-rose-deep/60" />
            <span className="eyebrow">Nossa Filosofia</span>
            <span className="h-px w-10 bg-rose-deep/60" />
          </div>
          <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink text-balance">
            Uma experiência pensada nos{" "}
            <em className="text-rose-deep not-italic">mínimos detalhes</em>.
          </h2>
          <p className="mt-6 text-foreground/65 text-pretty">
            Tudo o que fazemos nasce de um propósito: que você saia daqui mais
            confiante, mais leve e mais conectada à sua beleza.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-rose/50 hover:bg-card hover:shadow-[var(--shadow-soft)]`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(60% 80% at 50% 0%, oklch(0.92 0.04 25 / 0.4), transparent 70%)" }} />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-champagne/30 text-rose-deep">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    {it.icon}
                  </svg>
                </div>
                <h3 className="serif text-2xl text-ink">{it.title}</h3>
                <div className="hairline my-4" />
                <p className="text-sm leading-relaxed text-foreground/65">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
