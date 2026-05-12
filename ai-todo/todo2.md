# Agent Prompt: Build xcorp.app Full Website Prototype

## Context & Goal

Build a complete interactive prototype for **xcorp.app** — a Vietnamese all-in-one operations platform (SaaS) for SMEs. The site serves dual purpose: **marketing site + app entry point** (same domain). The product competes with Asana, Monday, ClickUp, Notion internationally and Base, Misa locally. Key differentiators: Vietnamese-built, local support, AI-powered, significantly cheaper.

**Sales motion**: Product-led growth (self-serve → trial → upgrade), NOT sales-led like xperc.  
**Decision time**: Days to 4 weeks.  
**4 conversions** (not 1): Free Trial · Schedule Demo · Contact Sales (Enterprise) · Login (existing users).

All content in **English** (production-grade copy). Design must feel like a modern B2B SaaS — think Linear, Notion, Vercel — not a generic Vietnamese software site.

---

## Tech Stack

- **Framework**: React (Vite) + React Router v6
- **Styling**: Tailwind CSS + CSS custom properties
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner (toast)
- **Language toggle**: i18n-ready structure (EN default, VI toggle)

---

## Design Direction

**Aesthetic**: Clean SaaS — light mode primary, generous whitespace, sharp grid, product UI screenshots as hero visuals. Think Linear.app meets a Vietnamese productivity tool. Confident, modern, no enterprise-boring vibes.

**Typography**:
- Display: `Plus Jakarta Sans` (headings, bold weight)
- Body: `Inter` — acceptable here because it's the SaaS standard and xcorp is positioning against global tools; the familiarity signals "this is a real product"
- Mono: `Fira Code` for code/integration snippets

**Color palette (CSS variables)**:
```css
--bg-primary: #FFFFFF
--bg-secondary: #F7F8FA
--bg-card: #FFFFFF
--border: #E5E7EB
--border-strong: #D1D5DB
--text-primary: #111827
--text-secondary: #6B7280
--text-muted: #9CA3AF
--accent: #2563EB          /* Blue — trust, productivity */
--accent-hover: #1D4ED8
--accent-light: #EFF6FF
--accent-muted: rgba(37, 99, 235, 0.08)
--success: #10B981
--warning: #F59E0B
--danger: #EF4444
--purple: #7C3AED          /* AI features accent */
--purple-light: #F5F3FF
```

**Dark mode**: Provide a `data-theme="dark"` toggle. Dark palette:
```css
--bg-primary: #0F172A
--bg-secondary: #1E293B
--bg-card: #1E293B
--border: #334155
--text-primary: #F1F5F9
--text-secondary: #94A3B8
```

**Motion**:
- Page entry: fade + translateY(16px) → 0, 250ms ease-out
- Navbar: blur + border appears on scroll (transparent → `bg-white/90 backdrop-blur`)
- Cards: hover `translateY(-2px)` + shadow deepens
- CTA buttons: subtle scale(1.02) on hover
- Dropdowns: slide down + fade (150ms)
- Tab switching: crossfade content (200ms)
- Number counters on stat sections: count up animation on scroll into view

---

## Site Architecture

```
/                         → Home
/products                 → Products hub (5 clusters)
/products/okr             → Goals & Performance (OKR/KPI)
/products/project         → Project & Task Management
/products/automation      → Automation Workflow
/products/hr              → HR & People Ops
/products/ai              → AI Assistant (internal AI, no syrix mention)
/solutions                → Solutions hub (by buyer persona)
/solutions/for-hr         → For HR / People Ops teams
/solutions/for-pm         → For Project / Engineering teams
/solutions/for-ceo        → For CEOs / Leadership
/pricing                  → Pricing (bundles + module add-ons)
/customers                → Customers & case studies (anonymized)
/customers/[slug]         → Individual case study
/resources                → Resources hub
/resources/help           → Help center / FAQ
/resources/integrations   → Integrations directory
/resources/blog           → Blog (phase 2 — show coming-soon state)
/security                 → Security & compliance
/about                    → About xcorp
/contact-sales            → Enterprise sales form
/demo                     → Schedule a demo
/signup                   ⭐ Free 30-day trial signup
/login                    ⭐ App login (existing users)
/policy/privacy           → Privacy policy
/policy/terms             → Terms of service
```

---

## Navigation

### Navbar — Desktop

```
[xcorp logo]    Products ▾ | Solutions ▾ | Pricing | Customers | Resources ▾      [Login]  [Start Free Trial →]
```

**Behavior**:
- Default: `bg-transparent`, no border
- Scrolled (>60px): `bg-white/90 backdrop-blur-md border-b border-[--border]` + `box-shadow: 0 1px 3px rgba(0,0,0,0.06)`
- Active route: nav link gets `color: var(--accent)` + bottom border accent
- `[Login]`: ghost text button, `color: var(--text-secondary)`, hover → `color: var(--text-primary)`
- `[Start Free Trial →]`: filled accent button, rounded-lg, white text

