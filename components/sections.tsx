import { agents, consultant, impactRows, impactTotal, phases, tiers, type Agent, type Basis } from "@/lib/content";
import { Check } from "./ui";
import { BasisBadge } from "./evidence";

function subtotal(basis: Basis) {
  const rows = impactRows.filter((r) => r.basis === basis);
  const low = rows.reduce((s, r) => s + r.low, 0);
  const high = rows.reduce((s, r) => s + r.high, 0);
  return `₹${low.toFixed(1)}–${high.toFixed(1)} Cr`;
}

export function ImpactTable() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Annual financial impact by category, with the basis for each estimate</caption>
        <thead className="text-xs uppercase tracking-wider text-dim">
          <tr className="border-b-[0.5px] border-line">
            <th scope="col" className="px-5 py-4 font-medium">Category</th>
            <th scope="col" className="hidden px-5 py-4 font-medium sm:table-cell">Agent</th>
            <th scope="col" className="hidden px-5 py-4 font-medium md:table-cell">Basis</th>
            <th scope="col" className="px-5 py-4 text-right font-medium">Annual impact</th>
          </tr>
        </thead>
        <tbody>
          {impactRows.map((row) => (
            <tr key={row.category} className="border-b-[0.5px] border-line">
              <th scope="row" className="px-5 py-4 font-medium text-fg">
                {row.category}
                <span className="mt-0.5 block text-xs font-normal text-dim sm:hidden">{row.agent}</span>
                <span className="mt-2 block md:hidden">
                  <BasisBadge basis={row.basis} />
                </span>
              </th>
              <td className="hidden px-5 py-4 text-muted sm:table-cell">{row.agent}</td>
              <td className="hidden px-5 py-4 md:table-cell">
                <BasisBadge basis={row.basis} />
                <span className="mt-1.5 block text-xs text-dim">{row.note}</span>
              </td>
              <td className="num whitespace-nowrap px-5 py-4 text-right font-medium text-win-soft">
                ₹{row.low.toFixed(1)}–{row.high.toFixed(1)} Cr
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b-[0.5px] border-line text-muted">
            <th scope="row" className="px-5 py-3 font-normal">Backed by published data</th>
            <td className="hidden sm:table-cell" />
            <td className="hidden md:table-cell" />
            <td className="num whitespace-nowrap px-5 py-3 text-right">{subtotal("published")}</td>
          </tr>
          <tr className="border-b-[0.5px] border-line text-muted">
            <th scope="row" className="px-5 py-3 font-normal">Market estimates</th>
            <td className="hidden sm:table-cell" />
            <td className="hidden md:table-cell" />
            <td className="num whitespace-nowrap px-5 py-3 text-right">{subtotal("estimate")}</td>
          </tr>
          <tr className="bg-win/10">
            <th scope="row" className="px-5 py-5 text-base font-semibold text-fg">
              Total annual impact
            </th>
            <td className="hidden sm:table-cell" />
            <td className="hidden px-5 py-5 text-sm text-muted md:table-cell">Reconciled by the Audit Agent</td>
            <td className="num whitespace-nowrap px-5 py-5 text-right text-lg font-semibold text-win-soft">
              ₹{impactTotal.low.toFixed(1)}–{impactTotal.high.toFixed(1)} Cr
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export function AgentCard({ agent, detailed }: { agent: Agent; detailed?: boolean }) {
  const isAudit = agent.n === 6;
  return (
    <article
      className={`card flex flex-col p-6 ${isAudit ? "border-win/40 bg-gradient-to-b from-win/10 to-panel" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="num text-xs font-medium text-dim">Agent {String(agent.n).padStart(2, "0")}</span>
        <span className="rounded-full border-[0.5px] border-line-strong px-2.5 py-0.5 text-xs text-muted">
          {agent.role}
        </span>
      </div>
      <h3 className="mt-4 text-lg text-fg">{agent.name}</h3>
      <p className="mt-2 text-sm text-muted">{agent.summary}</p>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-dim">Reads from</dt>
          <dd className="mt-1.5 text-fg/85">{agent.sources.join(" · ")}</dd>
        </div>
        {detailed ? (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-dim">What it does</dt>
            <dd className="mt-1.5">
              <ul className="space-y-1.5">
                {agent.does.map((f) => (
                  <li key={f} className="flex gap-2 text-fg/85">
                    <Check className="mt-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-auto pt-6">
        <div className="border-t-[0.5px] border-line pt-4">
          <p className="num text-xl font-semibold text-win-soft">{agent.impact}</p>
          <p className="text-xs text-muted">{agent.impactLabel}</p>
        </div>
      </div>
    </article>
  );
}

export function AgentGrid({ detailed }: { detailed?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((a) => (
        <AgentCard key={a.n} agent={a} detailed={detailed} />
      ))}
    </div>
  );
}

export function PilotTimeline({ showConsultant }: { showConsultant?: boolean }) {
  return (
    <div>
      <ol aria-hidden="true" className="mb-3 hidden grid-cols-6 text-xs text-dim md:grid">
        {[1, 2, 3, 4, 5, 6].map((m) => (
          <li key={m} className="border-l-[0.5px] border-line-strong pl-2">
            Month {m}
          </li>
        ))}
      </ol>
      <ol className="grid gap-4 md:grid-cols-3">
        {phases.map((p) => (
          <li key={p.n} className="card flex flex-col overflow-hidden">
            <div className={`h-1 ${p.n === 3 ? "bg-win" : "bg-brand"}`} style={{ opacity: 0.45 + p.n * 0.18 }} />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-dim">
                Phase {p.n} · {p.months}
              </p>
              <h3 className="mt-2 text-xl text-fg">{p.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
              {showConsultant ? (
                <p className="mt-4 text-sm text-fg/85">
                  <span className="font-medium text-brand-soft">Consultant: </span>
                  {p.consultant}
                </p>
              ) : null}
              <div className="mt-auto pt-6">
                <div className="rounded-lg border-[0.5px] border-line-strong bg-ink-deep px-3.5 py-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-dim">Phase gate</p>
                  <p className="mt-1 text-sm text-fg">{p.gate}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PricingTable() {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <caption className="sr-only">Pricing by hospital bed size</caption>
        <thead className="text-xs uppercase tracking-wider text-dim">
          <tr className="border-b-[0.5px] border-line">
            <th scope="col" className="px-5 py-4 font-medium">Bed size</th>
            <th scope="col" className="px-5 py-4 font-medium">Base fee</th>
            <th scope="col" className="px-5 py-4 font-medium">Consultant hours</th>
            <th scope="col" className="px-5 py-4 text-right font-medium">Total annual cost</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((t, i) => (
            <tr key={t.beds} className={i < tiers.length - 1 ? "border-b-[0.5px] border-line" : ""}>
              <th scope="row" className="px-5 py-4 font-medium text-fg">{t.beds}</th>
              <td className="num px-5 py-4 text-muted">₹{t.base}L</td>
              <td className="num px-5 py-4 text-muted">{t.hours} hrs/week</td>
              <td className="num px-5 py-4 text-right font-medium text-fg">
                ₹{t.costLow}–{t.costHigh}L / year
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ConsultantProfile() {
  return (
    <div className="card grid gap-8 p-6 md:grid-cols-[auto_1fr] md:p-10">
      <div className="flex flex-col items-start gap-4">
        <div
          role="img"
          aria-label="Consultant portrait placeholder"
          className="flex h-28 w-28 items-center justify-center rounded-xl border-[0.5px] border-line-strong bg-gradient-to-br from-brand/40 to-panel-2 text-xl font-semibold text-fg"
        >
          {consultant.initials}
        </div>
        <div>
          <p className="font-semibold text-fg">{consultant.name}</p>
          <p className="text-sm text-muted">{consultant.title}</p>
        </div>
        <ul className="flex flex-wrap gap-2 md:max-w-[14rem]">
          {consultant.credentials.map((c) => (
            <li key={c} className="rounded-full border-[0.5px] border-line-strong px-2.5 py-1 text-xs text-muted">
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <blockquote className="text-xl text-fg md:text-2xl md:leading-[1.4]">
          &ldquo;{consultant.quote}&rdquo;
        </blockquote>
        <p className="mt-5 text-muted">{consultant.bio}</p>
        <ul className="mt-6 space-y-2.5 text-sm">
          {consultant.responsibilities.map((r) => (
            <li key={r} className="flex gap-2 text-fg/85">
              <Check className="mt-1" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
