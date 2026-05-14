import Link from 'next/link';

export const metadata = {
  title: 'Solutions — XperC',
  description: 'Find AI solutions by industry or by problem. From construction to retail, from AI helpdesk to project management.',
};

export default function SolutionsPage() {
  const industries = [
    {
      name: 'Construction & Engineering',
      slug: 'construction',
      desc: 'Project tracking, safety compliance, multi-site coordination',
    },
    {
      name: 'Real Estate',
      slug: 'real-estate',
      desc: 'Lead qualification, property management, tenant onboarding',
    },
    {
      name: 'Hospitality & Resort',
      slug: 'hospitality',
      desc: 'Guest support, staff scheduling, operations automation',
    },
    {
      name: 'IT / Software',
      slug: 'it-software',
      desc: 'Code review, documentation, developer onboarding',
    },
  ];

  const problems = [
    {
      name: 'AI Helpdesk',
      slug: 'ai-helpdesk',
      desc: 'Automate repetitive customer/employee questions 24/7',
    },
    {
      name: 'Meeting Summarizer',
      slug: 'meeting-summary',
      desc: 'Automatic transcription, notes, and action items',
    },
    {
      name: 'AI Project Agent',
      slug: 'ai-project-agent',
      desc: 'Real-time project tracking and blocker detection',
    },
    {
      name: 'Work Efficiency',
      slug: 'work-efficiency',
      desc: 'Identify and automate repetitive workflows',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="section-spacing px-4 pt-12 md:pt-16">
        <div className="container-max text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            Solutions Hub
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Industry expertise meets problem-solving depth. Find your AI solution by industry or by challenge.
          </p>
        </div>
      </section>

      {/* By Industry Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">
              Explore by Industry
            </h2>
            <p className="text-lg text-text-secondary">
              Industry-specific AI strategies built on our experience with Vietnamese businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/nganh/${industry.slug}`}
                className="group bg-bg-card rounded-lg border border-border hover:border-accent p-8 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="text-text-secondary mb-4">{industry.desc}</p>
                <div className="text-accent group-hover:translate-x-1 transition-transform">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Problem Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-text-primary">
              Explore by Problem
            </h2>
            <p className="text-lg text-text-secondary">
              From helpdesk automation to project management to work efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem) => (
              <Link
                key={problem.slug}
                href={`/bai-toan/${problem.slug}`}
                className="group bg-bg-secondary rounded-lg border border-border hover:border-accent p-8 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                  {problem.name}
                </h3>
                <p className="text-text-secondary mb-4">{problem.desc}</p>
                <div className="text-accent group-hover:translate-x-1 transition-transform">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Don&apos;t see your industry or use case?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free AI Audit. We&apos;ll analyze your specific situation and show you exactly where AI could help.
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
