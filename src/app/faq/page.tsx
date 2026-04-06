import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about ECZ-ID trust infrastructure, verification, provisioning, and the machine economy.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is ECZ-ID?',
        a: 'ECZ-ID is trust infrastructure for the machine economy. It provides verified, attestable identity for AI agents, IoT devices, autonomous vehicles, products, drones, critical infrastructure, and every entity that needs to prove who it is.',
      },
      {
        q: 'What is EcoCitizenz?',
        a: 'EcoCitizenz is the infrastructure company behind ECZ-ID. We build the trust layer that the machine economy needs to function safely, transparently, and at scale.',
      },
      {
        q: 'Is ECZ-ID a blockchain product?',
        a: 'ECZ-ID is infrastructure-agnostic. It focuses on verified identity, attestation, and provenance. The underlying storage and verification mechanisms are designed for performance, auditability, and standards alignment—not tied to any specific technology stack.',
      },
      {
        q: 'What domains does ECZ-ID cover?',
        a: 'Nine domains: APIs, AI, Data & Software; IoT & Connected Systems; Products, Custody & Risk; Robotics & Humanoids; Vehicles & Mobility; Drones & Aerial Systems; Trade, Shipping & Infrastructure; Platforms, Marketplaces & Control Overlays; and Passport Families & Packages.',
      },
    ],
  },
  {
    category: 'Agents',
    questions: [
      {
        q: 'Why should I give my AI agent an identity?',
        a: 'Without verified identity, your agent is an anonymous actor in critical systems. Verified identity enables trusted interactions, auditable decisions, regulatory compliance, and participation in custody chains and marketplace transactions.',
      },
      {
        q: 'What agent platforms do you support?',
        a: 'ECZ-ID provides starter kits for Anthropic Claude, MCP (Model Context Protocol), OpenClaw/Abacus Claw, and generic Python agents. The SDK can integrate with any agent framework.',
      },
      {
        q: 'How quickly can I deploy a verified agent?',
        a: 'With a starter kit, most developers go from zero to a verified agent in under an hour. The Generic Python Starter takes about 20 minutes for a minimal integration.',
      },
    ],
  },
  {
    category: 'Verification',
    questions: [
      {
        q: 'How does verification work?',
        a: 'Any party can verify an entity\'s ECZ-ID through Resolver. Resolver returns current identity status, trust score, active attestations, and operational validity in real time.',
      },
      {
        q: 'What is a trust score?',
        a: 'A trust score is a dynamic, verifiable measure of an entity\'s trustworthiness. It\'s computed based on identity completeness, behavioural history, attestation currency, and anomaly status—not self-declared.',
      },
      {
        q: 'What is Resolver?',
        a: 'Resolver is the verification service for ECZ-ID. It provides real-time identity verification, trust score lookups, and attestation queries. Resolver is the \'verify\' side of the ECZ-ID model.',
      },
    ],
  },
  {
    category: 'Packages, Passports & Add-Ons',
    questions: [
      {
        q: 'How many passport families are there?',
        a: 'There are exactly 7 canonical passport categories: Digital & Operational, Product, Risk & Transfer, Robotics, Road & Freight Mobility, Aerial Mobility, Infrastructure-Grade, and Control & Trust Overlays. These contain 33 child passports total.',
      },
      {
        q: 'How many packages are there?',
        a: 'There are 25 total commercial acquisition objects shown in the current system: 17 core packages, 1 KYA Ready Pack™, and 7 advanced infrastructure services / enterprise accelerators. These are the commercial acquisition paths that unlock relevant child passports in TrustOps.',
      },
      {
        q: 'What is ECZ-ID Insurability Readiness™?',
        a: 'ECZ-ID Insurability Readiness™ is a derived add-on on the parent passport. It is NOT a package. It is NOT purchasable or manually editable. It is automatically computed from your trust posture, compliance evidence, and verification state—indicating readiness for insurer engagement.',
      },
      {
        q: 'What is the KYA Ready Pack™?',
        a: 'KYA Ready Pack™ is the Know-Your-Agent readiness pack. It is a distinct commercial acquisition object counted in the 25 total packages and includes Agent Credential, Identity Continuity, and API Passport for agent-first onboarding.',
      },
      {
        q: 'What is the ECZ-ID Business Passport™?',
        a: 'The ECZ-ID Business Passport™ is the parent passport—the root credential for every organisation. All child passports, packages, and derived add-ons attach to this parent. Every organisation starts here.',
      },
    ],
  },
  {
    category: 'TrustOps & Provisioning',
    questions: [
      {
        q: 'What is TrustOps?',
        a: 'TrustOps is the provisioning and operations platform for ECZ-ID. All identity provisioning, credential management, pricing, sales, and production deployment happens through TrustOps.',
      },
      {
        q: 'Where do I get credentials?',
        a: 'All credentials—developer sandbox and production—are provisioned through TrustOps. This Developer Gateway is for discovery and learning; TrustOps is for doing.',
      },
      {
        q: 'Why does the site link to /start instead of the TrustOps homepage?',
        a: 'Every customer acquisition link on this gateway points to trustops.ecocitizenz.com/start—the onboarding entry point. This ensures new users land directly in the acquisition flow rather than a generic homepage. The /start route is the correct entry for package selection, checkout, and credentialing.',
      },
      {
        q: 'How much does ECZ-ID cost?',
        a: 'Parent tiers are Declared (Free), Verified (£19.99/month), and Assured (£49.99/month). Child passport, package, and enterprise-service pricing is shown in TrustOps and varies by what you activate. Use TrustOps /start for the current commercial path.',
      },
      {
        q: 'Can I try ECZ-ID before committing?',
        a: 'Yes. TrustOps provides a sandbox environment with test credentials. You can develop, test, and validate your integration before moving to production.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What programming languages are supported?',
        a: 'The ECZ-ID SDK is currently available for Python 3.10+. TypeScript/Node.js support is in development. The API is REST-based and accessible from any language.',
      },
      {
        q: 'Does ECZ-ID require changes to my existing systems?',
        a: 'ECZ-ID is additive, not replacement. It integrates into existing systems through SDK hooks and API calls. No rip-and-replace required.',
      },
      {
        q: 'What standards does ECZ-ID align with?',
        a: 'ECZ-ID is designed to align with EU Digital Product Passport requirements, W3C Decentralised Identifiers (DIDs), ISO identity standards, and emerging machine identity frameworks.',
      },
      {
        q: 'Is ECZ-ID open source?',
        a: 'The ECZ-ID SDK and starter kits are available through TrustOps. The infrastructure is operated by EcoCitizenz as a managed service. Contact TrustOps for licensing details.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">FAQ</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3 tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-navy-600 mt-4 leading-relaxed">
              Common questions about ECZ-ID, verification, provisioning, and the machine economy. Can’t find your answer? Contact us through TrustOps.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-semibold text-navy-900 mb-6 pb-2 border-b border-ecz-200">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((faq) => (
                    <div key={faq.q} className="pb-6 border-b border-ecz-100 last:border-0 last:pb-0">
                      <h3 className="text-base font-medium text-navy-900 mb-2">{faq.q}</h3>
                      <p className="text-sm text-navy-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-20 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions?</h2>
          <p className="text-navy-600 max-w-lg mx-auto mb-8">
            Our team is available through TrustOps to answer technical questions, discuss architecture patterns, and help plan your deployment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://trustops.ecocitizenz.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm"
            >
              Contact via TrustOps
              <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link
              href="/developer-onboarding"
              className="inline-flex items-center px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm"
            >
              Developer Onboarding
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Start with agents, explore domains, or go directly to TrustOps for provisioning."
        primaryCTA={{ label: 'Start with Agents', href: '/start-with-agents' }}
        secondaryCTA={{ label: 'Go to TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true }}
        variant="dark"
      />
    </>
  );
}
