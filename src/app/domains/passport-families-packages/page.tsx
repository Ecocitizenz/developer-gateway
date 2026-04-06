import type { Metadata } from 'next';
import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';
import CTASection from '@/components/CTASection';
import passportData from '@/data/passports.json';
import packageData from '@/data/packages.json';

export const metadata: Metadata = {
  title: 'Passport Families & Packages — ECZ-ID',
  description: 'Seven canonical ECZ-ID categories, 33 child passports, and 25 commercial acquisition objects for every ECZ-ID use case. Complete system explanation including KYA Ready Pack™ and ECZ-ID Insurability Readiness™.',
};

const domainLinks: Record<string, string> = {
  'APIs, AI, Data & Software': '/domains/apis-ai-data-software',
  'Platforms, Marketplaces & Control Overlays': '/domains/platforms-marketplaces-control-overlays',
  'IoT & Connected Systems': '/domains/iot-connected-systems',
  'Robotics & Humanoids': '/domains/robotics-humanoids',
  'Products, Custody & Risk': '/domains/products-custody-risk',
  'Trade, Shipping & Infrastructure': '/domains/trade-shipping-infrastructure',
  'Vehicles & Mobility': '/domains/vehicles-mobility',
  'Drones & Aerial Systems': '/domains/drones-aerial-systems',
};

