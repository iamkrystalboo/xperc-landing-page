# Prompt for Claude Haiku — xperc.com Landing Page Prototype

> **Usage**: Paste this entire prompt into Claude Haiku in VS Code (or Claude Code CLI).  
> **Output**: A single self-contained `index.html` file — fully functional prototype with all flows.

---

## PROMPT START

You are a senior frontend engineer and conversion-rate specialist. Build a **complete, self-contained `index.html` landing page prototype** for **xperc.com** — a Vietnamese B2B AI consulting company targeting traditional-industry SME CEOs.

Output ONE file: `index.html`. No external dependencies except Google Fonts and a CDN icon library (use Lucide via unpkg). All CSS and JS must be inline. The page must be **fully interactive** with realistic copy, flows, and states.

---

## BRAND & AUDIENCE CONTEXT

**Company**: xperc — AI consulting for Vietnamese SMEs, from strategy to real deployment.  
**Tagline positioning**: Not an outsourcing vendor. Not a tech showcase. A trusted partner who understands your industry AND can ship AI.  
**Primary currency**: Trust, not features.

**Target customer ("Anh Hùng"):**
- CEO/Founder/Director, age 38–55, runs a traditional-industry SME (20–500 employees)
- Industries: Construction, Real Estate, Tourism/Resort, Manufacturing, F&B, Retail, Logistics, IT services
- AI awareness: Has heard a lot, sees competitors talking about it, skeptical of buzzwords but fears being left behind
- Tech comfort: Non-technical. Talks outcomes (cost, productivity). Fears jargon.
- Main fears: "Wasting money on something that doesn't work" + "Don't know where to start"
- Time on site (first visit): 2–5 minutes
- 3 silent questions when landing: (1) Is this company real? (2) Do they understand my industry? (3) What do I lose if I try?
- Decision authority: Independent up to 50–500M VND. Larger budgets need cofounder/CFO sign-off.

**The ONE conversion**: Book a free AI Audit (60-min expert session, 5 slots/day, C-level only).

**Anti-patterns to avoid** (do NOT include these):
- Outsourcing language ("offshore", "dedicated team", "resources")
- Tech stack showcase (no listing of GPT-4, LLaMA, Python, etc.)
- Generic AI stock illustrations (robots, glowing brains, circuit boards)
- Multiple competing CTAs
- Newsletter signup
- Brochure download
- Pricing page as separate link
- "We are passionate about AI" filler copy

---

## DESIGN DIRECTION

**Aesthetic**: Editorial-dark with sharp Vietnamese modern business energy. Think: premium consultant meets tech-forward agency. NOT a SaaS tool, NOT a dev shop.

**Color palette** (use as CSS variables):
```css
--bg-primary: #0A0A0B;        /* near-black background */
--bg-secondary: #111114;       /* section alternates */
--bg-card: #18181C;            /* card surfaces */
--accent-red: #E8392A;         /* xperc brand red — primary CTA */
--accent-red-hover: #FF4B3A;   /* hover state */
--text-primary: #F2F2F0;       /* main text */
--text-secondary: #8A8A8E;     /* secondary text */
--text-muted: #4A4A50;         /* muted/placeholders */
--border: #242428;             /* subtle borders */
--border-active: #3A3A40;      /* active/focus borders */
--success: #2ECC71;
--error: #E8392A;
--warning: #F39C12;
```

**Typography** (load from Google Fonts):
- Display/Headlines: `Be Vietnam Pro` (weights: 700, 800)
- Body: `Be Vietnam Pro` (weights: 400, 500)
- Monospace accents: `JetBrains Mono` (for tags, labels, codes)

**Motion philosophy**: Purposeful and fast. No bouncy animations. Use:
- Fade-in + translateY(20px) → translateY(0) on scroll entry (IntersectionObserver)
- 200ms ease transitions on interactive elements
- Sticky nav that compresses on scroll
- Smooth scroll between sections

