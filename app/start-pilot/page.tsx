import type { Metadata } from "next";
import { impactRange } from "@/lib/content";
import { NotStrip } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start your pilot",
  description: `A free two-week audit of your hospital's data, to show exactly what ${impactRange} could mean for you before you commit to anything.`,
};

const steps = [
  ["Share access to your data", "Registration, billing, claims and procurement records you already have."],
  ["Two-week audit", "We trace where your revenue comes from and where it leaks."],
  ["Findings, reconciled", "A line-by-line estimate checked against your books. Yours to keep."],
];

export default function StartPilotPage() {
  return (
    <section className="hero-glow">
      <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Start your pilot</p>
          <h1 className="mt-4 text-4xl text-fg md:text-5xl">We&apos;ll spend 2 weeks auditing your data, free.</h1>
          <p className="mt-5 text-lg text-muted">
            You will see exactly what {impactRange} could mean for your hospital, from your own records, before you
            commit to anything.
          </p>
          <ol className="mt-10 space-y-5">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="num flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[0.5px] border-line-strong text-xs text-muted">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-fg">{t}</p>
                  <p className="text-sm text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 border-t-[0.5px] border-line pt-8">
            <NotStrip />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
