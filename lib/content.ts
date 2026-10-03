// Single source of truth for site copy, figures and tables.
// Edit numbers here and every page updates.

export const impactTotal = { low: 3.0, high: 4.5 };
export const impactRange = "₹3–4.5 Cr";
export const roiRange = "5–7x";

export const site = {
  name: "KonnectiveTissue.ai",
  descriptor: "Hospital AI Suite",
  tagline: `6 AI agents. 1 IIM consultant. One record. ${impactRange}/year in real impact.`,
  promise: "AI suggests. Consultant decides.",
  description:
    "KonnectiveTissue.ai builds one record per patient: the campaign that brought them, every charge, every doctor, every claim. Six AI agents keep it current, and an IIM consultant reads the whole hospital through it. Zero new infrastructure.",
};

export const nav = [
  { label: "Solution", href: "/solution" },
  { label: "Impact", href: "/#impact" },
  { label: "Pricing", href: "/pricing" },
  { label: "Technical", href: "/technical" },
  { label: "Governance", href: "/governance" },
];

export const heroStats = [
  { value: "100–500", unit: "beds", label: "Hospital size" },
  { value: impactRange, unit: "per year", label: "Annual impact" },
  { value: "6", unit: "months", label: "Pilot timeline" },
  { value: "₹0", unit: "", label: "Integration cost" },
];

export const notList = [
  "No new infrastructure",
  "No predictions",
  "No clinical disruption",
  "Numbers verified against your books",
  "Consultant accountable",
];

export const problems = [
  {
    title: "The Opportunity",
    body: "Marketing is paid for in leads, not in patients. Medicines and tests are prescribed in your hospital and never taken there. Claims are denied and not chased. Purchases are made at whatever the usual vendor quotes. Each of these is money, and none of it shows up in one place.",
    who: "Finance",
  },
  {
    title: "The Trust Problem",
    body: "An agency reports clicks and enquiries. Nobody can say which campaign produced a paying patient, or what that patient was worth. Without a record anyone can check, marketing, claims and procurement all run on trust.",
    who: "Leadership and the Board",
  },
  {
    title: "The Data Problem",
    body: "Registration, billing, pharmacy, diagnostics, insurance and purchase each hold a piece of the patient. Nothing joins them. So nobody can answer a simple question: where does our money come from, and where does it go?",
    who: "Operations and IT",
  },
];

export type Agent = {
  n: number;
  name: string;
  role: string;
  summary: string;
  sources: string[];
  does: string[];
  impact: string;
  impactLabel: string;
};