**Layout rules**:
- Max content width: 1200px, centered
- Mobile-first, fully responsive (breakpoints: 768px, 1024px)
- Generous whitespace — don't fill every pixel
- Section padding: 96px vertical on desktop, 64px on mobile

---

## PAGE STRUCTURE — 7 SECTIONS

### SECTION 1: NAV (sticky)

Sticky top navigation that compresses after scrolling 60px.

**Default state** (full):
```
[xperc logo] .............. Services | Solutions ▾ | About xperc    [Book AI Audit →]
```

**Scrolled state**: reduce padding, add subtle backdrop-blur + border-bottom.

**"Solutions" dropdown** (hover or click): shows mega-menu with two columns:
- Column 1 "By Industry": Construction, Real Estate, Tourism & Resort, IT / Software
- Column 2 "By Problem": AI Helpdesk, Meeting Summarization, AI Project Agent, Workforce Productivity

On mobile: hamburger menu → full-screen overlay nav with same items in accordion.

**Logo**: Text-based — `xperc` in `Be Vietnam Pro 800`, white, with a small red dot or slash accent.

**CTA button**: Red background, white text, slight border-radius 4px, subtle shadow. On hover: brighten + slight scale(1.02).

---

### SECTION 2: HERO

**Goal**: Within 5 seconds, Anh Hùng knows: (a) what xperc does, (b) whether it's for him, (c) what to do next.

**Layout**: Full-viewport height. Two columns on desktop (60/40 split). Left = text, Right = abstract geometric visual (CSS-only: dark grid with a glowing red diagonal line accent — no stock images, no AI robot illustrations).

**Content**:

```
[Eyebrow tag — monospace, red]: AI CONSULTING · VIETNAM
[H1, 2 lines max]:
  AI for Vietnamese businesses —
  from strategy to real deployment

[Subhead, 1–2 lines, mirrors the customer's inner voice]:
  You know AI matters, but not sure where to start for your business?
  60 minutes with our AI expert gives you a concrete answer — specific to your company.

[Primary CTA button]: Book Free AI Audit →

[Microcopy row below CTA]:
  ✓ Free  ·  ✓ C-level only  ·  ✓ 5 slots/day
```

**Scroll indicator**: Animated down-arrow at bottom of viewport.

**Animation on load**: Staggered fade-in — eyebrow (0ms), H1 (100ms), subhead (200ms), CTA (350ms), microcopy (450ms).

---

### SECTION 3: PROBLEM MIRROR

**Goal**: Anh Hùng sees his exact situation → "Yes, that's exactly my pain."

**Layout**: Section header + 3 cards in a row (desktop) / stacked (mobile).

**Section header**:
```
Sound familiar?
```
(No subhead — let the cards speak.)

**3 cards** — each is an open question (NOT a feature list, NOT solution names):

Card 1: 🎧
```
"Is your customer support team answering the same questions dozens of times every day?"
```
Tag below (monospace, muted): `AI HELPDESK`

Card 2: 📊
```
"Do you have to chase each person, then stitch together an Excel sheet just to know where a project stands?"
```
Tag: `AI AGENT · PROJECTS`

Card 3: 🧭
```
"Does it take new hires two weeks to figure out who does what, where the processes are, and who to ask?"
```
Tag: `AI ONBOARDING`

**Card design**: Dark card with border, hover → border brightens to red, subtle background shift. No CTA inside cards — it's too early.

**Scroll-triggered**: Cards animate in with 100ms stagger.

---

### SECTION 4: 2-AXIS PICKER

**Goal**: Serve two visitor types — Type V (searches by industry) and Type H (searches by problem). Escape hatch for those who don't see their fit.

**Section header**:
```
Explore what's relevant to you
```

**Layout**: Two side-by-side panels with a thin divider (desktop). Stacked with tabs (mobile).

**Panel Left — BY INDUSTRY**:
```
[Label]: BY INDUSTRY
→ Construction & Infrastructure
→ Real Estate
→ Tourism & Resort
→ IT / Software Companies
```

