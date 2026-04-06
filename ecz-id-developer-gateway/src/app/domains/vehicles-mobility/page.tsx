import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Vehicles & Mobility',
  description: 'Trust infrastructure for robotaxis, autonomous cars, haulage trucks, and connected vehicle fleets. ECZ-ID verified identity for the autonomous mobility era.',
};

export default function VehiclesMobilityPage() {
  const domain = domains.find(d => d.id === 'vehicles-mobility')!;

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
              Vehicles &amp; Mobility
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Autonomous vehicles don't just need to drive—they need to prove who they are, what they're authorised to do, and where they've been. ECZ-ID delivers verified, machine-readable identity across the entire mobility spectrum: robotaxis, autonomous cars, haulage trucks, and connected fleets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Start Onboarding
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Verify a Vehicle Identity
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Matters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Why It Matters"
            title="Trust Requirements for Road & Freight Mobility"
            description="Every autonomous vehicle is a physical system making real-time safety decisions. Passengers, regulators, insurers, and the public need verifiable proof of identity, capability, and compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Regulatory Compliance', desc: 'Autonomous vehicle regulations are evolving rapidly. ECZ-ID provides machine-readable proof of driving credentials, operational domain authorisation, and safety certifications that regulators can verify in real time.' },
              { title: 'Insurance & Risk', desc: 'Insurers need precise data on vehicle capabilities, safety records, operational domains, and maintenance history. ECZ-ID enables automated risk assessment and claims processing with verified identity.' },
              { title: 'Public Confidence', desc: 'Passengers in robotaxis, pedestrians near autonomous trucks, and cities hosting autonomous fleets all need confidence. Verified identity makes that confidence evidence-based, not brand-based.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Coverage"
            title="Verified Identity Across the Mobility Spectrum"
          />

          <div className="space-y-8">
            {/* Robotaxis */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Robotaxis &amp; Autonomous Ride-Hail</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Autonomous ride-hail vehicles carrying passengers through urban environments. The highest standard of safety attestation, identity verification, and continuous monitoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Passenger Safety Attestation', desc: 'Real-time proof of safety system status, emergency protocols, and passenger protection measures before every ride.' },
                  { uc: 'Route Verification & Compliance', desc: 'Verified operational domain: which roads, which weather conditions, which times of day the vehicle is authorised to operate.' },
                  { uc: 'Platform Integration', desc: 'Ride-hail platforms verify vehicle identity, safety status, and operational authorisation before dispatching passengers.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Autonomous Cars */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Autonomous Cars</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Self-driving vehicles in private and fleet ownership. From L3 highway automation to L5 full autonomy, each level carries specific identity and credential requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Driving Credential Verification', desc: 'Machine-readable proof of autonomous driving level, tested scenarios, operational domain, and regulatory approvals.' },
                  { uc: 'Safety Record & History', desc: 'Complete driving history: miles driven, incidents, interventions, software versions, and sensor calibration records.' },
                  { uc: 'Cross-Border Identity', desc: 'Vehicles moving between jurisdictions carry identity that maps to each region\'s regulatory requirements.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Haulage Trucks */}
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Haulage Trucks &amp; Autonomous Freight</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Autonomous freight vehicles on motorways, in logistics hubs, and at distribution centres. Cargo custody, cross-border compliance, and fleet coordination require robust identity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { uc: 'Cargo Custody Verification', desc: 'Verified custody chain from loading to delivery. Every handoff, every route change, every delay recorded against the vehicle\'s identity.' },
                  { uc: 'Cross-Border Freight Identity', desc: 'Customs, regulatory, and compliance attestations that travel with the vehicle across jurisdictions. Machine-readable border documentation.' },
                  { uc: 'Fleet Coordination', desc: 'Platooning and convoy operations with verified identity for every vehicle. Trust-scored coordination for autonomous fleet management.' },
                ].map((item) => (
                  <div key={item.uc} className="p-4 bg-ecz-50 rounded-lg border border-ecz-100">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.uc}</h4>
                    <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Lifecycle */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Lifecycle"
            title="One Identity, Entire Vehicle Lifecycle"
            description="From manufacture to decommission, ECZ-ID carries the full verified history."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { phase: 'Manufacture', desc: 'Identity created at production. Components, software, certifications recorded.' },
              { phase: 'Certification', desc: 'Regulatory approvals, driving credentials, safety attestations added.' },
              { phase: 'Operation', desc: 'Continuous monitoring, trip logs, maintenance records, safety events.' },
              { phase: 'Transfer', desc: 'Ownership changes, fleet reassignments, custody transfers verified.' },
              { phase: 'Decommission', desc: 'End-of-life attestation. Complete history preserved and verifiable.' },
            ].map((item) => (
              <div key={item.phase} className="p-4 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
                <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.phase}</h4>
                <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Domains & Passport Families */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionIntro
                eyebrow="Passport Families"
                title="Relevant Identity Passports"
              />
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">Road & Freight Mobility Passports</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Use the correct Road & Freight Mobility passport — Robotaxi, Autonomous Car, Autonomous Haulage Truck, Cross-Border Haulage Truck, or High-Value Cargo Truck — based on the operating pattern.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">Capital Access Pack / Critical Operator Pack</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">Use the package path that matches the corridor. Capital Access Pack, Payout Unlock Pack, Hold Release Pack, and Critical Operator Pack are stronger mobility-adjacent acquisition paths than a generic mobility bundle.</p>
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
                  { name: 'Robotics & Humanoids', slug: 'robotics-humanoids' },
                  { name: 'Drones & Aerial Systems', slug: 'drones-aerial-systems' },
                  { name: 'Trade, Shipping & Infrastructure', slug: 'trade-shipping-infrastructure' },
                  { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
                  { name: 'Platforms, Marketplaces & Control Overlays', slug: 'platforms-marketplaces-control-overlays' },
                ].map((rd) => (
                  <Link key={rd.slug} href={`/domains/${rd.slug}`} className="px-4 py-2.5 bg-white rounded-lg border border-ecz-200 text-sm text-navy-700 hover:border-ecz-400 hover:text-navy-900 transition-colors">
                    {rd.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy Verified Vehicle Identity?"
        description="Provision vehicle identities through TrustOps. Verify credentials and safety status through Resolver."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
