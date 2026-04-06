import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import ProofPanel from '@/components/ProofPanel';

export const metadata: Metadata = {
  title: 'Start with Agents | ECZ-ID Developer Gateway',
  description: 'Build commercially legible, resolver-verifiable, insurer-legible agents designed for serious deployment. The fastest path to trusted agent infrastructure.',
};

export default function StartWithAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Agents First</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Build Serious Agents
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              This is where you discover, build, credential, verify, and deploy ECZ-ID-backed agents. Commercially legible. Resolver-verifiable. Insurer-legible. Designed for serious deployment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/agent-starter-kits" className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Choose a Starter Kit
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/build-your-own-agent" className="inline-flex items-center justify-center px-6 py-3.5 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Build Your Own Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agents First */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Case"
            title="Why Serious Agents Need Verified Identity"
            description="Agents without verified identity are anonymous actors in critical systems. ECZ-ID transforms agents into commercially legible, resolver-verifiable entities designed for serious deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">Agents Are Proliferating</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Every enterprise, every platform, every developer is building agents. The question is not whether you will have agents—it is whether your agents can prove who they are. Without verified identity, agents cannot participate in serious commerce, compliance, or trust-sensitive workflows.
                </p>
              </div>
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">Trust Is the Bottleneck</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Buyers, regulators, and partners increasingly require proof of identity for autonomous systems. An agent without verified identity is an agent that cannot be approved, insured, or verified. ECZ-ID removes the trust bottleneck.
                </p>
              </div>
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">Identity Unlocks Everything</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  With verified identity, your agents become easier to trust, approve, and verify. They can participate in custody chains, compliance workflows, marketplace transactions, and cross-domain interactions. Identity is the key.
                </p>
              </div>
            </div>

            <div>
              <ProofPanel
                title="The Complete Agent Journey"
                description="ECZ-ID provides a complete path from discovery to deployment."
                steps={[
                  { label: 'Discover an agent pattern or starter kit', detail: 'Browse archetypes in the Agent Directory or choose from 10 guided starter kits.' },
                  { label: 'Begin building with initial setup', detail: 'Clone the kit, install dependencies, configure your agent architecture.' },
                  { label: 'Reach the TrustOps Credentialing Checkpoint', detail: 'A designed pause point where you acquire your required ECZ-ID passports.' },
                  { label: 'Acquire credentials in TrustOps', detail: 'Get your Business Passport, Agent Credential, and domain-specific passports.' },
                  { label: 'Return and complete integration', detail: 'Inject credentials, wire identity hooks, test in sandbox.' },
                  { label: 'Verify through Resolver', detail: 'Prove identity, check trust scores, trace provenance chains.' },
                  { label: 'Deploy anywhere', detail: 'Your resolver-verifiable agent is portable. No vendor lock-in.' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes ECZ-ID Agents Different */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Difference"
            title="What Makes ECZ-ID-Backed Agents Different"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Commercially Legible', desc: 'Agents that buyers, partners, and procurement teams can evaluate with confidence. Verified identity makes commercial relationships possible.' },
              { title: 'Resolver-Verifiable', desc: 'Any party can verify your agent\'s identity through Resolver without needing an account. Public, transparent, independent verification.' },
              { title: 'Insurer-Legible', desc: 'Agents with verified identity, capability attestations, and operational boundaries that insurance underwriters can assess and price.' },
              { title: 'Provenance-Tracked', desc: 'Every action, every output, every decision linked back to verified identity. Complete audit trails from the first line of code.' },
              { title: 'Deploy-Anywhere Portable', desc: 'No vendor lock-in. Your agent\'s verified identity travels with it to any cloud, any infrastructure, any deployment target.' },
              { title: 'Designed for Serious Deployment', desc: 'Infrastructure-grade trust. Not a demo. Not a proof of concept. Designed for the systems and workflows that matter.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Archetypes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Agent Archetypes"
            title="What Kind of Agent Are You Building?"
            description="ECZ-ID supports every agent archetype. Each links to a dedicated starter kit with a complete guided build flow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Compliance & Evidence Agents', desc: 'Automate evidence collection with identity-anchored provenance.', href: '/agent-starter-kits/compliance-evidence' },
              { name: 'API Workflow Agents', desc: 'Orchestrate multi-step API workflows with verified handoffs.', href: '/agent-starter-kits/api-workflow' },
              { name: 'Operations & Incident Agents', desc: 'Monitor health and coordinate incident response with verified chains.', href: '/agent-starter-kits/operations-incident' },
              { name: 'Support & Intake Agents', desc: 'Identity-aware triage, routing, and SLA tracking.', href: '/agent-starter-kits/support-intake' },
              { name: 'Research Agents', desc: 'Provenance-tracked synthesis from verified sources.', href: '/agent-starter-kits/research-agent' },
              { name: 'Custom Agents', desc: 'Build anything with the Generic Python Starter and ECZ-ID hooks.', href: '/agent-starter-kits/python-agent' },
            ].map((agent) => (
              <Link key={agent.name} href={agent.href} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 hover:border-ecz-400 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-navy-900 mb-2">{agent.name}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{agent.desc}</p>
                <span className="inline-block mt-3 text-xs text-ecz-600 font-medium">Choose This Starter Kit →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Next Steps" title="Your Path Forward" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/agent-starter-kits" className="p-6 bg-white rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Choose a Starter Kit</h3>
              <p className="text-sm text-navy-500">10 guided kits with credentialing checkpoints.</p>
            </Link>
            <Link href="/build-your-own-agent" className="p-6 bg-white rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Build Your Own</h3>
              <p className="text-sm text-navy-500">Master guided flow for custom agents.</p>
            </Link>
            <Link href="/developer-onboarding" className="p-6 bg-white rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Developer Onboarding</h3>
              <p className="text-sm text-navy-500">Understand the complete journey.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build a Serious Agent?"
        description="Choose a starter kit, credential through TrustOps, verify through Resolver, and deploy anywhere."
        primaryCTA={{ label: 'Choose a Starter Kit', href: '/agent-starter-kits' }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