**Panel Right — BY PROBLEM**:
```
[Label]: BY PROBLEM
→ AI Helpdesk
→ Automated Meeting Summaries
→ AI Project Management Agent
→ Workforce Productivity
```

**Interaction**: Each item is clickable. On click → show a **mini-modal or inline expand panel** (not a new page — keep in prototype) with:
- Relevant industry/problem short description (2–3 sentences)
- One concrete example outcome (e.g., "80-person real estate firm — 60% reduction in time spent compiling project progress reports")
- A secondary CTA: "Discuss your [industry/problem] with us →" → opens audit booking modal

**Escape hatch** (centered, below both panels):
```
Don't see your industry or problem?
[Book AI Audit — we'll analyze your specific business →]
```

---

### SECTION 5: METHODOLOGY (3-Package Roadmap)

**Goal**: Anh Hùng sees a clear roadmap. Audit is the no-commitment entry point.

**Section header**:
```
How we work
[Subhead]: No vague contracts. No hidden fees. Clear at every step.
```

**Layout**: 3 cards with arrow connectors between them (horizontal flow desktop, vertical mobile).

**Card 1 — PACKAGE 1: AI AUDIT** (highlighted — primary card with accent border):
```
[Badge]: START HERE
Package 1: AI Audit
60 minutes · Free

Your AI Opportunity Map — built specifically for your business:
· Which processes save the most with AI
· Where to start, and what it actually costs
· A 3–6 month roadmap sized for your company

[CTA button, red]: Book Now →
```

**Card 2 — PACKAGE 2: AI QUICK START**:
```
Package 2: AI Quick Start
3–6 weeks · From 25M VND

Deploy 1–2 AI solutions running in your real operations.
No demo. No POC. Actually live.

[CTA, outlined]: Learn More →
```

**Card 3 — PACKAGE 3: AI SCALE**:
```
Package 3: AI Scale
Monthly retainer · From 23M/month

AI becomes the way your company operates every day.
Not a project anymore.

[CTA, outlined]: Learn More →
```

**Pricing note** below all cards (small, muted):
```
All prices are "starting from" — not fixed pricing.
The Audit gives you exact numbers for your situation.
```

**"Learn More" interaction**: Opens a **slide-in drawer panel** (right side) with more detail about that package. Includes a "Start with the free AI Audit →" CTA at the bottom of the drawer.

---

### SECTION 6: PROOF (No Case Studies Needed)

**Goal**: Build trust without client AI case studies. "Proof by doing."

**Section header**:
```
We don't advise on things we don't use ourselves
```

**Layout**: 3 sub-clusters stacked.

**Cluster 5A — "xperc uses AI internally"**:

3 use case cards (horizontal on desktop):

Card: 🎙 Meeting Summaries
```
Every xperc meeting is automatically transcribed, summarized, and action items are pushed into task management.
Result: Zero dropped tasks after any meeting.
[See Demo →] (clicking this opens a demo video modal — use a placeholder embed area)
```

Card: 📚 New Employee Onboarding
```
An AI helpdesk lets new hires look up internal policies, processes, and contacts on their own from day one.
Result: 70% fewer repetitive questions to managers.
[See Demo →]
```

Card: 🎯 AI Agent for Project Management
```
An AI agent tracks project progress, suggests next actions, and flags timeline risk early — automatically.
Result: No more manual status reports on Friday.
[See Demo →]
```

**Cluster 5B — "Tools we built"**:

```
Unlike agencies that rent third-party tools, xperc builds and operates its own full stack:

[xcorp.app]  Operations platform — OKR/KPI · PM · Automation Workflow
[syrix.ai]   AI engine — Helpdesk · ASR · TTS

[View xcorp →]  [View syrix →]
```

Design: Two product cards side by side. Each has a small logo placeholder + 1-line description + link. Subtle gradient border.

**Cluster 5C — "The team"**:

```
3–4 team member cards:
[Photo placeholder: initials avatar] 
Name · Role
X years experience · [1 concrete highlight]
```

