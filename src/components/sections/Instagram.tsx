import massagem from "@/assets/service-massagem.jpeg";
import peeling from "@/assets/service-peeling.jpeg";
import pele from "@/assets/service-pele.jpeg";
import rejuvenesca from "@/assets/service-rejuvenesca.jpeg";
import portrait from "@/assets/elci-portrait.jpeg";
import logo from "@/assets/logo.jpeg";

const tiles = [peeling, pele, rejuvenesca, massagem, portrait, logo];

export function Instagram() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-rose-deep/60" />
              <span className="eyebrow">@elci.esteticaebemestar</span>
            </div>
            <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink text-balance">
              Bastidores de uma rotina de{" "}
              <em className="text-rose-deep not-italic">cuidado.</em>
            </h2>
            <p className="mt-6 text-foreground/65 text-pretty">
              Resultados, conteúdos e a delicadeza do dia a dia no Espaço Elci
              Gomes — acompanhe e inspire-se.
            </p>
            <a
              href="https://www.instagram.com/elci.esteticaebemestar/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-3 rounded-full border border-foreground/20 px-7 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              Acompanhe nas redes sociais
            </a>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="grid grid-cols-3 gap-3">
              {tiles.map((src, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/elci.esteticaebemestar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-rose-deep/0 transition-colors duration-500 group-hover:bg-rose-deep/30 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
