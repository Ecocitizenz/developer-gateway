import type { Metadata } from 'next';
import DomainPageLayout from '@/components/DomainPageLayout';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Platforms, Marketplaces & Control Overlays',
  description: 'Trust overlays for platforms, marketplaces, and multi-party coordination systems through ECZ-ID verified identity.',
};

export default function PlatformsMarketplacesPage() {
  const domain = domains.find(d => d.id === 'platforms-marketplaces-control-overlays')!;
  return (
    <DomainPageLayout
      name={domain.name}
      description={domain.description}
      entities={domain.entities}
      relatedDomains={[
        { name: 'APIs, AI, Data & Software', slug: 'apis-ai-data-software' },
        { name: 'Products, Custody & Risk', slug: 'products-custody-risk' },
        { name: 'Trade, Shipping & Infrastructure', slug: 'trade-shipping-infrastructure' },
        { name: 'Vehicles & Mobility', slug: 'vehicles-mobility' },
        { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
      ]}
      relatedPassports={[
        { name: 'Platform Safe-Harbour Passport / Identity Continuity Passport', description: 'Control-plane trust overlays for platforms and marketplaces, including participant verification and continuity.', link: '/domains/passport-families-packages' },
        { name: 'Agent Credential', description: 'Core identity credential for agents operating within platforms. Capability attestation and delegation chains.', link: '/domains/passport-families-packages' },
      ]}
      useCases={[
        { title: 'Marketplace Participant Verification', description: 'Every buyer, seller, and intermediary verified through ECZ-ID. Trust scores visible before transactions begin.' },
        { title: 'Control Overlay Enforcement', description: 'Policy and governance rules enforced with identity-anchored execution. Every rule action is auditable.' },
        { title: 'Federated Identity', description: 'Cross-organisation coordination with federated ECZ-ID identity. Delegated trust, mutual attestation, interoperable governance.' },
        { title: 'Transaction Attestation', description: 'Every marketplace transaction attested with participant identity, terms verification, and settlement proof.' },
        { title: 'Platform Governance', description: 'Transparent, auditable governance with identity-verified rule changes, participant management, and dispute resolution.' },
      ]}
    />
  );
}
