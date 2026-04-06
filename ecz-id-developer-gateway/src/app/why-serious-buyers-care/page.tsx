import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Why Serious Buyers Care',
  description: 'Why enterprises, insurers, platforms, procurement teams, operators, and developers choose ECZ-ID. The commercial case for machine-verifiable identity infrastructure.',
};

export default function WhySeriousBuyersCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Why ECZ-ID</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Why Serious Buyers Care
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              ECZ-ID isn't for everyone. It's for organisations that deploy autonomous systems at scale, manage critical infrastructure, and need verified identity that makes systems more attributable, machine-verifiable, and commercially legible. If you procure, insure, operate, or build systems that need to prove what they are—this is for you.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Problem"
            title="The Machine Economy Has an Identity Gap"
            description="Billions of agents, devices, vehicles, and systems are entering the economy—and most have no verified identity. The cost of this gap is real, growing, and increasingly unacceptable."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                'AI agents making decisions with no verifiable identity or audit trail',
                'IoT devices sending data with no attestable provenance or calibration proof',
                'Autonomous vehicles with no verified driving credentials or safety records',
                'Products moving through supply chains with no traceable custody chain',
                'Platforms connecting participants with no verified identities',
                'Critical infrastructure with no continuous security attestation',
                'Drones operating in shared airspace with minimal identity verification',
                'Robots interacting with humans with no verifiable safety attestation',
              ].map((problem) => (
                <div key={problem} className="flex items-start gap-3 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
                  <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm text-navy-700">{problem}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-navy-800 rounded-xl text-white">
                <h3 className="font-semibold mb-3">The Cost of No Identity</h3>
                <p className="text-sm text-ecz-300 leading-relaxed">
                  Without verified identity, every interaction is trust-by-assertion. Every handoff is unverifiable. Every audit is incomplete. Every compliance check is a manual exercise. Every insurance claim is a dispute. Every procurement decision is a gamble. The cost compounds with every agent deployed, every device connected, every transaction processed.
                </p>
              </div>
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-3">The Regulatory Trajectory</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  EU Digital Product Passport. AI Act transparency requirements. Autonomous vehicle type approval. Drone remote identification mandates. Critical infrastructure resilience directives. The regulatory trajectory is clear and accelerating: verified identity for machines is becoming mandatory, not optional.
                </p>
              </div>
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-3">The Competitive Reality</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Organisations that deploy verified identity infrastructure now will be procurement-ready when competitors are still scrambling. They'll be insurable when others are uninsurable. They'll be compliant when regulations arrive. They'll be trustworthy when trust becomes the differentiator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value by Persona */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Value Propositions"
            title="What ECZ-ID Means for You"
            description="Different stakeholders care about different aspects of verified identity. Here's what ECZ-ID delivers for each."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                persona: 'Enterprises',
                value: 'Attributable, auditable operations',
                desc: 'Every agent, device, and system your organisation deploys carries verified identity. Compliance is built-in, not bolted-on. Audit trails are automatic. Risk is quantifiable. Board-level governance over machine operations becomes possible.',
                link: '/domains',
                linkLabel: 'Explore all domains →'
              },
              {
                persona: 'Insurers',
                value: 'Machine-readable risk assessment',
                desc: 'Verified identity enables automated underwriting, continuous risk monitoring, and precise liability attribution. Safety attestations are machine-verifiable. Claims processing shifts from dispute to evidence. Premiums can reflect actual, verified operational profiles.',
                link: '/domains/vehicles-mobility',
                linkLabel: 'See vehicle identity →'
              },
              {
                persona: 'Platforms',
                value: 'Verified participant ecosystems',
                desc: 'Marketplaces and coordination platforms can verify every participant—agent, device, operator, vendor. Trust scoring enables tiered access. Transaction attestation enables dispute resolution. Platform integrity becomes provable, not just claimed.',
                link: '/domains/platforms-marketplaces-control-overlays',
                linkLabel: 'See platform identity →'
              },
              {
                persona: 'Procurement Teams',
                value: 'Evidence-based supplier verification',
                desc: 'Verify the identity, certifications, safety records, and compliance status of every autonomous system before purchase. Procurement decisions backed by machine-verifiable evidence, not just vendor assertions. Due diligence becomes automated.',
                link: '/domains/passport-families-packages',
                linkLabel: 'See passport families →'
              },
              {
                persona: 'Robotics & Humanoid Buyers',
                value: 'Insurer-legible safety identity',
                desc: 'Humanoid and industrial robots operating alongside humans require verified identity, safety attestation, and operator accountability. ECZ-ID provides environment-based robot passports with humanoid-specific profiles that make deployment safe, insurable, and procurable.',
                link: '/domains/robotics-humanoids',
                linkLabel: 'See robotics & humanoid identity →'
              },
              {
                persona: 'Drone Operators & Aviation',
                value: 'Remote ID-aligned, UTM-ready identity',
                desc: 'Commercial drone operators need verified identity for every aircraft class (D1–D4). ECZ-ID provides Remote ID-aligned, UTM-ready credentials that satisfy regulatory mandates and enable automated insurance underwriting for aerial operations.',
                link: '/domains/drones-aerial-systems',
                linkLabel: 'See drone identity →'
              },
              {
                persona: 'Operators',
                value: 'Fleet-wide trust management',
                desc: 'Manage identity for fleets of agents, vehicles, drones, robots, and devices from a single trust infrastructure. Monitor trust scores across operations. Receive alerts on attestation changes. Lifecycle management from provisioning to decommission.',
                link: '/domains/robotics-humanoids',
                linkLabel: 'See robotics identity →'
              },
              {
                persona: 'Developers',
                value: 'Identity infrastructure, not identity complexity',
                desc: 'The ECZ-ID SDK handles identity management so you can focus on building. Trust context injection, audit trail generation, and verification hooks are built in. Starter kits get you to production in hours, not months.',
                link: '/developer-onboarding',
                linkLabel: 'Start onboarding →'
              },
            ].map((item) => (
              <div key={item.persona} className="p-6 bg-white rounded-xl border border-ecz-200">
                <div className="text-xs font-semibold text-ecz-500 uppercase tracking-widest mb-2">{item.persona}</div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.value}</h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.link} className="text-sm text-ecz-600 hover:text-navy-800 font-medium">{item.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ECZ-ID */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Solution"
            title="Why ECZ-ID Is the Answer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Domain-Complete', desc: 'Nine domains, one identity layer. From AI agents to cargo containers, from drones to critical infrastructure. No domain gaps, no identity silos.' },
              { title: 'Infrastructure-Grade', desc: 'Built for production. Built for scale. Built for the systems that matter most. Not a prototype, not a demo. Sovereign-grade available.' },
              { title: 'Verification-First', desc: 'Every identity is verifiable through Resolver. No trust-by-assertion. No self-declared claims without verification. Public verification by design.' },
              { title: 'Continuous, Not Static', desc: 'Trust scores evolve. Attestations refresh. Identity is alive—not a certificate gathering dust. Continuous compliance monitoring.' },
              { title: 'Standards-Aligned', desc: 'Compatible with EU DPP, ISO frameworks, W3C DIDs, ICAO standards, and emerging machine identity standards.' },
              { title: 'Sovereignty-Enabling', desc: 'Organisations control their identity infrastructure. ECZ-ID is a layer, not a lock-in. Deploy on your terms.' },
              { title: 'Agent-Native', desc: 'Designed from day one for autonomous agents. Not retrofitted from human identity. Built for machines that act.' },
              { title: 'Provenance-Complete', desc: 'Every action, handoff, and decision traceable to verified identity. Full audit trail, always. From first action to last.' },
              { title: 'Commercially Ready', desc: 'Production deployments through TrustOps. Real provisioning, real credentials, real support. Not a whitepaper—an infrastructure product.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses ECZ-ID */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Audience"
            title="Who Uses ECZ-ID"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Enterprise AI Teams', desc: 'Deploying agent fleets that need verified identity for compliance, audit, and trusted multi-agent interactions.', link: '/start-with-agents' },
              { title: 'Autonomous Vehicle Operators', desc: 'Managing robotaxi fleets, autonomous haulage, and connected vehicle networks with verified driving credentials.', link: '/domains/vehicles-mobility' },
              { title: 'IoT & Industrial Operators', desc: 'Running device fleets, sensor networks, and industrial control systems with identity-verified telemetry and firmware attestation.', link: '/domains/iot-connected-systems' },
              { title: 'Drone Operators & Fleet Managers', desc: 'Operating commercial drone fleets with verified remote ID, mission attestation, and regulatory compliance across all four drone classes.', link: '/domains/drones-aerial-systems' },
              { title: 'Supply Chain & Trade', desc: 'Managing product passports, custody chains, container identity, and trade documentation with verified provenance.', link: '/domains/trade-shipping-infrastructure' },
              { title: 'Government & Infrastructure', desc: 'Protecting critical infrastructure and essential systems with sovereign-grade identity and continuous security attestation.', link: '/domains/trade-shipping-infrastructure' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.link} className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Serious About Machine Identity?"
        description="Start with agents, explore the full domain map, or go directly to TrustOps for provisioning and onboarding."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Start with Agents', href: '/start-with-agents' }}
        variant="dark"
      />
    </>
  );
}