### Products Mega Dropdown

```
┌──────────────────────────────────────────────────────────────────┐
│  PRODUCT MODULES                          MOST POPULAR           │
│                                                                  │
│  🎯 Goals & Performance      📋 Project Management              │
│     OKR/KPI tracking            Tasks · Milestones · Boards     │
│                                                                  │
│  ⚡ Automation Workflow       👥 HR & People Ops                │
│     No-code workflow builder    Leave · Timesheet · Attendance  │
│                                                                  │
│  🤖 AI Assistant                                                │
│     Smart summaries · Q&A · Suggestions                         │
│                                                                  │
│  ──────────────────────────────────────────────────────────     │
│  See all features →           View pricing →                    │
└──────────────────────────────────────────────────────────────────┘
```

### Solutions Dropdown (simple list)

```
┌──────────────────────────────┐
│  BY ROLE                     │
│  → For HR & People Ops       │
│  → For Project Managers      │
│  → For CEOs & Leadership     │
└──────────────────────────────┘
```

### Resources Dropdown

```
┌──────────────────────────────┐
│  → Help Center               │
│  → Integrations              │
│  → Blog  (Coming Soon)       │
└──────────────────────────────┘
```

### Navbar — Mobile (<768px)

- Hamburger icon (right side, next to "Start Free Trial" which compresses to just icon on very small screens)
- Full-screen slide-in drawer from right
- Accordion-style expandable sections for Products/Solutions/Resources
- `[Login]` and `[Start Free Trial]` full-width buttons at bottom of drawer
- Language toggle (EN | VI) at top of drawer

### Dropdown UX rules

- Opens on hover (desktop) + click (mobile)
- Closes on: outside click, Escape key, route change, hover-away (200ms delay to prevent flicker)
- `aria-expanded`, `aria-haspopup="true"` on trigger buttons
- Focus trap when open on mobile

---

## Page Specifications

---

### PAGE: `/` — Home

Optimize 100% for **"Chi Hoa" persona** (Ops Manager / HR Director, 30–500 employees, using 5–10 scattered tools).

#### Section 1 — HERO

**Layout**: Full-viewport. Left: headline + CTAs. Right: product UI mockup (styled dashboard screenshot — build as a CSS/HTML mockup, not real screenshot).

**Content**:
```
Eyebrow badge: "All-in-one operations platform"

Headline (H1):
"Still juggling Excel, Slack, Asana,
and four other tools?"

Subheadline:
"xcorp replaces your scattered stack with one platform —
OKR, projects, HR, automation, and AI in one place.
Built for Vietnamese SMEs. 30% to 80% cheaper than
the tools you're replacing."

Primary CTA:   [Start Free for 30 Days →]
Secondary CTA: [Watch a 3-minute demo]

Microcopy below CTAs:
"No credit card required · Setup in under 10 minutes · 
Vietnamese support included"

Social proof bar:
"Trusted by 200+ companies across Vietnam"
[logo placeholders × 5 — use gray placeholder boxes labeled "Client"]
```

**UI Mockup (right side)**: Build a styled card showing a fake OKR dashboard — company objectives with progress bars, a mini task board, and a notification from "AI Assistant". Use the accent blue + clean whites. This is the hero visual.

**States**:
- Load: stagger animation — headline first, subhead second, CTAs third, mockup slides in from right
- Mobile: mockup moves below CTAs

---

#### Section 2 — PROBLEM MIRROR (Tool Fragmentation)

**Layout**: Dark background section (`--bg-primary: #0F172A` for this section only — creates visual break). Centered text + 3 pain cards below.

**Content**:
```
Section label: "The problem"

Headline:
"Your team is productive.
Your tools are not."

Pain cards (3 columns):

Card 1 — "Too many logins"
"HR is in Bamboo. Projects are in Asana.
Goals are in a PowerPoint no one updates.
Finance is asking for reports that live in three places."

Card 2 — "Reporting takes forever"
"Every week someone manually pulls data from 
four tools into Excel. Then the Excel is already 
outdated by the time it's shared."

Card 3 — "Nothing talks to each other"
"When a project milestone slips, HR doesn't know.
When an employee is on leave, the PM doesn't know.
You find out too late, every time."
```

**States**: Cards fade in on scroll with 100ms stagger.

---

#### Section 3 — SOLUTION OVERVIEW (5 Clusters)

**Layout**: Centered header + 5 feature cluster cards in a grid (3 top, 2 bottom or responsive).

