'use client';

import { useParams } from 'next/navigation';

const problemData = {
  'ai-helpdesk': {
    title: 'AI Helpdesk',
    problem: 'Your team answers the same 10 questions dozens of times per day',
    description: 'Customer support, tenant inquiries, employee questions — they all drain your team\'s time without adding strategic value.',
    solution: 'An AI helpdesk that learns your policies, processes, and knowledge base — then answers questions 24/7 in Vietnamese and English.',
    whatItLooksLike: 'Customer writes "What\'s your refund policy?" → AI reads your docs → Responds with accurate, branded answer instantly. Complex questions route to humans.',
    whichPackage: 'AI Quick Start or AI Scale',
    roi: '60-70% reduction in support tickets reaching your team',
  },
  'meeting-summary': {
    title: 'Meeting Summarizer',
    problem: 'No one remembers what was decided in meetings',
    description: 'After a 1-hour meeting with 5 people, you spend another hour writing notes, synthesizing action items, and sending them out. Then people ignore them anyway.',
    solution: 'Automatic transcription, summarization, and action item extraction — with one click after every meeting.',
    whatItLooksLike: 'Meeting ends → AI transcribes and summarizes → "Decisions: X and Y. Action items: ABC owns A, DEF owns B. Due dates: Friday." → Auto-posted to Slack/Teams.',
    whichPackage: 'AI Quick Start or AI Scale',
    roi: '2-3 hours saved per week per team',
  },
  'ai-project-agent': {
    title: 'AI Project Agent',
    problem: 'You don\'t know where your projects actually stand',
    description: 'Every Friday, status reports show everything is "on track" — then you discover blockers at the last minute. You manually consolidate information from 10+ people.',
    solution: 'An AI agent that monitors project progress in real time, surfaces blockers automatically, and suggests next steps.',
    whatItLooksLike: 'AI checks project status every hour → Detects: "Design phase behind by 2 days" → Alerts manager → Suggests: "Pull 1 designer from another project?" → All in Slack.',
    whichPackage: 'AI Scale',
    roi: '40-50% reduction in firefighting and last-minute scrambles',
  },
  'work-efficiency': {
    title: 'Work Efficiency',
    problem: 'Your team is busy, but not productive',
    description: 'People spend 30% of their day on context-switching, context, and busywork — not on high-value work. You have no visibility into where time actually goes.',
    solution: 'AI audit of your workflows, identification of automation opportunities, and automation of repetitive tasks.',
    whatItLooksLike: 'AI tracks: data entry, email processing, scheduling, report generation → Automates 50-60% of these → Team has 10+ hours/week back for strategy.',
    whichPackage: 'AI Quick Start (audit) + AI Scale (implementation)',
    roi: '15-20 hours reclaimed per full-time employee per month',
  },
};

export default function ProblemSolutionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const problem = problemData[slug as keyof typeof problemData];

  if (!problem) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-text-primary mb-4">Not found</h1>
          <p className="text-text-secondary mb-8">This problem solution page doesn't exist.</p>
          <a href="/giai-phap" className="text-accent hover:text-accent-hover">← Back to Solutions</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="section-spacing px-4 pt-12 md:pt-16">
        <div className="container-max">
          <p className="section-label mb-6">Problem Solution</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-primary max-w-3xl">
            {problem.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            {problem.description}
          </p>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Problem */}
            <div className="bg-bg-card rounded-lg border border-border p-10">
              <h3 className="font-display text-2xl font-bold mb-4 text-danger">The Problem</h3>
              <p className="text-lg text-text-primary leading-relaxed">
                {problem.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-bg-card rounded-lg border border-accent/30 p-10">
              <h3 className="font-display text-2xl font-bold mb-4 text-accent">The Solution</h3>
              <p className="text-lg text-text-primary leading-relaxed">
                {problem.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Looks Like */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max max-w-3xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-text-primary">
            What it looks like in practice
          </h2>
          <div className="bg-bg-secondary rounded-lg border border-border p-10 font-mono text-sm">
            <div className="space-y-4">
              <div className="text-text-secondary">{problem.whatItLooksLike}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Which Package */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max max-w-3xl">
          <h3 className="font-display text-3xl font-bold mb-6 text-text-primary">
            Which package delivers this?
          </h3>
          <div className="bg-bg-card rounded-lg border border-accent/30 p-10">
            <p className="text-lg text-text-primary font-semibold mb-4">
              {problem.whichPackage}
            </p>
            <a
              href="/dich-vu"
              className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2"
            >
              View all packages →
            </a>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max max-w-3xl">
          <h3 className="font-display text-3xl font-bold mb-6 text-text-primary">
            Expected impact
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-lg p-10">
            <p className="text-xl text-text-primary font-semibold">
              {problem.roi}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
              Ready to solve this problem?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 60-minute AI Audit. We'll show you exactly how {problem.title} could work in your business.
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
