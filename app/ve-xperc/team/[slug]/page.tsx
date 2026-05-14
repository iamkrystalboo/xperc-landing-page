'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function TeamMemberPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const teamData: Record<string, {
    name: string;
    title: string;
    overview: string;
    credibility: string[];
    proof: string;
  }> = {
    'founder-ceo': {
      name: 'Founder & CEO',
      title: 'Strategy, Client Trust, and Delivery Leadership',
      overview: 'With 12+ years spanning consulting, enterprise tech, and startup execution, our Founder & CEO brings battle-tested strategies for scaling businesses through AI. They&apos;ve led enterprise transformations and built high-performance teams, focusing on how AI fits into existing operations rather than tech-first vanity projects.',
      credibility: [
        '12+ years across consulting, enterprise delivery, and startup execution',
        'Led enterprise AI implementations for Fortune 500 companies',
        'Speaks Vietnamese and English fluently',
        'Strategic advisor on AI adoption for Southeast Asian enterprises'
      ],
      proof: 'Best for clients who need clarity on AI strategy, want executive-level thinking on implementation, and need someone who understands both the business side and the technical constraints.'
    },
    'cofounder-cto': {
      name: 'Co-founder & CTO',
      title: 'Engineering Excellence and AI Architecture',
      overview: 'Our CTO brings 10+ years of engineering expertise, with deep specialization in AI infrastructure, system design, and deployment at scale. They&apos;ve built production AI systems and ensure that every implementation is technically sound, performant, and maintainable.',
      credibility: [
        '10+ years in software engineering and AI systems',
        'Expert in AI infrastructure, APIs, and real-time systems',
        'Hands-on experience with enterprise AI deployment',
        'Open-source contributor and technical thought leader'
      ],
      proof: 'Best for clients with complex technical requirements, those who need custom AI solutions, and organizations looking to build sustainable AI infrastructure.'
    },
    'cofounder-coo': {
      name: 'Co-founder & COO',
      title: 'Operations, Growth, and Client Success',
      overview: 'Leading operations and growth strategy, our COO ensures that AI implementations translate into real business results. With 9+ years of operational excellence experience, they focus on adoption, change management, and making sure the AI solutions integrate smoothly into client workflows.',
      credibility: [
        '9+ years in operations, growth, and organizational scaling',
        'Expert in change management and team adoption',
        'Deep understanding of Vietnamese business workflows',
        'Strong track record in client success and retention'
      ],
      proof: 'Best for clients who need support with implementation rollout, team training, and ensuring their organization actually uses the AI tools we build.'
    },
    'product-manager': {
      name: 'Product Manager',
      title: 'Product Strategy and Delivery Excellence',
      overview: 'Our Product Manager brings 8+ years of experience in product development, delivery management, and client success. They ensure that every AI solution we build is not just technically sound but also practical, usable, and aligned with real business needs.',
      credibility: [
        '8+ years in product management and delivery',
        'Expert in agile methodologies and client communication',
        'Deep understanding of Vietnamese business workflows',
        'Track record of on-time, on-budget delivery'
      ],
      proof: 'Best for clients who need a dedicated partner to manage the implementation process, ensure smooth communication, and deliver results that match business expectations.'
    }
  };

  const member = teamData[slug];

  if (!member) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Profile not found</h1>
        <p className="text-text-secondary mb-8">The team member profile you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/ve-xperc" className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300">
          Back to Our Team
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="section-spacing px-4 pt-12 md:pt-16 lg:pt-20">
        <div className="container-max">
          <div className="mb-8">
            <Link href="/ve-xperc" className="text-accent hover:text-accent-hover transition-colors flex items-center gap-2">
              ← Back to Our Team
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="section-label text-accent">Team Member</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-text-primary">
              {member.name}
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              {member.title}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              {member.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-text-primary mb-12">Credibility & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {member.credibility.map((cred, i) => (
              <div key={i} className="bg-bg-card rounded-lg border border-border p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <p className="text-text-secondary">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max">
          <div className="max-w-3xl bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Best fit for...</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {member.proof}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Ready to work with our team?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Book a free 60-minute AI Audit to see how {member.name.toLowerCase()} and the team can help your business
          </p>
          <a 
            href="/dat-ai-audit"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            Book Free AI Audit →
          </a>
        </div>
      </section>
    </div>
  );
}