Example members (use realistic placeholder data):
- Minh Tran · CEO & AI Strategist · 12 yrs · Built AI products used by 20k+ users
- Linh Pham · Head of Delivery · 8 yrs · Deployed AI at 15+ Vietnamese SMEs
- Tuan Nguyen · CTO · 10 yrs · Architect of xcorp.app and syrix.ai

**Note at bottom of section** (small, muted italic):
```
When we have real client AI case studies, this section will be updated.
Until then, we use ourselves as proof.
```

---

### SECTION 7: RISK REVERSAL

**Goal**: Remove the last hesitation before clicking CTA.

**Layout**: Full-width dark section with high contrast. Centered content.

**Content**:
```
[H2]: You have nothing to lose

[4 checkmarks in 2x2 grid]:
✓ AI Audit is completely free — 60 minutes
✓ No commitment to Package 2 or 3 afterward
✓ You keep the AI Opportunity Map regardless
✓ 5 slots/day — C-level only, not a mass workshop

[Large CTA button, red, wide]: Book Your Audit →
[Microcopy]: Response within 24 business hours
```

---

### SECTION 8: FOOTER

**Layout**: 4-column grid.

```
Col 1 — Contact:         Col 2 — Products:    Col 3 — Office:         Col 4 — Legal:
hello@xperc.com          xcorp.app             Ho Chi Minh City,       Privacy Policy
0901 234 567             syrix.ai              Vietnam                  Terms of Service
[LinkedIn] [Facebook]
```

**Logo + tagline** above columns:
```
xperc
AI cho doanh nghiệp Việt Nam — từ tư vấn đến triển khai thực tế.
```

**Copyright**: `© 2026 xperc. All rights reserved.`

**NOT included** (intentionally absent): Newsletter signup, brochure download, sitemap, customer login.

---

## FLOWS TO IMPLEMENT

### ✅ HAPPY FLOW — Booking the AI Audit

**Trigger**: User clicks any "Book AI Audit" CTA (nav, hero, risk reversal, section escape hatch).

**Opens**: Full-screen modal overlay (booking modal).

**Modal — Step 1 of 3: Basic Info**
```
[Header]: Book Your Free AI Audit
[Progress]: Step 1 / 3

[Form fields]:
Full Name *                    → text input
Title *                        → dropdown: CEO / Founder / Director / COO / Other
Company *                      → text input
Industry *                     → dropdown: Construction / Real Estate / Tourism & Resort / IT / Manufacturing / F&B / Retail / Logistics / Other
Company Size *                 → dropdown: 20–50 / 51–100 / 101–200 / 201–500 / 500+
Email *                        → email input
Phone Number *                 → text input (Vietnamese format)

[CTA]: Next →
[Cancel link]: Cancel
```

**Validation**:
- All fields required
- Email format validation
- Phone: must start with 0, 10–11 digits
- On invalid submit: red border + error message below each invalid field
- Microcopy under Title field: "The AI Audit is reserved for C-level executives. Not a CEO or Director? Share this page with your boss 😊"

**Modal — Step 2 of 3: Time Selection**
```
[Header]: Pick a time that works for you
[Progress]: Step 2 / 3

[Week calendar view — next 7 working days]:
Each day shows: Date, Day name, available slots

Available slots per day (clickable time chips):
09:00 | 10:00 | 14:00 | 15:00 | 16:00

[Some slots marked as "Full" — grayed out, not clickable]
[Max 5 slots/day rule — show "X slots left" counter per day]

Selected slot highlights in red.

[Back button] [Next →]
```

**Slot availability logic (JS simulation)**:
- Today: 1 slot remaining (add urgency)
- Tomorrow: 3 slots remaining
- Day after: Full (all grayed out — shows scarcity)
- Other days: 4–5 slots available

