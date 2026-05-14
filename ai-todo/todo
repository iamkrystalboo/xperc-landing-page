# Agent Prompt: Build xperc.com Full Website Prototype

## Context & Goal

Build a complete interactive prototype for **xperc.com** — an AI consulting firm targeting Vietnamese traditional-sector SME CEOs. The site is pre-ICT 2026 launch (Phase 1). The single conversion goal is booking a free "AI Audit" session.

All content must be in **English** (production-grade copy, not placeholders). Design must be polished, trustworthy, and non-generic — no stock AI illustrations, no purple gradient clichés, no Inter/Roboto.

---

## Tech Stack

- **Framework**: React (Vite or Next.js)
- **Styling**: Tailwind CSS + custom CSS variables
- **Routing**: React Router (or Next.js App Router)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications/Toasts**: react-hot-toast or sonner

---

## Design Direction

**Aesthetic**: Refined editorial dark — think Bloomberg Intelligence meets a boutique consulting firm. Dark navy/charcoal base, sharp off-white typography, one bold accent (warm amber `#E8A838` or electric teal `#00C2A8`). Clean grid with generous whitespace. Heavy typographic hierarchy. No stock illustrations — use geometric SVG dividers, bold numbers, and grid-based layouts instead.

**Typography**:
- Display: `Playfair Display` or `DM Serif Display` for headlines
- Body: `DM Sans` or `Sora` for UI text
- Mono: `JetBrains Mono` for data/code snippets

**Color palette (CSS variables)**:
```css
--bg-primary: #0D1117
--bg-secondary: #161B22
--bg-card: #1C2128
--border: #30363D
--text-primary: #F0F6FC
--text-secondary: #8B949E
--accent: #E8A838
--accent-hover: #F5C05A
--accent-muted: rgba(232, 168, 56, 0.12)
--danger: #F85149
--success: #3FB950
```

**Motion rules**:
- Page transitions: fade + slide up (300ms ease-out)
- Card hovers: subtle lift (`translateY(-4px)` + shadow)
- CTA button: pulse ring on hover
- Navbar: solid on scroll (transparent → dark with backdrop blur)
- Stagger reveal on section entry (Intersection Observer or Framer `staggerChildren`)

---

## Site Architecture

```
/                   → Homepage (7 sections)
/services           → Services overview (3 packages comparison)
/services/ai-audit  → AI Audit detail page (primary CTA sink)
/services/ai-quick-start → Quick Start detail
/services/ai-scale  → AI Scale detail
/solutions          → Solutions hub (2-axis: industry + problem)
/solutions/industry/construction
/solutions/industry/real-estate
/solutions/industry/hospitality
/solutions/industry/it-software
/solutions/problem/ai-helpdesk
/solutions/problem/meeting-summary
/solutions/problem/ai-project-agent
/solutions/problem/work-efficiency
/about              → About xperc (methodology, team, stack)
/book-audit         → ⭐ Conversion page — AI Audit booking form
/policy/privacy     → Privacy policy
/policy/terms       → Terms of service
```

---

## Navigation

### Navbar (sticky, full-width)

```
[xperc logo]          Services | Solutions ▾ | About          [Book AI Audit →]
```

- **Default state**: transparent background, border-bottom: none
- **Scrolled state** (>80px): `bg-[--bg-primary]/95 backdrop-blur-md border-b border-[--border]`
- **Mobile**: hamburger menu → full-screen overlay with staggered link animation
- **Solutions dropdown**: mega menu with 2 columns — "By Industry" (4 links) + "By Problem" (4 links)
- **Active link**: accent underline
- **CTA button**: filled accent color, rounded, subtle glow on hover

### Dropdown mega menu (Solutions):
```
┌─────────────────────────────────────────────────────┐
│  BY INDUSTRY              │  BY PROBLEM              │
│  → Construction           │  → AI Helpdesk           │
│  → Real Estate            │  → Meeting Summarizer    │
│  → Hospitality & Resort   │  → AI Project Agent      │
│  → IT / Software          │  → Work Efficiency       │
└─────────────────────────────────────────────────────┘
```

---

## Page Specifications

---

### PAGE: `/` — Homepage

Seven sections in order. Each section must be a separate React component.

---

#### Section 1 — HERO

