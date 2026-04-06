import Link from 'next/link';
import SectionIntro from './SectionIntro';
import CTASection from './CTASection';

interface Entity {
  name: string;
  description: string;
}

interface DomainPageLayoutProps {
  name: string;
  description: string;
  entities: Entity[];
  relatedDomains?: { name: string; slug: string }[];
  useCases?: { title: string; description: string }[];
  relatedPassports?: { name: string; description: string; link?: string }[];
}

export default function DomainPageLayout({ name, description, entities, relatedDomains, useCases, relatedPassports }: DomainPageLayoutProps) {
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
              {name}
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm">
                Start Onboarding
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm">
                Verify via Resolver
                <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Entities */}
      {entities.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Entity Types"
              title={`What ECZ-ID Covers in ${name}`}
              description="Each entity type receives a unique, verified identity through ECZ-ID. Here's what's covered in this domain."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {entities.map((entity) => (
                <div key={entity.name} className="p-6 bg-ecz-50 rounded-xl border border-ecz-200">
                  <h3 className="font-semibold text-navy-900 mb-2">{entity.name}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{entity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {useCases && useCases.length > 0 && (
        <section className="py-16 md:py-20 bg-ecz-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Use Cases"
              title="How Organisations Use ECZ-ID Here"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="p-6 bg-white rounded-xl border border-ecz-200">
                  <h3 className="font-semibold text-navy-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Identity Model */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Identity Model"
            title="How Verification Works"
            description="Every entity in this domain follows the same verification model: provision through TrustOps, verify through Resolver, audit through provenance trails."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Provision</h3>
              <p className="text-sm text-navy-500">Register identity and define capabilities through TrustOps.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Verify</h3>
              <p className="text-sm text-navy-500">Any party can verify identity and attestations through Resolver.</p>
            </div>
            <div className="p-6 bg-ecz-50 rounded-xl border border-ecz-200 text-center">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Audit</h3>
              <p className="text-sm text-navy-500">Complete provenance trails for every action and handoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Passport Families */}
      {relatedPassports && relatedPassports.length > 0 && (
        <section className="py-16 md:py-20 bg-ecz-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Passport Families"
              title="Relevant Identity Passports"
              description="These passport families provide the structured identity models for this domain."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPassports.map((pp) => (
                <div key={pp.name} className="p-5 bg-white rounded-xl border border-ecz-200">
                  <h4 className="font-semibold text-navy-900 mb-1">{pp.name}</h4>
                  <p className="text-sm text-navy-600 leading-relaxed mb-2">{pp.description}</p>
                  {pp.link && (
                    <Link href={pp.link} className="text-sm text-ecz-600 hover:text-navy-800 font-medium">Learn more →</Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/domains/passport-families-packages" className="text-sm text-ecz-600 hover:text-navy-800 font-medium">View all passport families →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Domains */}
      {relatedDomains && relatedDomains.length > 0 && (
        <section className={`py-16 md:py-20 ${relatedPassports && relatedPassports.length > 0 ? 'bg-white' : 'bg-ecz-50/50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Related"
              title="Related Domains"
              description="Identity doesn't stop at domain boundaries. These domains frequently interact with this one."
            />

            <div className="flex flex-wrap gap-3">
              {relatedDomains.map((rd) => (
                <Link
                  key={rd.slug}
                  href={`/domains/${rd.slug}`}
                  className="px-4 py-2.5 bg-white rounded-lg border border-ecz-200 text-sm text-navy-700 hover:border-ecz-400 hover:text-navy-900 transition-colors"
                >
                  {rd.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore More */}
      <section className="py-12 bg-white border-t border-ecz-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-navy-500 font-medium">Explore more:</span>
            <Link href="/start-with-agents" className="text-ecz-600 hover:text-navy-800 font-medium">Start with Agents →</Link>
            <Link href="/agent-starter-kits" className="text-ecz-600 hover:text-navy-800 font-medium">Starter Kits →</Link>
            <Link href="/domains/passport-families-packages" className="text-ecz-600 hover:text-navy-800 font-medium">Passport Families →</Link>
            <Link href="/trust-gallery" className="text-ecz-600 hover:text-navy-800 font-medium">Trust Gallery →</Link>
            <Link href="/developer-onboarding" className="text-ecz-600 hover:text-navy-800 font-medium">Developer Onboarding →</Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Deploy Identity in ${name}?`}
        description="Provision identities through TrustOps. Verify through Resolver. Start with agents or explore passport families."
        primaryCTA={{ label: 'Begin Onboarding', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Verify via Resolver', href: 'https://resolver.ecocitizenz.org', external: true }}
        variant="dark"
      />
    </>
  );
}