**Content**:
```
Section label: "One platform, everything connected"

Headline: "Replace five tools with one."

Card 1 — Goals & Performance
Icon: target
"Set company OKRs, cascade to teams and individuals.
Track progress in real time — no more end-of-quarter
PowerPoint surprises."
Link: [Explore OKR →]

Card 2 — Project & Task Management
Icon: layout
"Boards, lists, milestones, time tracking — everything
your teams need to deliver projects without switching apps."
Link: [Explore Projects →]

Card 3 — Automation Workflow
Icon: zap
"Build no-code automation flows across your operations.
Trigger actions between HR, projects, and notifications
automatically."
Link: [Explore Automation →]

Card 4 — HR & People Ops
Icon: users
"Leave requests, timesheets, and attendance in one place.
Your HR team stops chasing people for approvals."
Link: [Explore HR →]

Card 5 — AI Assistant
Icon: sparkles (purple accent)
"Ask questions about your data, get meeting summaries,
surface blockers before they become problems."
Link: [Explore AI →]
```

---

#### Section 4 — SOCIAL PROOF (Customers)

**Layout**: 2 columns — left: stat block, right: 2 quote cards stacked.

**Content**:
```
Stats (left):
"200+"  — Companies using xcorp
"85%"   — Average reduction in reporting time
"4.8/5" — Average customer satisfaction
"30–80%" — Cost savings vs. previous tool stack

Quote cards (right, anonymized):
Quote 1:
"We shut down our Asana account and our HR system
within the first month. xcorp just… works."
— Operations Director, logistics company (200 employees)

Quote 2:
"Our weekly reporting used to take half a day.
Now it's automated. I actually use Fridays for strategy now."
— COO, manufacturing SME (120 employees)
```

**States**: Numbers count up (0 → final value) when scrolled into view.

---

#### Section 5 — PERSONA PATHS

**Layout**: 3 cards side by side. Each card = 1 buyer persona path.

**Content**:
```
Header: "Built for every role on your team"

Card 1 — For HR & People Ops
"Manage leave, timesheets, and attendance without
spreadsheets. See your whole team's schedule in one view."
CTA: [See HR features →] → /solutions/for-hr

Card 2 — For Project Managers
"Run projects with Kanban boards, Gantt timelines,
and automatic Slack notifications. Integrate with
GitHub, GitLab, and Jira."
CTA: [See PM features →] → /solutions/for-pm

Card 3 — For CEOs & Leadership
"One dashboard for company OKRs, team performance,
and operational health. Know what's happening without
asking anyone."
CTA: [See CEO view →] → /solutions/for-ceo
```

---

#### Section 6 — INTEGRATIONS STRIP

**Layout**: Full-width strip with integration logos (use styled icon boxes with tool name labels).

**Content**:
```
Label: "Connects with the tools you already use"

Integration logos row:
Slack · Jira · GitHub · GitLab · Bitbucket · Google Calendar · Google Meet

CTA: [See all integrations →] → /resources/integrations
```

---

#### Section 7 — PRICING TEASER

**Layout**: 3 bundle cards (no full pricing table — just bundles with CTA to /pricing).

**Content**:
```
Section label: "Simple, transparent pricing"

Headline: "Start free. Pay only when you're ready."

Bundle 1 — Basic Ops
"OKR + Task Management + HR"
"From $X/user/month"
CTA: [Start Free Trial]

Bundle 2 — Full Ops  ← FEATURED (highlighted border)
"Everything in Basic + Automation + AI"
"From $X/user/month"
Badge: "Most Popular"
CTA: [Start Free Trial]

Bundle 3 — Advanced Ops
"Full Ops + Priority support + SSO"
"From $X/user/month"
CTA: [Contact Sales]

Below cards:
"All plans include 30-day free trial · No credit card required"
[See full pricing →]
```

---

#### Section 8 — FINAL CTA

**Layout**: Full-width accent background. Centered. Large headline + 2 CTAs.

**Content**:
```
Headline: "Stop switching tabs. Start shipping."

Subhead: "Join 200+ Vietnamese companies that consolidated their
operations stack with xcorp."

CTA 1 (primary): [Start Free for 30 Days →]
CTA 2 (secondary, outline): [Schedule a Demo]

Microcopy: "Free · No credit card · Vietnamese support included"
```

---

#### Section 9 — FOOTER

**Layout**: 5-column grid + bottom bar.

```
Column 1 — xcorp
  Logo + tagline: "All-in-one ops for Vietnamese SMEs"
  [EN | VI] language toggle

Column 2 — Product
  Goals & OKR
  Project Management
  Automation
  HR & People Ops
  AI Assistant
  Pricing

Column 3 — Solutions
  For HR Teams
  For Project Managers
  For CEOs

Column 4 — Resources
  Help Center
  Integrations
  Security
  About xcorp

Column 5 — Company
  Blog
  Customers
  Contact Sales
  Schedule Demo

Bottom bar:
  © 2026 xcorp. All rights reserved.
  [Privacy Policy]  [Terms of Service]
  Related products: xperc.com (AI consulting) · syrix.ai (AI engine)
```

---

### PAGE: `/products` — Products Hub

**Layout**: Hub page. Intro + 5 large product cluster sections, each with feature list + screenshot mockup.

