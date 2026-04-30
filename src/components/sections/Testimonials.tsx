import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "A Elci tem mãos mágicas. Saio de cada sessão renovada — corpo e alma. Não vivo sem.",
    name: "Mariana A.",
    role: "Cliente desde 2022",
  },
  {
    quote:
      "Profissional maravilhosa, ambiente impecável. O cuidado no pós-operatório foi essencial para a minha recuperação.",
    name: "Camila R.",
    role: "Pós-cirúrgico",
  },
  {
    quote:
      "Atenção a cada detalhe. Me sinto acolhida desde o primeiro minuto. Resultados incríveis em poucas sessões.",
    name: "Patrícia M.",
    role: "Tratamento facial",
  },
  {
    quote:
      "Encontrei aqui o que procurava há anos: técnica de excelência e um olhar verdadeiramente humano.",
    name: "Renata F.",
    role: "Cliente fiel",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="depoimentos" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-champagne-grad opacity-50" />
      <div className="glow-blob" style={{ width: 480, height: 480, right: "-10%", top: "10%", background: "radial-gradient(circle, oklch(0.9 0.05 25 / 0.45), transparent 70%)" }} />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-rose-deep/60" />
          <span className="eyebrow">Depoimentos</span>
          <span className="h-px w-10 bg-rose-deep/60" />
        </div>
        <h2 className="reveal serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink text-balance">
          Histórias que nos{" "}
          <em className="text-rose-deep not-italic">emocionam.</em>
        </h2>

        <div className="relative mt-16 min-h-[280px]">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="serif text-7xl text-rose-deep/30 leading-none">"</div>
              <blockquote className="serif italic text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-ink text-balance max-w-3xl mx-auto -mt-4">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <div className="serif text-lg text-ink">{t.name}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Depoimento ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-rose-deep" : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <div className="flex items-center gap-2">
            <Stars />
            <span>5 estrelas no Google</span>
          </div>
          <span className="hidden sm:block h-3 w-px bg-border" />
          <span>Clientes satisfeitas</span>
          <span className="hidden sm:block h-3 w-px bg-border" />
          <span>Reconhecida em Matinhos</span>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.7 7h7.3l-5.9 4.3 2.3 7L12 16l-6.4 4.3 2.3-7L2 9h7.3z" />
        </svg>
      ))}
    </span>
  );
}
