import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Drones & Aerial Systems',
  description: 'Verified identity for all drone classes (D1–D4) and autonomous aerial systems. ECZ-ID trust infrastructure for the airspace economy—commercially legible, insurer-ready, and regulator-aligned.',
};

export default function DronesAerialSystemsPage() {
  const domain = domains.find(d => d.id === 'drones-aerial-systems')!;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/domains" className="text-xs font-semibold text-ecz-500 uppercase tracking-widest hover:text-navy-700 transition-colors">
              ← All Domains
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Drones &amp; Aerial Systems
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              The sky is becoming infrastructure. From sub-250g micro drones to heavy-lift autonomous cargo aircraft, every aerial system needs verified identity, mission attestation, and regulatory compliance. ECZ-ID covers all four canonical drone classes (D1–D4) with identity infrastructure designed to be commercially legible, insurer-ready, and regulator-aligned.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Start Onboarding
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Verify an Aerial Identity
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Value Statement */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm text-ecz-300 mt-1">Canonical Drone Classes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">D1–D4</div>
              <div className="text-sm text-ecz-300 mt-1">Full Spectrum Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-ecz-300 mt-1">Remote ID Aligned</div>
            </div>
            <div>
              <div className="text-3xl font-bold">UTM</div>
              <div className="text-sm text-ecz-300 mt-1">Integration Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Context */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Regulatory Landscape"
            title="Why Verified Identity Is Non-Negotiable for Drones"
            description="Remote ID regulations, UTM integration, and airspace management all require verified, machine-readable identity for every aerial system. ECZ-ID exceeds minimum compliance with cryptographic attestation designed for insurers, regulators, and enterprise procurement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Remote ID Compliance', desc: 'Global regulations now mandate broadcast remote identification for drones. ECZ-ID provides verified identity that exceeds minimum Remote ID requirements with cryptographic attestation—making every drone resolver-verifiable, not just broadcast-visible.' },
              { title: 'UTM Integration', desc: 'Unmanned Traffic Management systems require verified identities for airspace deconfliction, corridor allocation, and flight authorisation. ECZ-ID credentials integrate natively with UTM service providers.' },
              { title: 'Operator Accountability', desc: 'Every drone must link to a verified operator. ECZ-ID creates clear, auditable chains of accountability from drone to operator to organisation—essential for commercial liability and insurance coverage.' },
              { title: 'Insurance Readiness', desc: 'Drone insurers need verified identity, operational history, and safety records to underwrite commercial operations. ECZ-ID enables automated, evidence-based risk assessment that makes drone fleets insurer-legible from day one.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D1-D4 Categories */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Drone Classification"
            title="Four Canonical Drone Classes, One Identity Layer"
            description="ECZ-ID covers the full drone spectrum with identity requirements scaled to each class. D1 through D4 are the only canonical drone passports—no additional classes needed."
          />

          <div className="space-y-8">
            {/* D1 */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <span className="text-sky-700 font-bold text-lg">D1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Micro &amp; Nano Drones</h3>
                  <p className="text-xs text-navy-500">Sub-250g · Consumer &amp; light commercial</p>
                </div>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-2">
                The lightest category, but not exempt from identity. Sub-250g drones operating in recreational and light commercial contexts benefit from lightweight identity that scales with regulatory requirements.
              </p>
              <p className="text-sm font-medium text-navy-700 mb-4">
                <strong>Commercial value:</strong> Enables mass-market drone operators to demonstrate regulatory compliance at minimal overhead. Ideal for photography, mapping, and recreational fleet management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Lightweight Remote ID', desc: 'Verified broadcast identity that meets emerging Remote ID mandates for sub-250g aircraft. Cryptographically signed, resolver-verifiable.' },
                  { uc: 'Operator Registration', desc: 'Verified link between drone and registered operator. Meets consumer drone registration requirements across jurisdictions.' },
                  { uc: 'Geofence Awareness', desc: 'Identity-linked geofence compliance: the drone proves it respects restricted airspace. Auditable by aviation authorities.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* D2 */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <span className="text-sky-700 font-bold text-lg">D2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Small Commercial Drones</h3>
                  <p className="text-xs text-navy-500">250g–25kg · Delivery, survey, inspection</p>
                </div>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-2">
                The workhorse of commercial drone operations. Delivery, survey, inspection, and mapping drones that operate in complex airspace and interact with multiple stakeholders.
              </p>
              <p className="text-sm font-medium text-navy-700 mb-4">
                <strong>Commercial value:</strong> Enables enterprise drone-as-a-service operations with verifiable mission records. Essential for commercial insurance coverage and client-facing audit trails.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Mission Attestation', desc: 'Verified mission plans, flight corridors, and operational objectives. Every flight is attested against its authorised parameters—essential for insurance claims and regulatory audit.' },
                  { uc: 'Delivery Custody Tracking', desc: 'For delivery drones: cargo identity, pickup/dropoff attestation, and custody chain that integrates with product identity systems. End-to-end verifiable logistics.' },
                  { uc: 'Survey Data Provenance', desc: 'Inspection and survey data carries verified drone identity, sensor calibration status, and geolocation attestation. Makes survey deliverables commercially defensible.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* D3 */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <span className="text-sky-700 font-bold text-lg">D3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Medium Autonomous Drones</h3>
                  <p className="text-xs text-navy-500">25–150kg · Industrial logistics, BVLOS operations</p>
                </div>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-2">
                Beyond visual line of sight (BVLOS) operations, industrial logistics, and medium-range cargo transport. These systems require comprehensive identity for autonomous operations in shared airspace.
              </p>
              <p className="text-sm font-medium text-navy-700 mb-4">
                <strong>Commercial value:</strong> Unlocks BVLOS commercial operations with verifiable autonomous credentials. Critical for logistics operators, energy infrastructure inspection, and agricultural enterprise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'BVLOS Authorisation', desc: 'Verified credentials for beyond-visual-line-of-sight operations including detect-and-avoid attestation and contingency protocol verification. Regulator-legible proof of autonomous capability.' },
                  { uc: 'Cargo Identity Integration', desc: 'Cargo manifests linked to drone identity. Weight, contents, hazmat status, and destination verified at every stage. Enables insured autonomous cargo operations.' },
                  { uc: 'Corridor Verification', desc: 'Flight corridor authorisations verified in real time. The drone proves it is operating within its approved airspace—essential for UTM compliance and multi-operator deconfliction.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* D4 */}
            <div className="p-8 bg-navy-800 rounded-xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Large Autonomous Aerial Systems</h3>
                  <p className="text-xs text-ecz-300">150kg+ · Heavy-lift, cargo aircraft, air taxis</p>
                </div>
              </div>
              <p className="text-sm text-ecz-300 leading-relaxed mb-2">
                The most complex category. Heavy-lift cargo drones, autonomous cargo aircraft, and urban air mobility vehicles operating in controlled and uncontrolled airspace. Aviation-grade identity and compliance requirements.
              </p>
              <p className="text-sm font-medium text-white mb-4">
                <strong>Commercial value:</strong> Enables aviation-grade autonomous operations with verifiable airworthiness, type certification, and operational approval records. The identity layer that makes eVTOL and autonomous cargo aircraft commercially viable, insurable, and procurable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Aviation-Grade Identity', desc: 'Identity that meets aviation authority requirements: airworthiness attestation, type certification records, and operational approvals. Designed for serious deployment in regulated airspace.' },
                  { uc: 'Urban Air Mobility', desc: 'Air taxis and eVTOL aircraft with passenger safety attestation, vertiport compliance, and route verification. Resolver-verifiable credentials for passenger confidence.' },
                  { uc: 'Autonomous Cargo Operations', desc: 'Large cargo drones with comprehensive flight identity, corridor verification, weather attestation, and cargo custody chains. Commercially legible for logistics and insurance stakeholders.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-1">{item.uc}</h4>
                    <p className="text-xs text-ecz-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passport Families & Related */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionIntro
                eyebrow="Passport Families"
                title="Relevant Identity Passports"
              />
              <div className="space-y-4">
                <div className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">D1–D4 Drone Passports</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Identity passports for drones across the four canonical classes (D1–D4). Includes flight attestation, geofence compliance, operator linkage, and mission records for aerial operations.</p>
                </div>
                <div className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">KYA Ready Pack™ / eTrade Documents Pack</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Use KYA Ready Pack™ for agent-first aerial onboarding, and eTrade Documents Pack where aerial operations overlap with trade documentation, custody, and intermodal evidence.</p>
                </div>
                <Link href="/domains/passport-families-packages" className="inline-block text-sm text-ecz-600 hover:text-navy-800 font-medium mt-2">
                  View all passport families →
                </Link>
              </div>
            </div>
            <div>
              <SectionIntro
                eyebrow="Related"
                title="Related Domains"
              />
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Vehicles & Mobility', slug: 'vehicles-mobility' },
                  { name: 'Trade, Shipping & Infrastructure', slug: 'trade-shipping-infrastructure' },
                  { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
                  { name: 'Products, Custody & Risk', slug: 'products-custody-risk' },
                  { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
                ].map((rd) => (
                  <Link key={rd.slug} href={`/domains/${rd.slug}`} className="px-4 py-2.5 bg-ecz-50 rounded-lg border border-ecz-200 text-sm text-navy-700 hover:border-ecz-400 hover:text-navy-900 transition-colors">
                    {rd.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy Verified Aerial Identity?"
        description="Provision drone and aerial system identities through TrustOps. Verify compliance through Resolver. Designed for commercial operators, insurers, and regulators."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
