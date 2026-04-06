import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Robotics & Humanoids',
  description: 'Verified identity for industrial, public-space, domestic, and humanoid robotic systems. ECZ-ID trust infrastructure for every class of robot operating alongside humans.',
};

export default function RoboticsHumanoidsPage() {
  const domain = domains.find(d => d.id === 'robotics-humanoids')!;

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
              Robotics &amp; Humanoids
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Every robot operating alongside humans—on the factory floor, in public spaces, in the home, or in human form—needs a verified identity that proves what it is, what it can do, and who is responsible. ECZ-ID is the trust infrastructure layer that makes robotic deployment safe, insurable, procurable, and auditable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Start Onboarding
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Verify a Robot Identity
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Model: Environment First */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Environment First, Form Factor Second</h2>
            <p className="text-sm text-ecz-300 leading-relaxed mb-6">
              ECZ-ID credentials robots by the environment they operate in, not their form factor. Three canonical environment-based robot passports cover every robotic system—including humanoids. Humanoid robots are credentialed using the appropriate environment-based passport with humanoid-specific profiles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-sm font-semibold text-white mb-1">Industrial Robot Passport</div>
                <p className="text-xs text-ecz-300">Factories, warehouses, manufacturing lines</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-sm font-semibold text-white mb-1">Public-Space Robot Passport</div>
                <p className="text-xs text-ecz-300">Shopping centres, airports, hospitals, urban areas</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-sm font-semibold text-white mb-1">Domestic Robot Passport</div>
                <p className="text-xs text-ecz-300">Private residences, domestic settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ECZ-ID Matters for Robotics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Why It Matters"
            title="Why Robots Need Verified Identity"
            description="Robots are physical systems operating in human environments. The stakes are different from software. Identity is safety, liability, and trust."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Safety', desc: 'Every robot must prove its safety attestation, operational boundaries, and emergency protocols before operating alongside humans. Verified identity makes safety auditable, not just claimed.' },
              { title: 'Liability', desc: 'When something goes wrong, insurers and regulators need to know exactly which robot, which firmware, which operator, and which safety certifications were active. ECZ-ID makes liability attribution precise and machine-readable.' },
              { title: 'Trust', desc: 'Humans sharing spaces with robots need confidence. Verified identity gives building owners, facility managers, and the public a machine-readable proof of what a robot is authorised to do.' },
              { title: 'Procurement', desc: 'Enterprise and government buyers need to verify robot capabilities, certifications, and compliance status before purchase and deployment. ECZ-ID makes procurement evidence-based.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robot Categories */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Coverage"
            title="Every Class of Robot, One Identity Layer"
            description="ECZ-ID covers the full spectrum of robotic systems—from industrial arms to humanoid companions. Each environment has specific identity requirements addressed by its dedicated robot passport."
          />

          {/* Industrial Robots */}
          <div className="mb-12">
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ecz-50 rounded-full mb-4 border border-ecz-200">
                    <span className="text-xs font-medium text-navy-700 tracking-wide">INDUSTRIAL ROBOT PASSPORT</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Industrial Robots</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-4">
                    Factory-floor robotic systems performing welding, assembly, painting, palletising, and material handling. These machines operate in controlled environments but with significant safety requirements.
                  </p>
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200">Welding Arms</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Assembly Systems</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Cobots</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">AGVs</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Pick-and-Place</span>
                    <span className="inline-block px-2.5 py-1 bg-violet-50 text-violet-700 text-xs rounded-full border border-violet-200 ml-1">Industrial Humanoids</span>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { uc: 'Safety Certification Tracking', desc: 'Verified records of ISO 10218 compliance, risk assessments, and safety zone configurations tied to each robot\'s identity.' },
                    { uc: 'Maintenance Provenance', desc: 'Every service, calibration, and firmware update recorded with cryptographic attestation. Full maintenance history verifiable by any party.' },
                    { uc: 'Operational Boundary Enforcement', desc: 'Machine-readable operational domains defining permitted work envelopes, speed limits, and force thresholds.' },
                    { uc: 'Multi-Vendor Fleet Management', desc: 'Unified identity across robots from different manufacturers. One trust layer for mixed-vendor factory floors.' },
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

          {/* Public-Space Robots */}
          <div className="mb-12">
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ecz-50 rounded-full mb-4 border border-ecz-200">
                    <span className="text-xs font-medium text-navy-700 tracking-wide">PUBLIC-SPACE ROBOT PASSPORT</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Public-Space Robots</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-4">
                    Service and delivery robots operating in public environments—shopping centres, airports, hospitals, university campuses, pavements, and urban areas. These require the highest level of public trust.
                  </p>
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200">Delivery Robots</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Security Patrols</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Cleaning Systems</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Information Kiosks</span>
                    <span className="inline-block px-2.5 py-1 bg-violet-50 text-violet-700 text-xs rounded-full border border-violet-200 ml-1">Service Humanoids</span>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { uc: 'Public Safety Licensing', desc: 'Verified permits, insurance attestation, and safety certifications for robots operating in pedestrian-shared spaces.' },
                    { uc: 'Incident Logging & Attribution', desc: 'Every interaction, near-miss, and incident recorded with robot identity. Liability attribution is immediate and verifiable.' },
                    { uc: 'Geofenced Operation', desc: 'Machine-readable operational zones. The robot proves it is authorised for its current location and activity.' },
                    { uc: 'Public Trust Verification', desc: 'Building owners, local authorities, and the public can verify any robot\'s identity, operator, and safety status in real time.' },
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

          {/* Domestic Robots */}
          <div className="mb-12">
            <div className="p-8 bg-white rounded-xl border border-ecz-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ecz-50 rounded-full mb-4 border border-ecz-200">
                    <span className="text-xs font-medium text-navy-700 tracking-wide">DOMESTIC ROBOT PASSPORT</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Domestic Robots</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-4">
                    Home automation and assistive robots operating in private residences. Privacy, safety, and data handling are paramount in the most sensitive of environments.
                  </p>
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200">Home Assistants</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Care Robots</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Cleaning Robots</span>
                    <span className="inline-block px-2.5 py-1 bg-ecz-50 text-navy-600 text-xs rounded-full border border-ecz-200 ml-1">Garden/Lawn</span>
                    <span className="inline-block px-2.5 py-1 bg-violet-50 text-violet-700 text-xs rounded-full border border-violet-200 ml-1">Companion Humanoids</span>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { uc: 'Privacy-Respecting Identity', desc: 'Verified data handling practices, camera/microphone attestation, and data retention policies tied to each robot\'s identity.' },
                    { uc: 'Firmware & Update Provenance', desc: 'Every software update carries verified provenance. Homeowners can confirm updates are authentic and from the authorised manufacturer.' },
                    { uc: 'Elderly & Vulnerable Care', desc: 'Care robots carry verified safety attestation, interaction protocols, and emergency response capabilities.' },
                    { uc: 'Home Insurance Integration', desc: 'Insurers can verify robot safety certifications and operational parameters for home insurance assessments.' },
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

          {/* Humanoid Robots — Flagship Theme */}
          <div>
            <div className="p-8 bg-navy-800 rounded-xl text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-xs font-medium tracking-wide">FLAGSHIP: HUMANOID IDENTITY</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Humanoid Robots</h3>
                  <p className="text-sm text-ecz-300 leading-relaxed mb-4">
                    Human-form robotic systems represent the most complex identity challenge in robotics. They interact with people in the most human-like ways, creating unique trust, safety, and ethical requirements. ECZ-ID provides comprehensive identity infrastructure for humanoid deployment across every environment.
                  </p>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-4">
                    <p className="text-xs text-ecz-300 leading-relaxed">
                      <strong className="text-white">How humanoids are credentialed:</strong> Humanoid robots are credentialed using the appropriate environment-based passport (Industrial, Public-Space, or Domestic) with humanoid-specific profiles. There is no separate &quot;Humanoid Robot Passport.&quot; Humanoid profiles require Assured parent tier.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-xs rounded-full">General-Purpose Humanoids</span>
                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-xs rounded-full ml-1">Service Humanoids</span>
                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-xs rounded-full ml-1">Industrial Humanoids</span>
                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-xs rounded-full ml-1">Companion Humanoids</span>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { uc: 'Comprehensive Capability Attestation', desc: 'Every humanoid proves its exact capabilities, interaction boundaries, physical strength limits, and autonomous decision scope.' },
                    { uc: 'Human Interaction Protocols', desc: 'Verified interaction boundaries for physical contact, verbal communication, emotional response patterns, and personal space management.' },
                    { uc: 'Multi-Environment Operation', desc: 'Humanoids moving between environments—factory to warehouse to public space—carry identity that adapts safety protocols to each context via the appropriate environment passport.' },
                    { uc: 'Ethical & Regulatory Compliance', desc: 'Attestation of compliance with AI Act requirements, ethical guidelines, transparency obligations, and disclosure protocols for human-form systems.' },
                    { uc: 'Operator Accountability', desc: 'Clear chain from humanoid identity to responsible operator. Every deployment, task assignment, and operational change is attributable.' },
                    { uc: 'Insurance & Risk Scoring', desc: 'Continuous trust scores and safety attestation enable real-time risk assessment for humanoid operations in any environment. Designed to be insurer-legible.' },
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
        </div>
      </section>

      {/* How Verification Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Identity Model"
            title="How Verification Works"
            description="Every robot in this domain follows the same verification model: provision through TrustOps, verify through Resolver, audit through provenance trails."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Provision</h3>
              <p className="text-sm text-navy-500">Register robot identity, safety certifications, and operational boundaries through TrustOps. Select the environment-based robot passport and define capabilities and interaction protocols.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Verify</h3>
              <p className="text-sm text-navy-500">Any party—facility manager, insurer, regulator, or the public—can verify a robot&apos;s identity and safety status through Resolver.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Audit</h3>
              <p className="text-sm text-navy-500">Complete provenance trails for every operational session, maintenance event, incident, and interaction. Always auditable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Passport Families */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Passport Infrastructure"
            title="Relevant Identity Passports"
            description="Three environment-based robot passports provide the structured identity models for robotic systems, complemented by the Device Passport for hardware-anchored IoT components."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">Industrial Robot Passport</h3>
              <p className="text-sm text-navy-600 leading-relaxed">Safety-first identity for factory, warehouse, and manufacturing robots. Includes industrial humanoid profiles.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">Public-Space Robot Passport</h3>
              <p className="text-sm text-navy-600 leading-relaxed">Identity for robots in public environments. Public trust, incident logging, geofencing. Includes service humanoid profiles.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">Domestic Robot Passport</h3>
              <p className="text-sm text-navy-600 leading-relaxed">Privacy-respecting identity for home robots. Firmware provenance, care safety. Includes companion humanoid profiles.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2">Device Passport</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">Hardware-anchored identity for IoT and sensor components within robotic systems.</p>
              <Link href="/domains/iot-connected-systems" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
                IoT &amp; Connected Systems →
              </Link>
            </div>
          </div>
          <Link href="/domains/passport-families-packages" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
            View all passport families &amp; packages →
          </Link>
        </div>
      </section>

      {/* Related Domains */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Related"
            title="Related Domains"
            description="Robotics identity connects to broader systems. Explore these related domains."
          />
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
              { name: 'Vehicles & Mobility', slug: 'vehicles-mobility' },
              { name: 'APIs, AI, Data & Software', slug: 'apis-ai-data-software' },
              { name: 'Platforms, Marketplaces & Control Overlays', slug: 'platforms-marketplaces-control-overlays' },
              { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
            ].map((rd) => (
              <Link key={rd.slug} href={`/domains/${rd.slug}`} className="px-4 py-2.5 bg-ecz-50 rounded-lg border border-ecz-200 text-sm text-navy-700 hover:border-ecz-400 hover:text-navy-900 transition-colors">
                {rd.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy Verified Robotic Identity?"
        description="Provision robot identities through TrustOps. Verify safety and compliance through Resolver. Start with agents or explore passport families."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