**Goal**: In 5 seconds, visitor knows (a) what xperc does, (b) if it's for them, (c) what to do next.

**Layout**: Full viewport height. Text left, visual right (abstract geometric/grid SVG — no stock photo).

**Content**:
```
Eyebrow label: "AI Strategy & Implementation for Traditional Businesses"

Headline (H1, large display font):
"AI for Vietnamese Businesses —
From Strategy to Real Deployment"

Subheadline:
"You know AI matters, but you're not sure where to start?
60 minutes with our AI specialists will give you a concrete,
business-specific answer."

CTA button: [Book Free AI Audit →]
Microcopy below CTA: "Free · C-level only · 5 slots/day"
```

**States**:
- Default: full render with stagger animation on load
- CTA hover: pulse ring + arrow animates right

---

#### Section 2 — PROBLEM MIRROR

**Goal**: Visitor recognizes their own pain point.

**Layout**: 3-column card grid, each card = 1 open question. No icons that are generic. Use large quote marks or bold numbers as decoration.

**Content**:
```
Section label: "Sound familiar?"

Card 1:
"Does your customer support team answer the same
10 questions dozens of times every day?"

Card 2:
"Do you not know where a project or goal stands —
and have to ask each person then consolidate
manually in Excel to find out?"

Card 3:
"Does a new employee take 2 weeks before they
know who does what and where to find anything?"
```

**Rules**: No CTAs, no feature names, no solution names here.

**States**:
- Cards animate in on scroll (stagger left → right)
- Hover: card lifts, border glows accent color

---

#### Section 3 — 2-AXIS PICKER

**Goal**: Personalize the visitor's journey — industry track or problem track.

**Layout**: 2 side-by-side panels + escape hatch link below.

**Content**:
```
Section label: "Explore your way:"

Left panel — BY INDUSTRY:
→ Construction & Engineering
→ Real Estate
→ Hospitality & Resort
→ IT / Software Company

Right panel — BY PROBLEM:
→ AI Helpdesk
→ Meeting Summarizer
→ AI Project Management Agent
→ Work Efficiency

Below panels:
"Don't see your industry or use case?"
[Book AI Audit — we'll analyze your specific situation →]
```

**States**:
- Panel items: hover = accent color + arrow slides right
- Each item is a router link to the corresponding solution page
- Escape hatch CTA links to `/book-audit`

---

#### Section 4 — METHODOLOGY (3 packages as roadmap)

**Goal**: Visitor sees a clear, non-scary progression. Audit is the no-commitment entry point.

**Layout**: 3 cards connected by arrows. Visual flow left → right.

**Content**:
```
Package 1 — AI Audit
Duration: 60 min · Free
Deliverable: AI Opportunity Map — a concrete, 
             business-specific AI roadmap
CTA: [Book Now →]  ← active CTA

Package 2 — AI Quick Start
Duration: 3–6 weeks · from 25M VND
Deliverable: 1–2 AI solutions running in your 
             real operations
CTA: [Learn More]  ← soft CTA

Package 3 — AI Scale
Duration: Monthly retainer · from 23M VND/mo
Deliverable: AI as a permanent layer in how 
             your company operates daily
CTA: [Learn More]  ← soft CTA
```

**Copy rules**:
- All prices are "starting from" — never fixed
- Package 1 has primary CTA; Package 2 & 3 have soft CTAs (no competition with conversion)
- Arrows between packages convey natural progression

**States**:
- Package 1 card: visually highlighted (accent border, slightly larger)
- Hover on Package 2/3: lift + subtle accent tint

---

#### Section 5 — PROOF

**Goal**: Build trust without client case studies (new company). Use "proof-by-doing" pattern.

**Layout**: 3 sub-sections (5A, 5B, 5C) stacked.

**5A — "We use AI ourselves"**
```
Intro: "We don't consult on things we don't use.
        xperc runs AI internally for:"

Use case 1 — Meeting Summarizer
"Every xperc meeting is automatically transcribed,
summarized, and action items are pushed to our
task management system."
[View Demo →]

Use case 2 — Employee Onboarding AI
"Our AI helpdesk lets new team members look up
policies, processes, and contacts on day one —
no hand-holding required."
[View Demo →]

Use case 3 — AI Agent for Project Management
"AI agent tracks project progress in real time,
surfaces blockers, and suggests next actions —
no manual Friday status reports."
[View Demo →]
```

