"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-lg border-[0.5px] border-line-strong text-fg"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          ) : (
            <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 border-b-[0.5px] border-line bg-ink px-5 pb-5 pt-2"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b-[0.5px] border-line py-3.5 text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/start-pilot" onClick={() => setOpen(false)} className="btn btn-primary mt-5 w-full">
            Start Your Pilot
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