export const agents: Agent[] = [
  {
    n: 1,
    name: "Registration Agent",
    role: "Patient profile",
    summary:
      "The moment a patient is registered in your hospital system, the agent creates one profile for them in the central dashboard. Everything that follows is recorded against it.",
    sources: ["Hospital registration system", "Patient phone number", "Visit and admission records"],
    does: [
      "Creates one profile per patient, keyed to their phone number",
      "Adds repeat visits to the same profile",
      "Needs no extra data entry at the front desk",
    ],
    impact: "One record",
    impactLabel: "per patient, across every visit",
  },
  {
    n: 2,
    name: "Attribution Agent",
    role: "Campaign attribution",
    summary:
      "Matches the patient's phone number to the campaign that brought them in, digital or offline, or marks them as a walk-in. Marketing is then measured in patients and revenue.",
    sources: ["Campaign enquiries and leads", "Call and form records", "Patient profile"],
    does: [
      "Links each patient to a campaign, or to walk-in",
      "Shows revenue earned per campaign, not just leads",
      "Shows cost per paying patient for every channel",
    ],
    impact: "₹0.2–0.5 Cr",
    impactLabel: "marketing spend redirected, market estimate",
  },
  {
    n: 3,
    name: "Lifecycle Agent",
    role: "Revenue per patient",
    summary:
      "Books everything the patient is charged to their profile, from the first consultation to surgery, room charges and medicines, along with every doctor they met.",
    sources: [
      "Billing across every department",
      "Doctor and department records",
      "On-site partner service bills",
    ],
    does: [
      "Records every charge and every doctor against the patient",
      "Books revenue share from on-site partner services to the same profile",
      "Compares medicines, tests and follow-ups advised with what the patient took at the hospital",
    ],
    impact: "₹0.9–1.3 Cr",
    impactLabel: "leakage identified, market estimate",
  },
  {
    n: 4,
    name: "Insurance Agent",
    role: "Claims and denials",
    summary:
      "Pulls the patient's information and documents from the profile, files the insurance claim, and manages denials until the claim is settled.",
    sources: ["Patient profile and bills", "Discharge and supporting documents", "Insurer and TPA responses"],
    does: [
      "Assembles the documents and files the claim",
      "Follows up denials and short payments",
      "Records claim status and amounts against the patient",
    ],
    impact: "₹1.1–1.5 Cr",
    impactLabel: "claims recovered per year",
  },
  {
    n: 5,
    name: "Procurement Agent",
    role: "Live reverse auctions",
    summary:
      "Your vendors are onboarded once. After that, each purchase runs as a live reverse auction, so vendors bid the price down instead of quoting it up.",
    sources: ["Purchase requirements", "Onboarded vendor list", "Bid and price history"],
    does: [
      "Onboards and verifies vendors",
      "Runs a live reverse auction for each transaction",
      "Records every bid and the winning price",
    ],
    impact: "₹0.8–1.2 Cr",
    impactLabel: "saved through reverse auctions",
  },
  {
    n: 6,
    name: "Audit Agent",
    role: "Audit trail",
    summary:
      "Keeps a complete trail of everything the other five agents record and do, and checks the totals against your books. Nothing in the dashboard is unexplained.",
    sources: ["Activity of agents 1–5", "Billing totals", "General ledger"],
    does: [
      "Logs every profile, charge, claim and bid",
      "Reconciles dashboard totals with your books",
      "Makes the full trail available to finance and audit",
    ],
    impact: "100%",
    impactLabel: "of activity in the audit trail",
  },
];

// Everything a hospital earns from a patient, booked to one profile.
export const revenueSources = [
  "Consultations and follow-up visits",
  "Diagnostics: lab and imaging",
  "Surgery, theatre and anaesthesia",
  "Implants and consumables",
  "Room, ICU and nursing charges",
  "Pharmacy",
  "Emergency and ambulance",
  "Health check-up packages",
  "Day-care, home care and teleconsultation",
  "Repeat care: dialysis, chemotherapy, physiotherapy",
  "Corporate tie-ups and government schemes",
  "International patients",
  "On-site partner services (revenue share)",
  "Family and word-of-mouth referrals",
  "Non-clinical: cafeteria, parking, attendant stay",
];

export const consultantLayer = [
  {
    title: "Expert judgment",
    body: "Think of a virtual CEO with AI powers. Your IIM consultant reads the health of the whole hospital from the dashboard: where the money is made, which doctors and specialities patients come for, and where revenue leaks. With the KonnectiveTissue.ai core team, they study your competitors and identify what the hospital should add next.",
  },
  {
    title: "Daily oversight",
    body: "The consultant reads the dashboard every working day and runs your marketing, digital and offline, from what it shows. Budget follows the campaigns that bring paying patients, not the ones that look busy.",
  },
  {
    title: "Trust and accountability",
    body: "The consultant advises. Your management decides. Once management gives the go-ahead, the consultant acts, and one named person stays accountable for the result.",
  },
];

export const reliability = {
  doList: [
    "Build one profile per patient from your own registration data",
    "Book every charge and every doctor against that profile",
    "File insurance claims and manage denials",
    "Run a reverse auction for each purchase",
  ],
  dontList: [
    "Predict clinical outcomes or patient risk",
    "Make or influence any clinical decision",
    "Install sensors, devices or hardware",
    "Replace your HIS, EMR or billing system",
  ],
  byStakeholder: [
    { who: "Finance", what: "Verified numbers, not projections" },
    { who: "Medical", what: "No clinical disruption" },
    { who: "IT", what: "No infrastructure sprawl" },
    { who: "Administration", what: "Low, bounded risk" },
  ],
};

/* ---------- Evidence ---------- */

export type SourceId = "irdai" | "narayana" | "premier" | "macquarie" | "caps" | "fischer" | "nielsen";

