import { PHONE_DISPLAY, whatsappLink } from "@/lib/whatsapp";

export function Location() {
  return (
    <section id="contato" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-rose-deep/60" />
              <span className="eyebrow">Onde Estamos</span>
            </div>
            <h2 className="serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-ink text-balance">
              Um endereço pensado para o seu{" "}
              <em className="text-rose-deep not-italic">conforto.</em>
            </h2>

            <div className="mt-10 space-y-6">
              <Detail label="Endereço" value="Av. Maringá, 71 — Sala 3, Centro" sub="Matinhos — PR · 83260-000" />
              <Detail label="Telefone & WhatsApp" value={PHONE_DISPLAY} />
              <Detail label="Horário" value="Segunda a Sábado · 09h às 19h" sub="Atendimento somente com agendamento" />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs tracking-[0.2em] uppercase text-background hover:bg-rose-deep transition-colors"
              >
                Agendar Avaliação
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Maringá+71+Sala+3+Matinhos+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:border-foreground/60 transition-all"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-soft)]">
              <iframe
                title="Localização Espaço Elci Gomes"
                src="https://www.google.com/maps?q=Av.+Maring%C3%A1,+71+-+Sala+3,+Centro,+Matinhos+-+PR&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ filter: "saturate(0.85) contrast(0.95) sepia(0.08)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose/10 via-transparent to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
      <div className="mt-2 serif text-2xl text-ink">{value}</div>
      {sub && <div className="text-sm text-foreground/60 mt-1">{sub}</div>}
    </div>
  );
}