**5B — "Tools we built"**
```
Intro: "Unlike agencies that rent external tools,
        xperc builds and operates its own stack:"

xcorp.app — Operations platform (OKR/KPI · PM · Automation Workflow)
syrix.ai  — AI engine (Helpdesk · ASR · TTS)

[Visit xcorp →]   [Visit syrix →]
```

**5C — "Our team"**
```
3–4 founder/lead cards:
Each card: Name · Role · Years experience · 1 highlight line
```

**Rules**: No "we're passionate about AI", no stock team photos — use initials/geometric avatars.

---

#### Section 6 — RISK REVERSAL

**Goal**: Remove the last hesitation before clicking the CTA.

**Layout**: Centered, dark card with checklist.

**Content**:
```
Headline: "Nothing to lose. Everything to gain."

✓ AI Audit is completely free — 60 minutes of your time
✓ No commitment to Package 2 or 3 afterward
✓ You keep your AI Opportunity Map regardless
✓ 5 slots/day — C-level only, not a mass workshop

[Book Your AI Audit →]
```

**States**:
- Checkmarks animate in one-by-one on scroll
- CTA: large, full-width on mobile

---

#### Section 7 — FOOTER

**Layout**: 4-column grid + bottom bar.

```
Column 1 — Contact:
  hello@xperc.com
  +84 xxx xxx xxx
  [LinkedIn] [Facebook]

Column 2 — Products:
  xcorp.app
  syrix.ai

Column 3 — Office:
  Ho Chi Minh City, Vietnam

Column 4 — Legal:
  Privacy Policy
  Terms of Service

Bottom bar: © 2026 xperc. All rights reserved.
```

**Intentionally excluded**: newsletter signup, brochure download, customer login, full sitemap.

---

### PAGE: `/services` — Services Overview

Compare all 3 packages in a full comparison table + individual cards.

**Happy flow**: User reads comparison → clicks "Book Now" on Audit → goes to `/book-audit`
**Alt flow**: User clicks "Learn More" on Quick Start or Scale → goes to respective detail page

**Content**:
- Section header: "How we work with you"
- Subhead: "Three packages designed as a natural progression — start with zero commitment."
- Full feature comparison table (rows = features, columns = 3 packages)
- Individual deep-dive cards below table

---

### PAGE: `/services/ai-audit` — AI Audit Detail

**This is the primary pre-conversion page. Must be highly persuasive.**

Sections:
1. **Hero**: What is the AI Audit, who it's for, what you get
2. **What happens in 60 minutes**: Step-by-step breakdown
3. **Deliverable**: What the "AI Opportunity Map" contains
4. **Who should book**: Qualification criteria (C-level, 20–500 employees, traditional sector)
5. **Risk reversal block**: Same as homepage Section 6
6. **CTA**: Large "Book Free AI Audit" → `/book-audit`

**Error flow**: If user doesn't meet criteria (visible in microcopy), show "Not sure if this is for you? Email us first" secondary link.

---

### PAGE: `/solutions` — Solutions Hub

**Layout**: Replicate the 2-axis picker from homepage but expanded with description text for each item.

Header: "Industry expertise meets problem-solving depth"

Two panels:
- By Industry: 4 cards with industry icon + short description
- By Problem: 4 cards with problem icon + short description

---

### PAGE: `/solutions/industry/[slug]` — Industry Solution Pages

Template for: `construction`, `real-estate`, `hospitality`, `it-software`

