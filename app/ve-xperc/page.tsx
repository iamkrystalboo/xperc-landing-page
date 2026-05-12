export const metadata = {
  title: 'About xperc — AI Strategy & Implementation',
  description: 'Meet the xperc team — AI specialists with 10+ years of experience in consulting, startups, and enterprise tech.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="section-spacing px-4 pt-12 md:pt-16 relative">
        <div className="container-max text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            About xperc
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We don't sell AI hype. We help traditional businesses apply AI to real operations.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-8 text-text-primary">Our mission</h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              xperc was founded to bridge the gap between AI hype and business reality. Too many Vietnamese companies buy into AI promises without understanding their specific use cases. We exist to cut through the noise and deliver concrete, measurable AI implementations.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our team has spent 10+ years in consulting, enterprise tech, and successful startups. We know what works in the real world — and more importantly, what doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">How we work</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">A proven 3-step process for every engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: '01',
                title: 'Discovery',
                desc: 'We map your current processes, data flows, and identify AI opportunities specific to your business.',
              },
              {
                number: '02',
                title: 'Design',
                desc: 'We create your AI Opportunity Map — a concrete roadmap with 3–5 use cases, ROI estimates, and clear next steps.',
              },
              {
                number: '03',
                title: 'Deploy & Scale',
                desc: 'We implement, integrate, train your team, and provide ongoing support to ensure adoption and results.',
              },
            ].map((step, i) => (
              <div key={i} className="bg-bg-secondary rounded-lg border border-border p-8">
                <div className="text-5xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="font-display text-2xl font-bold mb-3 text-text-primary">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">Leadership team</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Drawn from consulting, enterprise, and successful startups</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { role: 'Founder & CEO', focus: 'Strategy & Consulting', years: '12+' },
              { role: 'Co-founder & CTO', focus: 'Engineering & AI', years: '10+' },
              { role: 'Co-founder & COO', focus: 'Operations & Growth', years: '9+' },
              { role: 'AI Lead', focus: 'AI Research & Implementation', years: '8+' },
            ].map((member, i) => (
              <div key={i} className="bg-bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-logoNavy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-text-primary font-bold text-lg">{member.role.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{member.role}</h4>
                <p className="text-accent text-sm font-medium mb-3">{member.focus}</p>
                <p className="text-text-secondary text-xs">{member.years} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <h2 className="font-display text-4xl font-bold mb-12 text-text-primary text-center">Our technology stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-bg-secondary rounded-lg border border-border p-8">
              <h3 className="font-semibold text-accent mb-4 uppercase text-sm tracking-widest">xcorp.app</h3>
              <p className="text-text-primary font-semibold mb-3 text-lg">Operations Platform</p>
              <p className="text-text-secondary mb-4">Unified workspace for OKRs, project management, and automation workflows. Used internally by xperc and available for enterprise clients.</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex gap-2"><span className="text-accent">•</span> OKR tracking</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Project management</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Workflow automation</li>
              </ul>
            </div>

            <div className="bg-bg-secondary rounded-lg border border-border p-8">
              <h3 className="font-semibold text-accent mb-4 uppercase text-sm tracking-widest">syrix.ai</h3>
              <p className="text-text-primary font-semibold mb-3 text-lg">AI Engine</p>
              <p className="text-text-secondary mb-4">Purpose-built AI infrastructure for Vietnamese businesses. Handles helpdesk, ASR, TTS, and custom agent deployment.</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex gap-2"><span className="text-accent">•</span> AI helpdesk & support</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Speech recognition & synthesis</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Custom AI agents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We use AI ourselves Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <h2 className="font-display text-4xl font-bold mb-12 text-text-primary text-center">We use AI ourselves</h2>
          <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16">
            We don't just consult on AI — we embed it into our own operations. This is how we stay credible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Meeting Summarizer',
                desc: 'Every xperc meeting is automatically transcribed, summarized, and action items are pushed to our task system.',
              },
              {
                title: 'AI Onboarding Assistant',
                desc: 'Our AI helpdesk lets new team members look up policies, processes, and contacts instantly — no hand-holding required.',
              },
            ].map((use, i) => (
              <div key={i} className="bg-bg-card rounded-lg border border-border p-8">
                <h4 className="font-semibold text-text-primary mb-3 text-lg">{use.title}</h4>
                <p className="text-text-secondary leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Curious what AI could do for your business?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 60-minute AI Audit. We'll analyze your specific situation and give you a concrete roadmap.
            </p>
            <a
              href="/dat-ai-audit"
              className="inline-flex items-center px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Book Your AI Audit →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
