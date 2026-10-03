"use client";

import { useEffect, useRef, useState } from "react";

export const homeSections = [
  { id: "problem", label: "The problem" },
  { id: "solution", label: "The solution" },
  { id: "impact", label: "Financial impact" },
  { id: "pilot", label: "How it works" },
  { id: "consultant", label: "Your consultant" },
  { id: "who", label: "Who it's for" },
];

export function SectionNav() {
  const [active, setActive] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  // Highlight the section currently under the sticky bars.
  useEffect(() => {
    const els = homeSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-130px 0px -65% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the active button visible when the row scrolls sideways on small screens.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Sections on this page"
      className="sticky top-16 z-30 border-b-[0.5px] border-line bg-ink/90 backdrop-blur-md"
    >
      <div className="container-page">
        <ul ref={listRef} className="no-scrollbar relative -mx-2 flex gap-1 overflow-x-auto">
          {homeSections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  data-id={s.id}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex min-h-11 items-center whitespace-nowrap border-b-2 px-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "border-brand-soft text-brand-soft"
                      : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