export default function PassportFamiliesPackagesPage() {
  const families = passportData.families;
  const corePackages = packageData.corePackages;
  const kyaPack = packageData.kyaReadyPack;
  const advancedServices = packageData.advancedInfrastructureServices;

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
              Passport Families &amp; Packages
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              ECZ-ID organises identity into <strong>7 canonical passport categories</strong> containing <strong>33 child passports</strong> total.
              There are <strong>25 packages</strong> (17 core + 1 KYA Ready Pack™ + 7 advanced infrastructure services) to accelerate acquisition.
              The <strong>ECZ-ID Insurability Readiness™</strong> is a derived add-on on the parent passport—not a package.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#passport-families" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">View Passport Categories ↓</a>
              <span className="text-ecz-300">·</span>
              <a href="#packages" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">View Packages ↓</a>
              <span className="text-ecz-300">·</span>
              <a href="#system-explanation" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Full System Explanation ↓</a>
              <span className="text-ecz-300">·</span>
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">
                Start Onboarding ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1</div>
              <div className="text-sm text-ecz-300 mt-1">Parent Passport</div>
            </div>
            <div>
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-ecz-300 mt-1">Passport Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold">33</div>
              <div className="text-sm text-ecz-300 mt-1">Child Passports</div>
            </div>
            <div>
              <div className="text-3xl font-bold">25</div>
              <div className="text-sm text-ecz-300 mt-1">Packages Total</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1</div>
              <div className="text-sm text-ecz-300 mt-1">Derived Add-On</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full System Explanation */}
      <section id="system-explanation" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="How ECZ-ID Works"
            title="The Complete ECZ-ID Identity System"
            description="Understanding the full structure: parent passport, child passports, families, packages, derived add-ons, and how TrustOps and Resolver fit together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">ECZ-ID Business Passport™ (Parent)</h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Every organisation starts with one parent passport—the <strong>ECZ-ID Business Passport™</strong>. This is the root credential.
                All child passports, packages, and derived add-ons attach to this parent. It is provisioned through TrustOps.
              </p>
            </div>

            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">33 Child Passports (7 Families)</h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Child passports are the specific identity credentials for each entity type. There are 33 total, organised into 7 canonical families.
                Each child passport belongs to exactly one family. You acquire child passports through packages via TrustOps.
              </p>
            </div>

            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">25 Packages (Acquisition Paths)</h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Packages are the commercial acquisition objects—how you buy access to child passports.
                <strong>17 core packages</strong> cover corridor-relevant combinations of child passports. The <strong>KYA Ready Pack™</strong> is the dedicated agent-first onboarding package. <strong>7 advanced infrastructure services</strong> extend the system for enterprise, legal, audit, underwriting, telematics, analytics, and connector needs.
              </p>
            </div>

            <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">ECZ-ID Insurability Readiness™ (Derived Add-On)</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Not a package.</strong> Not purchasable. Not manually editable. This is automatically derived from your trust posture,
                compliance evidence, and verification state. It indicates readiness for insurer engagement and attaches to the parent passport.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-navy-50 rounded-xl border border-navy-200">
              <h4 className="font-semibold text-navy-900 mb-2">🏗️ This Site (GitHub Gateway)</h4>
              <p className="text-sm text-navy-600 leading-relaxed">Discovery, onboarding guidance, build scaffolds, and starter kits. Explains but does not provision.</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-navy-900 mb-2">⚡ TrustOps</h4>
              <p className="text-sm text-navy-600 leading-relaxed">Provisioning, pricing, sales, checkout, credentialing, and ongoing credential management. The authority plane.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-navy-900 mb-2">🔍 Resolver</h4>
              <p className="text-sm text-navy-600 leading-relaxed">Verification, proof, public badge display, and third-party trust checks. The proof plane.</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-ecz-50 rounded-xl border border-ecz-200">
            <h4 className="font-semibold text-navy-900 mb-3">What Happens After Purchase</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Discover & Choose', desc: 'Browse this gateway. Choose your starter kit or domain path. Understand what passports and packages you need.' },
                { step: '2', title: 'Acquire via TrustOps', desc: 'Go to TrustOps /start. Select packages, complete checkout, and receive your credentials.' },
                { step: '3', title: 'Return & Build', desc: 'Come back here with your credentials. Complete your agent/system build using starter scaffolds.' },
                { step: '4', title: 'Verify & Deploy', desc: 'Submit for verification via Resolver. Receive badges, proof URLs, and deploy to production.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-8 h-8 bg-navy-800 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">{item.step}</div>
                  <h5 className="font-semibold text-navy-900 text-sm mb-1">{item.title}</h5>
                  <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Tiers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Parent Tiers"
            title="Choose the Parent Tier That Unlocks Everything Else"
            description="Every child passport and package attaches to the ECZ-ID Business Passport™. Verified or Assured is required for child passport activation, badge provisioning, and package access."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {passportData.parentPassport.tiers.map((tier) => (
              <div key={tier.name} className="p-6 rounded-xl border border-ecz-200 bg-ecz-50">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-navy-900">{tier.name}</h3>
                  <span className="text-sm font-medium text-ecz-700">{tier.price}</span>
                </div>
                <p className="text-sm text-navy-600 mt-2 leading-relaxed">{tier.description}</p>
                {tier.sku ? <p className="text-xs text-navy-400 mt-2">SKU: {tier.sku}</p> : null}
                <ul className="mt-4 space-y-2">
                  {tier.entitlements.map((item) => (
                    <li key={item} className="text-sm text-navy-700 flex gap-2"><span className="text-ecz-600">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passport Families */}
      <section id="passport-families" className="py-16 md:py-20 bg-ecz-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Passport Families"
            title="Seven Canonical Identity Families — 33 Child Passports"
            description="Each family groups related child passports for a specific entity domain. The Robotics family includes environment-based child passports with humanoid profile support. The Aerial Mobility family covers D1–D4 drone classes only."
          />

          <div className="space-y-6">
            {families.map((family) => (
              <div key={family.id} className="p-6 bg-white rounded-xl border border-ecz-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-800 text-white rounded-lg flex items-center justify-center shrink-0 text-sm font-bold">
                    {family.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">{family.name}</h3>
                    <p className="text-sm text-navy-600 leading-relaxed mb-4">{family.description}</p>

                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-2">Child Passports ({family.childPassports.length})</h4>
                      <div className="flex flex-wrap gap-2">
                        {family.childPassports.map((cp) => (
                          <span key={cp} className="px-2.5 py-1 bg-ecz-50 text-navy-700 text-xs font-medium rounded-full border border-ecz-200">
                            {cp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {family.applicableDomains && (
                      <div className="pt-3 border-t border-ecz-100">
                        <h4 className="text-xs font-medium text-navy-400 uppercase tracking-wider mb-2">Applicable Domains</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {family.applicableDomains.map((dom) => {
                            const href = domainLinks[dom];
                            return href ? (
                              <Link key={dom} href={href} className="px-2 py-0.5 bg-ecz-50 text-navy-600 text-xs rounded border border-ecz-200 hover:border-ecz-400 hover:text-navy-900 transition-colors">
                                {dom} →
                              </Link>
                            ) : (
                              <span key={dom} className="px-2 py-0.5 bg-ecz-50 text-navy-500 text-xs rounded border border-ecz-200">{dom}</span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {(family as any).humanoidNote && (
                      <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-xs text-amber-800">{(family as any).humanoidNote}</p>
                      </div>
                    )}

                    {(family as any).droneNote && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-blue-800">{(family as any).droneNote}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECZ-ID Insurability Readiness™ */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-amber-900 mb-3">ECZ-ID Insurability Readiness™</h3>
            <p className="text-sm text-amber-800 leading-relaxed mb-2">
              {passportData.derivedAddOn.description}
            </p>
            <p className="text-xs text-amber-700 font-medium">
              {passportData.derivedAddOn.note}
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Packages"
            title="25 Packages — Your Path to Production"
            description={`${packageData.summary.breakdown.corePackages} core packages + 1 KYA Ready Pack™ + ${packageData.summary.breakdown.advancedInfrastructureServices} advanced infrastructure services = ${packageData.summary.totalPackages} total. All provisioning and pricing through TrustOps.`}
          />

          {/* Core Packages */}
          <h3 className="text-lg font-bold text-navy-900 mb-4">17 Core Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {corePackages.map((pkg) => (
              <div key={pkg.id} className="p-5 bg-ecz-50 rounded-xl border border-ecz-200">
                <div className="text-xs text-ecz-600 font-medium mb-1">{pkg.family}</div>
                <h4 className="text-base font-semibold text-navy-900 mb-2">{pkg.name}</h4>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{pkg.description}</p>
                <div className="text-xs text-navy-500">
                  <span className="font-medium">Ideal for:</span> {pkg.idealFor}
                </div>
              </div>
            ))}
          </div>

          {/* KYA Ready Pack */}
          <h3 className="text-lg font-bold text-navy-900 mb-4">KYA Ready Pack™</h3>
          <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 mb-12">
            <h4 className="text-base font-semibold text-navy-900 mb-2">{kyaPack.name}</h4>
            <p className="text-sm text-navy-600 leading-relaxed mb-3">{kyaPack.description}</p>
            <div className="text-xs text-navy-500">
              <span className="font-medium">Target audience:</span> {kyaPack.targetAudience}
            </div>
            <p className="text-xs text-emerald-700 mt-2 font-medium">{kyaPack.note}</p>
          </div>

          {/* Advanced Infrastructure Services */}
          <h3 className="text-lg font-bold text-navy-900 mb-4">7 Advanced Infrastructure Services / Enterprise Accelerators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advancedServices.map((svc) => (
              <div key={svc.id} className="p-5 bg-navy-50 rounded-xl border border-navy-200">
                <h4 className="text-base font-semibold text-navy-900 mb-2">{svc.name}</h4>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{svc.description}</p>
                <div className="text-xs text-navy-500">
                  <span className="font-medium">Ideal for:</span> {svc.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Selection Guide"
            title="How to Choose Your Path"
            description="Start with what you're building. The entity type determines the relevant passport category. The deployment scope determines the package."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { q: 'Building AI agents?', a: 'Start with the Digital & Operational category. KYA Ready Pack™ and Developer Payout Pack are the fastest agent-first onboarding paths.', link: '/start-with-agents', linkLabel: 'Start with Agents →' },
              { q: 'Deploying robots?', a: 'The Robotics category covers Industrial, Public-Space, and Domestic environments. Humanoids credential within the appropriate environment passport.', link: '/domains/robotics-humanoids', linkLabel: 'Robotics & Humanoids →' },
              { q: 'Operating drones?', a: 'The Aerial Mobility category covers D1–D4 classes. Choose the D1–D4 Drone Passport path that matches your aircraft class, then use package selection in TrustOps where aerial operations overlap with trade, custody, or infrastructure requirements.', link: '/domains/drones-aerial-systems', linkLabel: 'Drones & Aerial →' },
              { q: 'Enterprise multi-domain?', a: 'Use the advanced infrastructure services where you need policy-as-code, underwriting, connector distribution, telematics, SBOM analytics, legal automation, or public bundle publishing.', link: '/domains', linkLabel: 'Explore All Domains →' },
            ].map((item) => (
              <div key={item.q} className="p-6 bg-white rounded-xl border border-ecz-200">
                <h4 className="font-semibold text-navy-900 mb-2">{item.q}</h4>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{item.a}</p>
                <Link href={item.link} className="text-sm text-ecz-600 hover:text-navy-800 font-medium">{item.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Domain */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Need a Custom Configuration?</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                These packages cover common patterns, but every deployment is different. TrustOps can configure custom passport bundles for any combination of domains, entity types, and scale requirements.
              </p>
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-ecz-600 hover:text-navy-800 font-medium">
                Discuss custom configuration via TrustOps ↗
              </a>
            </div>
            <div className="p-8 bg-ecz-50 rounded-xl border border-ecz-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Explore by Domain</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Each domain page shows how ECZ-ID identity works for specific entity types and use cases.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Agents & Software', slug: 'apis-ai-data-software' },
                  { name: 'IoT', slug: 'iot-connected-systems' },
                  { name: 'Robotics', slug: 'robotics-humanoids' },
                  { name: 'Vehicles', slug: 'vehicles-mobility' },
                  { name: 'Drones', slug: 'drones-aerial-systems' },
                  { name: 'Trade & Infrastructure', slug: 'trade-shipping-infrastructure' },
                  { name: 'Products & Custody', slug: 'products-custody-risk' },
                  { name: 'Platforms', slug: 'platforms-marketplaces-control-overlays' },
                ].map((d) => (
                  <Link key={d.slug} href={`/domains/${d.slug}`} className="px-3 py-1.5 bg-white text-navy-600 text-xs rounded-full border border-ecz-200 hover:border-ecz-400 hover:text-navy-900 transition-colors">
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Choose Your Package?"
        description="All provisioning, pricing, and package configuration happens through TrustOps. Start onboarding today."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Start with Agents', href: '/start-with-agents' }}
        variant="dark"
      />
    </>
  );
}
