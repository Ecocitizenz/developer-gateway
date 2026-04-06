import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Trade, Shipping & Infrastructure',
  description: 'Identity infrastructure for global trade, shipping containers, marine vessels, aircraft, intermodal transport, industrial sites, and critical infrastructure through ECZ-ID.',
};

export default function TradeShippingInfrastructurePage() {
  const domain = domains.find(d => d.id === 'trade-shipping-infrastructure')!;

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
              Trade, Shipping &amp; Infrastructure
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Global trade runs on trust—and trust runs on verified identity. ECZ-ID provides the identity backbone for cargo containers, marine vessels, aircraft, intermodal transfers, industrial sites, critical infrastructure, and the funds that flow between them. Infrastructure-grade identity for infrastructure-grade systems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Start Onboarding
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Verify an Asset Identity
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Scale */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Scale"
            title="The Scale of Global Trade Identity"
            description="Billions of containers, millions of vessels and aircraft, thousands of ports and industrial sites—all requiring verified identity for every interaction, handoff, and custody transfer."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Containers', stat: '800M+', note: 'container movements per year' },
              { label: 'Vessels', stat: '100K+', note: 'commercial ships in operation' },
              { label: 'Ports', stat: '5,000+', note: 'major commercial ports worldwide' },
              { label: 'Handoffs', stat: 'Trillions', note: 'of custody transfers requiring attestation' },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
                <div className="text-2xl font-bold text-navy-900">{item.stat}</div>
                <div className="text-sm font-semibold text-navy-700 mt-1">{item.label}</div>
                <div className="text-xs text-navy-500 mt-0.5">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Categories */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Coverage"
            title="Verified Identity for Every Trade Asset"
          />

          <div className="space-y-8">
            {/* Containers */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Cargo Containers</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Shipping containers are the atoms of global trade. Each container needs verified identity for seal attestation, custody chain tracking, customs clearance, and intermodal handoffs across oceans, rails, and roads.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Seal Attestation', desc: 'Cryptographic proof of seal integrity at every checkpoint. Tamper evidence that is machine-verifiable, not just visual.' },
                  { uc: 'Custody Chain', desc: 'Complete, unbroken chain from loading point to final delivery. Every handoff verified with identity of the transferring and receiving parties.' },
                  { uc: 'Customs & Compliance', desc: 'Machine-readable customs declarations, certificates of origin, and phytosanitary documents tied to container identity.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marine Vessels */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Marine Vessels</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Ships and maritime assets with verified registry, crew attestation, voyage tracking, and port compliance. From container ships to bulk carriers to offshore support vessels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Verified Registry', desc: 'Vessel identity linked to flag state, classification society, ISM compliance, and insurance attestation.' },
                  { uc: 'Voyage Tracking', desc: 'Port-to-port voyage records with cargo manifest attestation, weather logs, and route compliance verification.' },
                  { uc: 'Port State Control', desc: 'Machine-readable compliance records for port state control inspections. Identity-anchored deficiency tracking and rectification attestation.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aircraft */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Aircraft</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Commercial and cargo aircraft with verified identity, maintenance attestation, and flight records. Integrates with aviation authority requirements and MRO processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Airworthiness Attestation', desc: 'Verified maintenance records, component lifecycle tracking, and airworthiness directive compliance.' },
                  { uc: 'Flight Record Identity', desc: 'Every flight logged with verified aircraft identity, crew attestation, and route compliance records.' },
                  { uc: 'Cargo Manifest Verification', desc: 'Air cargo manifests tied to aircraft and container identity. Dangerous goods attestation and weight verification.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Intermodal */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Intermodal Transfers &amp; Funds Flow</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                The most critical moments in trade: when cargo moves between ship, rail, road, and air. Every handoff point is a trust boundary that requires verified custody transfer. Financial flows must match physical flows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Verified Custody Handoff', desc: 'Cryptographic proof of transfer at every modal boundary. Condition attestation, timestamp verification, and handler identity.' },
                  { uc: 'Condition Monitoring', desc: 'Temperature, humidity, shock, and tilt records tied to cargo identity. Condition changes attested at every transfer point.' },
                  { uc: 'Financial Reconciliation', desc: 'Trade finance instruments linked to physical cargo identity. Letters of credit, bills of lading, and payment triggers aligned with custody events.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Infrastructure */}
            <div className="p-8 bg-navy-800 rounded-xl text-white">
              <h3 className="text-xl font-bold text-white mb-3">Industrial Sites &amp; Critical Infrastructure</h3>
              <p className="text-sm text-ecz-300 leading-relaxed mb-6">
                Sovereign-grade identity for the systems that societies depend on. Power stations, water treatment, telecommunications, ports, refineries, and logistics hubs. These require the highest grade of identity infrastructure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Sovereign-Grade Identity', desc: 'Identity infrastructure that meets national security requirements. Air-gapped capable, multi-jurisdiction, sovereignty-preserving.' },
                  { uc: 'Continuous Security Attestation', desc: 'Real-time security posture verification. Access control, intrusion detection, and compliance monitoring tied to facility identity.' },
                  { uc: 'Supply Chain Resilience', desc: 'Critical infrastructure supply chains with verified component provenance, vendor identity, and maintenance attestation.' },
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
                  <h4 className="font-semibold text-navy-900 mb-1">Infrastructure Passport</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Sovereign-grade identity for critical infrastructure, industrial sites, and essential systems.</p>
                </div>
                <div className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">Product Passport</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Digital product identity with full lifecycle tracking. EU DPP compatible. Ideal for cargo and goods moving through trade systems.</p>
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
                  { name: 'Products, Custody & Risk', slug: 'products-custody-risk' },
                  { name: 'Vehicles & Mobility', slug: 'vehicles-mobility' },
                  { name: 'Drones & Aerial Systems', slug: 'drones-aerial-systems' },
                  { name: 'Platforms, Marketplaces & Control Overlays', slug: 'platforms-marketplaces-control-overlays' },
                  { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
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
        title="Ready to Deploy Infrastructure-Grade Identity?"
        description="Provision trade, shipping, and infrastructure identities through TrustOps. Verify custody and compliance through Resolver."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
