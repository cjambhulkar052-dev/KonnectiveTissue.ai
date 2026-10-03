import Link from "next/link";
import { site } from "@/lib/content";
import { Logo } from "./Header";

const columns = [
  {
    title: "Product",
    links: [
      { label: "The 6 agents", href: "/solution#agents" },
      { label: "Consultant layer", href: "/solution#consultant" },
      { label: "Financial impact", href: "/#impact" },
      { label: "Pricing and ROI", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "6-month pilot", href: "/solution#pilot" },
      { label: "Technical overview", href: "/technical" },
      { label: "ROI calculator", href: "/pricing#calculator" },
      { label: "Free data audit", href: "/start-pilot" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Audit trail", href: "/governance#audit-trail" },
      { label: "Compliance", href: "/governance#compliance" },
      { label: "Data handling", href: "/technical#security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-line bg-ink-deep">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            {site.descriptor}. Six AI agents and one accountable IIM consultant, working only with the data your
            hospital already has.
          </p>
          <p className="mt-4 text-sm font-medium text-fg">{site.promise}</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold text-fg">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t-[0.5px] border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-dim md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Designed to align with HIPAA principles and India&apos;s Digital Personal Data Protection Act, 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
