import type { Metadata } from "next";
import { dataFlow, integrations, security } from "@/lib/content";
import { ConsultantNote, CtaBand, PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Technical overview",
  description:
    "Integrates with your existing EMR, billing and procurement systems. One central dashboard, hosted and managed by KonnectiveTissue.ai. No new infrastructure.",
};

export default function TechnicalPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical overview"
        title="Integrates with your existing EMR, billing, procurement systems. No new infrastructure required."
        lead="Agents work from the systems you already run and feed one central dashboard that KonnectiveTissue.ai hosts. Nothing to install, patch or maintain on your side."
      >
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["0", "New servers"],
            ["0", "Systems replaced"],
            ["1", "Central dashboard"],
            ["Managed", "Maintenance"],
          ].map(([v, l]) => (
            <div key={l}>
              <dd className="num text-2xl font-semibold text-fg">{v}</dd>
              <dt className="mt-1 text-sm text-muted">{l}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <section id="integrations" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="System integrations"
            title="What the agents connect to, and what they do there."
            lead="Inside the hospital, agents read. Outside it, two of them act on your behalf: one files insurance claims, one runs auctions with your vendors."
          />
          <div className="card mt-12 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Systems KonnectiveTissue.ai connects to and the type of access</caption>
              <thead className="text-xs uppercase tracking-wider text-dim">
                <tr className="border-b-[0.5px] border-line">
                  <th scope="col" className="px-5 py-4 font-medium">System</th>
                  <th scope="col" className="px-5 py-4 font-medium">What moves</th>
                  <th scope="col" className="px-5 py-4 text-right font-medium">Access</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((s, i) => {
                  const reads = s.access === "Reads";
                  return (
                    <tr key={s.system} className={i < integrations.length - 1 ? "border-b-[0.5px] border-line" : ""}>
                      <th scope="row" className="px-5 py-4 font-medium text-fg">{s.system}</th>
                      <td className="px-5 py-4 text-muted">{s.reads}</td>
                      <td className="px-5 py-4 text-right">
                        <span
                          className={`whitespace-nowrap rounded-full border-[0.5px] px-2.5 py-1 text-xs ${
                            reads ? "border-win/40 bg-win/10 text-win-soft" : "border-brand/50 bg-brand/15 text-brand-soft"
                          }`}
                        >
                          {s.access}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="data-flow" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader eyebrow="Data flow" title="From registration to report, in five steps." />
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {dataFlow.map((d, i) => (
              <li key={d.title} className="card p-5">
                <p className="num text-xs text-dim">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg text-fg">{d.title}</h3>
                <p className="mt-2 text-sm text-muted">{d.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <ConsultantNote>
              The consultant works from the same dashboard your leadership sees. There is no second set of
              numbers.
            </ConsultantNote>
          </div>
        </div>
      </section>

      <section id="security" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Security model"
            title="Stated purposes, role-based access, everything logged."
            lead="The dashboard holds patient-level records, including phone numbers, so access and purpose are controlled and every action is recorded."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {security.map((s) => (
              <article key={s.title} className="card p-6">
                <h3 className="text-lg text-fg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader eyebrow="What IT is asked to do" title="The full list." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Week 1", "Grant access", "Provide credentials or scheduled exports for registration, billing, pharmacy and procurement data."],
              ["Weeks 2–8", "Answer schema questions", "A few hours in total, to confirm what fields mean in your setup."],
              ["Ongoing", "Nothing", "KonnectiveTissue.ai hosts, monitors and maintains the dashboard and agents as a managed service."],
            ].map(([when, title, body]) => (
              <article key={title} className="card p-6">
                <p className="text-xs uppercase tracking-wider text-dim">{when}</p>
                <h3 className="mt-2 text-lg text-fg">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