**Sections per cluster**:
1. Headline + 3–4 bullet features
2. Styled UI mockup (built in CSS/HTML)
3. Link to cluster detail page

**Product clusters**: Same 5 as homepage Section 3.

---

### PAGE: `/products/okr` — Goals & Performance

**Sections**:
1. Hero: "Stop reporting OKRs in PowerPoint"
2. Feature breakdown: Company OKRs → Team OKRs → Individual → Progress tracking → Automated reminders
3. UI mockup: OKR tree with progress bars
4. Who it's for: CEO visibility + team accountability
5. CTA: Start Free Trial

**Happy flow**: User reads → clicks trial → goes to `/signup`
**Alt flow**: Not sure → clicks "Schedule Demo" → `/demo`

---

### PAGE: `/products/project` — Project & Task Management

**Key message**: "Asana + ClickUp equivalent, built for Vietnamese teams, fraction of the cost"

**Sections**:
1. Hero: "Your projects, finally under control"
2. Views: Kanban · List · Timeline (Gantt) · Workload
3. Integrations highlight: GitHub PRs auto-link to tasks, Slack notifications
4. Time tracking + work logging
5. Comparison callout: "Switching from Asana? We'll import your data."
6. CTA

---

### PAGE: `/products/automation` — Automation Workflow

**Key message**: "No-code automation that connects HR, projects, and communication"

**Sections**:
1. Hero: "Build workflows in minutes. No engineers required."
2. Example automations (3 cards):
   - "When leave is approved → notify team lead in Slack"
   - "When project milestone is missed → create follow-up task + alert PM"
   - "When new employee joins → assign onboarding checklist automatically"
3. Workflow builder UI mockup (node-based visual)
4. CTA

---

### PAGE: `/products/hr` — HR & People Ops

**Sections**:
1. Hero: "HR without the spreadsheets"
2. Features: Leave management · Timesheet · Check-in & Attendance
3. Leave approval flow: request → manager approves → calendar syncs → payroll-ready export
4. Check-in: mobile-friendly, GPS optional
5. Reports: downloadable, compliant with Vietnamese labor law format
6. CTA

---

### PAGE: `/products/ai` — AI Assistant

**Key message**: AI is a built-in assistant across xcorp — NOT a separate product. Do NOT mention syrix.

**Sections**:
1. Hero: "Your operations, intelligently automated"
2. AI capabilities:
   - Meeting summarizer (auto-transcribe, action items, push to tasks)
   - Smart Q&A ("What's the status of Project Alpha?" → pulls from tasks)
   - Blockers surface ("3 tasks are 2+ days overdue on critical path")
   - Onboarding assistant ("Who do I talk to about expense claims?")
3. "Powered by enterprise-grade AI models" (no syrix mention)
4. CTA

---

### PAGE: `/solutions/for-hr` — For HR Teams

**Sections**:
1. Hero headline: "Everything your HR team needs. Nothing they don't."
2. Pain mirror: "Tracking leave in Excel. Chasing timesheets every Friday. Building reports from scratch."
3. xcorp solves: Leave · Timesheet · Attendance + AI assistant answers HR policy questions
4. Workflow example: leave request flow end-to-end
5. Integration: syncs with payroll (export-ready)
6. Quote from HR persona (anonymized)
7. CTA: Start Free Trial

---

### PAGE: `/solutions/for-pm` — For Project Managers

**Sections**:
1. Hero: "Ship projects. Stop babysitting status updates."
2. Pain: "You're in Jira for bugs, Asana for tasks, Slack for updates, Excel for timelines. Nothing is connected."
3. xcorp: Unified project view + GitHub/GitLab integration + Slack push notifications
4. View options: Kanban · Gantt · Workload
5. Time tracking: billable hours, team capacity
6. Quote from PM persona (anonymized)
7. CTA

---

### PAGE: `/solutions/for-ceo` — For CEOs & Leadership

**Sections**:
1. Hero: "See everything. Decide faster."
2. Pain: "You find out a critical project slipped in the Friday retrospective. By then it's too late."
3. xcorp CEO dashboard: OKR progress company-wide · At-risk projects · Team capacity · HR snapshot
4. Real-time visibility without micromanaging
5. Quote from CEO persona (anonymized)
6. CTA: Schedule Demo (CEOs prefer demo over self-serve)

---

### PAGE: `/pricing` — Pricing

**Layout**: Toggle (Monthly / Annual — Annual shows discount badge). 3 bundle columns. Module add-on table below.

**Bundles**:

```
Basic Ops           Full Ops ★ Popular      Advanced Ops
─────────           ──────────────────      ────────────
OKR/KPI             Everything in Basic     Everything in Full Ops
Task Management   + Automation Workflow   + Priority Support (SLA)
HR & People Ops   + AI Assistant          + SSO / SAML
                  + Advanced reports      + Custom integrations
                  + API access            + Dedicated CSM

From $X/user/mo    From $X/user/mo         Contact Sales
[Start Free]       [Start Free]            [Talk to Sales]
```

