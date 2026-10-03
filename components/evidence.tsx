import { evidenceCaveats, exampleHospital, sources, workedExample, type Basis, type SourceId } from "@/lib/content";

export function BasisBadge({ basis }: { basis: Basis }) {
  return basis === "published" ? (
    <span className="whitespace-nowrap rounded-full border-[0.5px] border-win/40 bg-win/10 px-2.5 py-0.5 text-xs text-win-soft">
      Published data
    </span>
  ) : (
    <span className="whitespace-nowrap rounded-full border-[0.5px] border-line-strong px-2.5 py-0.5 text-xs text-muted">
      Market estimate
    </span>
  );
}

export function SourceLink({ id }: { id: SourceId }) {
  const s = sources[id];
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-soft underline decoration-brand-soft/40 underline-offset-2 hover:text-fg"
    >
      {s.label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function WorkedExample() {
  return (
    <div>
      <h3 className="text-2xl text-fg">How we get there, start to finish</h3>
      <p className="mt-2 max-w-2xl text-muted">
        The working below is for {exampleHospital}. Each fact links to its source. Where no credible source
        exists, the line is marked as a market estimate.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {workedExample.map((line) => (
          <article key={line.title} className="card flex flex-col p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-lg text-fg">{line.title}</h4>
              <BasisBadge basis={line.basis} />
            </div>
            <ol className="mt-5 space-y-4">
              {line.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="num mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[0.5px] border-line-strong text-xs text-muted">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm ${s.assumption ? "text-fg" : "text-fg/85"}`}>
                      {s.assumption ? <span className="font-medium">Our assumption. </span> : null}
                      {s.text}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      {s.value ? (
                        <span className={`num font-medium ${s.assumption ? "text-win-soft" : "text-muted"}`}>
                          {s.value}
                        </span>
                      ) : null}
                      {s.source ? (
                        <span className="text-dim">
                          Source: <SourceLink id={s.source} />
                        </span>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-auto pt-6">
              <div className="flex items-baseline justify-between border-t-[0.5px] border-line pt-4">
                <span className="text-sm text-muted">Annual impact</span>
                <span className="num text-xl font-semibold text-win-soft">{line.result}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SourceList() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <h3 className="text-lg text-fg">Sources</h3>
        <ol className="mt-4 space-y-3 text-sm">
          {(Object.keys(sources) as SourceId[]).map((id) => (
            <li key={id}>
              <SourceLink id={id} />
              <span className="block text-muted">{sources[id].detail}</span>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="text-lg text-fg">How to read these numbers</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-muted marker:text-dim">
          {evidenceCaveats.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
