# Landing Page — Espaço Elci Gomes

A premium, editorial, emotionally-driven landing page for the Brazilian aesthetic clinic, designed to feel like a luxury São Paulo agency build. WhatsApp-first conversion, with the clinic logo's dusty rose / nude rosé / champagne palette as the visual signature.

## Brand foundation

- **Palette**: dusty rose, blush pink, nude rosé, champagne beige, warm white, soft gold accents. Subtle feminine gradients only. No saturated pinks, no purple, no harsh contrast.
- **Typography**: elegant serif display (e.g. Cormorant Garamond / Fraunces) for headlines + refined sans-serif (Inter / Manrope) for body. Generous letter-spacing on small caps and microcopy.
- **Atmosphere**: editorial whitespace, soft floating glows, very subtle glassmorphism, gentle grain texture, warm light leaks. No heavy shadows.
- **Logo & assets**: uploaded logo, Elci's portrait (diploma photo), and the four service visuals integrated tastefully (cropped, masked into elegant arches and circles, never used as-is).

## Page structure (single landing route `/`)

1. **Sticky top nav** — logo left; minimalist anchor links (Sobre, Tratamentos, Pacotes, Depoimentos, Contato); discreet "Agendar" pill button right.

2. **Hero — split editorial composition**
   - Left: serif headline "Realçando sua beleza com cuidado, técnica e feminilidade.", emotional subheadline about advanced aesthetics + personalized care + self-esteem, microcopy "Atendimento humanizado em Matinhos • Estética avançada personalizada", two CTAs (primary "Agendar Avaliação" → WhatsApp, secondary "Conhecer Tratamentos" → scroll).
   - Right: portrait of Elci masked into a tall arch with soft champagne glow behind, floating trust badges (Atendimento Personalizado, Estética Avançada, Ambiente Premium, Procedimentos Especializados) as small glass chips orbiting the image.
   - Soft parallax on background gradient blobs, fade-up reveal, image mask reveal.

3. **About Elci** — storytelling section
   - Two-column: framed portrait + small certificate inset on one side; warm narrative copy on the other (years of dedication, humanized care, technical training, passion).
   - Credentials list with hairline gold dividers: Formação técnica em estética · Certificação em preenchimento facial e toxina botulínica · Certificado de Qualidade 2024.
   - Signature flourish using the logo's script style.

4. **Why clients love the clinic** — six glass cards in a 3×2 grid with thin gold icon strokes and subtle hover lift: Atendimento Humanizado, Técnicas Especializadas, Pós-operatório de Excelência, Ambiente Aconchegante, Tratamentos Personalizados, Atendimento Feminino Premium.

5. **Signature packages** — three premium cards
   - Tratamento de Acne · 10 sessões · R$ 2.200
   - Tratamento de Melasma · 5 sessões · R$ 1.500
   - Drenagem Linfática Pós-Cirúrgica + Modeladora · R$ 2.640
   - Each with emotional benefit line, soft gradient border, glow on hover, "Quero Agendar" CTA → WhatsApp with package name pre-filled.

6. **À la carte services** — refined four-card row
   - Drenagem Linfática Modeladora R$140 · Drenagem Pós-Cirúrgica R$190 · Massagem Terapêutica R$160 · Massagem Relaxante R$160.
   - Small visual, short emotional one-liner, hairline divider, hover reveal of CTA arrow.

7. **Testimonials carousel** — editorial quote slider with large serif quote marks, soft fade transitions, 5-star row, and trust line "5 estrelas no Google · Clientes satisfeitas · Atendimento reconhecido em Matinhos". Featured pull-quotes: "mãos mágicas", "não vivo sem", "ambiente impecável", "profissional maravilhosa".

8. **Instagram preview** — editorial 6-tile mosaic linking to @elci.esteticaebemestar, headline "Bastidores de uma rotina de cuidado.", CTA "Acompanhe nas redes sociais".

9. **FAQ accordion** — elegant hairline-divided accordion: avaliação, personalização, pós-operatório, frequência das sessões, localização, agendamento.

10. **Location** — left: luxury card with address (Av. Maringá, 71 - Sala 3 - Centro, Matinhos - PR, 83260-000), phone, hours, "Como chegar" CTA. Right: embedded Google Map styled with a soft warm overlay.

11. **Final CTA** — full-bleed warm gradient with soft grain, large serif "Seu momento de autocuidado começa aqui.", glowing primary button "Agendar Minha Avaliação".

12. **Footer** — logo, short tagline, navigation, social, contact, copyright. Minimal and refined.

13. **Floating WhatsApp button** — bottom-right, custom dusty-rose pill (not green), subtle pulse halo, gentle entrance after scroll, persistent on all devices.

## Conversion mechanics

- All primary CTAs open `https://wa.me/5541992028296?text=...` with the spec'd Portuguese pre-fill (package CTAs include the package name).
- Sticky nav "Agendar" button always visible after scroll.
- Floating WhatsApp button always reachable.

## Motion & interaction

- Reveal-on-scroll fade-up for sections (IntersectionObserver, staggered).
- Soft parallax on hero background blobs.
- Image mask reveal on portraits.
- Hover: gentle scale (1.02), glow intensification, arrow slide on CTAs.
- Smooth scroll for anchor links.
- All easing tuned to slow, cinematic curves; nothing bouncy or fast.

## Technical notes

- Single TanStack route `src/routes/index.tsx`, replacing the placeholder. Section components split into `src/components/sections/*` for clean architecture.
- Uploaded images copied into `src/assets/` and imported as ES modules (logo, Elci portrait cropped from diploma photo, four service images).
- Custom design tokens added to `src/styles.css` (rose / nude / champagne / gold) on top of the existing oklch theme, plus serif + sans font imports via Google Fonts in root `head()`.
- Per-route SEO `head()`: PT-BR title, description, OG tags, structured data (`LocalBusiness` / `BeautySalon` JSON-LD with address, phone, geo).
- Mobile-first: hero stacks (copy → portrait), packages become a swipeable carousel, sticky nav collapses to a discreet menu + persistent Agendar button.
- Accessibility: semantic landmarks, alt text in PT-BR, focus-visible rings in soft gold, prefers-reduced-motion respected.
- Performance: lazy-loaded images with `loading="lazy"` and explicit dimensions, decorative blobs as CSS gradients (no extra requests), font subset to latin-ext.

## Out of scope

- No CMS or backend — content is static in the page.
- No booking system — all conversions go to WhatsApp.
- No multi-language — PT-BR only.
