import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ecz-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-800/5 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-xs font-medium text-navy-700 tracking-wide">DISCOVER · BUILD · CREDENTIAL · VERIFY · DEPLOY</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight leading-[1.1] mb-6">
            Build serious agents with{' '}
            <span className="text-ecz-600">verified identity.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl mb-10">
            ECZ-ID is the trust infrastructure layer for AI agents, autonomous systems, and every entity in the machine economy. Discover, build, credential, verify, and deploy resolver-verifiable agents designed for serious deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/agent-starter-kits"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm"
            >
              Choose a Starter Kit
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/build-your-own-agent"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-navy-700 font-medium rounded-lg border border-ecz-200 hover:bg-ecz-50 transition-colors text-sm"
            >
              Build Your Own Agent
            </Link>
            <a
              href="https://trustops.ecocitizenz.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-ecz-600 font-medium text-sm hover:text-navy-800 transition-colors"
            >
              Start in TrustOps
              <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-10 border-t border-ecz-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-navy-900">9</div>
              <div className="text-sm text-navy-500 mt-1">Identity Domains</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">10</div>
              <div className="text-sm text-navy-500 mt-1">Starter Kits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">7</div>
              <div className="text-sm text-navy-500 mt-1">Passport Families</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">∞</div>
              <div className="text-sm text-navy-500 mt-1">Agent Types</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
