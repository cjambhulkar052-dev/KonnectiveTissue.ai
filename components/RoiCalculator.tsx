"use client";

import { useState } from "react";
import { impactTotal, tiers } from "@/lib/content";

function tierFor(beds: number) {
  return tiers.find((t) => beds >= t.min && beds <= t.max) ?? tiers[tiers.length - 1];
}

export function RoiCalculator() {
  const [beds, setBeds] = useState(250);
  const [recovery, setRecovery] = useState(impactTotal.low); // ₹ Cr

  const tier = tierFor(beds);
  const cost = (tier.costLow + tier.costHigh) / 2; // ₹ lakh
  const recoveryL = recovery * 100;
  const roi = recoveryL / cost;
  const net = (recoveryL - cost) / 100;
  const payback = cost / (recoveryL / 12);
  const costPct = Math.max(4, (cost / recoveryL) * 100);

  return (
    <div className="card grid gap-8 p-6 md:grid-cols-2 md:p-10">
      <div className="space-y-8">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="beds-range" className="text-sm font-medium text-fg">
              Hospital beds
            </label>
            <output htmlFor="beds-range" className="num text-lg font-semibold text-fg">
              {beds}
            </output>
          </div>
          <input
            id="beds-range"
            type="range"
            min={100}
            max={500}
            step={10}
            value={beds}
            onChange={(e) => setBeds(Number(e.target.value))}
            className="mt-3 h-11 w-full accent-brand"
          />
          <p className="text-xs text-dim">
            {tier.beds}: ₹{tier.base}L base fee, {tier.hours} consultant hours per week
          </p>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="recovery-range" className="text-sm font-medium text-fg">
              Annual recovery
            </label>
            <output htmlFor="recovery-range" className="num text-lg font-semibold text-win-soft">
              ₹{recovery.toFixed(1)} Cr
            </output>
          </div>
          <input
            id="recovery-range"
            type="range"
            min={impactTotal.low}
            max={impactTotal.high}
            step={0.1}
            value={recovery}
            onChange={(e) => setRecovery(Number(e.target.value))}
            className="mt-3 h-11 w-full accent-win"
          />
          <p className="text-xs text-dim">
            Starts at the conservative end of the ₹3–4.5 Cr range. Your free audit replaces this with your own
            figure.
          </p>
        </div>
      </div>

      <div aria-live="polite">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <dt className="text-xs uppercase tracking-wider text-dim">Annual investment</dt>
            <dd className="num mt-1 text-2xl font-semibold text-fg">
              ₹{tier.costLow}–{tier.costHigh}L
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-dim">Return on investment</dt>
            <dd className="num mt-1 text-2xl font-semibold text-win-soft">{roi.toFixed(1)}x</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-dim">Net gain, year one</dt>
            <dd className="num mt-1 text-2xl font-semibold text-fg">₹{net.toFixed(2)} Cr</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-dim">Fee covered by</dt>
            <dd className="num mt-1 text-2xl font-semibold text-fg">{payback.toFixed(1)} months</dd>
            <dd className="text-xs text-dim">of recovery at full run-rate</dd>
          </div>
        </dl>

        <div className="mt-8 space-y-3" aria-hidden="true">
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>Investment</span>
              <span className="num">₹{(cost / 100).toFixed(2)} Cr</span>
            </div>
            <div className="h-2.5 rounded-full bg-ink-deep">
              <div className="h-full rounded-full bg-brand" style={{ width: `${costPct}%` }} />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>Recovery</span>
              <span className="num">₹{recovery.toFixed(2)} Cr</span>
            </div>
            <div className="h-2.5 rounded-full bg-ink-deep">
              <div className="h-full w-full rounded-full bg-win" />
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-dim">
          Uses the midpoint of the fee range. Recovery ramps up through the pilot, so payback in practice is
          typically 2–3 months from go-live.
        </p>
      </div>
    </div>
  );
}