**Module add-ons table**: Below bundles, show individual module pricing for those who want to pick.

**FAQ section**: 6–8 common pricing questions (see flows below).

**Enterprise callout**: "500+ employees? We'll customize a plan. [Contact Sales →]"

#### Pricing Page — All States & Flows

**Happy flow**:
1. User lands → reads bundles → clicks "Start Free" on Full Ops → goes to `/signup`

**Alt flow — Enterprise**:
1. User sees company size doesn't fit → clicks "Contact Sales" → goes to `/contact-sales`

**Alt flow — Unsure**:
1. User confused by options → clicks "Schedule Demo" in sticky bottom bar → `/demo`

**Alt flow — Annual toggle**:
1. User switches to Annual → prices update instantly with "Save 20%" badges

**Error flow — No plan selected**:
- If user clicks compare modules without selecting a plan, highlight the selection step

**Module add-on interaction**:
- Toggle switch to add/remove modules → running total updates live in a sticky "Your Plan" sidebar

---

### PAGE: `/customers` — Customers & Case Studies

**Layout**: Filter bar (by industry: All · Construction · Real Estate · Hospitality · IT · Manufacturing) + case study card grid.

**Case study cards**: Company type (not name, anonymized) + industry badge + key metric + short excerpt + [Read story →]

**Happy flow**: User filters by industry → reads relevant case → clicks CTA at bottom of case study → `/signup`

**Empty state** (if filter returns 0): "We don't have a case study for this industry yet. [Book a free consultation →]" (links to xperc.com AI Audit)

---

### PAGE: `/customers/[slug]` — Individual Case Study

**Template sections**:
1. Company snapshot: industry · size · tools replaced
2. The challenge (pain before xcorp)
3. Why they chose xcorp
4. What they implemented (modules used)
5. Results: 3 key metrics with before/after
6. Quote from decision-maker (anonymized, role shown)
7. CTA: "See if xcorp fits your team" → `/signup`

**Confidential handling**: All case studies use "A [industry] company with [X] employees" format. No real company names.

---

### PAGE: `/resources/integrations` — Integrations Directory

**Layout**: Search bar + filter chips (Categories: Communication · Dev Tools · All) + integration cards grid.

**Integrations (Phase 1)**:
- **Communication**: Slack
- **Dev Tools**: Jira · GitHub · GitLab · Bitbucket

**Each integration card**:
- Logo (styled placeholder) + name + category badge
- 1-line description: "Get xcorp task notifications directly in Slack channels"
- [View setup guide →] → links to /resources/help (anchor)

**Coming soon cards**: Show grayed-out cards with "Coming Soon" badge for Google Calendar, Google Meet, Zoom — signals roadmap without false promises.

**Error/empty state**: Search returns no results → "Don't see your tool? [Request an integration →]" (mailto link)

---

### PAGE: `/resources/help` — Help Center / FAQ

**Layout**: Search bar + category tabs + accordion FAQ list.

**Categories**: Getting Started · Billing · Modules · Integrations · Security · Account

**Pre-sale FAQs (most important)**:
- "Is the 30-day trial really free?" → Yes, no credit card required.
- "Can I import data from Asana / Jira / Excel?" → Yes, we support CSV import + direct Asana/Jira import.
- "Does xcorp support Vietnamese language?" → Yes, full Vietnamese UI + Vietnamese customer support.
- "What happens after the trial ends?" → You choose a plan. Your data is never deleted.
- "Is our data stored in Vietnam?" → Servers are in Singapore (AWS AP-Southeast-1), compliant with Vietnamese data regulations.
- "Can I use xcorp on mobile?" → Yes, iOS and Android apps available. [App Store] [Play Store]

**Search states**:
- Default: show all categories + top 5 FAQ
- Typing: live filter accordion items (no page reload)
- No results: "Can't find your answer? [Chat with support →]"

---

### PAGE: `/resources/blog` — Blog

**State**: Coming soon.

**Layout**: Page with "Coming soon" state — not a 404, not hidden. Show a signup form:

```
"Insights on operations, AI, and scaling Vietnamese businesses."

[Enter your email]  [Notify me when we launch]

"We'll send you our first 3 articles when we go live."
```

**Form states**: idle → submitting (spinner) → success ("You're on the list!") → error ("Something went wrong, try again")

---

### PAGE: `/security` — Security & Compliance

**Sections**:
1. "Enterprise-grade security for Vietnamese SMEs"
2. Data encryption (at rest + in transit)
3. Access controls: role-based permissions, SSO (Advanced plan)
4. Compliance: Vietnamese data regulations
5. Infrastructure: AWS AP-Southeast-1 (Singapore)
6. Uptime: 99.9% SLA (Advanced plan)
7. CTA: "Questions about security? [Talk to our team →]"

