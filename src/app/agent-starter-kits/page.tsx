import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import starterKits from '@/data/starter-kits.json';

export const metadata: Metadata = {
  title: 'Agent Starter Kits | ECZ-ID Developer Gateway',
  description: 'Pre-built agent templates with ECZ-ID identity hooks. Choose from 10 starter kits for Claude, MCP, API workflows, compliance, and more. Each kit includes a midpoint credentialing checkpoint.',
};

export default function AgentStarterKitsPage() {
  const difficultyColor: Record<string, string> = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
    Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Starter Kits</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Agent Starter Kits
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              From discovery to deployment. Each starter kit guides you through a complete journey: build your agent, pause at the TrustOps credentialing checkpoint to acquire your ECZ-ID passports, return to complete integration, verify through Resolver, and deploy anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Midpoint Credentialing Model */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-2xl border border-amber-200 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-900 mb-2">The Midpoint Credentialing Model</h2>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  Every starter kit includes a <strong>TrustOps Credentialing Checkpoint</strong>&mdash;a designed pause point where you acquire your required ECZ-ID passports before completing integration. This midpoint approach ensures your agent is built with verified identity from the start, not bolted on after the fact.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-amber-700">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Build initial setup</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Pause at checkpoint</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Acquire credentials in TrustOps</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Return and complete</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Verify and deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Kits Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Choose Your Kit"
            title="10 Starter Kits for Every Agent Pattern"
            description="Each kit includes build steps, a TrustOps credentialing checkpoint, integration guidance, Resolver verification, and deploy-anywhere instructions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {starterKits.map((kit) => (
              <Link
                key={kit.id}
                href={kit.route}
                className="group p-6 bg-white rounded-xl border border-ecz-200 hover:border-ecz-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${difficultyColor[kit.difficulty] || 'bg-ecz-50 text-ecz-700 border-ecz-200'}`}>
                    {kit.difficulty}
                  </span>
                  <span className="px-2.5 py-0.5 bg-ecz-50 text-ecz-600 text-xs font-medium rounded-full border border-ecz-200">{kit.estimatedTime}</span>
                </div>

                <h3 className="text-base font-semibold text-navy-900 mb-2 group-hover:text-ecz-700 transition-colors">{kit.name}</h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-4">{kit.description.slice(0, 140)}...</p>

                {/* Required Passports */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">Required Passports</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {kit.requiredPassports.map((p: string) => (
                      <span key={p} className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded-full border border-red-200">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-navy-400 mb-4">
                  <span>{kit.platform}</span>
                  <span>·</span>
                  <span>{kit.language}</span>
                </div>

                <div className="pt-3 border-t border-ecz-100">
                  <span className="text-sm text-ecz-600 group-hover:text-navy-800 font-medium transition-colors">
                    Choose This Starter Kit →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Journey"
            title="From Discovery to Deployment"
            description="Every starter kit follows the same proven path."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Build', desc: 'Clone the kit and complete initial setup' },
              { step: '2', title: 'Checkpoint', desc: 'Pause at the TrustOps credentialing checkpoint' },
              { step: '3', title: 'Credential', desc: 'Acquire required ECZ-ID passports in TrustOps' },
              { step: '4', title: 'Complete', desc: 'Return and finish integration with your credentials' },
              { step: '5', title: 'Deploy', desc: 'Verify through Resolver and deploy anywhere' },
            ].map((item) => (
              <div key={item.step} className="text-center p-4">
                <div className={`w-10 h-10 ${item.step === '2' ? 'bg-amber-500' : 'bg-navy-800'} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Agent?"
        description="Choose a starter kit above, or go directly to TrustOps for credentialing."
        primaryCTA={{ label: 'Continue in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Build Your Own Agent', href: '/build-your-own-agent' }}
        variant="dark"
      />
    </>
  );
}
