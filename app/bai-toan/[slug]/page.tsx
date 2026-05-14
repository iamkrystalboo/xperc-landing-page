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
          <p className="text-text-secondary mb-8">This problem solution page doesn&apos;t exist.</p>
          <a href="/giai-phap" className="text-accent hover:text-accent-hover">← Back to Solutions</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section with Visual */}
      <section className="section-spacing px-4 pt-12 md:pt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 animate-fade-in">
              <p className="section-label mb-4">Problem Solution</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-primary max-w-3xl">
                {problem.title}
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                {problem.description}
              </p>
              <div className="mt-8 flex gap-4">
                <a href="/dat-ai-audit" className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                  Fix This Problem →
                </a>
                <a href="/dich-vu" className="inline-flex items-center px-6 py-3 bg-bg-secondary border border-border text-text-primary hover:border-accent font-semibold rounded-lg transition-all duration-300">
                  View Packages
                </a>
              </div>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 animate-slide-up">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 p-10 text-center shadow-lg">
                <div className="text-8xl mb-4">💡</div>
                <p className="text-text-primary font-semibold text-lg">{problem.title}</p>
                <p className="text-text-secondary text-sm">AI-powered solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution — Side by Side Visual */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem */}
            <div className="bg-bg-card rounded-2xl border-2 border-danger/20 p-10 hover:border-danger/40 transition-colors duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center">
                  <span className="text-danger text-xl">⚠️</span>
                </span>
                <h3 className="font-display text-2xl font-bold text-danger">The Problem</h3>
              </div>
              <p className="text-lg text-text-primary leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                {problem.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-bg-card rounded-2xl border-2 border-accent/20 p-10 hover:border-accent/40 transition-colors duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">✨</span>
                </span>
                <h3 className="font-display text-2xl font-bold text-accent">The Solution</h3>
              </div>
              <p className="text-lg text-text-primary leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                {problem.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Looks Like — Terminal Style */}
      <section className="section-spacing px-4 bg-bg-primary">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-3xl mb-4 block">👀</span>
            <h2 className="font-display text-4xl font-bold text-text-primary">What it looks like in practice</h2>
          </div>
          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-gray-400 text-xs ml-2">demo-terminal</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-green-400">$ XperC AI Engine — processing...</p>
              <p className="text-gray-300">{problem.whatItLooksLike}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Which Package + ROI — Combined */}
      <section className="section-spacing px-4 bg-bg-secondary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Which Package */}
            <div className="bg-bg-card rounded-2xl border border-accent/30 p-10 hover:border-accent/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📦</span>
                <h3 className="font-display text-2xl font-bold text-text-primary">Recommended package</h3>
              </div>
              <p className="text-lg text-accent font-semibold mb-4">
                {problem.whichPackage}
              </p>
              <a href="/dich-vu" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors group/link">
                View all packages <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* ROI */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/30 p-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📈</span>
                <h3 className="font-display text-2xl font-bold text-text-primary">Expected impact</h3>
              </div>
              <p className="text-xl text-text-primary font-semibold">
                {problem.roi}
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
              Ready to solve this problem?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 60-minute AI Audit. We&apos;ll show you exactly how {problem.title} could work in your business.
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
