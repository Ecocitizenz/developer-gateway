import type { Metadata } from 'next';
import SectionIntro from '@/components/SectionIntro';
import DomainCard from '@/components/DomainCard';
import CTASection from '@/components/CTASection';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'All Domains',
  description: 'ECZ-ID provides verified identity across nine domains: AI agents, IoT devices, products, robotics, vehicles, drones, trade infrastructure, platforms, and passport families.',
};

export default function DomainsIndexPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">Domains</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Every Domain. One Identity Layer.
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              ECZ-ID spans the entire machine economy. From AI agents to cargo containers, from robotaxis to industrial controllers—every entity type gets verified, attestable identity through a single, consistent infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <CTASection
        title="Start with Any Domain"
        description="Provision identities through TrustOps. Verify through Resolver. Every domain, same infrastructure."
        primaryCTA={{ label: 'Go to TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        secondaryCTA={{ label: 'Start with Agents', href: '/start-with-agents' }}
        variant="dark"
      />
    </>
  );
}