export const sources: Record<SourceId, { label: string; detail: string; url: string }> = {
  irdai: {
    label: "IRDAI Annual Report 2023-24",
    detail: "Health insurance claims paid, disallowed and repudiated in FY24. As reported by The South First.",
    url: "https://thesouthfirst.com/health/health-insurance-claims-standalone-insurers-pay-rs-3-07-per-rs-5-claim-general-insurers-offer-rs-4-17/",
  },
  narayana: {
    label: "Narayana Health, Q1 FY27 investor presentation",
    detail: "Payor mix of its India hospitals. As reported by Investing.com.",
    url: "https://ca.investing.com/news/company-news/narayana-health-q1-fy27-slides-india-hospitals-surge-amid-insurance-losses-93CH-4770533",
  },
  premier: {
    label: "Premier Inc. survey, 2024",
    detail: "516 US hospitals on claim denials and appeals. As reported by Healthcare Innovation.",
    url: "https://www.hcinnovationgroup.com/population-health-management/payers-providers/news/53099677/premier-survey-15-percent-of-claims-to-private-payers-are-initially-denied",
  },
  macquarie: {
    label: "Macquarie, FY26",
    detail: "Medicines, consumables and implants as a share of private hospital revenue in India. As reported by Upstox.",
    url: "https://upstox.com/news/market-news/stocks/apollo-hospitals-fortis-max-health-hospital-stocks-remain-under-pressure-what-exactly-is-the-issue/article-201181/",
  },
  caps: {
    label: "CAPS Research, 2003",
    detail: "Reverse auctions against traditional paper bids. As reported by Network World.",
    url: "https://www.networkworld.com/article/2337697/bidding-down.html",
  },
  fischer: {
    label: "Fischer et al., Journal of General Internal Medicine, 2010",
    detail: "Analysis of 195,930 electronic prescriptions in the US.",
    url: "https://link.springer.com/article/10.1007/s11606-010-1253-9",
  },
  nielsen: {
    label: "Nielsen Annual Marketing Report, 2025",
    detail: "Global survey of marketers on ROI measurement.",
    url: "https://www.nielsen.com/news-center/2025/nielsen-unveils-makerting-roi-blueprint/",
  },
};

export type Basis = "published" | "estimate";

export const impactRows: {
  category: string;
  agent: string;
  basis: Basis;
  note: string;
  low: number;
  high: number;
}[] = [
  {
    category: "Insurance claims and denials",
    agent: "Insurance Agent",
    basis: "published",
    note: "IRDAI denial data, Premier appeal data",
    low: 1.1,
    high: 1.5,
  },
  {
    category: "Procurement savings",
    agent: "Procurement Agent",
    basis: "published",
    note: "Macquarie cost share, CAPS auction study",
    low: 0.8,
    high: 1.2,
  },
  {
    category: "Pharmacy, diagnostics and follow-up leakage",
    agent: "Lifecycle Agent",
    basis: "estimate",
    note: "Gap is documented, rupee value is estimated",
    low: 0.9,
    high: 1.3,
  },
  {
    category: "Marketing spend redirected",
    agent: "Attribution Agent",
    basis: "estimate",
    note: "Gap is documented, rupee value is estimated",
    low: 0.2,
    high: 0.5,
  },
];

export const exampleHospital = "a 250-bed hospital with ₹60 Cr annual revenue";

export type ExampleStep = { text: string; value?: string; source?: SourceId; assumption?: boolean };