---

### PAGE: `/about` — About xcorp

**Sections**:
1. "Built by Vietnamese operators, for Vietnamese companies"
2. Origin story: "We built xcorp because we lived the problem — running a company on 8 different tools and spending more time on admin than on work."
3. The team: 4 placeholder cards (Name · Role · Brief)
4. Part of the xperc ecosystem: "xcorp is part of the xperc group, alongside syrix.ai (our AI engine)." — Footer-level mention only.
5. CTA

---

### PAGE: `/signup` ⭐ — Free Trial Signup

**This is the primary conversion page. Must be flawless.**

#### Layout

- Left panel (35%): value summary + social proof
- Right panel (65%): signup form

#### Left Panel Content

```
"Start your free 30-day trial"

✓ All features included — no limited trial
✓ Setup in under 10 minutes
✓ Import from Asana, Jira, or Excel
✓ Vietnamese support team available

"200+ Vietnamese companies have made the switch."

No credit card required.
```

#### Form Fields

```
Work Email *         (not personal — show warning if Gmail/Yahoo)
Full Name *
Company Name *
Your Role *          (dropdown: CEO/Founder · HR Manager · Ops Manager · 
                     Project Manager · Team Lead · Other)
Company Size *       (radio: 1–10 · 11–30 · 31–100 · 101–500 · 500+)
Primary use case *   (radio: OKR/Goals · Project Management · HR · 
                     Automation · All of the above)
Password *           (min 8 chars, 1 uppercase, 1 number)
Confirm Password *

[  ] I agree to the Terms of Service and Privacy Policy *

[Create my account →]
```

#### Validation Rules

- **Work email**: required, valid email format; if `@gmail.com`, `@yahoo.com`, `@hotmail.com`, `@outlook.com` → show inline warning: "We recommend using your work email for team collaboration. [Continue anyway]"
- **Name**: required, min 2 chars
- **Role**: required
- **Company size**: if "500+" → show: "For large organizations, we recommend starting with a demo. [Schedule Demo →]" — still allow signup
- **Password**: min 8 chars, 1 uppercase, 1 number. Show strength indicator (weak/medium/strong)
- **Confirm password**: must match
- **Terms**: must be checked

#### Form States

**1. Idle / Default**
- Clean form, submit disabled until all required fields valid

**2. Inline validation errors**
- Red border + error below each field
- Submit button stays disabled
- Messages:
  - Empty: "This field is required"
  - Invalid email: "Please enter a valid email address"
  - Personal email warning: "We recommend a work email for team features. [Continue anyway]"
  - Password too weak: "Password must be at least 8 characters with 1 uppercase and 1 number"
  - Passwords don't match: "Passwords do not match"
  - Terms not checked: "Please accept the terms to continue"

**3. Submitting**
- Button: spinner + "Creating your account…"
- All fields disabled
- No double-submit

**4. Email already registered**
- Inline error on email field: "An account with this email already exists. [Log in instead →]"

**5. Success**
- Replace form with:
  ```
  ✓ Your account is ready!
  
  We sent a confirmation email to [email].
  
  What's next:
  → Check your email and verify your account
  → We'll guide you through importing your first project
  → Your 30-day trial starts now
  
  [Open xcorp →]   ← links to /login (or app dashboard)
  ```

**6. Server / network error**
- Toast: "Something went wrong. Please try again or contact support@xcorp.app"
- Form stays filled, submit button re-enables

---

### PAGE: `/login` ⭐ — Login (Existing Users)

**Layout**: Centered card, minimal chrome. Logo top.

#### Form Fields

```
Email *
Password *

[Log in →]

[Forgot password?]
[Don't have an account? Start free →]
```

#### Login States

**1. Default**: clean, empty, button enabled

**2. Submitting**: spinner + "Logging in…"

**3. Wrong credentials**:
- Inline error: "Incorrect email or password. [Forgot your password?]"
- Do NOT specify which field is wrong (security)
- After 5 failed attempts: show CAPTCHA / "Too many attempts. Try again in 5 minutes."

**4. Account not verified**:
- Banner: "Please verify your email first. [Resend verification email →]"

**5. Success**: redirect to `/app/dashboard` (mock: redirect to a simple "You're logged in!" confirmation page for prototype)

**6. Forgot password flow**:
- Click "Forgot password?" → email field stays, password field replaced by:
  ```
  Enter your email and we'll send a reset link.
  [Send reset link →]
  ```
- Submit → success: "Check your email for a reset link."
- Email not found: "No account with that email. [Sign up free →]"

**7. Network error**: Toast: "Can't connect. Check your connection and try again."

---

### PAGE: `/demo` — Schedule a Demo

**Layout**: Same 2-column as `/signup` but lighter content.

#### Left Panel

