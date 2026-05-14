'use client';

import { useParams } from 'next/navigation';

const industryData = {
  construction: {
    name: 'Construction & Engineering',
    title: 'AI for Construction Projects',
    description: 'From blueprints to completion — AI keeps projects on track',
    emoji: '🏗️',
    color: 'from-amber-500/20 to-amber-500/5',
    challenges: [
      { text: 'Real-time project visibility across multiple sites and teams', icon: '📊' },
      { text: 'Rework and cost overruns due to communication gaps', icon: '💰' },
      { text: 'Safety compliance tracking and incident prevention', icon: '🛡️' },
    ],
    caseReference: 'A Vietnamese construction firm with 200+ employees reduced project delays by 40% using AI project tracking and safety monitoring.',
  },
  'real-estate': {
    name: 'Real Estate',
    title: 'AI for Real Estate Operations',
    description: 'From lead qualification to property management',
    emoji: '🏢',
    color: 'from-sky-500/20 to-sky-500/5',
    challenges: [
      { text: 'Handling 50+ inquiries daily without losing qualified leads', icon: '📞' },
      { text: 'Property maintenance scheduling across multiple buildings', icon: '🔧' },
      { text: 'Tenant onboarding and document management', icon: '📋' },
    ],
    caseReference: 'A real estate group in Ho Chi Minh City deployed AI helpdesk to qualify leads and handle tenant requests, reducing manual workload by 60%.',
  },
  hospitality: {
    name: 'Hospitality & Resort',
    title: 'AI for Hospitality',
    description: 'Deliver guest experiences at scale',
    emoji: '🏨',
    color: 'from-emerald-500/20 to-emerald-500/5',
    challenges: [
      { text: 'Personalized guest support 24/7 across multiple languages', icon: '🌐' },
      { text: 'Staff scheduling and training at scale', icon: '👥' },
      { text: 'Operational bottlenecks during peak season', icon: '📈' },
    ],
    caseReference: 'A resort in Phu Quoc implemented AI concierge for guest requests and meeting summarization for staff, improving guest satisfaction by 35%.',
  },
  'it-software': {
    name: 'IT / Software',
    title: 'AI for Software Teams',
    description: 'Automate what humans shouldn\'t do',
    emoji: '💻',
    color: 'from-purple-500/20 to-purple-500/5',
    challenges: [
      { text: 'Code review and QA bottlenecks slowing deployment cycles', icon: '🐛' },
      { text: 'Technical documentation that falls out of sync with reality', icon: '📝' },
      { text: 'Onboarding developers takes weeks', icon: '🚀' },
    ],
    caseReference: 'A Vietnamese software company streamlined onboarding and code review using AI agents, reducing deployment time by 45%.',
  },
};

export default function IndustrySolutionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industryData[slug as keyof typeof industryData];

  if (!industry) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-text-primary mb-4">Not found</h1>
          <p className="text-text-secondary mb-8">This industry solution page doesn&apos;t exist.</p>
          <a href="/giai-phap" className="text-accent hover:text-accent-hover">← Back to Solutions</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section with Industry Visual */}
      <section className="section-spacing px-4 pt-12 md:pt-16 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${industry.color} rounded-full blur-3xl -z-10`}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 animate-fade-in">
              <p className="section-label mb-4">Industry Solution</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{industry.emoji}</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                  {industry.title}
                </h1>
              </div>
              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                {industry.description}
              </p>
              <div className="mt-8 flex gap-4">
                <a href="/dat-ai-audit" className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                  Start Free AI Audit →
                </a>
                <a href="/dich-vu" className="inline-flex items-center px-6 py-3 bg-bg-secondary border border-border text-text-primary hover:border-accent font-semibold rounded-lg transition-all duration-300">
                  View Services
                </a>
              </div>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 animate-slide-up">
              <div className={`bg-gradient-to-br ${industry.color} rounded-2xl border border-border/60 p-10 text-center shadow-lg`}>
                <div className="text-8xl mb-4">{industry.emoji}</div>
                <p className="text-text-primary font-semibold text-lg">{industry.name}</p>
                <p className="text-text-secondary text-sm">AI Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges with Visual Icons */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">Challenges we solve</h2>
            <p className="text-lg text-text-secondary">Pain points we address in {industry.name.toLowerCase()}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industry.challenges.map((challenge, i) => (
              <div key={i} className="bg-bg-card rounded-xl border border-border p-8 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{challenge.icon}</span>
                  <span className="text-xs font-bold text-accent/60">0{i + 1}</span>
                </div>
                <p className="text-text-primary font-semibold leading-relaxed">{challenge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Solutions with Hover */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">Our solutions for {industry.emoji} {industry.name}</h2>
            <p className="text-lg text-text-secondary">Proven AI applications tailored to your industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'AI Helpdesk', desc: 'Automate customer/tenant inquiries in your industry', icon: '🤖', accent: 'from-accent/10 to-accent/5' },
              { name: 'Project Management AI', desc: 'Real-time tracking and bottleneck detection', icon: '📋', accent: 'from-blue-500/10 to-blue-500/5' },
              { name: 'Meeting Summarizer', desc: 'Automatic meeting notes and action items', icon: '📝', accent: 'from-emerald-500/10 to-emerald-500/5' },
            ].map((sol, i) => (
              <div key={i} className={`bg-gradient-to-br ${sol.accent} rounded-xl border border-border/60 p-8 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group cursor-default`}>
                <span className="text-3xl block mb-4">{sol.icon}</span>
                <h4 className="font-semibold text-text-primary mb-3 text-lg">{sol.name}</h4>
                <p className="text-text-secondary text-sm">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Reference — Highlight Card */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-4xl mb-4 block">🏆</span>
              <h2 className="font-display text-4xl font-bold text-text-primary">Real-world impact</h2>
            </div>
            <div className="bg-bg-card rounded-2xl border border-accent/30 p-10 md:p-14 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-4 mb-6">
                <span className="text-accent text-6xl leading-none">&ldquo;</span>
              </div>
              <p className="text-xl text-text-primary leading-relaxed font-medium">
                {industry.caseReference}
              </p>
              <p className="text-text-secondary mt-8 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Based on actual deployments with Vietnamese businesses in {industry.name.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/30 rounded-2xl p-10 md:p-14 text-center hover:shadow-lg transition-shadow duration-300">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Ready to transform your {industry.name.toLowerCase()}?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 60-minute AI Audit. We&apos;ll analyze your specific operational challenges and show you exactly where AI could help.
            </p>
            <a
              href="/dat-ai-audit"
              className="inline-flex items-center px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              Book Your AI Audit →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
