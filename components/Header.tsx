import Link from "next/link";
import { nav, site } from "@/lib/content";
import { MobileNav } from "./MobileNav";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M10 16h12" stroke="#7AA5FF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="9" cy="16" r="4.5" fill="#2563EB" />
        <circle cx="23" cy="16" r="4.5" fill="#10B981" />
      </svg>
      <span className="text-[1.0625rem] font-semibold tracking-tight text-fg">{site.name}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-[0.5px] border-line bg-ink/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/start-pilot" className="btn btn-primary hidden !min-h-10 sm:inline-flex">
            Start Your Pilot
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
