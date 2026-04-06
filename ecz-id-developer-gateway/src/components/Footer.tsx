import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <div>
                <span className="text-white font-semibold">ECZ-ID</span>
                <span className="text-ecz-400 text-sm ml-1">Developer Gateway</span>
              </div>
            </div>
            <p className="text-ecz-300 text-sm leading-relaxed">
              Trust infrastructure for the machine economy. Verified identity for every agent, device, product, and system.
            </p>
            <p className="text-ecz-400 text-xs mt-4">
              An EcoCitizenz infrastructure product.
            </p>
          </div>

          {/* Agents */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Agents</h4>
            <ul className="space-y-2.5">
              <li><Link href="/start-with-agents" className="text-sm text-ecz-300 hover:text-white transition-colors">Start with Agents</Link></li>
              <li><Link href="/agent-starter-kits" className="text-sm text-ecz-300 hover:text-white transition-colors">Starter Kits</Link></li>
              <li><Link href="/build-your-own-agent" className="text-sm text-ecz-300 hover:text-white transition-colors">Build Your Own</Link></li>
              <li><Link href="/agent-directory" className="text-sm text-ecz-300 hover:text-white transition-colors">Agent Directory</Link></li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Domains</h4>
            <ul className="space-y-2.5">
              <li><Link href="/domains" className="text-sm text-ecz-300 hover:text-white transition-colors">All Domains</Link></li>
              <li><Link href="/domains/apis-ai-data-software" className="text-sm text-ecz-300 hover:text-white transition-colors">APIs, AI & Software</Link></li>
              <li><Link href="/domains/iot-connected-systems" className="text-sm text-ecz-300 hover:text-white transition-colors">IoT & Connected Systems</Link></li>
              <li><Link href="/domains/vehicles-mobility" className="text-sm text-ecz-300 hover:text-white transition-colors">Vehicles & Mobility</Link></li>
              <li><Link href="/domains/drones-aerial-systems" className="text-sm text-ecz-300 hover:text-white transition-colors">Drones & Aerial Systems</Link></li>
              <li><Link href="/domains/trade-shipping-infrastructure" className="text-sm text-ecz-300 hover:text-white transition-colors">Trade & Infrastructure</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link href="/developer-onboarding" className="text-sm text-ecz-300 hover:text-white transition-colors">Developer Onboarding</Link></li>
              <li><Link href="/verification-model" className="text-sm text-ecz-300 hover:text-white transition-colors">Verification Model</Link></li>
              <li><Link href="/trust-gallery" className="text-sm text-ecz-300 hover:text-white transition-colors">Trust Gallery</Link></li>
              <li><Link href="/faq" className="text-sm text-ecz-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/why-serious-buyers-care" className="text-sm text-ecz-300 hover:text-white transition-colors">Why ECZ-ID</Link></li>
              <li>
                <a href="https://trustops.ecocitizenz.com/start" target="_blank" rel="noopener noreferrer" className="text-sm text-ecz-300 hover:text-white transition-colors">
                  TrustOps ↗
                </a>
              </li>
              <li>
                <a href="https://resolver.ecocitizenz.org" target="_blank" rel="noopener noreferrer" className="text-sm text-ecz-300 hover:text-white transition-colors">
                  Resolver ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ecz-400">
              &copy; {new Date().getFullYear()} EcoCitizenz. All rights reserved. ECZ-ID is trust infrastructure.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-ecz-500">Provisioning &amp; sales via TrustOps</span>
              <span className="text-xs text-ecz-500">·</span>
              <span className="text-xs text-ecz-500">Verification via Resolver</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
