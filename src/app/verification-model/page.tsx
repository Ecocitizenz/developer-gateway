import type { Metadata } from 'next';
import SectionIntro from '@/components/SectionIntro';
import ProofPanel from '@/components/ProofPanel';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Verification Model',
  description: 'How ECZ-ID verification works. From identity provisioning through real-time verification to continuous attestation.',
};

export default function VerificationModelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Verification</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Verification Model
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              ECZ-ID verification is not a one-time check. It’s a continuous, attestable process that ensures every entity maintains its verified status throughout its lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Core Model */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Core Model"
            title="How Verification Works"
            description="The ECZ-ID verification model has three layers: identity provisioning, real-time verification, and continuous attestation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="font-semibold text-navy-900">Identity Provisioning</h3>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Every entity starts with identity provisioning through TrustOps. The entity receives a unique ECZ-ID, capability attestations, operational boundaries, and initial trust score. This is the foundation upon which all verification builds.
                </p>
              </div>

              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="font-semibold text-navy-900">Real-Time Verification</h3>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Any party can verify an entity’s identity through Resolver in real time. Verification checks the entity’s current identity status, trust score, active attestations, and operational validity. This is the runtime trust layer.
                </p>
              </div>

              <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="font-semibold text-navy-900">Continuous Attestation</h3>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Verification doesn’t stop after initial provisioning. ECZ-ID continuously updates attestations based on entity behaviour, compliance status, and external signals. Trust scores evolve. Attestations are refreshed. Anomalies trigger review.
                </p>
              </div>
            </div>

            <ProofPanel
              title="Verification Flow"
              description="A typical verification interaction between two entities."
              steps={[
                { label: 'Entity A Presents Identity', detail: 'Entity A includes its ECZ-ID credentials in the interaction request.' },
                { label: 'Entity B Queries Resolver', detail: 'Entity B sends the ECZ-ID to Resolver for real-time verification.' },
                { label: 'Resolver Returns Attestation', detail: 'Resolver returns current identity status, trust score, capabilities, and active attestations.' },
                { label: 'Entity B Makes Trust Decision', detail: 'Based on verified attestations, Entity B decides whether to proceed with the interaction.' },
                { label: 'Interaction Logged', detail: 'The verified interaction is logged with provenance linking both entities\' identities.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Score */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Trust Score"
            title="Understanding Trust Scores"
            description="Trust scores are dynamic, verifiable measures of an entity's trustworthiness. They're computed, not self-declared."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Identity Completeness', desc: 'How complete and current the entity\'s identity record is. More attestations, higher completeness.' },
              { title: 'Behavioural History', desc: 'Track record of the entity\'s actions and interactions. Consistent, verified behaviour builds trust.' },
              { title: 'Attestation Currency', desc: 'Are attestations current? Expired or stale attestations reduce trust scores.' },
              { title: 'Anomaly Status', desc: 'Has the entity triggered any anomaly flags? Unresolved anomalies reduce trust scores.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Principles"
            title="Verification Principles"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Verified, Not Assumed', desc: 'No identity claim is accepted without verification. Every assertion is checkable through Resolver.' },
              { title: 'Continuous, Not Static', desc: 'Verification is ongoing. Trust scores update. Attestations refresh. Status evolves with behaviour.' },
              { title: 'Transparent, Not Opaque', desc: 'Verification results are structured, documented, and auditable. No black boxes.' },
              { title: 'Decoupled, Not Siloed', desc: 'TrustOps provisions. Resolver verifies. They\'re independent. No single point of failure.' },
              { title: 'Standard, Not Proprietary', desc: 'ECZ-ID aligns with emerging standards for machine identity, digital product passports, and trust frameworks.' },
              { title: 'Sovereign, Not Dependent', desc: 'Organisations control their identity infrastructure. ECZ-ID enables sovereignty, not dependency.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Separation */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Authority Separation"
            title="Three Surfaces, Clear Responsibilities"
            description="Understanding which surface does what is essential to the ECZ-ID verification model."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">🏗️ GitHub Gateway (This Site)</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">
                <strong>Explains.</strong> Discovery, onboarding guidance, starter kits, build scaffolds, and documentation. This site helps you understand and start—it does not provision, price, or verify.
              </p>
              <p className="text-xs text-navy-500">Role: Persuasion, education, build guidance</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-navy-900 mb-2">⚡ TrustOps</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">
                <strong>Provisions.</strong> All identity provisioning, credential management, pricing, sales, checkout, and credential lifecycle management. TrustOps is the authority plane. Customer acquisition starts at <code className="text-xs bg-white px-1 py-0.5 rounded">/start</code>.
              </p>
              <p className="text-xs text-navy-500">Role: Provisioning, pricing, credentialing</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-navy-900 mb-2">🔍 Resolver</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">
                <strong>Proves.</strong> Public verification, trust score queries, attestation checks, and provenance tracing. No account required. Any party can verify any ECZ-ID independently.
              </p>
              <p className="text-xs text-navy-500">Role: Verification, proof, public trust checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* ECZ-ID System Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="System Overview"
            title="The Complete ECZ-ID Identity System"
            description="How passports, packages, badges, and verification fit together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ECZ-ID Business Passport™', desc: 'Parent passport. Root credential for every organisation. All child passports and derived add-ons attach to this.' },
              { title: '7 Families / 33 Child Passports', desc: 'Organised into 7 canonical categories covering digital systems, product/risk/transfer, robotics, road mobility, drones, infrastructure, and control overlays.' },
              { title: '25 Packages', desc: '17 core + 1 KYA Ready Pack™ + 7 advanced infrastructure services. Commercial acquisition paths for child passports.' },
              { title: 'ECZ-ID Insurability Readiness™', desc: 'Derived add-on on parent passport. Auto-computed from trust posture. Not a package. Not purchasable.' },
              { title: 'Badges & Public Proof', desc: 'After verification, entities receive resolver-verifiable badges. These are public proof URLs anyone can check.' },
              { title: 'Deployment & Lifecycle', desc: 'After credentialing and verification, entities deploy to production. Credentials travel with the entity. Trust scores evolve over time.' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See Verification in Action"
        description="Verify any ECZ-ID through Resolver, or provision new identities through TrustOps."
        primaryCTA={{ label: 'Go to Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        secondaryCTA={{ label: 'Start in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
