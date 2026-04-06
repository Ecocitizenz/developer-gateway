import Hero from '@/components/Hero';
import SectionIntro from '@/components/SectionIntro';
import DomainCard from '@/components/DomainCard';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import domains from '@/data/domains.json';
import starterKits from '@/data/starter-kits.json';

export default function HomePage() {
  const featuredKits = starterKits.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Agents-First Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Start Here"
            title="Discover, Build, Credential, Verify, Deploy"
            description="This is where you discover ECZ-ID-backed agent patterns, build with guided starter kits, credential through TrustOps, verify through Resolver, and deploy anywhere. Designed for serious deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/agent-starter-kits" className="group p-6 bg-navy-800 rounded-xl text-white hover:bg-navy-700 transition-colors">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="font-semibold mb-1">Choose a Starter Kit</h3>
              <p className="text-sm text-ecz-300">10 guided kits with built-in credentialing checkpoints.</p>
            </Link>

            <Link href="/build-your-own-agent" className="group p-6 bg-ecz-50 rounded-xl hover:bg-ecz-100 transition-colors border border-ecz-200">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 border border-ecz-200">
                <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Build Your Own</h3>
              <p className="text-sm text-navy-500">Master guided flow: archetype → stack → credential → deploy.</p>
            </Link>

            <Link href="/agent-directory" className="group p-6 bg-ecz-50 rounded-xl hover:bg-ecz-100 transition-colors border border-ecz-200">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 border border-ecz-200">
                <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Agent Directory</h3>
              <p className="text-sm text-navy-500">Browse archetypes with required passports and starter kit links.</p>
            </Link>

            <Link href="/start-with-agents" className="group p-6 bg-ecz-50 rounded-xl hover:bg-ecz-100 transition-colors border border-ecz-200">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 border border-ecz-200">
                <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Why Agents First</h3>
              <p className="text-sm text-navy-500">The case for commercially legible, resolver-verifiable agents.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Starter Kits */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Quick Start"
            title="Featured Starter Kits"
            description="Each kit guides you through a complete journey with a built-in TrustOps credentialing checkpoint. Build, credential, verify, and deploy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredKits.map((kit) => (
              <Link key={kit.id} href={kit.route} className="group p-5 bg-white rounded-xl border border-ecz-200 hover:border-ecz-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${
                    kit.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    kit.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>{kit.difficulty}</span>
                  <span className="text-xs text-navy-400">{kit.estimatedTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-navy-900 mb-1 group-hover:text-ecz-700 transition-colors">{kit.name}</h3>
                <p className="text-xs text-navy-500 leading-relaxed mb-3">{kit.description.slice(0, 120)}...</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {kit.requiredPassports.slice(0, 2).map((p: string) => (
                    <span key={p} className="px-1.5 py-0.5 bg-red-50 text-red-700 text-[10px] rounded border border-red-200">{p}</span>
                  ))}
                </div>
                <span className="text-xs text-ecz-600 font-medium group-hover:text-navy-800">Choose This Kit →</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/agent-starter-kits" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
              View all 10 starter kits →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Updated */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="How It Works"
            title="The Complete Journey"
            description="From discovery to deployment. The midpoint credentialing model ensures your agent is built with verified identity from the start."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Discover & Build', desc: 'Choose a kit, begin initial setup', color: 'bg-navy-800' },
              { step: '2', title: 'Credential Checkpoint', desc: 'Pause to acquire trust objects', color: 'bg-amber-500' },
              { step: '3', title: 'Acquire in TrustOps', desc: 'Get passports, API keys, manifests', color: 'bg-amber-500' },
              { step: '4', title: 'Return & Complete', desc: 'Inject credentials, finish integration', color: 'bg-emerald-600' },
              { step: '5', title: 'Verify & Deploy', desc: 'Resolver verification, deploy anywhere', color: 'bg-navy-800' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-navy-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Breadth */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Full Breadth"
            title="Every Domain. One Identity Layer."
            description="From AI agents to cargo containers, from robotaxis to industrial robots—ECZ-ID provides verified identity across the entire machine economy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain) => (
              <DomainCard
                key={domain.id}
                name={domain.name}
                slug={domain.slug}
                shortDescription={domain.shortDescription}
                icon={domain.icon}
                entityCount={domain.entities.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Themes: Humanoids & Drones */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Flagship Themes"
            title="Where Trust Infrastructure Changes Everything"
            description="Beyond agents, ECZ-ID addresses the hardest identity problems in the machine economy. Humanoid robots and autonomous aerial systems represent frontier categories where verified identity is not optional—it is essential for safety, insurance, and public trust."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Humanoids Panel */}
            <Link href="/domains/robotics-humanoids" className="group p-8 bg-navy-800 rounded-xl text-white hover:bg-navy-700 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                <span className="text-xs font-medium tracking-wide">HUMANOID IDENTITY</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Humanoid Robots</h3>
              <p className="text-sm text-ecz-300 leading-relaxed mb-4">
                The most complex identity challenge in robotics. Human-form robots interacting with people need verified capabilities, interaction boundaries, operator accountability, and insurer-legible safety attestation. ECZ-ID credentials humanoids through environment-based robot passports with humanoid-specific profiles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">Industrial Humanoids</span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">Service Humanoids</span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">Companion Humanoids</span>
              </div>
              <span className="text-sm text-ecz-300 group-hover:text-white font-medium">Explore Robotics &amp; Humanoids →</span>
            </Link>

            {/* Drones Panel */}
            <Link href="/domains/drones-aerial-systems" className="group p-8 bg-sky-900 rounded-xl text-white hover:bg-sky-800 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                <span className="text-xs font-medium tracking-wide">AERIAL IDENTITY</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Drones &amp; Aerial Systems</h3>
              <p className="text-sm text-sky-200 leading-relaxed mb-4">
                The sky is becoming infrastructure. From micro UAVs to autonomous cargo aircraft, every aerial system needs Remote ID-aligned identity, UTM integration, and insurer-legible safety records. ECZ-ID covers all four canonical drone classes with mandate-grade compliance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">D1 Drone</span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">D2 Drone</span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">D3 Autonomous</span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs rounded-full">D4 Heavy-lift</span>
              </div>
              <span className="text-sm text-sky-200 group-hover:text-white font-medium">Explore Drones &amp; Aerial →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ECZ-ID */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Why ECZ-ID"
            title="Infrastructure That Matters"
            description="ECZ-ID produces resolver-verifiable, commercially legible agents designed for serious deployment. Easier to trust, approve, and verify."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Resolver-Verifiable', desc: 'Every identity claim is verifiable through Resolver. No trust-by-assertion. Any party can verify independently.' },
              { title: 'Domain-Complete', desc: 'Nine domains, from AI agents to cargo containers. One consistent identity model across the machine economy.' },
              { title: 'Infrastructure-Grade', desc: 'Built for production. Built for scale. Designed for the systems that matter in serious deployment.' },
              { title: 'Commercially Legible', desc: 'Agents that are easier to trust, approve, insure, and verify. Designed for commerce, not just technology.' },
              { title: 'Agent-Native', desc: 'Designed from day one for autonomous agents that need to prove who they are in every interaction.' },
              { title: 'Standards-Aligned', desc: 'Compatible with EU DPP, ISO standards, and emerging machine identity frameworks.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-ecz-200">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/why-serious-buyers-care" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
              Read the full case for ECZ-ID →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build?"
        description="Choose a starter kit, follow the guided flow, credential through TrustOps, and deploy your resolver-verifiable agent anywhere."
        primaryCTA={{ label: 'Choose a Starter Kit', href: '/agent-starter-kits' }}
        secondaryCTA={{ label: 'Continue in TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
