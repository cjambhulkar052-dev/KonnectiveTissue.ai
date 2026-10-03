import Link from "next/link";
import { impactRange, notList } from "@/lib/content";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-[1.75rem] text-fg md:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg text-muted">{lead}</p> : null}
    </div>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 text-win ${className}`}>
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 text-dim ${className}`}>
      <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/** Inline reminder of the consultant's role, used inside sections across the site. */
export function ConsultantNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border-[0.5px] border-brand/40 bg-brand/10 px-4 py-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[0.625rem] font-bold text-white"
      >
        IIM
      </span>
      <p className="text-sm text-fg">
        <span className="font-semibold">Consultant layer. </span>
        <span className="text-fg/85">{children}</span>
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-glow border-b-[0.5px] border-line">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl text-fg md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function NotStrip() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
      {notList.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-muted">
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="border-t-[0.5px] border-line bg-ink-deep">
      <div className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl text-fg md:text-[1.75rem]">Start with a free two-week data audit.</h2>
          <p className="mt-2 text-muted">
            We will show exactly what {impactRange} could mean for your hospital, from your own records, before
            you commit to anything.
          </p>
        </div>
        <Link href="/start-pilot" className="btn btn-primary">
          Start Your Pilot
        </Link>
      </div>
    </section>
  );
}
