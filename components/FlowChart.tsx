import { flow, type FlowStep } from "@/lib/content";
import { Check } from "./ui";

type Tone = "revenue" | "savings" | "decisions";

const tones: Record<Tone, { border: string; text: string; result: string }> = {
  revenue: { border: "border-brand/50", text: "text-brand-soft", result: "border-brand/60 bg-brand/15" },
  savings: { border: "border-win/40", text: "text-win-soft", result: "border-win/50 bg-win/10" },
  decisions: { border: "border-line-strong", text: "text-fg", result: "border-line-strong bg-panel-2" },
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex shrink-0 items-center justify-center text-dim ${className}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-90 lg:rotate-0">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Lane({ tone, label, sub, steps }: { tone: Tone; label: string; sub: string; steps: FlowStep[] }) {
  const t = tones[tone];
  return (
    <section aria-label={label} className={`rounded-xl border-[0.5px] bg-panel/70 p-4 md:p-5 ${t.border}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className={`text-xs font-semibold uppercase tracking-[0.12em] ${t.text}`}>{label}</h3>
        <p className="text-sm text-muted">{sub}</p>
      </div>
      <ol className="mt-4 flex flex-col lg:flex-row lg:items-stretch">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            {i > 0 ? <Arrow className="py-1.5 lg:px-1.5 lg:py-0" /> : null}
            <div
              className={`flex-1 rounded-lg border-[0.5px] px-3.5 py-3 ${
                s.result ? t.result : "border-line bg-ink-deep"
              }`}
            >
              <p className="text-sm font-semibold text-fg">{s.title}</p>
              <p className={`text-xs ${s.result ? t.text : "text-dim"}`}>{s.by}</p>
              <p className="mt-1.5 text-xs text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FlowChart() {
  return (
    <div className="space-y-3">
      <Lane tone="revenue" label="Revenue · the patient" sub="From first contact to settled claim." steps={flow.revenue} />
      <Lane tone="savings" label="Savings · the purchase" sub="Every purchase, bid down." steps={flow.savings} />

      <div className="flex items-start gap-2.5 rounded-lg border-[0.5px] border-line px-4 py-2.5">
        <Check className="mt-1" />
        <p className="text-sm text-muted">
          <span className="font-semibold text-fg">Audit Agent. </span>
          Every step in both flows is logged in the audit trail and checked against your books.
        </p>
      </div>

      <div aria-hidden="true" className="flex justify-center text-dim">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 2v15M3.5 12.5L8 17l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <Lane
        tone="decisions"
        label="Decisions · the consultant"
        sub="Both flows meet in one dashboard."
        steps={flow.decisions}
      />
    </div>
  );
}
