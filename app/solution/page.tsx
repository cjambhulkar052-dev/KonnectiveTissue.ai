import type { Metadata } from "next";
import { consultantLayer, patientJourney, revenueSources } from "@/lib/content";
import { Check, ConsultantNote, Cross, CtaBand, NotStrip, PageHero, SectionHeader } from "@/components/ui";
import { AgentGrid, ConsultantProfile, PilotTimeline } from "@/components/sections";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "Six AI agents build one record per patient, from campaign to claim. One IIM consultant reads the whole hospital through it. AI suggests. Consultant decides.",
};

const operational = [
  "Patient profiles and campaign attribution",
  "Charges, doctors seen and partner revenue per patient",
  "What was advised against what was taken at the hospital",
  "Insurance claims and denials",
  "Vendor onboarding and reverse auctions",
];

const clinical = [
  "Diagnosis or treatment decisions",
  "Clinical protocols and care pathways",
  "Medication, orders or prescriptions",
  "Patient risk scoring or prediction",
  "Prescribing targets for doctors",
];

export default function SolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solution"
        title="AI suggests. Consultant decides."
        lead="Six agents build one record for every patient, from the campaign that brought them in to the claim that was settled. One IIM consultant reads the whole hospital through it, advises your management, and acts on their go-ahead."
      >
        <div className="mt-8">
          <NotStrip />
        </div>
      </PageHero>

      <section id="how-it-works" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="One patient, start to finish"
            title="Follow a single patient through the hospital."
            lead="An illustrative example of what each agent records, and what the consultant does with it."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {patientJourney.map((j, i) => {
              const isConsultant = j.agent === "Consultant";
              return (
                <li key={j.step} className={`card p-6 ${isConsultant ? "border-brand/50 bg-brand/10" : ""}`}>
                  <p className="num text-xs text-dim">Step {i + 1}</p>
                  <h3 className="mt-3 text-lg text-fg">{j.step}</h3>
                  <p className={`text-xs ${isConsultant ? "text-brand-soft" : "text-dim"}`}>{j.agent}</p>
                  <p className="mt-3 text-sm text-muted">{j.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="agents" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader
            eyebrow="The six agents"
            title="Each agent has one job. Together they keep one record."
            lead="Every agent works from systems your hospital already runs. Everything they record and do is logged by the sixth."
          />
          <div className="mt-12">
            <AgentGrid detailed />
          </div>
          <div className="mt-6">
            <ConsultantNote>
              Everything the six agents record lands in one dashboard. Your consultant reads it every working day.
            </ConsultantNote>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl text-fg">What gets booked to the patient</h3>
            <p className="mt-2 max-w-2xl text-muted">
              Every way the hospital earns from a patient goes on the same profile, so the dashboard can show where
              the money comes from.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {revenueSources.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-fg/85">
                  <Check className="mt-1" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="consultant" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="The consultant layer"
            title="Why the consultant matters"
            lead="A virtual CEO with AI powers: one person who can see through the entire hospital."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {consultantLayer.map((c) => (
              <article key={c.title} className="card p-6">
                <h3 className="text-lg text-fg">{c.title}</h3>
                <p className="mt-2 text-muted">{c.body}</p>
              </article>
            ))}
          </div>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              ["Advises", "The consultant brings management an opportunity or a problem, with the evidence from the dashboard."],
              ["Management decides", "Your leadership approves, defers or declines. Nothing strategic happens without that go-ahead."],
              ["Acts", "Once approved, the consultant carries it out and reports the result against the same numbers."],
            ].map(([t, b], i) => (
              <li key={t} className="rounded-xl border-[0.5px] border-brand/40 bg-brand/10 px-5 py-4">
                <p className="num text-xs text-brand-soft">Step {i + 1}</p>
                <p className="mt-1 font-medium text-fg">{t}</p>
                <p className="mt-1 text-sm text-fg/80">{b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <ConsultantProfile />
          </div>
        </div>
      </section>

      <section id="clinical" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader
            eyebrow="For medical leadership"
            title="We do NOT touch clinical care. We optimize operations."
            lead="Agents record which doctors a patient met and what was billed. They do not predict, and they play no part in any clinical decision. Doctor-level views show revenue and patient follow-through, never prescribing targets."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-lg text-fg">Operational: in scope</h3>
              <ul className="mt-4 space-y-3">
                {operational.map((o) => (
                  <li key={o} className="flex gap-2.5 text-fg/90">
                    <Check className="mt-1" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg text-fg">Clinical: out of scope</h3>
              <ul className="mt-4 space-y-3">
                {clinical.map((c) => (
                  <li key={c} className="flex gap-2.5 text-muted">
                    <Cross className="mt-1" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ["No new sensors", "Nothing is installed on wards or devices."],
              ["No new data collection", "Clinicians enter nothing extra."],
              ["No predictive models", "The dashboard shows facts from your own records."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border-[0.5px] border-line px-5 py-4">
                <dt className="font-medium text-fg">{t}</dt>
                <dd className="mt-1 text-sm text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="pilot" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="The 6-month pilot"
            title="Three phases. A gate at the end of each."
            lead="You decide at every gate whether to continue. Integration effort is limited to granting access to your existing systems in Phase 1."
          />
          <div className="mt-12">
            <PilotTimeline showConsultant />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
