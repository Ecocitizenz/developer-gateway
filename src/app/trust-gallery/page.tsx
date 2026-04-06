import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Trust Gallery',
  description: 'Visual examples of ECZ-ID trust infrastructure in action. Badge previews, resolver responses, manifest examples, and deployment patterns across domains.',
};

export default function TrustGalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Gallery</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Trust Gallery
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Calm, proof-oriented examples of ECZ-ID trust infrastructure in action. See how verified identity manifests in badges, resolver responses, manifests, and real deployment patterns—from single-agent verification to multi-domain orchestration.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/verification-model" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
                How Verification Works →
              </Link>
              <Link href="/domains" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
                Explore Domains →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Badge & Resolver Previews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Proof Artefacts"
            title="What ECZ-ID Proof Looks Like"
            description="ECZ-ID produces machine-readable and human-verifiable artefacts. These examples illustrate the outputs your systems and users will interact with."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Badge Preview */}
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <div className="text-xs font-semibold text-ecz-500 uppercase tracking-widest mb-3">Trust Badge</div>
              <div className="p-4 bg-white rounded-lg border border-ecz-200 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">ECZ-ID Verified</div>
                    <div className="text-xs text-navy-500">Agent · Trust Score 94</div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs"><span className="text-navy-500">Identity</span><span className="text-navy-700 font-mono">ecz:agent:a1b2c3</span></div>
                  <div className="flex justify-between text-xs"><span className="text-navy-500">Status</span><span className="text-emerald-600 font-medium">Active</span></div>
                  <div className="flex justify-between text-xs"><span className="text-navy-500">Last Attested</span><span className="text-navy-700">2 min ago</span></div>
                </div>
              </div>
              <p className="text-xs text-navy-500 leading-relaxed">Trust badges provide at-a-glance verification status. Embeddable in dashboards, platforms, and partner portals. Machine-readable and human-verifiable.</p>
            </div>

            {/* Resolver Response */}
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <div className="text-xs font-semibold text-ecz-500 uppercase tracking-widest mb-3">Resolver Response</div>
              <div className="p-4 bg-navy-800 rounded-lg text-white font-mono text-xs mb-4 overflow-x-auto">
                <pre className="whitespace-pre leading-relaxed">{`{
  "ecz_id": "ecz:vehicle:x7k9m2",
  "status": "verified",
  "entity_type": "autonomous_vehicle",
  "trust_score": 97,
  "attestations": [
    "safety_certification",
    "operational_domain",
    "insurance_valid"
  ],
  "last_attested": "2026-04-06T10:23Z",
  "operator": "ecz:org:fleet-co"
}`}</pre>
              </div>
              <p className="text-xs text-navy-500 leading-relaxed">Resolver returns structured, machine-readable identity records. Any party can query. No account required. Public verification by design.</p>
            </div>

            {/* Manifest Example */}
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <div className="text-xs font-semibold text-ecz-500 uppercase tracking-widest mb-3">Identity Manifest</div>
              <div className="p-4 bg-navy-800 rounded-lg text-white font-mono text-xs mb-4 overflow-x-auto">
                <pre className="whitespace-pre leading-relaxed">{`{
  "manifest": "ecz:manifest:v1",
  "entity": "ecz:drone:d2-4f8a",
  "class": "D2",
  "operator": "ecz:org:survey-ltd",
  "mission": "infrastructure_inspect",
  "corridor": "approved",
  "geofence": "compliant",
  "sensors": ["lidar", "rgb_4k"],
  "calibration": "attested"
}`}</pre>
              </div>
              <p className="text-xs text-navy-500 leading-relaxed">Identity manifests carry the full context of an entity&apos;s identity, capabilities, and compliance status. Attached to every action and interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Patterns */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Deployment Patterns"
            title="Trust Infrastructure in Action"
            description="These patterns illustrate how ECZ-ID works in real deployment scenarios across domains."
          />

          <div className="space-y-12">
            {/* Pattern 1 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Agent-to-Agent Verification</h3>
              <p className="text-sm text-navy-600 mb-4">Two agents verify each other&apos;s identity before exchanging data. Every interaction is attested and auditable.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: 'Step 1 — Initiate', title: 'Agent A Presents Credentials', desc: 'Agent A includes its ECZ-ID credentials in the request. Credentials contain identity, capabilities, delegation chain, and current trust score.' },
                  { step: 'Step 2 — Verify', title: 'Agent B Queries Resolver', desc: 'Agent B sends Agent A&apos;s ECZ-ID to Resolver. Returns current status, trust score, active attestations, and capability confirmation.' },
                  { step: 'Step 3 — Attested Exchange', title: 'Verified Interaction', desc: 'Interaction proceeds with verified identities on both sides. Immutable record links both agents, the data exchanged, and the outcome.' },
                ].map((item) => (
                  <div key={item.step} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <div className="text-xs font-semibold text-ecz-500 uppercase tracking-widest mb-2">{item.step}</div>
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/start-with-agents" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Learn more about agent identity →</Link>
              </div>
            </div>

            {/* Pattern 2 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Custody Chain Transfer</h3>
              <p className="text-sm text-navy-600 mb-4">A product passes through multiple custodians. Each transfer is verified and attested through ECZ-ID.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { step: 'Manufacture', desc: 'Product receives ECZ-ID at creation. Composition, origin, and initial custody recorded with manufacturer identity.' },
                  { step: 'Warehouse', desc: 'Custody transfer to warehouse operator. Condition attested. Chain extended with verified handoff and timestamp.' },
                  { step: 'Transport', desc: 'Custody transfer to logistics provider. Route, vehicle identity, condition monitoring, and handler verification.' },
                  { step: 'Delivery', desc: 'Final custody transfer to end recipient. Complete chain verifiable through Resolver by any authorised party.' },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.step}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/domains/products-custody-risk" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Explore Products, Custody & Risk →</Link>
              </div>
            </div>

            {/* Pattern 3 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">IoT Fleet Attestation</h3>
              <p className="text-sm text-navy-600 mb-4">Thousands of devices reporting telemetry, each with verified identity and firmware attestation.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Device Identity', desc: 'Each device has a hardware-anchored ECZ-ID with firmware attestation, calibration records, and operational boundaries. Identity survives reboots and firmware updates.' },
                  { title: 'Data Provenance', desc: 'Every telemetry reading is traceable to a verified device. Data consumers can check device identity, calibration status, and last attestation time.' },
                  { title: 'Fleet Monitoring', desc: 'Fleet-wide trust score monitoring. Anomaly detection triggers review. Firmware updates carry attestation chains. Decommissioned devices are identity-revoked.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/domains/iot-connected-systems" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Explore IoT & Connected Systems →</Link>
              </div>
            </div>

            {/* Pattern 4 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Autonomous Vehicle Credential Verification</h3>
              <p className="text-sm text-navy-600 mb-4">A robotaxi proves its driving credentials, safety record, and operational domain to a ride-hail platform before accepting passengers.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Vehicle Identity', desc: 'The robotaxi carries the appropriate Road & Freight Mobility passport — for example a Robotaxi Passport — with verified safety status, operational authority, and insurer-legible evidence.' },
                  { title: 'Platform Verification', desc: 'The ride-hail platform queries Resolver to verify identity, current safety attestation, operational domain validity, and insurance coverage before dispatching.' },
                  { title: 'Passenger Trust', desc: 'Passengers see verified identity and safety status in-app. Every trip logged with attested vehicle identity, route verification, and safety event records.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/domains/vehicles-mobility" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Explore Vehicles & Mobility →</Link>
              </div>
            </div>

            {/* Pattern 5 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Drone Mission Attestation</h3>
              <p className="text-sm text-navy-600 mb-4">A D2 commercial drone proves its mission authorisation, geofence compliance, and operator identity before entering controlled airspace.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Mission Identity', desc: 'The drone carries the appropriate D1–D4 Drone Passport with mission plan, corridor authorisation, geofence boundaries, and operator identity link.' },
                  { title: 'UTM Integration', desc: 'Unmanned Traffic Management system verifies drone identity, mission authorisation, and corridor compliance in real time via Resolver.' },
                  { title: 'Data Provenance', desc: 'Survey data, imagery, and sensor readings carry verified drone identity. Clients receive data with full provenance chain from capture to delivery.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/domains/drones-aerial-systems" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Explore Drones & Aerial Systems →</Link>
              </div>
            </div>

            {/* Pattern 6: Humanoid Robot */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Humanoid Robot Deployment Verification</h3>
              <p className="text-sm text-navy-600 mb-4">A service humanoid operating in a hospital proves its identity, safety certifications, and interaction boundaries before deployment using a Public-Space Robot Passport with humanoid profile.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Robot Identity', desc: 'The humanoid carries a Public-Space Robot Passport with humanoid-specific profile (Assured tier). Verified capabilities, interaction boundaries, strength limits, and emergency protocols are attested.' },
                  { title: 'Facility Verification', desc: 'Hospital facility management queries Resolver to verify safety certifications, operational boundaries, and interaction protocols before granting access to patient areas.' },
                  { title: 'Insurance & Audit', desc: 'Insurer queries real-time trust score and safety attestation. Every interaction, movement, and incident is logged with robot identity. Operator accountability is immediate.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/domains/robotics-humanoids" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Explore Robotics & Humanoids →</Link>
              </div>
            </div>

            {/* Pattern 7 */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Multi-Agent Compliance Workflow</h3>
              <p className="text-sm text-navy-600 mb-4">A compliance agent coordinates with research and evidence agents. Each carries verified identity and delegation chains.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Primary Agent', desc: 'The compliance agent holds the primary ECZ-ID and delegates specific tasks to specialised subagents with scoped permissions and time-bounded delegation.' },
                  { title: 'Delegated Agents', desc: 'Research and evidence agents carry delegated ECZ-ID credentials. Every action traces back through the delegation chain to the primary agent and its operator.' },
                  { title: 'Audit Trail', desc: 'Complete compliance workflow is auditable: every agent, every action, every data source, every decision—all linked to verified identities with timestamps.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h4 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/agent-starter-kits" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">Browse Agent Starter Kits →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Kit Examples */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Getting Started"
            title="From Gallery to Production"
            description="Every pattern shown here is implementable with ECZ-ID starter kits and the TrustOps provisioning platform."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h4 className="font-semibold text-navy-900 mb-2">Agent Starter Kits</h4>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">Pre-built templates with ECZ-ID identity hooks. Start building verified agents in minutes.</p>
              <Link href="/agent-starter-kits" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Browse Starter Kits →</Link>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h4 className="font-semibold text-navy-900 mb-2">Developer Onboarding</h4>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">Step-by-step guide from first contact to production deployment.</p>
              <Link href="/developer-onboarding" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Start Onboarding →</Link>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h4 className="font-semibold text-navy-900 mb-2">Verification Model</h4>
              <p className="text-sm text-navy-600 leading-relaxed mb-3">Deep dive into the three layers of ECZ-ID verification.</p>
              <Link href="/verification-model" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Learn the Model →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="See It For Real"
        description="These patterns are live in production. Verify real ECZ-IDs through Resolver, or provision your own through TrustOps."
        primaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        secondaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