```
"See xcorp in action"

In a 30-minute demo, you'll see:
→ How to set up company OKRs in 5 minutes
→ A real project board connected to GitHub
→ The AI assistant answering operational questions
→ How 3 teams use xcorp differently

"Perfect for decision-makers evaluating tools
for their organization."
```

#### Form Fields

```
Full Name *
Work Email *
Company Name *
Your Role *       (dropdown: CEO · HR · Ops · PM · Other)
Company Size *    (dropdown: 10–30 · 31–100 · 101–300 · 300–500 · 500+)
Preferred date *  (date picker — weekdays only, min: tomorrow + 2 days)
Preferred time *  (radio: 9:00 AM · 11:00 AM · 2:00 PM · 4:00 PM ICT)
"What's your biggest ops challenge?" (textarea, optional, 300 chars)

[Book Demo →]
```

#### Demo Form States

Same pattern as `/signup`: idle → validation → submitting → success → error.

**Success**:
```
✓ Demo booked!

[Date & Time] with our product team.
A calendar invite is on its way to [email].

→ We'll send a 10-minute prep guide beforehand.

[Add to Google Calendar →]    [Add to Outlook →]
```

**Slot full** (if selected date+time is "booked" — mock 2 dates):
- Inline: "This slot is full. Please select another time."

---

### PAGE: `/contact-sales` — Enterprise Sales

**Layout**: 2-column. Left: what you get with Enterprise. Right: form.

#### Left Panel

```
"xcorp for larger teams"

For organizations with 500+ employees or
complex requirements, we offer:

✓ Custom pricing based on actual usage
✓ Dedicated Customer Success Manager
✓ SLA-backed uptime guarantee
✓ SSO/SAML integration
✓ On-premise deployment (on request)
✓ Vietnamese-language onboarding sessions

"Typically quoted within 1 business day."
```

#### Form Fields

```
Full Name *
Work Email *
Job Title *
Company Name *
Company Size *     (dropdown: 100–300 · 300–500 · 500–1000 · 1000+)
Current tools *    (checkboxes: Asana · ClickUp · Monday · Jira · Notion · 
                   Base · Misa · Excel/Sheets · Other)
What are you evaluating xcorp for? (textarea, required)
Preferred contact method (radio: Email · Phone call · Zoom call)

[Submit →]
```

**States**: Same pattern. Success: "We'll be in touch within 1 business day."

---

## Global Component Requirements

### `<Navbar />`

States: transparent, scrolled, mobile-drawer-open, dropdown-products-open, dropdown-solutions-open, dropdown-resources-open

Rules:
- Only one dropdown open at a time
- Dropdown closes on Escape, outside click, route change
- `Login` and `Start Free Trial` always visible regardless of which dropdown is open
- On mobile: drawer opens from right, full-screen overlay

### `<CTAButton />`

Variants: `primary` (blue filled) · `secondary` (outline) · `ghost` (text) · `danger`
Sizes: `sm` · `md` · `lg` · `xl`
States: default · hover · active · loading (spinner + text) · disabled

### `<PricingCard />`

Props: `plan`, `price`, `features[]`, `featured` (boolean — adds accent border + "Most Popular" badge), `ctaLabel`, `ctaAction`

### `<FeatureCard />`

Props: `icon`, `title`, `description`, `link`
States: default, hover (lift + accent icon color)

### `<CaseStudyCard />`

Props: `industry`, `companySize`, `metric`, `excerpt`, `slug`

### `<IntegrationCard />`

Props: `name`, `category`, `description`, `comingSoon` (boolean)
Coming soon: grayed out, badge, no hover interaction

### `<FAQAccordion />`

Props: `items[]` with `{question, answer}`
States: collapsed (default), expanded (smooth height transition)
Keyboard: Enter/Space to toggle, arrow keys to navigate

### `<Toast />`

Types: `success` (green) · `error` (red) · `info` (blue) · `warning` (amber)
Auto-dismiss: success 4s, info 5s, warning 6s, error manual + auto 10s

### `<PasswordStrengthBar />`

Visual indicator: 3 segments (weak/medium/strong) + label
Weak: red · Medium: amber · Strong: green

### `<LanguageToggle />`

Props: `lang` (`en` | `vi`)
On switch: update `<html lang="">` attribute, store in localStorage

---

## Routing & Navigation Rules

- All nav links: React Router `<Link>` — no page reload
- Page transitions: Framer Motion `AnimatePresence` (fade + slide)
- Active route: detected via `useLocation()`, applied to nav links
- 404 page: clean "Page not found" with home link + search bar
- Redirects:
  - `/dang-ky` → `/signup`
  - `/login` → `/login` (same — just note Vietnamese URL alias)

---

## Mobile Responsiveness

