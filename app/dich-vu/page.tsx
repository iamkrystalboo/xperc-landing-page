export const metadata = {
  title: 'Services — XperC',
  description: 'Three packages designed as a natural progression. Start with a free AI Audit, then scale to Quick Start or ongoing AI Scale.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section + Services Grid (consolidated) */}
      <section className="section-spacing px-4 pt-10 md:pt-14 relative">
        <div className="container-max">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-text-primary">
              How we work with you
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Three packages designed as a natural progression — start with zero commitment, and scale as your confidence in AI grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                name: 'AI Audit',
                duration: '60 minutes',
                price: 'Free',
                description: 'Your no-commitment AI entry point',
                deliverable: 'AI Opportunity Map — a concrete, business-specific AI roadmap tailored to your operations',
                includes: [
                  '60-minute 1-on-1 session with AI specialist',
                  'Deep analysis of your bottlenecks',
                  'Concrete roadmap with ROI estimates',
                  'Clear first-step recommendation',
                  'No commitment to next phase',
                ],
                featured: true,
                cta: { text: 'Book Now', href: '/dat-ai-audit', primary: true },
              },
              {
                name: 'AI Quick Start',
                duration: '3–6 weeks',
                price: 'from 25M VND',
                description: 'Implementation phase — first wins',
                deliverable: '1–2 AI solutions deployed and running in your real operations with full training',
                includes: [
                  'Architecture & implementation planning',
                  '1–2 AI solutions deployed live',
                  'Full staff training & documentation',
                  'Weekly sync & adjustments',
                  '30-day post-launch support',
                ],
                featured: false,
                cta: { text: 'Learn More', href: '/dat-ai-audit', primary: false },
              },
              {
                name: 'AI Scale',
                duration: 'Monthly retainer',
                price: 'from 23M VND/month',
                description: 'Permanent AI layer in your ops',
                deliverable: 'AI becomes embedded in how your company operates daily — continuous optimization',
                includes: [
                  'Unlimited AI agent deployment',
                  'Ongoing integration & optimization',
                  'Quarterly strategy reviews',
                  'Priority support & iteration',
                  'Access to new AI capabilities as they emerge',
                ],
                featured: false,
                cta: { text: 'Learn More', href: '/dat-ai-audit', primary: false },
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`rounded-lg border-2 p-8 transition-all duration-300 h-full flex flex-col ${
                  service.featured
                    ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent shadow-lg'
                    : 'bg-bg-card border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div>
                  <h3 className="font-display text-3xl font-bold text-text-primary mb-2">{service.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{service.description}</p>
                  <p className="text-text-secondary text-sm mb-4">{service.duration} · {service.price}</p>

                  <div className="bg-bg-secondary rounded-lg p-4 mb-6 border border-border">
                    <p className="text-text-primary font-medium mb-1 text-sm">Deliverable:</p>
                    <p className="text-text-secondary text-sm">{service.deliverable}</p>
                  </div>

                  <div className="mb-8">
                    <p className="text-text-primary font-medium text-sm mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {service.includes.map((item, j) => (
                        <li key={j} className="flex gap-2 text-text-secondary text-sm">
                          <span className="text-accent flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={service.cta.href}
                  className={`mt-auto inline-flex items-center justify-center w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                    service.cta.primary
                      ? 'bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-glow'
                      : 'bg-bg-secondary border border-border text-text-primary hover:border-accent hover:text-accent'
                  }`}
                >
                  {service.cta.text} →
                </a>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-text-primary text-center mb-12">Quick comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-primary">
                    <th className="px-6 py-4 text-left font-semibold text-text-primary">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-text-primary">AI Audit</th>
                    <th className="px-6 py-4 text-center font-semibold text-text-primary">Quick Start</th>
                    <th className="px-6 py-4 text-center font-semibold text-text-primary">AI Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Duration', audit: '60 min', quick: '3–6 weeks', scale: 'Ongoing' },
                    { feature: 'Price', audit: 'Free', quick: '25M VND+', scale: '23M/month' },
                    { feature: 'AI Opportunity Map', audit: '✓', quick: '✓', scale: '✓' },
                    { feature: 'Live Deployment', audit: '—', quick: '✓ (1–2 solutions)', scale: '✓ (unlimited)' },
                    { feature: 'Staff Training', audit: '—', quick: '✓', scale: '✓ (ongoing)' },
                    { feature: 'Commitment', audit: 'None', quick: 'Project-based', scale: 'Monthly' },
                    { feature: 'Best for', audit: 'Understanding AI fit', quick: 'First wins', scale: 'Permanent layer' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-text-secondary">{row.audit}</td>
                      <td className="px-6 py-4 text-center text-text-secondary">{row.quick}</td>
                      <td className="px-6 py-4 text-center text-text-secondary">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Not sure which package is right for you?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Start with a free AI Audit. We&apos;ll analyze your specific situation and recommend the best path forward.
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