export const workedExample: {
  title: string;
  basis: Basis;
  result: string;
  steps: ExampleStep[];
}[] = [
  {
    title: "Insurance claims and denials",
    basis: "published",
    result: "₹1.1–1.5 Cr",
    steps: [
      { text: "Insured patients account for 33% of hospital revenue.", value: "₹19.8 Cr claimed", source: "narayana" },
      {
        text: "Across Indian health insurance, 12.9% of claimed value is disallowed and 9.3% is repudiated.",
        value: "₹4.4 Cr at risk",
        source: "irdai",
      },
      {
        text: "In US hospitals, more than 54% of denied claims are eventually paid after appeal.",
        value: "Benchmark",
        source: "premier",
      },
      {
        text: "We assume 25–35% of the amount at risk is recovered, well below that benchmark.",
        value: "₹1.1–1.5 Cr",
        assumption: true,
      },
    ],
  },
  {
    title: "Procurement savings",
    basis: "published",
    result: "₹0.8–1.2 Cr",
    steps: [
      {
        text: "Medicines, consumables and implants cost about 21% of private hospital revenue.",
        value: "₹12.6 Cr purchased",
        source: "macquarie",
      },
      {
        text: "Reverse auctions reduced prices by 15% on average against traditional bids.",
        value: "Benchmark",
        source: "caps",
      },
      {
        text: "We assume 6.5–9.5% is saved, well below that benchmark.",
        value: "₹0.8–1.2 Cr",
        assumption: true,
      },
    ],
  },
  {
    title: "Pharmacy, diagnostics and follow-up leakage",
    basis: "estimate",
    result: "₹0.9–1.3 Cr",
    steps: [
      {
        text: "22% of prescriptions are never filled, rising to 28% for newly prescribed medicines.",
        value: "Documented gap",
        source: "fischer",
      },
      {
        text: "There is no published rupee figure for Indian hospitals. This line is a market estimate, and your audit replaces it with a figure measured from your own prescriptions and bills.",
        value: "₹0.9–1.3 Cr",
        assumption: true,
      },
    ],
  },
  {
    title: "Marketing spend redirected",
    basis: "estimate",
    result: "₹0.2–0.5 Cr",
    steps: [
      {
        text: "85% of marketers say they are confident in their ROI measurement, but only 32% measure it across traditional and digital channels together.",
        value: "Documented gap",
        source: "nielsen",
      },
      {
        text: "There is no published figure for how much hospital marketing spend fails to bring paying patients. This line is a market estimate of the spend that attribution lets you move to campaigns that work.",
        value: "₹0.2–0.5 Cr",
        assumption: true,
      },
    ],
  },
];

export const evidenceCaveats = [
  "Recovery and savings rates are KonnectiveTissue.ai's working assumptions, set below the published benchmarks.",
  "The Premier, CAPS and Fischer studies are from the United States. They show the size of the gap, not an Indian rate.",
  "The IRDAI figures cover all health insurance claims in India, including those filed by patients. A given hospital's denial rate may differ.",
  "Your free two-week audit replaces every figure here with one measured from your own records.",
];

// One patient, start to finish. Illustrative.
export const patientJourney = [
  { step: "Campaign", agent: "Consultant", body: "A patient sees an advertisement for a knee camp and calls the hospital." },
  { step: "Registration", agent: "Registration Agent", body: "The front desk registers them as usual. A profile appears in the dashboard." },
  { step: "Attribution", agent: "Attribution Agent", body: "Their phone number matches the knee-camp enquiry, so the campaign gets the credit." },
  {
    step: "Treatment",
    agent: "Lifecycle Agent",
    body: "Consultation, X-ray, MRI, surgery, implant, room and medicines are booked to the profile, with each doctor they met.",
  },
  {
    step: "Insurance",
    agent: "Insurance Agent",
    body: "The agent files the claim. Part of it is denied, appealed and recovered. Each step is recorded against the patient.",
  },
  {
    step: "Procurement",
    agent: "Procurement Agent",
    body: "The implant was bought through a live reverse auction among onboarded vendors, at the lowest bid.",
  },
  {
    step: "Follow-through",
    agent: "Lifecycle Agent",
    body: "Ten physiotherapy sessions were advised and three were taken at the hospital. The dashboard shows the gap.",
  },
  {
    step: "Insight",
    agent: "Consultant",
    body: "The consultant sees what the knee camp really earned, and advises management on whether to run it again.",
  },
];

export const phases = [
  {
    n: 1,
    name: "Foundation",
    months: "Months 1–2",
    items: [
      "Registration and billing connected, patient profiles live",
      "Campaigns set up for phone-number attribution",
      "Vendors onboarded, baseline agreed with finance",
    ],
    gate: "Baseline signed off by your CFO and the consultant",
    consultant: "Takes over your marketing and sets up tracking for every campaign.",
  },
  {
    n: 2,
    name: "Validation",
    months: "Months 3–4",
    items: [
      "First claims filed and denials worked",
      "First reverse auctions run",
      "First leakage report and revenue by campaign",
    ],
    gate: "First results verified against your books",
    consultant: "Presents the first read of the hospital's health and a competitor review to management.",
  },
  {
    n: 3,
    name: "Scale",
    months: "Months 5–6",
    items: [
      "Full suite of six agents active",
      "Weekly review with department heads",
      "Handoff to your ops team, board-ready impact report",
    ],
    gate: "Board report and decision on continuation",
    consultant: "Presents verified impact to the board and recommends what the hospital should add next.",
  },
];

