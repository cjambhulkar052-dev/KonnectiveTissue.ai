import type { Metadata } from "next";
import { impactRange, pricingIncludes, roiRange } from "@/lib/content";
import { Check, ConsultantNote, CtaBand, PageHero, SectionHeader } from "@/components/ui";
import { ImpactTable, PricingTable } from "@/components/sections";
import { SourceList, WorkedExample } from "@/components/evidence";
import { RoiCalculator } from "@/components/RoiCalculator";

export const metadata: Metadata = {
  title: "Pricing and ROI",
  description: `Transparent pricing by bed size, with the ROI math alongside: ${impactRange} recovered against ₹30–60L invested.`,
};

const faqs = [
  {
    q: "What does the base fee cover?",
    a: "The six agents and the central dashboard, deployed and managed, including claim filing and reverse auctions. The consultant's hours make up the rest of the annual cost.",
  },
  {
    q: "Are there setup or integration charges?",
    a: "No. KonnectiveTissue.ai works from the systems you already run, so there is nothing to build and nothing to bill for.",
  },
  {
    q: "Where do the published estimates come from?",
    a: "Two lines rest on published data, linked on this page. Two are market estimates and are marked as such. The recovery and savings rates we apply are our own assumptions, set below the published benchmarks.",
  },
  {
    q: "How is the recovery figure verified once live?",
    a: "Every figure traces back to patient profiles and bills. The Audit Agent reconciles the totals with your books, and your finance head confirms them each month.",
  },
  {
    q: "What if the audit finds less than expected?",
    a: "The two-week audit is free and comes before any commitment. You see the estimate for your own hospital before deciding.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing and ROI"
        title={`₹30–60L invested. ${impactRange} recovered.`}
        lead="One annual fee that includes your consultant. No setup fee, no integration cost, no new infrastructure to buy."
      >
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
          {[
            [roiRange, "Return in year one"],
            ["2–3 months", "Typical payback"],
            ["₹0", "Integration cost"],
          ].map(([v, l]) => (
            <div key={l}>
              <dd className="num text-2xl font-semibold text-win-soft md:text-3xl">{v}</dd>
              <dt className="mt-1 text-sm text-muted">{l}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="Pricing" title="Priced by bed size and consultant hours." />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <PricingTable />
            <div>
              <h3 className="text-lg text-fg">Included at every size</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {pricingIncludes.map((p) => (
                  <li key={p} className="flex gap-2 text-muted">
                    <Check className="mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <ConsultantNote>
              Your consultant is part of the price, not an add-on. The same person stays with your hospital for
              the full engagement.
            </ConsultantNote>
          </div>
        </div>
      </section>

      <section id="calculator" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader
            eyebrow="ROI calculator"
            title="Cost against recovery, for a hospital your size."
            lead={`Set your bed count and a recovery figure. The published ${roiRange} is the cautious case: the full recovery range against the highest fee.`}
          />
          <div className="mt-12">
            <RoiCalculator />
          </div>
        </div>
      </section>

      <section className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Where the recovery comes from"
            title="The same table your board will see."
            lead="Two lines rest on published data. Two are market estimates, and are marked as such."
          />
          <div className="mt-12">
            <ImpactTable />
          </div>
          <div className="mt-20">
            <WorkedExample />
          </div>
          <div className="mt-16 border-t-[0.5px] border-line pt-12">
            <SourceList />
          </div>
        </div>
      </section>

      <section className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader eyebrow="Questions" title="What finance teams ask first." />
          <dl className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <dt className="font-semibold text-fg">{f.q}</dt>
                <dd className="mt-2 text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
