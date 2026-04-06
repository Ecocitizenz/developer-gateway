import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import ProofPanel from '@/components/ProofPanel';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Developer Onboarding | ECZ-ID Developer Gateway',
  description: 'Understand the complete developer journey: discover and build here, credential through TrustOps, verify through Resolver, deploy anywhere.',
};

export default function DeveloperOnboardingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Developer Onboarding</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Developer Onboarding
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              This site is your discovery and build gateway. TrustOps is where you acquire credentials. Resolver is where you prove identity. Here&apos;s how the complete journey works.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/agent-starter-kits" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Choose a Starter Kit
              </Link>
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Continue in TrustOps
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Surfaces */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The System"
            title="Three Surfaces, One Journey"
            description="ECZ-ID operates across three distinct surfaces. Understanding where each responsibility lives is the key to a smooth developer experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-ecz-50 rounded-2xl border border-ecz-200">
              <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Developer Gateway</h3>
              <p className="text-xs font-semibold text-ecz-600 uppercase tracking-wider mb-3">You Are Here</p>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                This is your discovery and build surface. Explore agent archetypes, browse starter kits, follow guided build flows, and understand the complete ECZ-ID domain map. This is where you start and where you return after credentialing.
              </p>
              <ul className="space-y-2 text-xs text-navy-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ecz-500 rounded-full"></span> Discover agent patterns and starter kits</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ecz-500 rounded-full"></span> Follow guided build flows</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ecz-500 rounded-full"></span> Identify required trust objects</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ecz-500 rounded-full"></span> Complete integration after credentialing</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-b from-amber-50 to-amber-50/50 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">TrustOps</h3>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">Credentialing Checkpoint</p>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                TrustOps is the provisioning authority. This is where you acquire your ECZ-ID passports, agent credentials, API keys, and production configurations. All credentialing, sales, and credential lifecycle management happens through TrustOps.
              </p>
              <ul className="space-y-2 text-xs text-navy-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Acquire ECZ-ID Business Passport</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Provision Agent Credentials</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Receive API keys and manifests</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Manage credential lifecycle</li>
              </ul>
            </div>

            <div className="p-8 bg-ecz-50 rounded-2xl border border-ecz-200">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Resolver</h3>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3">Verification Surface</p>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Resolver is the public verification surface. Any party can verify any ECZ-ID without needing an account. This is where identity claims are proven, trust scores are queried, and provenance chains are traced.
              </p>
              <ul className="space-y-2 text-xs text-navy-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Verify any ECZ-ID identity</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Query trust scores</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Trace provenance chains</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Public, no account required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full System Explanation */}
      <section className="py-16 md:py-20 bg-ecz-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The ECZ-ID System"
            title="Understanding the Complete Identity System"
            description="Before you build, understand what the system contains and how the pieces fit together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">ECZ-ID Business Passport™</h3>
              <p className="text-xs text-navy-600 leading-relaxed">The parent passport. Root credential for every organisation. All child passports, packages, and derived add-ons attach here.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">7 Categories / 33 Child Passports</h3>
              <p className="text-xs text-navy-600 leading-relaxed">Digital & Operational, Product, Risk & Transfer, Robotics, Road & Freight Mobility, Aerial Mobility, Infrastructure-Grade, and Control & Trust Overlays.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">25 Packages</h3>
              <p className="text-xs text-navy-600 leading-relaxed">17 core packages + 1 KYA Ready Pack™ + 7 advanced infrastructure services. These are the commercial acquisition objects shown in TrustOps for activating child passports and enterprise extensions.</p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2 text-sm">ECZ-ID Insurability Readiness™</h3>
              <p className="text-xs text-amber-800 leading-relaxed">Derived add-on. NOT a package. Auto-computed from trust posture. Indicates readiness for insurer engagement.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">Badges & Public Proof</h3>
              <p className="text-xs text-navy-600 leading-relaxed">After verification, entities receive resolver-verifiable badges—public proof URLs that anyone can check without an account.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-ecz-200">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">Deployment</h3>
              <p className="text-xs text-navy-600 leading-relaxed">After credentialing and verification, deploy to any infrastructure. ECZ-ID identity travels with your entity. No vendor lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Midpoint Credentialing Model */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Key Concept"
            title="The Midpoint Credentialing Model"
            description="Why credentialing at the midpoint produces better agents than credential-after-build."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">Why Not Build First, Credential Later?</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Agents built without identity infrastructure require retrofitting. Identity hooks bolted onto finished agents are weaker, harder to maintain, and produce less trustworthy audit trails. The midpoint model ensures identity is woven into the architecture from the start.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">Why Not Credential First, Build Later?</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Developers need to understand what they&apos;re building before they can specify the correct trust objects. The initial build steps clarify the agent&apos;s architecture, boundaries, and capabilities—information needed for accurate credentialing.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">The Midpoint Is the Sweet Spot</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  By the midpoint, you understand your agent&apos;s needs. You can specify exactly which passports and capabilities are required. The remaining build steps then integrate those real credentials into the agent&apos;s architecture, producing a genuinely verified, commercially legible agent.
                </p>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="bg-white rounded-2xl border border-ecz-200 p-8">
              <h3 className="font-semibold text-navy-900 mb-6">The Complete Journey</h3>
              <div className="space-y-4">
                {[
                  { step: '1', label: 'Discover', desc: 'Find an agent archetype or starter kit', surface: 'Developer Gateway', color: 'bg-navy-800' },
                  { step: '2', label: 'Understand', desc: 'Learn what it builds, who it\'s for, and what trust objects are needed', surface: 'Developer Gateway', color: 'bg-navy-800' },
                  { step: '3', label: 'Begin Building', desc: 'Clone the kit, install dependencies, configure initial setup', surface: 'Developer Gateway', color: 'bg-navy-800' },
                  { step: '4', label: 'Credentialing Checkpoint', desc: 'Pause at the designed midpoint to acquire trust objects', surface: 'TrustOps', color: 'bg-amber-500' },
                  { step: '5', label: 'Acquire Credentials', desc: 'Get passports, agent credentials, API keys, manifests', surface: 'TrustOps', color: 'bg-amber-500' },
                  { step: '6', label: 'Return & Complete', desc: 'Inject credentials, wire identity hooks, test in sandbox', surface: 'Developer Gateway', color: 'bg-navy-800' },
                  { step: '7', label: 'Verify', desc: 'Prove identity through Resolver, check trust scores', surface: 'Resolver', color: 'bg-emerald-600' },
                  { step: '8', label: 'Deploy Anywhere', desc: 'Deploy your resolver-verifiable agent to any infrastructure', surface: 'Your Infrastructure', color: 'bg-navy-800' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className={`w-7 h-7 ${item.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-navy-800">{item.label}</div>
                      <div className="text-xs text-navy-500">{item.desc}</div>
                      <div className="text-xs text-ecz-600 mt-0.5">{item.surface}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Comes Back from TrustOps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Credentials"
            title="What Comes Back from TrustOps"
            description="After credentialing in TrustOps, you return with concrete artefacts that integrate into your agent."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Agent ECZ-ID', desc: 'A unique, resolver-verifiable identity string for each agent. This is the agent\'s permanent identity anchor.' },
              { title: 'Credential Manifest', desc: 'JSON configuration containing capability attestations, operational boundaries, and delegation permissions.' },
              { title: 'Production API Keys', desc: 'ECZ-ID API keys for identity context injection, verification hooks, and audit trail generation.' },
              { title: 'Trust Score Baseline', desc: 'Initial trust score configuration. Scores are earned through operational history with real credentials.' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Resume */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionIntro
                eyebrow="After Credentialing"
                title="How to Resume and Finish the Build"
                description="After acquiring credentials from TrustOps, you return to the Developer Gateway to complete integration."
              />

              <div className="space-y-5">
                {[
                  { title: 'Inject Your Credentials', desc: 'Add Agent ECZ-ID, API keys, and credential manifest to your agent configuration. Each starter kit specifies exactly where these go.' },
                  { title: 'Wire Identity Hooks', desc: 'Connect ECZ-ID identity context injection to your agent\'s action pipeline. Every action gets verified identity context automatically.' },
                  { title: 'Test in Sandbox', desc: 'Run your complete agent in the ECZ-ID sandbox environment. Verify identity flows, check provenance chains, and validate audit trails.' },
                  { title: 'Verify Through Resolver', desc: 'Use Resolver to verify your agent\'s identity, check trust scores, and trace provenance chains end-to-end.' },
                  { title: 'Deploy to Production', desc: 'Deploy your resolver-verifiable agent to any infrastructure. ECZ-ID identity travels with your agent.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                    <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <ProofPanel
                title="What You Need to Get Started"
                description="Prerequisites for the ECZ-ID developer experience."
                steps={[
                  { label: 'A Use Case', detail: 'Know what you want to build. Agent? Device integration? Product passport? This guides your starter kit and package choice.' },
                  { label: 'Python 3.10+ or Node 18+', detail: 'The ECZ-ID SDK requires Python 3.10+ (Node/TypeScript support coming).' },
                  { label: 'TrustOps Account', detail: 'All credentialing starts at TrustOps. You will acquire this at the midpoint credentialing checkpoint.' },
                ]}
              />

              <ProofPanel
                title="SDK Capabilities"
                description="The ECZ-ID SDK handles identity complexity so you can focus on building."
                steps={[
                  { label: 'Identity Management', detail: 'Provision, update, and manage entity identities programmatically. Full lifecycle support.' },
                  { label: 'Trust Context Injection', detail: 'Automatic injection of verified identity context into every action. Zero-config for common patterns.' },
                  { label: 'Audit Trail Generation', detail: 'Provenance-tracked audit logging for every action. Compliance-ready from the first line of code.' },
                  { label: 'Verification Hooks', detail: 'Call Resolver to verify other entities in real time. Async and sync patterns supported.' },
                  { label: 'Delegation Support', detail: 'Create and manage delegation chains for subagent architectures. Scoped permissions and time-bounded.' },
                ]}
              />

              <div className="p-6 bg-navy-800 rounded-xl text-white">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-ecz-300 leading-relaxed mb-4">
                  Developer support is available through TrustOps. Architecture guidance, integration patterns, deployment planning, and custom configurations.
                </p>
                <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white font-medium hover:text-ecz-200 transition-colors">
                  Contact via TrustOps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Next Steps" title="Where to Go from Here" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Agent Starter Kits', desc: 'Pre-built templates with the complete guided flow.', href: '/agent-starter-kits' },
              { title: 'Build Your Own', desc: 'Master guided flow for custom agent builds.', href: '/build-your-own-agent' },
              { title: 'Agent Directory', desc: 'Browse agent archetypes and find your pattern.', href: '/agent-directory' },
              { title: 'Trust Gallery', desc: 'See verification patterns in action.', href: '/trust-gallery' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200 hover:border-ecz-400 transition-colors block">
                <h4 className="font-semibold text-navy-900 mb-1">{item.title}</h4>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Journey?"
        description="Choose a starter kit to begin, or credential directly through TrustOps."
        primaryCTA={{ label: 'Choose a Starter Kit', href: '/agent-starter-kits' }}
        secondaryCTA={{ label: 'Continue in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