// Placeholder profile: replace with the consultant's real details before launch.
export const consultant = {
  name: "Your Lead Consultant",
  initials: "IIM",
  title: "Lead Consultant, KonnectiveTissue.ai",
  credentials: ["IIM graduate", "Marketing, digital and offline", "Accountable for the numbers"],
  bio: "Your engagement is led by an IIM graduate who works as a virtual CEO with AI powers: one person who can see through the entire hospital. They read the same dashboard your leadership sees, run your marketing from it, and work with the KonnectiveTissue.ai core team on competitive analysis.",
  quote: "Hospitals have the data. They just need someone to help them see it clearly and act on it confidently.",
  responsibilities: [
    "Identifies where the hospital makes money, and where it could make more",
    "Runs your digital and offline marketing",
    "Benchmarks you against competitors with the KonnectiveTissue.ai core team",
    "Advises management, and acts once management approves",
  ],
};

export const fitProfile = [
  { label: "100–500 beds", detail: "Large enough for the leakage to matter, focused enough to act on it." },
  { label: "Strong billing infrastructure", detail: "A hospital system and billing already in daily use." },
  { label: "₹20 Cr+ annual revenue", detail: "Where a few points of margin is a board-level number." },
  { label: "Data-driven leadership", detail: "Decisions get made on evidence, and evidence gets checked." },
  { label: "Trust through verification", detail: "You would rather see an audit trail than a forecast." },
];

export const stakeholders = [
  {
    role: "CFO and Finance",
    question: "Can I verify these numbers?",
    answer:
      "Every figure traces back to a patient profile and a bill, and the Audit Agent reconciles the totals with your books. Our estimates link to the published data behind them.",
    href: "/#impact",
    link: "See the impact breakdown",
  },
  {
    role: "COO and Operations",
    question: "What does this cost my teams?",
    answer:
      "Nothing new to install or maintain. Agents work from the systems you already run, and the suite reaches full impact in six months with clear phase gates.",
    href: "/#pilot",
    link: "See the 6-month pilot",
  },
  {
    role: "CMO and Medical leadership",
    question: "Does this touch clinical care?",
    answer:
      "No. Agents record which doctors a patient met and what was billed. Doctor-level views show revenue and patient follow-through, never prescribing targets.",
    href: "/solution#clinical",
    link: "See what we do not do",
  },
  {
    role: "IT and Systems",
    question: "What do I have to integrate?",
    answer:
      "Access to your existing registration, billing and procurement data. The dashboard and agents are hosted and maintained by KonnectiveTissue.ai.",
    href: "/technical",
    link: "See the technical model",
  },
  {
    role: "Hospital Administration",
    question: "Who is accountable?",
    answer:
      "One named consultant, who acts only after management approves. Every profile, charge, claim and auction is logged in an audit trail your team can inspect.",
    href: "/governance",
    link: "See governance",
  },
  {
    role: "Board and Trustees",
    question: "Is the return real?",
    answer:
      "The impact is measured from your own patients and bills. You see where revenue comes from by campaign, speciality and department, and how you compare with competitors.",
    href: "/pricing",
    link: "See the ROI math",
  },
];

export type Tier = {
  beds: string;
  min: number;
  max: number;
  base: number; // ₹ lakh
  hours: number; // per week
  costLow: number; // ₹ lakh / year
  costHigh: number;
};

export const tiers: Tier[] = [
  { beds: "100–200 beds", min: 100, max: 199, base: 12, hours: 8, costLow: 30, costHigh: 35 },
  { beds: "200–350 beds", min: 200, max: 350, base: 18, hours: 12, costLow: 40, costHigh: 45 },
  { beds: "350–500 beds", min: 351, max: 500, base: 24, hours: 16, costLow: 55, costHigh: 60 },
];

export const pricingIncludes = [
  "All six agents and the central dashboard, deployed and managed",
  "A named IIM consultant for the agreed hours every week",
  "Marketing run by the consultant, digital and offline",
  "Insurance claim filing and denial management",
  "Vendor onboarding and reverse auctions",
  "No setup fee, no integration fee, no infrastructure cost",
];

