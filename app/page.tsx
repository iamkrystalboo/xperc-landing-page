export const metadata = {
  title: 'xperc — AI Strategy & Implementation for Traditional Businesses',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="section-label">AI Strategy & Implementation</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-text-primary">
                AI for Vietnamese Businesses — From Strategy to Real Deployment
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-lg">
                You know AI matters, but you're not sure where to start? 60 minutes with our AI specialists will give you a concrete, business-specific answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
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

            {/* Hero Visual - Video Marketing */}
            <div className="relative h-96 md:h-full min-h-[400px] flex items-center justify-center animate-slide-up">
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
                  <p className="text-text-primary font-semibold text-lg mb-1">See xperc in action</p>
                  <p className="text-text-secondary text-sm">How Vietnamese businesses deploy AI in 60 minutes</p>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-accent/5 via-logoNavy/5 to-transparent"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs text-accent font-medium">Demo</span>
                </div>
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
                title: 'Repetitive Customer Questions',
                desc: 'Your customer support team answers the same 10 questions dozens of times every day'
              },
              {
                title: 'No Project Visibility',
                desc: 'You never know where a project or goal stands — you have to ask each person then consolidate manually in Excel'
              },
              {
                title: 'Slow Employee Onboarding',
                desc: 'A new employee takes 2 weeks before they know who does what and where to find anything'
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

      {/* Section 3: 2-AXIS PICKER */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              Explore your way
            </h2>
            <p className="text-lg text-text-secondary">Choose to navigate by your industry or the specific problem you're solving</p>
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
            <p className="text-text-secondary mb-4">Don't see your industry or use case?</p>
            <a 
              href="/dat-ai-audit"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium transition-colors"
            >
              Book AI Audit — we'll analyze your specific situation →
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: METHODOLOGY (3 Packages) */}
      <section className="section-spacing px-4 bg-bg-secondary">
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
                cta: { text: 'Learn More', href: '/dich-vu/ai-quick-start', primary: false },
              },
              {
                name: 'AI Scale',
                duration: 'Monthly retainer',
                price: 'from 23M VND/mo',
                deliverable: 'AI as a permanent layer in how your company operates daily',
                featured: false,
                cta: { text: 'Learn More', href: '/dich-vu/ai-scale', primary: false },
              },
            ].map((pkg, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 p-8 transition-all duration-300 ${
                  pkg.featured 
                    ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent shadow-lg' 
                    : 'bg-bg-card border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
                <p className="text-text-secondary text-sm mb-6">{pkg.duration} · {pkg.price}</p>
                <p className="text-text-secondary leading-relaxed mb-8">{pkg.deliverable}</p>
                <a 
                  href={pkg.cta.href}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
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

      {/* Section 5: PROOF */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          {/* 5A: We use AI ourselves */}
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-primary mb-8">
              We use AI ourselves
            </h2>
            <p className="text-lg text-text-secondary mb-12 max-w-2xl">
              We don't consult on things we don't use. xperc runs AI internally for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Meeting Summarizer',
                  desc: 'Every xperc meeting is automatically transcribed, summarized, and action items are pushed to our task management system.',
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
          </div>

          {/* 5B: Tools we built */}
          <div className="mb-16 bg-bg-secondary rounded-lg border border-border p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-text-primary mb-4">Tools we built</h3>
            <p className="text-text-secondary mb-8 max-w-xl">
              Unlike agencies that rent external tools, xperc builds and operates its own stack:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'xcorp.app', desc: 'Operations platform (OKR/KPI · PM · Automation Workflow)', href: 'http://localhost:3002' },
                { name: 'syrix.ai', desc: 'AI engine (Helpdesk · ASR · TTS)', href: '#' },
              ].map((tool, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-accent mb-2">{tool.name}</h4>
                  <p className="text-text-secondary text-sm mb-3">{tool.desc}</p>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">
                    Visit {tool.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 5C: Our team */}
          <div>
            <h3 className="font-display text-3xl font-bold text-text-primary mb-8">Our team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Founder', role: 'Strategy & AI', years: '15+' },
                { name: 'Co-founder', role: 'Engineering', years: '12+' },
                { name: 'Lead', role: 'Operations', years: '10+' },
                { name: 'Lead', role: 'Advisory', years: '8+' },
              ].map((member, i) => (
                <div key={i} className="bg-bg-secondary rounded-lg border border-border p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-logoNavy mx-auto mb-4 flex items-center justify-center">
                    <span className="text-text-primary font-bold text-lg">{member.name.charAt(0)}</span>
                  </div>
                  <p className="font-semibold text-text-primary mb-1">{member.name}</p>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-text-secondary text-xs">{member.years} experience</p>
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
