import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-700 sm:bottom-6 sm:right-6 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="relative inline-flex items-center gap-3 rounded-full bg-rose-deep p-3.5 sm:px-5 sm:py-4 text-background shadow-[var(--shadow-soft)] hover:bg-foreground transition-colors pulse-ring">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z" />
          <path d="M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7c1.8.9 3.7 1.4 5.7 1.4h0c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3zm-8.4 18.3h0c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.3-1.5-5.2 0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 7-.1 5.4-4.5 9.8-10 9.7z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase">Agendar</span>
      </span>
    </a>
  );
}