export const integrations = [
  { system: "Registration (HIS)", reads: "Patient registration, phone number, visits", access: "Reads" },
  { system: "Billing", reads: "Every charge, from consultation to room, surgery and pharmacy", access: "Reads" },
  { system: "Pharmacy and diagnostics", reads: "What was advised and what was dispensed or performed", access: "Reads" },
  { system: "On-site partner services", reads: "Revenue share from services run by partners on your premises", access: "Reads" },
  { system: "Marketing channels", reads: "Campaign enquiries, calls and forms, with phone numbers", access: "Reads" },
  { system: "Insurers and TPAs", reads: "Claim documents out, responses and settlements in", access: "Files claims" },
  { system: "Vendors", reads: "Purchase requirements out, bids in", access: "Runs auctions" },
];

export const dataFlow = [
  {
    title: "Register",
    body: "A patient is registered in your hospital system as usual. The agent creates their profile in the dashboard.",
  },
  {
    title: "Attribute",
    body: "The phone number is matched to the campaign that brought the patient in, or marked as a walk-in.",
  },
  {
    title: "Book",
    body: "Every charge, every doctor and every partner amount is recorded against the profile.",
  },
  {
    title: "Act",
    body: "The agent files the insurance claim and manages denials. Purchases run as reverse auctions.",
  },
  {
    title: "Report",
    body: "The dashboard shows where money comes from and where it leaks. Every step is in the audit trail.",
  },
];

export const security = [
  {
    title: "Your systems stay as they are",
    body: "Agents work from your existing registration, billing and procurement systems. Nothing is replaced and nothing is installed on hospital machines.",
  },
  {
    title: "Patient data used for stated purposes",
    body: "Profiles hold a phone number, charges, doctors seen and claim documents. They are used for attribution, revenue visibility and claims, and for nothing else.",
  },
  {
    title: "Role-based access",
    body: "Finance, operations, marketing and administration each see what their role requires. Access is granted and revoked by your team.",
  },
  {
    title: "Verified against your books",
    body: "Dashboard totals are reconciled with your billing and ledger, so the numbers are the same ones your finance team reports.",
  },
  {
    title: "Fully managed",
    body: "The dashboard and agents are hosted and maintained by KonnectiveTissue.ai. No servers to patch and no software to upgrade on your side.",
  },
  {
    title: "Every action logged",
    body: "Each profile, charge, claim and bid is recorded with a timestamp and is available to your IT and audit teams.",
  },
];

export const decisionFramework = [
  {
    decision: "Where the marketing budget goes",
    agent: "Shows revenue by campaign",
    consultant: "Advises, then runs it",
    hospital: "Approves the budget",
  },
  {
    decision: "What to add or change in the hospital",
    agent: "Shows revenue and leaks",
    consultant: "Advises, with competitor analysis",
    hospital: "Management decides",
  },
  {
    decision: "Acting on an approved decision",
    agent: "Records the outcome",
    consultant: "Acts after the go-ahead",
    hospital: "Gives the go-ahead",
  },
  {
    decision: "Insurance claims and denials",
    agent: "Files and follows up",
    consultant: "Tracks recovery",
    hospital: "Billing head owns",
  },
  {
    decision: "Which vendor wins a purchase",
    agent: "Runs the reverse auction",
    consultant: "Tracks savings",
    hospital: "Purchase head awards",
  },
  {
    decision: "Anything clinical",
    agent: "Out of scope",
    consultant: "Out of scope",
    hospital: "Medical leadership only",
  },
];

export const escalation = [
  {
    step: "Agent records",
    body: "Each registration, charge, claim and bid is logged as it happens.",
    time: "Continuous",
  },
  {
    step: "Consultant reads",
    body: "The consultant reviews campaigns, revenue, leaks, claims and auctions on the dashboard.",
    time: "Every working day",
  },
  {
    step: "Consultant advises",
    body: "Opportunities and problems go to management with the evidence behind them.",
    time: "Weekly review",
  },
  {
    step: "Management decides",
    body: "Management approves, defers or declines. The consultant acts only on a go-ahead.",
    time: "As decisions arise",
  },
  {
    step: "Audit Agent verifies",
    body: "Results are checked against your books and added to the monthly report.",
    time: "Monthly close",
  },
];

