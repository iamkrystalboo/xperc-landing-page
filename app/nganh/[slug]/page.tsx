'use client';

import { useParams } from 'next/navigation';

const industryData = {
  construction: {
    name: 'Construction & Engineering',
    title: 'AI for Construction Projects',
    description: 'From blueprints to completion — AI keeps projects on track',
    challenges: [
      'Real-time project visibility across multiple sites and teams',
      'Rework and cost overruns due to communication gaps',
      'Safety compliance tracking and incident prevention',
    ],
    caseReference: 'A Vietnamese construction firm with 200+ employees reduced project delays by 40% using AI project tracking and safety monitoring.',
  },
  'real-estate': {
    name: 'Real Estate',
    title: 'AI for Real Estate Operations',
    description: 'From lead qualification to property management',
    challenges: [
      'Handling 50+ inquiries daily without losing qualified leads',
      'Property maintenance scheduling across multiple buildings',
      'Tenant onboarding and document management',
    ],
    caseReference: 'A real estate group in Ho Chi Minh City deployed AI helpdesk to qualify leads and handle tenant requests, reducing manual workload by 60%.',
  },
  hospitality: {
    name: 'Hospitality & Resort',
    title: 'AI for Hospitality',
    description: 'Deliver guest experiences at scale',
    challenges: [
      'Personalized guest support 24/7 across multiple languages',
      'Staff scheduling and training at scale',
      'Operational bottlenecks during peak season',
    ],
    caseReference: 'A resort in Phu Quoc implemented AI concierge for guest requests and meeting summarization for staff, improving guest satisfaction by 35%.',
  },
  'it-software': {
    name: 'IT / Software',
    title: 'AI for Software Teams',
    description: 'Automate what humans shouldn\'t do',
    challenges: [
      'Code review and QA bottlenecks slowing deployment cycles',
      'Technical documentation that falls out of sync with reality',
      'Onboarding developers takes weeks',
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
          <p className="text-text-secondary mb-8">This industry solution page doesn't exist.</p>
          <a href="/giai-phap" className="text-accent hover:text-accent-hover">← Back to Solutions</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="section-spacing px-4 pt-12 md:pt-16 relative">
        <div className="container-max">
          <p className="section-label mb-6">Industry Solution</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-primary max-w-3xl">
            {industry.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <h2 className="font-display text-4xl font-bold mb-12 text-text-primary">
            Challenges we solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industry.challenges.map((challenge, i) => (
              <div key={i} className="bg-bg-card rounded-lg border border-border p-8">
                <div className="text-5xl font-bold text-accent/20 mb-4">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-text-primary text-lg font-semibold">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Solutions */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <h2 className="font-display text-4xl font-bold mb-12 text-text-primary">
            xperc solutions for {industry.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'AI Helpdesk', desc: 'Automate customer/tenant inquiries in your industry' },
              { name: 'Project Management AI', desc: 'Real-time tracking and bottleneck detection' },
              { name: 'Meeting Summarizer', desc: 'Automatic meeting notes and action items' },
            ].map((sol, i) => (
              <div key={i} className="bg-bg-secondary rounded-lg border border-border p-8 hover:border-accent transition-colors">
                <h4 className="font-semibold text-text-primary mb-3 text-lg">{sol.name}</h4>
                <p className="text-text-secondary">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Reference */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-text-primary">
              Real-world example
            </h2>
            <div className="bg-bg-card rounded-lg border border-accent/30 p-10">
              <p className="text-lg text-text-primary leading-relaxed">
                "{industry.caseReference}"
              </p>
              <p className="text-text-secondary mt-6 italic">
                Based on actual deployments with Vietnamese businesses in {industry.name.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Ready to transform your {industry.name.toLowerCase()}?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 60-minute AI Audit. We'll analyze your specific operational challenges and show you exactly where AI could help.
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
