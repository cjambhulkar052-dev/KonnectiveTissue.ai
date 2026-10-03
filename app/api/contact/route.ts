import { NextResponse } from "next/server";

export const runtime = "nodejs";

const required = ["hospital", "name", "role", "email", "phone", "beds"] as const;
const labels: Record<string, string> = {
  hospital: "Hospital",
  name: "Name",
  role: "Role",
  email: "Email",
  phone: "Phone",
  beds: "Bed count",
  priority: "Priority",
  hours: "Consultant hours",
};

function clean(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, 500) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: accept silently so bots get no signal.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(Object.keys(labels).map((k) => [k, clean(body[k])]));

  for (const key of required) {
    if (!data[key]) {
      return NextResponse.json({ error: `${labels[key]} is required.` }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const text = Object.entries(labels)
    .map(([k, label]) => `${label}: ${data[k] || "-"}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    // On Vercel, never drop a lead silently.
    if (process.env.VERCEL) {
      console.error("Contact form: RESEND_API_KEY / CONTACT_TO_EMAIL not configured.");
      return NextResponse.json(
        { error: "We could not send your request right now. Please try again later." },
        { status: 503 },
      );
    }
    console.log(`\n[contact] New pilot request (email not configured, logging only)\n${text}\n`);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "KonnectiveTissue.ai <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `Pilot request: ${data.hospital} (${data.beds} beds)`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: email send failed", res.status, await res.text());
    return NextResponse.json(
      { error: "We could not send your request right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