**Modal — Step 3 of 3: Confirmation**
```
[Header]: Confirm your booking
[Progress]: Step 3 / 3

[Summary card — read-only]:
Name: [value]
Company: [value] — [industry] — [size]
Email: [value]
Phone: [value]
Time: [selected slot]
Format: Video call (Google Meet / Zoom)

[Checkbox]: I agree to the Terms of Service and Privacy Policy *

[Note]: We'll send you a meeting link and a short prep questionnaire within 24 hours.

[Back button] [Confirm Booking →]
```

**On submit**: Show loading state (spinner on button, 1.5s simulated delay) → Success state.

**Success screen** (replaces modal content):
```
[Green checkmark animation]

Booking confirmed! 🎉

We've received your information.
A confirmation email will be sent to [email] within 24 business hours.

While you wait, you might want to:
→ See how we use AI internally
→ Learn more about xcorp.app

[Close button]: Close
```

---

### ⚠️ ALTERNATIVE FLOW — Non-C-level visitor

**Trigger**: User selects "Other" for Title in Step 1.

**Behavior**: After selecting "Other", show an inline alert below the field:
```
⚠️ The AI Audit is reserved for CEOs, Founders, Directors, and COOs.

If you're a mid-level manager or individual contributor, you can:
→ [Share this page with your boss]  (copies URL to clipboard with a toast)
→ [Email us directly]  (mailto link)
```

The "Next →" button changes to "Contact Us Directly →" which opens a simple contact modal instead.

---

### ⚠️ ALTERNATIVE FLOW — Industry Picker Deep-Dive

**Trigger**: User clicks any industry/problem item in Section 4 (2-Axis Picker).

**Behavior**: Show an inline expand panel below the clicked item (accordion style). Content depends on which item was clicked.

Example for "Construction & Infrastructure":
```
[Panel opens with slide-down animation]

What has xperc done in Construction & Infrastructure?

Common problems we've seen:
· Project timelines slip because status updates are scattered across WhatsApp
· Progress reports take 3–4 hours per week to compile manually
· Field workers can't access technical specs when they need them on-site

Solutions deployed:
· AI Project Agent for realtime timeline tracking → No more weekly status meetings
· Internal AI Helpdesk → Look up processes and technical specs from a phone on-site

Typical result (anonymized):
"120-person construction firm — saved 4 hours/week on reporting, cut new hire onboarding from 2 weeks to 3 days."

[CTA]: Discuss your situation with us →  (opens booking modal)
[Close]: Collapse ↑
```

---

### ❌ ERROR FLOWS

**Form validation errors** (Step 1):
- Missing required field: red border + message "This field is required"
- Invalid email: "Invalid email. Example: name@company.com"
- Invalid phone: "Vietnamese phone numbers must start with 0 and have 10 digits"
- Shake animation on form when submitting with errors

**No time slot selected** (Step 2):
- If user clicks "Next" without selecting a slot: highlight the calendar with a red border + message "Please select a time slot to continue"

**Simulated booking failure** (Step 3 submit → show error after delay):
- Trigger: (For prototype, simulate error on 3rd submission attempt OR if email contains "test@test.com")
- Show error state:
```
[Red banner in modal]:
⚠️ Booking unsuccessful

A technical error occurred. You can:
→ Try again  (retry button)
→ Call us directly: 0901 234 567
→ Email: hello@xperc.com

Your information has been preserved.
```

**Unchecked Terms checkbox**:
- Message: "Please agree to the terms to proceed with your booking"

---

### 💬 POPUP FLOWS

**Exit-intent popup** (desktop only):
- Trigger: Mouse moves above viewport for 2+ seconds (simulated exit intent)
- Show once per session (sessionStorage flag)
- Content:
```
[Overlay + centered modal]

Hold on! 👋

Before you go —

[X] free AI Audit slots still available today.
60 minutes. No commitment. Nothing to lose.

[Book Now →]   [No thanks]
```

**Demo video modal** (triggered from Section 6, Proof cluster):
- Clicking any "[See Demo →]" button opens a modal with:
  - Dark overlay
  - Centered container with 16:9 aspect ratio placeholder (dark background, centered text "Demo video coming soon" with a play icon)
  - Close button (top-right X)
  - Title of the demo below the video area

