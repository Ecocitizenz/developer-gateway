import type { Metadata } from 'next';
import DomainPageLayout from '@/components/DomainPageLayout';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'APIs, AI, Data & Software',
  description: 'Verified identity for AI agents, API endpoints, datasets, models, and software supply chains. ECZ-ID trust infrastructure for the software ecosystem.',
};

export default function ApisAiDataSoftwarePage() {
  const domain = domains.find(d => d.id === 'apis-ai-data-software')!;
  return (
    <DomainPageLayout
      name={domain.name}
      description={domain.description}
      entities={domain.entities}
      relatedDomains={[
        { name: 'IoT & Connected Systems', slug: 'iot-connected-systems' },
        { name: 'Platforms, Marketplaces & Control Overlays', slug: 'platforms-marketplaces-control-overlays' },
        { name: 'Robotics & Humanoids', slug: 'robotics-humanoids' },
        { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
      ]}
      relatedPassports={[
        { name: 'Agent Credential', description: 'Core identity credential for agents. Includes agent identity, capability attestation, delegation chains, and action audit trails.', link: '/domains/passport-families-packages' },
        { name: 'Platform Safe-Harbour Passport / Identity Continuity Passport', description: 'Trust overlays for platforms and control surfaces, including Platform Safe-Harbour and Identity Continuity.', link: '/domains/passport-families-packages' },
      ]}
      useCases={[
        { title: 'Agent Identity Verification', description: 'Give every AI agent a verified identity that other systems can check in real time. No more anonymous agents in production.' },
        { title: 'API Trust Scoring', description: 'Score API endpoints based on their verified identity, uptime attestations, and security posture. Route traffic accordingly.' },
        { title: 'Dataset Provenance', description: 'Track dataset lineage from creation through every transformation. Verify source, quality, and consumption at every step.' },
        { title: 'Model Attestation', description: 'Attest training data provenance, evaluation results, and deployment configurations for every ML model.' },
        { title: 'Software Supply Chain', description: 'Verify every component from source code through build, test, and deployment. Identity-anchored SBOM.' },
        { title: 'Multi-Agent Orchestration', description: 'Coordinate multiple agents with verified delegation chains and provenance-tracked handoffs.' },
      ]}
    />
  );
}
