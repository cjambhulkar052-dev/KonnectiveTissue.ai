# KonnectiveTissue.ai website

Marketing site for KonnectiveTissue.ai (Hospital AI Suite). Next.js 15 (App Router), React 19, Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev              # development, http://localhost:3000
npm run build            # production build
npx next start -p 3210   # serve the production build
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, problem, 6 agents, financial impact, pilot, consultant, who it's for |
| `/start-pilot` | Free two-week audit pitch and the contact form |
| `/solution` | Decision flow, agent detail, consultant layer, clinical vs operational scope, 6-month pilot |
| `/pricing` | Pricing table, ROI calculator, impact breakdown, FAQ |
| `/technical` | Integrations, data flow, security model, IT effort |
| `/governance` | Decision framework, escalation, audit trail, risk, compliance |
| `/api/contact` | Contact form handler |

## Editing content

All copy, figures and tables live in `lib/content.ts`. Change a number there and every page that uses it updates.

Items to replace before launch:

- `consultant`: placeholder name, portrait and profile.
- `impactRows` and `workedExample`: insurance and procurement rest on the published data in `sources`; leakage and marketing are market estimates and are labelled so on the site. The recovery and savings rates are KonnectiveTissue.ai's own assumptions.
- `sources`: several links point to news coverage of the original report. Swap in the primary document where you have it.
- `tiers`: only the ₹30–60L range and the 200–350 bed tier came from the brief; the other two tiers are extrapolated.
- `patientJourney` and `auditTrail`: illustrative, and labelled as such on the site.
- The "Watch Demo" button links to `/solution#how-it-works` until a video exists.
- Privacy policy and terms pages do not exist yet.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible Analytics when set |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact form email notifications via Resend |

Without the Resend variables the form logs submissions to the server console locally. On Vercel it returns an error instead, so leads are never dropped silently.

## Deploy to Vercel

Import the folder as a Vercel project (framework preset: Next.js), add the environment variables above, and attach the domain. HTTPS is automatic.
