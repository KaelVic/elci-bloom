import { useState } from "react";

const faqs = [
  {
    q: "Como funciona a avaliação?",
    a: "A avaliação é o nosso primeiro encontro: uma conversa cuidadosa para entender seus objetivos, sua história e as características da sua pele e corpo. A partir dela, desenhamos um protocolo exclusivo para você.",
  },
  {
    q: "Os tratamentos são personalizados?",
    a: "Sim — sempre. Nenhum protocolo é padronizado. Cada plano é construído sob medida, considerando suas metas, sua rotina e o tempo ideal de resposta da sua pele e do seu corpo.",
  },
  {
    q: "Como funciona o pós-operatório?",
    a: "Acompanhamos você desde a alta hospitalar com sessões dedicadas de drenagem, terapias manuais e orientações detalhadas — para uma recuperação confortável, segura e com resultados refinados.",
  },
  {
    q: "Qual a frequência ideal das sessões?",
    a: "Depende do protocolo escolhido e da resposta individual. Em geral, indicamos de uma a duas sessões semanais — sempre definidas em conjunto, durante a sua avaliação.",
  },
  {
    q: "Onde fica a clínica?",
    a: "Estamos em Matinhos, no litoral do Paraná, na Av. Maringá, 71 — Sala 3, Centro. Um espaço pensado para o seu conforto e privacidade.",
  },
  {
    q: "Como faço meu agendamento?",
    a: "O agendamento é feito de forma rápida e direta pelo WhatsApp (41) 99202-8296 — onde você fala diretamente com a nossa equipe.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-rose-deep/60" />
            <span className="eyebrow">Dúvidas Frequentes</span>
            <span className="h-px w-10 bg-rose-deep/60" />
          </div>
          <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink text-balance">
            Tudo o que você{" "}
            <em className="text-rose-deep not-italic">precisa saber.</em>
          </h2>
        </div>

        <div className="mt-16 space-y-1">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal border-t border-border/60 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-rose-deep"
                >
                  <span className="serif text-xl text-ink">{f.q}</span>
                  <span className={`shrink-0 text-rose-deep transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-700 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-foreground/70 leading-relaxed text-pretty">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
