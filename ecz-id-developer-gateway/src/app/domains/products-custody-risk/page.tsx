import type { Metadata } from 'next';
import DomainPageLayout from '@/components/DomainPageLayout';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'Products, Custody & Risk',
  description: 'Digital product passports, custody chain verification, and risk policy enforcement through ECZ-ID trust infrastructure.',
};

export default function ProductsCustodyRiskPage() {
  const domain = domains.find(d => d.id === 'products-custody-risk')!;
  return (
    <DomainPageLayout
      name={domain.name}
      description={domain.description}
      entities={domain.entities}
      relatedDomains={[
        { name: 'Trade, Shipping & Infrastructure', slug: 'trade-shipping-infrastructure' },
        { name: 'Platforms, Marketplaces & Control Overlays', slug: 'platforms-marketplaces-control-overlays' },
        { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
        { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
      ]}
      relatedPassports={[
        { name: 'Product Passport', description: 'Digital product identity with full lifecycle tracking from manufacture to end-of-life. EU DPP compatible.', link: '/domains/passport-families-packages' },
      ]}
      useCases={[
        { title: 'EU Digital Product Passport', description: 'Full DPP compliance with verified product identity, composition data, sustainability metrics, and lifecycle tracking.' },
        { title: 'Chain of Custody', description: 'Unbroken, verified custody chains from manufacture through every transfer to end consumer or recycling.' },
        { title: 'Risk Policy Enforcement', description: 'Identity-anchored risk policies that follow the product, not the paperwork. Continuous compliance monitoring.' },
        { title: 'Recall Management', description: 'Instant, precise recall execution based on verified product identity. Know exactly which products, where, and when.' },
        { title: 'Sustainability Attestation', description: 'Verified sustainability data anchored to product identity. Carbon footprint, materials, recyclability—all attestable.' },
      ]}
    />
  );
}
