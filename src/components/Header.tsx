'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Agents',
    children: [
      { label: 'Start with Agents', href: '/start-with-agents' },
      { label: 'Agent Starter Kits', href: '/agent-starter-kits' },
      { label: 'Build Your Own Agent', href: '/build-your-own-agent' },
      { label: 'ECZ-ID Agent Directory', href: '/agent-directory' },
    ],
  },
  {
    label: 'Domains',
    children: [
      { label: 'APIs, AI, Data & Software', href: '/domains/apis-ai-data-software' },
      { label: 'IoT & Connected Systems', href: '/domains/iot-connected-systems' },
      { label: 'Products, Custody & Risk', href: '/domains/products-custody-risk' },
      { label: 'Robotics & Humanoids', href: '/domains/robotics-humanoids' },
      { label: 'Vehicles & Mobility', href: '/domains/vehicles-mobility' },
      { label: 'Drones & Aerial Systems', href: '/domains/drones-aerial-systems' },
      { label: 'Trade, Shipping & Infrastructure', href: '/domains/trade-shipping-infrastructure' },
      { label: 'Platforms, Marketplaces & Control Overlays', href: '/domains/platforms-marketplaces-control-overlays' },
      { label: 'Passport Families & Packages', href: '/domains/passport-families-packages' },
    ],
  },
  { label: 'Developer Onboarding', href: '/developer-onboarding' },
  {
    label: 'Verification',
    children: [
      { label: 'Verification Model', href: '/verification-model' },
      { label: 'Trust Gallery', href: '/trust-gallery' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Why ECZ-ID', href: '/why-serious-buyers-care' },
  { label: 'TrustOps', href: 'https://trustops.ecocitizenz.com/start', external: true },
  { label: 'Resolver', href: 'https://resolver.ecocitizenz.org', external: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<string[]>([]);

  const toggleMobileSection = (label: string) => {
    setMobileOpenSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ecz-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-navy-900 font-semibold text-base tracking-tight">ECZ-ID</span>
              <span className="text-ecz-500 text-sm ml-1.5 font-normal">Developer Gateway</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-ecz-50 rounded-md transition-colors flex items-center gap-1"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0.5 w-72 bg-white rounded-lg shadow-lg border border-ecz-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-ecz-50 hover:text-navy-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-medium text-ecz-600 hover:text-navy-900 hover:bg-ecz-50 rounded-md transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="px-3 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-ecz-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-md text-navy-700 hover:bg-ecz-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-ecz-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-ecz-50 rounded-md"
                    onClick={() => toggleMobileSection(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileOpenSections.includes(item.label) ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpenSections.includes(item.label) && (
                    <div className="pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-navy-600 hover:bg-ecz-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 text-sm font-medium text-ecz-600 hover:bg-ecz-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-ecz-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
