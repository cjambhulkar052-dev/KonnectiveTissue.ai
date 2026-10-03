import Link from "next/link";
import {
  consultantLayer,
  fitProfile,
  heroStats,
  impactRange,
  problems,
  stakeholders,
} from "@/lib/content";
import { Check, ConsultantNote, CtaBand, SectionHeader } from "@/components/ui";
import { AgentGrid, ConsultantProfile, ImpactTable, PilotTimeline } from "@/components/sections";
import { SourceList, WorkedExample } from "@/components/evidence";
import { SectionNav } from "@/components/SectionNav";
import { FlowChart } from "@/components/FlowChart";
import { ShortFlow } from "@/components/ShortFlow";

export default function HomePage() {
  return (
    <>
      <SectionNav />

      {/* 1. Opening: headline and product flowchart */}
      <section className="hero-glow border-b-[0.5px] border-line">
        <div className="container-page pb-12 pt-10 md:pt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Hospital AI Suite · AI suggests. Consultant decides.</p>
              <h1 className="mt-3 text-[2rem] text-fg md:text-[2.5rem]">
                Connect your hospital. Stop leaving money on the table.
              </h1>
              <p className="mt-3 text-lg text-muted">
                6 AI agents deep in all your hospital systems, 1 IIM consultant who runs them.{" "}
                <span className="whitespace-nowrap font-medium text-win-soft">{impactRange}/year in real impact.</span>
              </p>
            </div>
            <Link href="/start-pilot" className="btn btn-primary shrink-0 self-start lg:self-auto">
              Start Your Pilot
            </Link>
          </div>
          <div className="mt-10">
            <ShortFlow />
          </div>
        </div>

        <div className="container-page pb-14">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[0.5px] border-line bg-line md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-panel px-5 py-5">
                <dt className="text-xs uppercase tracking-wider text-dim">{s.label}</dt>
                <dd className="num mt-1.5 text-2xl font-semibold text-fg">
                  {s.value} <span className="text-sm font-normal text-muted">{s.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. Problem */}
      <section id="problem" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="The problem"
            title="You know your total revenue. Not where it comes from, or where it leaks."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <article key={p.title} className="card p-6">
                <p className="text-xs uppercase tracking-wider text-dim">{p.who}</p>
                <h3 className="mt-2 text-xl text-fg">{p.title}</h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl text-center text-2xl font-medium text-fg md:text-[1.75rem] md:leading-[1.35]">
            What if you didn&apos;t have to choose between automation and trust?
          </p>
        </div>
      </section>

      {/* 3. Solution */}
      <section id="solution" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="The solution"
              title="Six AI agents inside your systems, reporting to one IIM consultant."
              lead="Our agents integrate with the systems you already run. They don't disturb your operations, they enhance them. Everything they record goes to the IIM consultant we deploy to your hospital, who reads the whole hospital through one record per patient."
            />
            <Link href="/solution" className="btn btn-secondary shrink-0">
              Follow one patient through
            </Link>
          </div>
          <div className="mt-12">
            <AgentGrid />
          </div>
          <div className="mt-6">
            <ConsultantNote>
              Everything the six agents record lands in one dashboard. Your consultant reads it every working day,
              advises management, and acts once management approves.
            </ConsultantNote>
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="The consultant layer"
              title="Why the consultant matters"
              lead="A virtual CEO with AI powers: one person who can see through the entire hospital."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {consultantLayer.map((c, i) => (
                <article key={c.title} className="card p-6">
                  <span className="num flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-sm font-semibold text-brand-soft">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg text-fg">{c.title}</h3>
                  <p className="mt-2 text-muted">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Financial impact */}
      <section id="impact" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Financial impact"
            title={`${impactRange} a year, line by line.`}
            lead="Two lines rest on published data. Two are market estimates, and are marked as such. Your free audit replaces all four with figures from your own records."
          />
          <div className="mt-12">
            <ImpactTable />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ConsultantNote>
              Your consultant reviews these numbers with your finance head every month and presents them to your
              board.
            </ConsultantNote>
            <div className="flex items-start gap-3 rounded-lg border-[0.5px] border-win/40 bg-win/10 px-4 py-3">
              <Check className="mt-1" />
              <p className="text-sm text-fg/85">
                <span className="font-semibold text-fg">Audit Agent. </span>
                Once live, every line traces back to patient profiles and bills, and the totals are reconciled with
                your books.
              </p>
            </div>
          </div>

          <div id="working" className="mt-20">
            <WorkedExample />
          </div>
          <div id="sources" className="mt-16 border-t-[0.5px] border-line pt-12">
            <SourceList />
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section id="pilot" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="How it works"
              title="Two flows, one dashboard, one consultant."
              lead="Revenue follows the patient. Savings follow the purchase. Both end in one dashboard, read by your consultant."
            />
            <Link href="/solution#how-it-works" className="btn btn-secondary shrink-0">
              Follow one patient through
            </Link>
          </div>
          <div className="mt-12">
            <FlowChart />
          </div>

          <div className="mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl text-fg">Six months to full impact</h3>
              <p className="mt-2 text-muted">
                A pilot in three phases, each ending in a gate your leadership signs off. Zero new
                infrastructure at any stage.
              </p>
            </div>
            <Link href="/solution#pilot" className="btn btn-secondary shrink-0">
              See the full pilot plan
            </Link>
          </div>
          <div className="mt-10">
            <PilotTimeline />
          </div>
        </div>
      </section>

      {/* 7. Consultant profile */}
      <section id="consultant" className="section border-t-[0.5px] border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Your consultant"
            title="One person who sees the whole hospital, and answers for the numbers."
          />
          <div className="mt-12">
            <ConsultantProfile />
          </div>
        </div>
      </section>

      {/* 8. Who it's for */}
      <section id="who" className="section border-t-[0.5px] border-line bg-ink-deep">
        <div className="container-page">
          <SectionHeader eyebrow="Who it's for" title="Every seat at the table gets its answer." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stakeholders.map((s) => (
              <article key={s.role} className="card flex flex-col p-6">
                <p className="text-xs uppercase tracking-wider text-dim">{s.role}</p>
                <h3 className="mt-2 text-lg text-fg">&ldquo;{s.question}&rdquo;</h3>
                <p className="mt-3 text-sm text-muted">{s.answer}</p>
                <Link href={s.href} className="mt-auto pt-5 text-sm font-medium text-brand-soft hover:text-fg">
                  {s.link} →
                </Link>
              </article>
            ))}
          </div>

          <h3 className="mt-20 text-2xl text-fg">Built for mid-sized hospitals that trust what they can verify.</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fitProfile.map((f) => (
              <li key={f.label} className="card p-5">
                <p className="font-semibold text-fg">{f.label}</p>
                <p className="mt-2 text-sm text-muted">{f.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
