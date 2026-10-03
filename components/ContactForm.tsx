"use client";

import { useState } from "react";
import { formOptions } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-fg">
      {children}
      {optional ? <span className="ml-1 font-normal text-dim">(optional)</span> : null}
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card border-win/40 p-8">
        <h3 className="text-xl text-fg">Request received.</h3>
        <p className="mt-2 text-muted">
          Your consultant will be in touch within two working days to schedule the data audit.
        </p>
        <button type="button" className="btn btn-secondary mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="hospital">Hospital name</Label>
          <input id="hospital" name="hospital" required autoComplete="organization" className="field" />
        </div>
        <div>
          <Label htmlFor="name">Your name</Label>
          <input id="name" name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <select id="role" name="role" required defaultValue="" className="field">
            <option value="" disabled>
              Select your role
            </option>
            {formOptions.roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="field" />
        </div>
        <div>
          <Label htmlFor="beds">Bed count</Label>
          <select id="beds" name="beds" required defaultValue="" className="field">
            <option value="" disabled>
              Select bed count
            </option>
            {formOptions.beds.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="hours" optional>
            Consultant hours needed
          </Label>
          <select id="hours" name="hours" defaultValue="Not sure yet" className="field">
            {formOptions.hours.map((h) => (
              <option key={h}>{h}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="priority" optional>
            Top priority
          </Label>
          <select id="priority" name="priority" defaultValue={formOptions.priorities[5]} className="field">
            {formOptions.priorities.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        {/* Honeypot: hidden from people, filled by bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-lg border-[0.5px] border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Request the free audit"}
        </button>
        <p className="text-xs text-dim">No commitment. Your details are used only to arrange the audit.</p>
      </div>
    </form>
  );
}