**"Package Details" drawer** (triggered from Package 2 / Package 3 "Learn More" buttons):
- Right-side slide-in drawer (400px wide, full-height)
- Backdrop overlay dims the page
- Content varies by package
- Always ends with: "Start with the free AI Audit →" (opens booking modal)

**Toast notifications**:
- "Link copied!" (green, 3s, top-right) — when share link is clicked
- "Opening email app..." (blue, 3s) — when mailto opens

---

## TECHNICAL REQUIREMENTS

1. **Self-contained**: Single `index.html` with all CSS in `<style>` and all JS in `<script>`. No build tools.

2. **Google Fonts**: Load `Be Vietnam Pro` (400, 500, 700, 800) and `JetBrains Mono` (400).

3. **Icons**: Use Lucide via CDN:
   ```html
   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
   ```
   Initialize with `lucide.createIcons()` after DOM load.

4. **Scroll animations**: Use `IntersectionObserver` to add `visible` class to elements with `data-animate` attribute. CSS handles the actual animation.

5. **Smooth scroll**: `scroll-behavior: smooth` on `:root`.

6. **Modal management**: 
   - One JS object manages modal state: which modal is open, which step
   - Body gets `overflow: hidden` when any modal/overlay is open
   - ESC key closes any open modal/drawer/overlay

7. **Form state**: Store form data in a JS object (not actual submission). Multi-step form persists data as user goes back/forward.

8. **Mobile responsive**: 
   - Nav: hamburger at <768px → full-screen overlay
   - Hero: single column
   - 2-axis picker: tabs instead of side-by-side panels
   - 3-package cards: vertical stack
   - Proof cards: vertical stack
   - Footer: 2-column then 1-column

9. **Accessibility basics**:
   - `aria-label` on icon buttons
   - `role="dialog"` and `aria-modal="true"` on modals
   - Focus trap inside open modals
   - `prefers-reduced-motion` media query: disable animations

10. **Simulated slot data**: Hardcode 7 days × 5 slots per day. Mark specific slots as full:
    - Today: slots 09:00, 10:00, 14:00 full; 15:00, 16:00 available (2 suất)
    - Tomorrow: 14:00, 15:00 full; others available (3 suất)
    - Day 3: All full (0 suất — show "Hết suất")
    - Days 4–7: 5 suất each

---

## COPY GUIDELINES

- **Language**: English. Natural, direct, zero corporate jargon.
- **Tone**: Peer-to-peer, like a smart consultant talking to a CEO — not salesy.
- **Avoid**: "We are passionate about...", "cutting-edge", "innovative", "synergy", "leverage", "world-class"
- **Use**: Concrete numbers, outcomes, timelines. "60 minutes", "3–6 weeks", "saves 4 hours/week", "5 slots/day"
- **Pain language**: Mirror the customer's actual words. "Don't know where to start", "wasting money on something that doesn't work", "have to chase each person"
- **Trust signals**: Specificity over claims. "120-person company" beats "large company". "70% reduction" beats "significant improvement".

---

## FINAL CHECKLIST BEFORE OUTPUT

Before outputting the HTML, verify:
- [ ] All 7 sections present and correctly ordered
- [ ] 3-step booking modal fully functional with all validations
- [ ] Non-C-level alternate flow implemented
- [ ] Industry picker expand panels work
- [ ] Error states handled (validation, booking failure)
- [ ] Exit-intent popup implemented
- [ ] Demo modal works
- [ ] Package drawer slides in/out
- [ ] Toast notifications appear
- [ ] Mobile menu works
- [ ] Smooth scroll from nav links
- [ ] All CTAs open the correct modal/flow
- [ ] ESC closes modals
- [ ] No broken references or empty states
- [ ] Footer has all required links
- [ ] `sessionStorage` prevents exit popup from showing twice

Output the complete `index.html` file. Start with `<!DOCTYPE html>` and end with `</html>`. No explanation outside the file. No markdown fences.

## PROMPT END
