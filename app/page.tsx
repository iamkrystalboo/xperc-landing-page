export const metadata = {
  title: 'XperC — AI Strategy & Implementation for Traditional Businesses',
  description: 'From strategy to real deployment. Book your free 60-minute AI Audit with our specialists and get a concrete, business-specific AI roadmap.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Section 1: HERO */}
      <section className="section-spacing px-4 pt-12 md:pt-16 lg:pt-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container-max">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="section-label">AI Strategy & Implementation</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-text-primary">
                Your Competitors Are Already Using AI.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
                You know AI matters, but you&apos;re not sure where to start? 60 minutes with our AI specialists will give you a concrete, business-specific answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <a 
                  href="/dat-ai-audit" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  Book Free AI Audit →
                </a>
                <a 
                  href="/dich-vu" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-bg-secondary border-2 border-border text-text-primary hover:border-accent hover:bg-bg-secondary font-semibold rounded-lg transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>

            {/* Hero Visual - Video Marketing below CTAs */}
            <div className="relative h-96 md:h-[450px] flex items-center justify-center animate-slide-up mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 rounded-full bg-accent/90 hover:bg-accent flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="text-text-primary font-semibold text-lg mb-1">See XperC in action</p>
                  <p className="text-text-secondary text-sm">How Vietnamese businesses deploy AI in 60 minutes</p>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-accent/5 via-logoNavy/5 to-transparent"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs text-accent font-medium">Demo</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-text-secondary justify-center">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Free — 60 min session</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Tailored roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>No commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: PROBLEM MIRROR */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              Sound familiar?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These are the operational bottlenecks we see across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'You\'re the Bottleneck',
                desc: 'Every approval, decision, and escalation still runs through you. Your business freezes when you are unavailable — and you can\'t scale a company that depends entirely on one person.'
              },
              {
                title: 'Decisions Made on Gut, Not Data',
                desc: 'You\'re managing 50–200 people but key decisions on pricing, hiring, and operations still rely on instinct — because getting real numbers takes too long and nobody owns it.'
              },
              {
                title: 'You See Competitors Moving, But You Don\'t Know Where To Start',
                desc: 'Other businesses in your industry are talking about AI. You\'re not sure what\'s real, what\'s hype, or whether it even applies to you — and you can\'t afford to guess wrong with your budget.'
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-8 bg-bg-card rounded-lg border border-border hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-default"
              >
                <p className="text-2xl font-display font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* How It Works Section — Your AI Journey */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">Your AI journey starts here</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">From first curiosity to a concrete AI roadmap — no fluff, no pressure</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {[
                { step: '01', label: 'Pick your focus', desc: 'Browse by your industry or the specific problem you want to solve' },
                { step: '02', label: 'Explore use cases', desc: 'See real AI applications mapped to your exact situation' },
                { step: '03', label: 'Book a free Audit', desc: '60-minute session with an AI specialist — zero commitment needed' },
                { step: '04', label: 'Get your roadmap', desc: 'Receive a concrete AI Opportunity Map with clear ROI estimates' },
              ].map((item, i) => (
                <div key={i} className="bg-bg-card rounded-2xl border border-border p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{item.step}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">Step {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{item.label}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mt-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 2-AXIS PICKER */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              Explore your way
            </h2>
            <p className="text-lg text-text-secondary">Choose to navigate by your industry or the specific problem you&apos;re solving</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* By Industry */}
            <div className="bg-bg-secondary rounded-lg border border-border p-8">
              <h3 className="section-label mb-6">By Industry</h3>
              <div className="space-y-3">
                {[
                  { name: 'Construction & Engineering', slug: 'construction' },
                  { name: 'Real Estate', slug: 'real-estate' },
                  { name: 'Hospitality & Resort', slug: 'hospitality' },
                  { name: 'IT / Software', slug: 'it-software' },
                ].map((ind) => (
                  <a 
                    key={ind.slug}
                    href={`/nganh/${ind.slug}`}
                    className="flex items-center justify-between p-4 rounded-lg bg-bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <span className="text-text-primary font-medium group-hover:text-accent transition-colors">{ind.name}</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* By Problem */}
            <div className="bg-bg-secondary rounded-lg border border-border p-8">
              <h3 className="section-label mb-6">By Problem</h3>
              <div className="space-y-3">
                {[
                  { name: 'AI Helpdesk', slug: 'ai-helpdesk' },
                  { name: 'Meeting Summarizer', slug: 'meeting-summary' },
                  { name: 'AI Project Agent', slug: 'ai-project-agent' },
                  { name: 'Work Efficiency', slug: 'work-efficiency' },
                ].map((prob) => (
                  <a 
                    key={prob.slug}
                    href={`/bai-toan/${prob.slug}`}
                    className="flex items-center justify-between p-4 rounded-lg bg-bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <span className="text-text-primary font-medium group-hover:text-accent transition-colors">{prob.name}</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-text-secondary mb-4">Don&apos;t see your industry or use case?</p>
            <a 
              href="/dat-ai-audit"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium transition-colors"
            >
              Book AI Audit — we&apos;ll analyze your specific situation →
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: METHODOLOGY (3 Packages) */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              Three packages, one natural progression
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              AI Audit is your no-commitment entry point to understanding your AI opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'AI Audit',
                duration: '60 min',
                price: 'Free',
                deliverable: 'AI Opportunity Map — a concrete, business-specific AI roadmap',
                featured: true,
                cta: { text: 'Book Now', href: '/dat-ai-audit', primary: true },
              },
              {
                name: 'AI Quick Start',
                duration: '3–6 weeks',
                price: 'from 25M VND',
                deliverable: '1–2 AI solutions running in your real operations',
                featured: false,
                cta: { text: 'Learn More', href: '/dich-vu', primary: false }
              },
              {
                name: 'AI Scale',
                duration: 'Monthly retainer',
                price: 'from 23M VND/mo',
                deliverable: 'AI as a permanent layer in how your company operates daily',
                featured: false,
                cta: { text: 'Learn More', href: '/dich-vu', primary: false }
              },
            ].map((pkg, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 p-8 transition-all duration-300 h-full flex flex-col ${
                  pkg.featured 
                    ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent shadow-lg' 
                    : 'bg-bg-card border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
                  <p className="text-text-secondary text-sm mb-6">{pkg.duration} · {pkg.price}</p>
                  <p className="text-text-secondary leading-relaxed mb-8">{pkg.deliverable}</p>
                </div>
                <a 
                  href={pkg.cta.href}
                  className={`mt-auto inline-flex items-center justify-center w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                    pkg.cta.primary
                      ? 'bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-glow'
                      : 'bg-bg-secondary border border-border text-text-primary hover:border-accent hover:text-accent'
                  }`}
                >
                  {pkg.cta.text} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section — Scrolling Marquee Widget */}
      <section className="section-spacing px-4 bg-bg-secondary overflow-hidden">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              What Our Clients Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Trusted by businesses across industries and geographies
            </p>
          </div>

          <div className="relative max-w-full">
            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                gap: 2rem;
                width: max-content;
                animation: marquee-scroll 40s linear infinite;
              }
              .marquee-track:hover {
                animation-play-state: paused;
              }
              .marquee-card {
                width: 420px;
                flex-shrink: 0;
              }
              @media (max-width: 640px) {
                .marquee-card { width: 300px; }
              }
            `}</style>
            <div className="marquee-track">
              {/* First set */}
              {[
                {
                  source: 'Squid Solution',
                  region: 'France',
                  quote: `I&apos;ve been working with XPERC founders for 5 years, developing a complex & large Java application (full BI stack) mixing lots of technologies & API... They always managed to achieve our milestones and proved to be talented software engineers and great teammates. I would definitely work with them again.`
                },
                {
                  source: 'LLNK',
                  region: 'Software Company',
                  quote: `XPERC provides consistent quality with fast pace implementation, they are the best partner and always help us to manage the concrete budget for project implementation with their expert.`
                },
                {
                  source: 'Snow Monster, 18 Folds, 206 BCE, Green Turtle Co, & Wildflower Co.',
                  region: 'United States — Restaurants',
                  quote: `We recommended XPERC services and quality while they are implementing our reservation/pickup system.`
                },
                {
                  source: '9PMP',
                  region: 'Construction Software Solution — Singapore',
                  quote: `Professional, reliable, and technically excellent. They delivered our construction management platform with deep understanding of our domain.`
                },
                // Duplicate for seamless loop
                {
                  source: 'Squid Solution',
                  region: 'France',
                  quote: `I&apos;ve been working with XPERC founders for 5 years, developing a complex & large Java application (full BI stack) mixing lots of technologies & API... They always managed to achieve our milestones and proved to be talented software engineers and great teammates. I would definitely work with them again.`
                },
                {
                  source: 'LLNK',
                  region: 'Software Company',
                  quote: `XPERC provides consistent quality with fast pace implementation, they are the best partner and always help us to manage the concrete budget for project implementation with their expert.`
                },
                {
                  source: 'Snow Monster, 18 Folds, 206 BCE, Green Turtle Co, & Wildflower Co.',
                  region: 'United States — Restaurants',
                  quote: `We recommended XPERC services and quality while they are implementing our reservation/pickup system.`
                },
                {
                  source: '9PMP',
                  region: 'Construction Software Solution — Singapore',
                  quote: `Professional, reliable, and technically excellent. They delivered our construction management platform with deep understanding of our domain.`
                },
              ].map((testimonial, i) => (
                <div key={i} className="marquee-card bg-bg-secondary rounded-2xl border border-border p-6 shadow-sm flex flex-col">
                  <div className="mb-3">
                    <svg className="w-6 h-6 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-text-secondary leading-relaxed flex-grow mb-4 italic text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-border pt-3 mt-auto">
                    <p className="font-semibold text-text-primary text-sm">{testimonial.source}</p>
                    <p className="text-text-secondary text-xs">{testimonial.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: PROOF */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          {/* 5A: We use AI ourselves */}
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary mb-8">
              We use AI ourselves
            </h2>
            <p className="text-lg text-text-secondary mb-12 max-w-2xl">
              We don&apos;t consult on things we don&apos;t use. XperC runs AI internally for:
            </p>

            {/* Top row: 2 featured systems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[
                {
                  title: 'Meeting Summarizer',
                  desc: 'Every XperC meeting is automatically transcribed, summarized, and action items are pushed to our task management system.',
                },
                {
                  title: 'Employee Onboarding AI',
                  desc: 'Our AI helpdesk lets new team members look up policies, processes, and contacts on day one — no hand-holding required.',
                },
              ].map((use, i) => (
                <div key={i} className="bg-bg-secondary rounded-lg border border-border p-8">
                  <h4 className="font-semibold text-text-primary mb-3 text-lg">{use.title}</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">{use.desc}</p>
                  <a href="#" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">
                    View Demo →
                  </a>
                </div>
              ))}
            </div>
            {/* Bottom row: 3 compact systems — same level */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Project Management',
                  desc: 'AI-assisted task assignment, deadline prediction, and bottleneck detection.',
                },
                {
                  title: 'OKR Tracking',
                  desc: 'Automated OKR progress tracking with AI-generated weekly summaries.',
                },
                {
                  title: 'Leave & HR',
                  desc: 'AI-powered leave approval workflow, capacity forecasting, and smart scheduling.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-bg-card rounded-xl border border-border p-5">
                  <h5 className="font-semibold text-text-primary mb-2 text-sm">{item.title}</h5>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5B: Tools we built */}
          <div className="mb-16 bg-bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-display text-3xl font-bold text-text-primary mb-4">Tools we built</h3>
            <p className="text-text-secondary mb-8 max-w-xl">
              Unlike agencies that rent external tools, XperC builds and operates its own stack:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'xcorp.app', desc: 'Operations platform (OKR/KPI · PM · Automation Workflow)', href: 'http://localhost:3002', accent: 'from-accent/20 to-accent/5' },
                { name: 'syrix.ai', desc: 'AI engine (Helpdesk · ASR · TTS)', href: '#', accent: 'from-logoNavy/20 to-logoNavy/5' },
              ].map((tool, i) => (
                <div key={i} className="bg-gradient-to-br rounded-xl border border-border/60 p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300" style={{background: i === 0 ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.02))' : 'linear-gradient(135deg, rgba(30,41,59,0.08), rgba(30,41,59,0.02))'}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${i === 0 ? 'bg-accent/20' : 'bg-logoNavy/20'} flex items-center justify-center`}>
                      <span className={`text-sm font-bold ${i === 0 ? 'text-accent' : 'text-logoNavy'}`}>{tool.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-semibold text-text-primary">{tool.name}</h4>
                  </div>
                  <p className="text-text-secondary text-sm mb-3 ml-0">{tool.desc}</p>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover text-sm font-medium transition-colors group/link">
                    Visit {tool.name}
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: RISK REVERSAL */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max max-w-3xl">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-8 md:p-12 lg:p-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-center mb-12">
              Nothing to lose. Everything to gain.
            </h2>

            <div className="space-y-4 mb-12">
              {[
                'AI Audit is completely free — 60 minutes of your time',
                'No commitment to Quick Start or Scale afterward',
                'You keep your AI Opportunity Map regardless',
                '1-on-1 with an AI specialist',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-text-primary font-medium pt-0.5">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/dat-ai-audit"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 text-lg"
              >
                Book Your AI Audit →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
