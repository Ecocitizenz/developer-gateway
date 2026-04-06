import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import TrustOpsCheckpoint from '@/components/TrustOpsCheckpoint';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Build Your Own ECZ-ID-Backed Agent | ECZ-ID Developer Gateway',
  description: 'Master guided flow: choose your archetype, choose your stack, credential through TrustOps, integrate, verify with Resolver, and deploy anywhere.',
};

export default function BuildYourOwnAgentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Build Your Own</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Build Your Own ECZ-ID-Backed Agent
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              A master guided flow for building custom agents with verified identity. Choose your archetype, choose your stack, credential through TrustOps at the midpoint, then complete, verify, and deploy anywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-navy-500">
              {['Choose Archetype', 'Choose Stack', 'Identify Package', 'Credential Checkpoint', 'Acquire in TrustOps', 'Integrate', 'Verify', 'Deploy'].map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  <span className={`w-5 h-5 ${i === 3 ? 'bg-amber-500' : 'bg-navy-800'} rounded text-white text-xs flex items-center justify-center font-medium`}>{i + 1}</span>
                  {step}
                  {i < 7 && <span className="text-navy-300 ml-1">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Choose Your Archetype */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">1</span>
            Choose Your Archetype
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">What kind of agent are you building? Your archetype determines the required trust objects and recommended integration patterns.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'Skill Agent', desc: 'Single-purpose agent executing defined skills (extraction, classification, summarisation).', useCases: 'Document processing, data analysis, content generation', passports: 'Business Passport + Agent Credential' },
              { name: 'Orchestrator / Subagent', desc: 'Primary agent delegating to specialised subagents with credential propagation.', useCases: 'Complex workflows, multi-step processing, hierarchical decisions', passports: 'Business Passport + Agent Credentials (per agent)' },
              { name: 'API Workflow Agent', desc: 'Multi-step API orchestrator with identity-verified handoffs at every boundary.', useCases: 'System integration, data pipelines, cross-org workflows', passports: 'Business Passport + Agent Credential + API Passport' },
              { name: 'Compliance / Evidence Agent', desc: 'Evidence collector and audit assembler with provenance-anchored outputs.', useCases: 'Regulatory reporting, audit automation, evidence management', passports: 'Business Passport + Agent Credential + Risk & Policy Passport' },
              { name: 'Operations / Incident Agent', desc: 'Monitoring, anomaly detection, and incident response with verified chains.', useCases: 'Infrastructure monitoring, incident response, SRE automation', passports: 'Business Passport + Agent Credential + Cyber Resilience Passport' },
              { name: 'Research / Intelligence Agent', desc: 'Source aggregation, cross-referencing, and provenance-tracked synthesis.', useCases: 'Market research, competitive intelligence, data synthesis', passports: 'Business Passport + Agent Credential + Dataset Passport' },
              { name: 'Support / Intake Agent', desc: 'Request handling, triage, routing, and SLA tracking with identity context.', useCases: 'Customer support, ticket triage, service desk automation', passports: 'Business Passport + Agent Credential' },
              { name: 'Platform Integration Agent', desc: 'Bridge into existing platforms (OpenClaw, Claw) with ECZ-ID trust anchoring.', useCases: 'Platform migration, ecosystem bridging, cross-platform identity', passports: 'Business Passport + Agent Credential + API Passport' },
              { name: 'Custom Agent', desc: 'Build anything from scratch with the Generic Python Starter and ECZ-ID hooks.', useCases: 'Any use case not covered by other archetypes', passports: 'Business Passport + Agent Credential + (as needed)' },
            ].map((arch) => (
              <div key={arch.name} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-1">{arch.name}</h3>
                <p className="text-xs text-navy-600 leading-relaxed mb-3">{arch.desc}</p>
                <div className="text-xs text-navy-500 mb-2"><strong>Use cases:</strong> {arch.useCases}</div>
                <div className="text-xs text-navy-500"><strong>Trust objects:</strong> {arch.passports}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Choose Your Stack */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">2</span>
            Choose Your Stack
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">ECZ-ID is stack-agnostic. Choose the technical foundation that fits your team and use case.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Anthropic Claude', desc: 'Claude-powered agents with native Claude API integration. Best for teams already invested in the Anthropic ecosystem.', kits: 'Claude Skill Starter, Claude Subagent Starter' },
              { name: 'MCP (Model Context Protocol)', desc: 'Model-agnostic agents that can switch between LLM providers. Best for avoiding vendor lock-in.', kits: 'MCP Agent Starter' },
              { name: 'Python Native', desc: 'Pure Python agents with no LLM dependency. Best for deterministic workflows and custom processing.', kits: 'API Workflow, Compliance, Operations, Support, Research, Generic' },
              { name: 'Platform Bridge', desc: 'Integration with existing agent platforms (OpenClaw, Abacus Claw). Best for extending existing deployments.', kits: 'OpenClaw Integration Starter' },
            ].map((stack) => (
              <div key={stack.name} className="p-5 bg-white rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{stack.name}</h3>
                <p className="text-xs text-navy-600 leading-relaxed mb-3">{stack.desc}</p>
                <div className="text-xs text-navy-500"><strong>Available kits:</strong> {stack.kits}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Identify Required TrustOps Package */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">3</span>
            Identify Required TrustOps Package
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">Based on your archetype and stack, identify which ECZ-ID passports and packages you need to acquire.</p>

          <div className="bg-ecz-50 rounded-xl border border-ecz-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy-800 text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold">Archetype</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">Minimum Required</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">Recommended Additional</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ecz-200">
                  {[
                    { arch: 'Skill Agent', min: 'Business Passport + Agent Credential', rec: 'API Passport, Software Supply Chain', pkg: 'Agent Starter Package' },
                    { arch: 'Orchestrator / Subagent', min: 'Business Passport + Agent Credentials (each)', rec: 'AI Model Passport', pkg: 'Agent Starter Package' },
                    { arch: 'API Workflow', min: 'Business Passport + Agent Credential + API Passport', rec: 'Cyber Resilience Passport', pkg: 'API Trust Package' },
                    { arch: 'Compliance Agent', min: 'Business Passport + Agent Credential + Risk & Policy', rec: 'Dataset Passport, Cyber Resilience', pkg: 'Compliance & Governance Package' },
                    { arch: 'Operations Agent', min: 'Business Passport + Agent Credential', rec: 'Cyber Resilience, IoT Device Passport', pkg: 'Operations Package' },
                    { arch: 'Research Agent', min: 'Business Passport + Agent Credential + Dataset Passport', rec: 'API Passport, AI Model Passport', pkg: 'Data & Research Package' },
                    { arch: 'Support Agent', min: 'Business Passport + Agent Credential', rec: 'API Passport', pkg: 'Agent Starter Package' },
                    { arch: 'Platform Bridge', min: 'Business Passport + Agent Credential + API Passport', rec: 'Software Supply Chain, AI Model', pkg: 'Platform Integration Package' },
                  ].map((row) => (
                    <tr key={row.arch} className="bg-white hover:bg-ecz-50 transition-colors">
                      <td className="px-4 py-3 text-xs font-medium text-navy-900">{row.arch}</td>
                      <td className="px-4 py-3 text-xs text-navy-600">{row.min}</td>
                      <td className="px-4 py-3 text-xs text-navy-500">{row.rec}</td>
                      <td className="px-4 py-3 text-xs text-ecz-700 font-medium">{row.pkg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/domains/passport-families-packages" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
              View Required ECZ-ID Package →
            </Link>
          </div>
        </div>
      </section>

      {/* Step 4: TrustOps Credentialing Checkpoint */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold">4</span>
            TrustOps Credentialing Checkpoint
          </h2>
          <TrustOpsCheckpoint
            requiredPassports={['ECZ-ID Business Passport', 'Agent Credential']}
            recommendedPassports={['API Passport', 'AI Model Passport', 'Dataset Passport', 'Cyber Resilience Passport', 'Risk & Policy Passport', 'Software Supply Chain Passport']}
            relevantPackages={['Agent Starter Package', 'API Trust Package', 'Compliance & Governance Package', 'Operations Package']}
            acquireItems={[
              { name: 'ECZ-ID Business Passport', enables: 'Parent organisation identity, anchoring all agent and service credentials' },
              { name: 'Agent Credential', enables: 'Unique verified identity for each agent in your deployment' },
              { name: 'Domain-Specific Passports', enables: 'Additional trust objects based on your archetype (API, Dataset, Risk & Policy, etc.)' },
            ]}
            returnItems={[
              { name: 'Agent ECZ-ID(s)', description: 'Unique resolver-verifiable identity strings for each agent' },
              { name: 'Credential Manifest', description: 'JSON configuration with capability attestations and operational boundaries' },
              { name: 'Production API Keys', description: 'ECZ-ID API keys for identity context injection and verification' },
              { name: 'Trust Score Baseline', description: 'Initial trust score configuration for your agents' },
            ]}
          />
        </div>
      </section>

      {/* Step 5: Acquire in TrustOps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">5</span>
            Acquire in TrustOps
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">TrustOps is the provisioning authority. All ECZ-ID passports, credentials, and API keys are acquired through TrustOps.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">Why Midpoint Credentialing?</h3>
              <p className="text-sm text-navy-600 leading-relaxed">Credentialing at the midpoint means your agent is built around verified identity from the start. Retrofitting credentials onto a finished agent is harder, less secure, and produces weaker trust posture.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">What Happens in TrustOps</h3>
              <p className="text-sm text-navy-600 leading-relaxed">You register your organisation, define your agent&apos;s capabilities and boundaries, select the required passport family and package, and receive your production credentials and API keys.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">What You Bring Back</h3>
              <p className="text-sm text-navy-600 leading-relaxed">Agent ECZ-ID(s), credential manifests, production API keys, and trust score configuration. These are injected into your agent configuration in the next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6: Return and Integrate */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">6</span>
            Return and Integrate
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">With your TrustOps credentials in hand, complete the final integration steps.</p>

          <div className="max-w-2xl space-y-4">
            {[
              { label: 'Inject credentials into configuration', detail: 'Add Agent ECZ-ID, API keys, and credential manifest to your agent configuration files.' },
              { label: 'Wire identity hooks into your pipeline', detail: 'Connect ECZ-ID identity context injection to every action in your agent pipeline.' },
              { label: 'Enable audit trail generation', detail: 'Activate identity-anchored audit logging for compliance readiness.' },
              { label: 'Test in sandbox environment', detail: 'Run your complete agent in the ECZ-ID sandbox to verify identity flows end-to-end.' },
              { label: 'Validate trust context in outputs', detail: 'Confirm every agent output carries correct provenance metadata and verification endpoints.' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-emerald-700 border border-emerald-200 shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-medium text-navy-800">{step.label}</div>
                  <div className="text-xs text-navy-500 mt-0.5">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 7: Verify with Resolver */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">7</span>
            Verify with Resolver
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">Resolver is the public verification surface. Any party can verify your agent&apos;s identity without needing an account.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: 'Identity Verification', desc: 'Query your agent\'s ECZ-ID through Resolver to confirm verified status, capability attestations, and trust score.' },
              { title: 'Output Provenance', desc: 'Trace any agent output back through its provenance chain to the verified identity that produced it.' },
              { title: 'External Verification', desc: 'Share your agent\'s ECZ-ID with partners, regulators, or customers so they can independently verify.' },
              { title: 'Trust Score Review', desc: 'Monitor your agent\'s trust score and the factors contributing to it over time.' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
            Verify with Resolver
            <svg className="w-3.5 h-3.5 ml-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      {/* Step 8: Deploy Anywhere */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <span className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-white font-bold">8</span>
            Deploy Anywhere
          </h2>
          <p className="text-base text-navy-600 mb-8 max-w-2xl">ECZ-ID-backed agents are portable. Your verified identity travels with your agent regardless of deployment target. No vendor lock-in.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['AWS / GCP / Azure', 'Self-hosted infrastructure', 'Docker / Kubernetes', 'Serverless functions', 'Edge compute', 'On-premise data centres', 'Hybrid cloud', 'Air-gapped environments'].map((opt) => (
              <div key={opt} className="p-4 bg-white rounded-xl border border-ecz-200 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-navy-700 font-medium">{opt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Resources" title="Related Resources" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/agent-starter-kits" className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Starter Kits</h3>
              <p className="text-sm text-navy-500">Pre-built templates with the guided flow already configured.</p>
            </Link>
            <Link href="/developer-onboarding" className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Developer Onboarding</h3>
              <p className="text-sm text-navy-500">Understanding the complete developer journey.</p>
            </Link>
            <Link href="/verification-model" className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center hover:shadow-sm transition-all">
              <h3 className="font-semibold text-navy-900 mb-2">Verification Model</h3>
              <p className="text-sm text-navy-500">How ECZ-ID verification works end-to-end.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Building?"
        description="Choose a starter kit for a guided experience, or begin your custom build and credential through TrustOps."
        primaryCTA={{ label: 'Browse Starter Kits', href: '/agent-starter-kits' }}
        secondaryCTA={{ label: 'Continue in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