// Illustrative entries showing the shape of the audit trail.
export const auditTrail = [
  {
    id: "KN-0412",
    agent: "Registration",
    event: "Profile created at registration",
    record: "Patient P-2291",
    owner: "Front desk",
    status: "Logged",
  },
  {
    id: "KN-0413",
    agent: "Attribution",
    event: "Phone number matched to campaign",
    record: "Knee camp",
    owner: "Consultant",
    status: "Logged",
  },
  {
    id: "KN-0414",
    agent: "Lifecycle",
    event: "Surgery, room and pharmacy bills booked, two doctors recorded",
    record: "Patient P-2291",
    owner: "Billing",
    status: "Matched to billing",
  },
  {
    id: "KN-0415",
    agent: "Insurance",
    event: "Claim filed, denial appealed",
    record: "Patient P-2291",
    owner: "Head of Billing",
    status: "Awaiting settlement",
  },
  {
    id: "KN-0416",
    agent: "Procurement",
    event: "Reverse auction closed, five vendors bid",
    record: "Purchase request PR-118",
    owner: "Purchase Head",
    status: "Matched to invoice",
  },
];

export const compliance = [
  {
    title: "Digital Personal Data Protection Act, 2023 (India)",
    body: "Patient profiles hold personal data, including phone numbers. Use is limited to stated purposes, access is role-based, and every access is logged.",
  },
  {
    title: "HIPAA principles",
    body: "Access controls, audit logging and minimum-necessary access follow the HIPAA Security and Privacy Rule principles.",
  },
  {
    title: "Your own audit requirements",
    body: "The audit trail is exportable for internal audit, statutory audit and accreditation reviews.",
  },
];

export const formOptions = {
  roles: [
    "CFO / Finance Head",
    "COO / Operations Head",
    "CMO / Medical Director",
    "IT / Systems Manager",
    "Hospital Administrator",
    "Board Member / Trustee",
    "Other",
  ],
  beds: ["Under 100", "100–200", "200–350", "350–500", "Over 500"],
  priorities: [
    "Knowing which marketing brings patients",
    "Pharmacy and diagnostics leakage",
    "Insurance claims and denials",
    "Procurement savings",
    "One view of where revenue comes from",
    "Not sure yet, show me the data",
  ],
  hours: ["8 hrs/week", "12 hrs/week", "16 hrs/week", "Not sure yet"],
};

/* ---------- Product flowchart (home page opening) ---------- */

export type FlowStep = { title: string; by: string; body: string; result?: boolean };

export const flow: {
  revenue: FlowStep[];
  savings: FlowStep[];
  decisions: FlowStep[];
} = {
  revenue: [
    { title: "Campaign or walk-in", by: "IIM consultant", body: "Marketing run for you, digital and offline." },
    { title: "Patient registers", by: "Your hospital system", body: "At your front desk, exactly as today." },
    { title: "Profile created", by: "Registration + Attribution Agents", body: "Matched to the campaign by phone number." },
    { title: "Everything booked", by: "Lifecycle Agent", body: "Charges, doctors, medicines and tests." },
    { title: "Claim filed", by: "Insurance Agent", body: "Denials followed up until settled." },
    { title: "Revenue", by: "Result", body: "Where the money comes from, and where it leaks.", result: true },
  ],
  savings: [
    { title: "Purchase needed", by: "Your purchase team", body: "A requirement is raised as usual." },
    { title: "Vendors onboarded", by: "Procurement Agent", body: "Verified once, invited to every auction." },
    { title: "Live reverse auction", by: "Procurement Agent", body: "Vendors bid the price down." },
    { title: "Lowest bid wins", by: "Your purchase head", body: "Awarded on the record." },
    { title: "Savings", by: "Result", body: "Price paid against the last price paid.", result: true },
  ],
  decisions: [
    { title: "Central dashboard", by: "All six agents", body: "Revenue and savings in one view." },
    { title: "Consultant advises", by: "IIM consultant", body: "Opportunities, leaks and competitor gaps." },
    { title: "Management approves", by: "Your leadership", body: "Nothing strategic without a go-ahead." },
    { title: "Consultant acts", by: "IIM consultant", body: "Then the cycle starts again.", result: true },
  ],
};
