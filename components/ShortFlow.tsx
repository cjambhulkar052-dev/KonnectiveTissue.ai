import Link from "next/link";

const items = [
  { tag: "Revenue", text: "Know where every cent comes from", tone: "border-brand/50 bg-brand/10", tagTone: "text-brand-soft" },
  { tag: "Savings", text: "Pay the lowest price on every purchase", tone: "border-win/40 bg-win/10", tagTone: "text-win-soft" },
  { tag: "Marketing", text: "An IIM consultant who acts on it", tone: "border-line-strong bg-panel-2", tagTone: "text-muted" },
];

/** The product in one line: three promises, joined. */
export function ShortFlow() {
  return (
    <figure aria-label="What KonnectiveTissue.ai does">
      <div className="no-scrollbar overflow-x-auto">
        <ul className="flex min-w-[44rem] items-stretch gap-2 lg:gap-3">
          {items.map((item, i) => (
            <li key={item.tag} className="flex min-w-0 flex-1 items-stretch gap-2 lg:gap-3">
              {i > 0 ? (
                <span aria-hidden="true" className="flex shrink-0 items-center text-xl font-semibold text-dim">
                  +
                </span>
              ) : null}
              <div className={`flex min-w-0 flex-1 flex-col justify-center rounded-xl border-[0.5px] px-4 py-4 lg:px-5 ${item.tone}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${item.tagTone}`}>{item.tag}</p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-fg lg:text-base">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-4 text-sm text-muted">
        <Link href="#pilot" className="font-medium text-brand-soft hover:text-fg">
          See the full flow ↓
        </Link>
      </figcaption>
    </figure>
  );
}