- `sm: 640px` `md: 768px` `lg: 1024px` `xl: 1280px` `2xl: 1536px`
- Hero: stacked on mobile (text → UI mockup)
- Feature grid: 1 col (<640px) · 2 col (640–1023px) · 3 col (≥1024px)
- Pricing cards: vertical stack on mobile, horizontal on ≥768px
- Mega dropdown: converted to accordion in mobile drawer
- Form 2-column layout: single column on mobile (left panel stacks above form)
- Tables: horizontally scrollable on mobile

---

## Accessibility

- All interactive elements: visible focus ring (2px `--accent` color, 2px offset)
- All form inputs: paired `<label htmlFor>` + `aria-describedby` for errors
- Error messages: `role="alert"` for critical, `aria-live="polite"` for soft
- Dropdowns: `aria-expanded`, `aria-haspopup`, `role="menu"`, `role="menuitem"`
- Accordion: `aria-expanded`, keyboard navigable
- Color contrast: ≥4.5:1 for all text
- Skip-to-content link at page top

---

## Mock Data

```js
// src/data/customers.js — 4 anonymized case studies
// src/data/integrations.js — Slack, Jira, GitHub, GitLab, Bitbucket + coming-soon list
// src/data/faqs.js — 20 FAQs across 6 categories
// src/data/team.js — 4 placeholder team members
// src/data/pricing.js — 3 bundles with feature lists + starting prices

// Mock API behavior:
// POST /api/signup — setTimeout(1200) → { success: true }
// POST /api/demo — setTimeout(1000) → { success: true }
// POST /api/contact-sales — setTimeout(1000) → { success: true }
// POST /api/blog-notify — setTimeout(800) → { success: true }
// Email "taken@xcorp.app" → signup returns { error: "email_exists" }
// Date "2026-12-25" → demo returns { error: "slot_full" }
```

---

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          ← all states: transparent, scrolled, mobile, dropdowns
│   │   ├── Footer.jsx
│   │   ├── PageLayout.jsx
│   │   └── MobileDrawer.jsx
│   ├── ui/
│   │   ├── CTAButton.jsx
│   │   ├── PricingCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── CaseStudyCard.jsx
│   │   ├── IntegrationCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── PasswordStrengthBar.jsx
│   │   ├── Toast.jsx
│   │   ├── LanguageToggle.jsx
│   │   └── Badge.jsx
│   └── sections/
│       ├── home/
│       │   ├── Hero.jsx
│       │   ├── ProblemMirror.jsx
│       │   ├── SolutionOverview.jsx
│       │   ├── SocialProof.jsx
│       │   ├── PersonaPaths.jsx
│       │   ├── IntegrationsStrip.jsx
│       │   ├── PricingTeaser.jsx
│       │   └── FinalCTA.jsx
│       └── shared/
│           ├── RiskReversal.jsx
│           └── CTASection.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx      ← template for 5 product pages
│   ├── Solutions.jsx
│   ├── SolutionDetail.jsx     ← template for 3 solution pages
│   ├── Pricing.jsx
│   ├── Customers.jsx
│   ├── CustomerDetail.jsx
│   ├── Resources.jsx
│   ├── Help.jsx
│   ├── Integrations.jsx
│   ├── Blog.jsx               ← coming soon state
│   ├── Security.jsx
│   ├── About.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   ├── Demo.jsx
│   ├── ContactSales.jsx
│   └── NotFound.jsx
├── data/
│   ├── customers.js
│   ├── integrations.js
│   ├── faqs.js
│   ├── team.js
│   └── pricing.js
├── hooks/
│   ├── useScrollNavbar.js
│   ├── useCountUp.js          ← for stat counters
│   └── useIntersection.js     ← for scroll-triggered animations
├── utils/
│   └── mockApi.js
├── styles/
│   └── globals.css            ← CSS variables + base + dark mode
└── App.jsx                    ← Router + AnimatePresence + theme provider
```

---

## Definition of Done

- [ ] All pages render without errors at `/`
- [ ] Navbar: transparent → scrolled transition works; all 3 dropdowns open/close correctly; mobile drawer works with accordion; Login + Free Trial always visible
- [ ] All routes navigate correctly — no 404s on valid paths
- [ ] `/signup`: all 7 form states work (idle, inline errors, personal email warning, submitting, email-exists error, success, server error)
- [ ] `/login`: wrong credentials, too-many-attempts lockout, forgot-password flow, success redirect all work
- [ ] `/pricing`: monthly/annual toggle updates prices; module add-on table present; Enterprise callout visible
- [ ] `/resources/blog`: shows coming-soon state with email capture form
- [ ] Language toggle renders (EN default, VI label shows — full translation not required for prototype)
- [ ] Mobile: tested at 375px — no horizontal overflow, hamburger works, all forms usable
- [ ] Dark mode toggle works and persists in localStorage
- [ ] No placeholder "Lorem ipsum" — all copy is final English content from this spec
- [ ] All CSS uses `var(--token)` — no hardcoded hex values in JSX/TSX
- [ ] Accessible: keyboard navigation works throughout, focus rings visible, form errors announced
