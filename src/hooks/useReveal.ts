import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // small stagger feels organic even for already-visible elements
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: anything still hidden after 1.2s gets revealed
    // (covers hash-jump landings, fast scrolls, and edge cases where
    // the observer never fires because the element is already past).
    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          el.classList.add("is-visible");
        }
      });
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