Sections:
1. Industry hero (headline tailored to that sector's pain)
2. Key challenges we solve (3 bullets)
3. Relevant solutions from our toolkit
4. Anonymized case reference ("A hospitality group in Vietnam…")
5. CTA → `/book-audit`

**Error/empty state**: If no case data, show "We're building this — book an audit to see how we'd approach your sector" with audit CTA.

---

### PAGE: `/solutions/problem/[slug]` — Problem Solution Pages

Template for: `ai-helpdesk`, `meeting-summary`, `ai-project-agent`, `work-efficiency`

Sections:
1. Problem statement (mirror the visitor's pain, no jargon)
2. How xperc solves it (concrete, no buzzwords)
3. What it looks like in practice (mini demo/screenshot mockup — use styled UI card as placeholder)
4. Which package delivers this (link to service)
5. CTA → `/book-audit`

---

### PAGE: `/about` — About xperc

Sections:
1. **Mission**: "We don't sell AI hype. We help traditional businesses apply AI to real operations."
2. **Methodology**: How xperc approaches every engagement (4-step process)
3. **Team**: 3–4 founder/lead cards (same as homepage 5C)
4. **Our stack**: xcorp.app + syrix.ai with brief description
5. **xperc uses AI internally**: Expand on homepage 5A content
6. CTA: "Curious what AI could do for your business?" → `/book-audit`

---

### PAGE: `/book-audit` ⭐ — AI Audit Booking Form

**This is the single conversion page. Must be flawless across all states.**

#### Layout
- Left column (40%): Value reminder panel (what you get, microcopy, social proof quote)
- Right column (60%): Booking form

#### Form Fields
```
Full Name *
Job Title *  (CEO / Founder / Director / Other C-level — dropdown)
Company Name *
Industry *  (dropdown: Construction, Real Estate, Hospitality, IT/Software, Manufacturing, F&B, Retail, Logistics, Other)
Company Size * (radio: 20–50 / 51–150 / 151–500 / 500+)
Phone Number * (with +84 prefix)
Email Address *
Preferred Date * (date picker, business days only, min: tomorrow)
Preferred Time Slot * (radio: 9:00 AM / 11:00 AM / 2:00 PM / 4:00 PM)
"What's your biggest operational challenge right now?" (textarea, optional, max 300 chars)
```

#### Validation Rules (Zod schema)
- Name: required, min 2 chars
- Title: must be C-level (if "Other" is selected, show warning: "This audit is reserved for C-level executives. Please check with your CEO/Director.")
- Company: required
- Industry: required
- Size: 20–500 only — if "500+" is selected, show: "For enterprises over 500 employees, please email us directly at enterprise@xperc.com"
- Phone: Vietnamese format (+84 or 0[3-9]xxxxxxxx)
- Email: valid email format
- Date: must be a future weekday
- Time: required

#### Form States

**1. Default / Idle**
- Clean form, all fields empty, submit button disabled until required fields filled

**2. Validation errors (inline)**
- Red border + error message below each invalid field
- Submit button stays disabled
- Error messages:
  - Empty required field: "This field is required"
  - Invalid phone: "Please enter a valid Vietnamese phone number"
  - Invalid email: "Please enter a valid email address"
  - 500+ employees: "For enterprises, please contact enterprise@xperc.com"
  - Non-C-level: "This audit is designed for C-level decision makers"
  - Past date: "Please select a future date"
  - Weekend: "Please select a weekday (Mon–Fri)"

**3. Submitting**
- Button shows spinner + "Submitting…"
- Form fields disabled
- No double-submit possible

**4. Success**
- Replace form with confirmation card:
  ```
  ✓ Your AI Audit is booked!
  
  We've sent a confirmation to [email].
  
  What's next:
  → Check your email for calendar invite
  → We'll send a brief prep questionnaire 24h before
  → Your AI Opportunity Map will be ready within 3 days after the session
  
  [Add to Calendar →]   [Back to Home]
  ```

**5. Server/network error**
- Toast notification: "Something went wrong. Please try again or email us at hello@xperc.com"
- Form remains filled (don't reset on error)
- Submit button re-enabled

**6. Slot fully booked (simulated)**
- If selected date + time combination is "full" (mock: any slot on Sundays, or you can hardcode a test date):
  ```
  ⚠ This time slot is full.
  Please select a different time or date.
  ```
  Show inline under the time picker, not a toast.

#### Left panel content
```
What you'll get:
✓ A 60-minute 1-on-1 session with an AI specialist
✓ Analysis of your specific operational bottlenecks
✓ An AI Opportunity Map tailored to your business
✓ Clear recommendation on where to start

"This is the most concrete AI conversation I've had.
 I walked away knowing exactly what to do next."
— COO, logistics company (anonymized)

Free · C-level only · 5 slots per day
```

---

### PAGE: `/policy/privacy` & `/policy/terms`

Simple text pages. Clean typography, table of contents sidebar (sticky on desktop), standard sections. No special interaction needed.

---

## Global Component Requirements

### `<Navbar />`
- Props: none (reads current route)
- States: transparent, scrolled, mobile-open, dropdown-open
- Dropdown closes on: outside click, Escape key, route change
- Mobile menu: full-screen overlay, X button to close

### `<CTAButton />`
- Variants: `primary` (filled accent), `secondary` (outline), `ghost` (text only)
- Sizes: `sm`, `md`, `lg`
- States: default, hover, active, loading (spinner), disabled
- Always links to `/book-audit` unless `href` prop overrides

### `<SectionLabel />`
- Small caps eyebrow label above headlines
- Accent color, letter-spacing: 0.15em

### `<PackageCard />`
- Props: `featured` (boolean — highlights Package 1)
- States: default, hover, featured (accent border)

### `<IndustrySolutionCard />` & `<ProblemSolutionCard />`
- Hover: full card becomes clickable, arrow slides right

### `<BookingForm />`
- Fully self-contained with all states listed above
- On submit: POST to `/api/book-audit` (mock with 1.5s timeout + success response)

### `<Toast />`
- Success: green, auto-dismiss 4s
- Error: red, manual dismiss + auto-dismiss 8s

---

## Routing & Navigation Rules

- All navbar links use React Router `<Link>` (or Next.js `<Link>`) — no page reload
- Active route: navbar link gets accent underline
- Page transitions: Framer Motion `AnimatePresence` with fade + slideY
- 404 page: "Page not found" with link back to home
- Redirect: `/dat-ai-audit` → `/book-audit` (Vietnamese URL alias)

---

## Mobile Responsiveness

- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Navbar: hamburger at < 768px
- Homepage Hero: stacked (text top, visual bottom) at < 768px
- 3-column sections: single column at < 640px, 2-col at 640–1023px, 3-col at ≥ 1024px
- 2-axis picker: stacked panels on mobile
- Package cards: vertical stack on mobile
- Booking form: single column on mobile (left panel stacks above form)

---

## Accessibility

- All interactive elements: visible focus ring (2px accent color)
- Images: meaningful `alt` text
- Form labels: all inputs have `<label>` with `htmlFor`
- Error messages: `role="alert"` or `aria-live="polite"`
- Navbar dropdown: `aria-expanded`, `aria-haspopup`
- Color contrast: all text ≥ 4.5:1 ratio against backgrounds
- Skip-to-content link at top of page

---

## Mock Data & Placeholders

Since this is a prototype, mock the following:
- Form submission: `setTimeout(1500)` → return `{ success: true }`
- Slot availability: hardcode 2025-12-25 and 2025-12-31 as "full" for demo
- Team members: 4 entries with placeholder names + roles
- Demo links in Section 5A: `href="#"` with coming-soon tooltip

---

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageLayout.jsx
│   ├── ui/
│   │   ├── CTAButton.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── PackageCard.jsx
│   │   ├── Toast.jsx
│   │   └── ...
│   └── sections/
│       ├── Hero.jsx
│       ├── ProblemMirror.jsx
│       ├── TwoAxisPicker.jsx
│       ├── Methodology.jsx
│       ├── Proof.jsx
│       ├── RiskReversal.jsx
│       └── BookingForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Solutions.jsx
│   ├── SolutionIndustry.jsx
│   ├── SolutionProblem.jsx
│   ├── About.jsx
│   ├── BookAudit.jsx
│   └── NotFound.jsx
├── data/
│   ├── industries.js
│   ├── problems.js
│   ├── packages.js
│   └── team.js
├── hooks/
│   └── useScrollNavbar.js
├── styles/
│   └── globals.css   ← CSS variables, base styles
└── App.jsx           ← Router setup + AnimatePresence
```

---

## Definition of Done

- [ ] All pages render without errors
- [ ] Navbar is sticky, transparent→solid on scroll, dropdown works, mobile menu works
- [ ] Routing works — all links navigate correctly, no 404s
- [ ] Homepage: all 7 sections present, scroll animations work
- [ ] `/book-audit`: all form validation states work (inline errors, server error, success)
- [ ] Mobile: tested at 375px and 768px viewports
- [ ] No placeholder "Lorem ipsum" — all copy is final English content from this spec
- [ ] Color palette uses CSS variables throughout (no hardcoded hex in JSX)
- [ ] Accessible: keyboard navigation works, focus rings visible

