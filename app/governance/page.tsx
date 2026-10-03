import type { Metadata } from "next";
import { auditTrail, compliance, decisionFramework, escalation } from "@/lib/content";
import { ConsultantNote, CtaBand, PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Governance and trust",
  description:
    "Transparent governance. Consultant accountable. Full audit trail. See who decides what, how decisions are approved and how every action is recorded.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance and trust"
        title="Transparent governance. Consultant accountable. Full audit trail."
        lead="The consultant advises and your management decides. Every profile, charge, claim and auction is recorded with what happened, when, and who owns it."
      />

      <section id="framework" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Decision framework"
            title="Who decides what."
            lead="Agents record and carry out routine work. The consultant advises, and acts once management gives the go-ahead. Anything clinical stays with medical leadership."
          />
          <div className="card mt-12 overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Decision rights across agents, consultant and hospital</caption>
              <thead className="text-xs uppercase tracking-wider text-dim">
                <tr className="border-b-[0.5px] border-line">
                  <th scope="col" className="px-5 py-4 font-medium">Decision</th>
                  <th scope="col" className="px-5 py-4 font-medium">AI agents</th>
                  <th scope="col" className="bg-brand/10 px-5 py-4 font-medium text-brand-soft">Consultant</th>
                  <th scope="col" className="px-5 py-4 font-medium">Your hospital</th>
                </tr>
              </thead>
              <tbody>
                {decisionFramework.map((d, i) => (
                  <tr key={d.decision} className={i < decisionFramework.length - 1 ? "border-b-[0.5px] border-line" : ""}>
                    <th scope="row" className="px-5 py-4 font-medium text-fg">{d.decision}</th>
                    <td className="px-5 py-4 text-muted">{d.agent}</td>
                    <td className="bg-brand/10 px-5 py-4 text-fg">{d.consultant}</td>
                    <td className="px-5 py-4 text-muted">{d.hospital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="escalation" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader
            eyebrow="Escalation process"
            title="From a recorded fact to an approved action."
            lead="The consultant does not act on strategy alone. Advice goes to management first, and action follows their go-ahead."
          />
          <ol className="mt-12 space-y-3">
            {escalation.map((e, i) => (
              <li key={e.step} className="card flex flex-col gap-2 p-5 md:flex-row md:items-center md:gap-6">
                <span className="num flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-sm font-semibold text-brand-soft">
                  {i + 1}
                </span>
                <h3 className="text-base text-fg md:w-56 md:shrink-0">{e.step}</h3>
                <p className="flex-1 text-sm text-muted">{e.body}</p>
                <p className="text-xs uppercase tracking-wider text-dim md:w-40 md:shrink-0 md:text-right">{e.time}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="audit-trail" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Audit trail"
            title="Every action, recorded."
            lead="The Audit Agent logs what each agent recorded or did, which patient or purchase it belongs to, who owns it, and whether it matched your books."
          />
          <div className="card mt-12 overflow-x-auto">
            <table className="w-full min-w-[52rem] text-left text-sm">
              <caption className="border-b-[0.5px] border-line px-5 py-3 text-left text-xs text-dim">
                Example entries, illustrative
              </caption>
              <thead className="text-xs uppercase tracking-wider text-dim">
                <tr className="border-b-[0.5px] border-line">
                  <th scope="col" className="px-5 py-4 font-medium">ID</th>
                  <th scope="col" className="px-5 py-4 font-medium">Agent</th>
                  <th scope="col" className="px-5 py-4 font-medium">Event</th>
                  <th scope="col" className="px-5 py-4 font-medium">Record</th>
                  <th scope="col" className="px-5 py-4 font-medium">Owner</th>
                  <th scope="col" className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditTrail.map((a, i) => (
                  <tr key={a.id} className={i < auditTrail.length - 1 ? "border-b-[0.5px] border-line" : ""}>
                    <th scope="row" className="num whitespace-nowrap px-5 py-4 font-medium text-fg">{a.id}</th>
                    <td className="px-5 py-4 text-muted">{a.agent}</td>
                    <td className="px-5 py-4 text-fg/90">{a.event}</td>
                    <td className="px-5 py-4 text-muted">{a.record}</td>
                    <td className="px-5 py-4 text-muted">{a.owner}</td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className={a.status.startsWith("Matched") ? "text-win-soft" : "text-muted"}>
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <ConsultantNote>
              The consultant&apos;s own recommendations and management&apos;s decisions on them are logged in the
              same trail.
            </ConsultantNote>
          </div>
        </div>
      </section>

      <section id="risk" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader eyebrow="Risk and scale" title="Low risk by construction." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Technical risk: low", "No new infrastructure and nothing replaced. Your registration, billing and procurement systems keep running exactly as they do today."],
              ["Operational risk: low", "Every claim filed and every auction run is logged and visible. Your billing and purchase heads remain the owners, and strategic changes need management approval."],
              ["Built for 100–500 beds", "The same governance model applies at every size. Consultant hours scale with the hospital."],
            ].map(([t, b]) => (
              <article key={t} className="card p-6">
                <h3 className="text-lg text-fg">{t}</h3>
                <p className="mt-2 text-sm text-muted">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Regulatory alignment"
            title="Designed for how hospital data is regulated."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {compliance.map((c) => (
              <article key={c.title} className="card p-6">
                <h3 className="text-lg text-fg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
