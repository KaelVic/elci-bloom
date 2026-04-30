import massagem from "@/assets/service-massagem.jpeg";
import peeling from "@/assets/service-peeling.jpeg";
import pele from "@/assets/service-pele.jpeg";
import rejuvenesca from "@/assets/service-rejuvenesca.jpeg";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  {
    name: "Drenagem Linfática Modeladora",
    price: "R$ 140",
    desc: "Movimentos precisos que esculpem o corpo e devolvem leveza.",
    img: massagem,
  },
  {
    name: "Drenagem Pós-Cirúrgica",
    price: "R$ 190",
    desc: "Recuperação serena, com técnica especializada e olhar atento.",
    img: rejuvenesca,
  },
  {
    name: "Massagem Terapêutica",
    price: "R$ 160",
    desc: "Alívio profundo das tensões para o corpo e a mente.",
    img: pele,
  },
  {
    name: "Massagem Relaxante",
    price: "R$ 160",
    desc: "Uma pausa essencial — toque calmo, respiração restauradora.",
    img: peeling,
  },
];

export function Services() {
  return (
    <section id="tratamentos" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12 reveal">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-rose-deep/60" />
              <span className="eyebrow">Tratamentos Avulsos</span>
            </div>
            <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-ink text-balance">
              Sessões pontuais para os momentos em que você{" "}
              <em className="text-rose-deep not-italic">precisa de você.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/65 text-pretty">
            Para o autocuidado contínuo ou para experimentar pela primeira vez —
            cada sessão é conduzida com a mesma dedicação dos protocolos completos.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <a
              key={s.name}
              href={whatsappLink(`Olá, gostaria de agendar ${s.name} no Espaço Elci Gomes.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${(i % 4) + 1} group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 transition-all duration-700 hover:-translate-y-1 hover:border-rose/50 hover:shadow-[var(--shadow-soft)]`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-background">
                  <span className="text-[10px] tracking-[0.22em] uppercase opacity-80">A partir de</span>
                  <span className="serif text-2xl">{s.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="serif text-xl text-ink leading-tight">{s.name}</h3>
                <div className="hairline my-4" />
                <p className="text-sm leading-relaxed text-foreground/65">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-rose-deep">
                  Agendar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
