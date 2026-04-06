import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import SearchFilter from '@/components/SearchFilter';
import CTASection from '@/components/CTASection';
import agents from '@/data/agents.json';

export const metadata: Metadata = {
  title: 'ECZ-ID Agent Directory | ECZ-ID Developer Gateway',
  description: 'Browse ECZ-ID agent archetypes. Filter by domain, use case, required passports, and deployment environment. Every agent shows starter kit availability and TrustOps credentialing requirements.',
};

export default function AgentDirectoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Directory</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              ECZ-ID Agent Directory
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Explore resolver-verifiable agent archetypes. Each listing shows starter kit availability, required TrustOps credentialing, verifier path, and deploy-anywhere readiness. Filter by use case, required passports, or deployment environment.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 bg-white border-b border-ecz-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">Starter Kit Available</span>
              <span className="text-navy-400">Pre-built template ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-full border border-red-200">Passport Name</span>
              <span className="text-navy-400">TrustOps credentialing required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-navy-50 text-navy-600 rounded-full">Deploy-Ready</span>
              <span className="text-navy-400">After credentialing complete</span>
            </span>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilter agents={agents} />
        </div>
      </section>

      {/* ECZ-ID Agent Archetypes */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Archetypes"
            title="ECZ-ID Agent Archetypes"
            description="Every agent in the directory maps to an archetype — a repeatable pattern with known passport requirements, verifier paths, and deployment readiness criteria. Archetypes help you pick the right starter kit, understand credentialing cost, and ship faster."
            centered
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { name: 'Compliance & Evidence', desc: 'Automate evidence collection, chain-of-custody, and audit trails. Requires Agent Credential plus the relevant domain-specific child passport(s).', kits: 'Compliance Evidence Kit, Document Processing Kit' },
              { name: 'Operations & Incident', desc: 'Health monitoring, anomaly detection, incident coordination with verified identity chains across responder nodes.', kits: 'Operations Incident Kit' },
              { name: 'Research & Synthesis', desc: 'Provenance-tracked research from verified sources. Every citation resolver-verifiable back to credentialed origin.', kits: 'Research Agent Kit' },
              { name: 'Support & Intake', desc: 'Identity-aware triage, SLA tracking, and routing. Agent identity is visible to every downstream system.', kits: 'Support Intake Kit' },
              { name: 'API & Workflow Orchestration', desc: 'Multi-step API workflows with verified handoffs. Each step carries identity context for audit.', kits: 'API Workflow Kit' },
              { name: 'Custom / Greenfield', desc: 'Any agent pattern you design. Start from the Generic Python Starter and wire in ECZ-ID hooks as needed.', kits: 'Python Agent Kit, IoT Agent Kit' },
            ].map((arch) => (
              <div key={arch.name} className="p-6 bg-white rounded-xl border border-ecz-200">
                <h4 className="font-semibold text-navy-900 text-sm">{arch.name}</h4>
                <p className="text-sm text-navy-600 mt-2">{arch.desc}</p>
                <p className="text-xs text-navy-400 mt-3">Starter Kits → {arch.kits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Ecosystem References */}
      <section className="py-16 md:py-20 bg-white border-t border-ecz-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Ecosystem"
            title="External Ecosystem References"
            description="ECZ-ID agents operate alongside — not in competition with — the broader agent ecosystem. These external frameworks and platforms may inform your architecture decisions. ECZ-ID adds identity, verification, and commercial legibility to any agent pattern."
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { name: 'LangChain / LangGraph', role: 'Agent orchestration framework. ECZ-ID wraps LangChain agents with passport-anchored identity so every tool call is attributable.', note: 'Not an ECZ-ID product' },
              { name: 'CrewAI', role: 'Multi-agent crew coordination. ECZ-ID provides per-agent identity and resolver-verifiable handoff trails for crew outputs.', note: 'Not an ECZ-ID product' },
              { name: 'AutoGen (Microsoft)', role: 'Conversational multi-agent framework. ECZ-ID can credential individual AutoGen agents for enterprise deployment.', note: 'Not an ECZ-ID product' },
              { name: 'Hugging Face Agents', role: 'Open-source model-backed agents. ECZ-ID adds deployment credentialing and insurer-legible audit trails to HF agent deployments.', note: 'Not an ECZ-ID product' },
            ].map((ext) => (
              <div key={ext.name} className="p-6 bg-ecz-50/60 rounded-xl border border-ecz-100">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-navy-900 text-sm">{ext.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 bg-navy-100 text-navy-500 rounded-full whitespace-nowrap">{ext.note}</span>
                </div>
                <p className="text-sm text-navy-600 mt-2">{ext.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy-400 text-center mt-6">
            ECZ-ID is framework-agnostic. These references illustrate integration points, not endorsements or partnerships.
          </p>
        </div>
      </section>

      {/* Build Your Own */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Custom Agents"
            title="Don&rsquo;t See Your Agent Type?"
            description="These archetypes are starting points. ECZ-ID supports any agent pattern. Use the Generic Python Starter Kit to build a completely custom agent with verified identity, or follow the Build Your Own guide."
            centered
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/agent-starter-kits/python-agent" className="inline-flex items-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
              Choose Generic Python Starter
            </Link>
            <Link href="/build-your-own-agent" className="inline-flex items-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
              Build Your Own Agent
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Agent?"
        description="Choose a starter kit, credential through TrustOps, verify with Resolver, and deploy anywhere."
        primaryCTA={{ label: 'Choose a Starter Kit', href: '/agent-starter-kits' }}
        secondaryCTA={{ label: 'Continue in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
