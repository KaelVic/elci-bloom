import logo from "@/assets/logo.jpeg";
import { PHONE_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="serif text-xl text-ink">Espaço Elci Gomes</div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  Centro de Estética Avançada
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/65">
              Estética avançada e cuidado feminino em Matinhos — onde técnica,
              sensibilidade e resultado se encontram.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Navegação</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li><a href="#sobre" className="hover:text-rose-deep transition-colors">Sobre</a></li>
              <li><a href="#tratamentos" className="hover:text-rose-deep transition-colors">Tratamentos</a></li>
              <li><a href="#pacotes" className="hover:text-rose-deep transition-colors">Pacotes</a></li>
              <li><a href="#depoimentos" className="hover:text-rose-deep transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-rose-deep transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Contato</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>Av. Maringá, 71 — Sala 3</li>
              <li>Centro · Matinhos — PR</li>
              <li>{PHONE_DISPLAY}</li>
              <li>
                <a href="https://www.instagram.com/elci.esteticaebemestar/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-deep transition-colors">
                  @elci.esteticaebemestar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Espaço Elci Gomes · Todos os direitos reservados.</div>
          <div className="tracking-[0.2em] uppercase">Matinhos · Paraná</div>
        </div>
      </div>
    </footer>
  );
}
