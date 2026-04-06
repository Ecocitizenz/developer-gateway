import Link from 'next/link';
import TrustOpsCheckpoint from './TrustOpsCheckpoint';
import TrustMap from './TrustMap';

interface StarterKitPageLayoutProps {
  name: string;
  slug: string;
  difficulty: string;
  estimatedTime: string;
  platform: string;
  language: string;
  whatItBuilds: string;
  whoItIsFor: string;
  whyEczIdMatters: string;
  architecture: { title: string; description: string }[];
  buildSteps: { label: string; detail: string }[];
  requiredPassports: string[];
  recommendedPassports: string[];
  relevantPackages: string[];
  acquireItems: { name: string; enables: string }[];
  returnItems: { name: string; description: string }[];
  returnAndCompleteSteps: { label: string; detail: string }[];
  verifySteps: { label: string; detail: string }[];
  deployOptions: string[];
  limits: string[];
  enablesMap: { passport: string; enables: string }[];
}

export default function StarterKitPageLayout({
  name,
  difficulty,
  estimatedTime,
  platform,
  language,
  whatItBuilds,
  whoItIsFor,
  whyEczIdMatters,
  architecture,
  buildSteps,
  requiredPassports,
  recommendedPassports,
  relevantPackages,
  acquireItems,
  returnItems,
  returnAndCompleteSteps,
  verifySteps,
  deployOptions,
  limits,
  enablesMap,
}: StarterKitPageLayoutProps) {
  const difficultyColor = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
    Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
  }[difficulty] || 'bg-ecz-50 text-ecz-700 border-ecz-200';

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ecz-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/agent-starter-kits" className="text-xs text-ecz-600 hover:text-navy-800 font-medium">← All Starter Kits</Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${difficultyColor}`}>{difficulty}</span>
              <span className="px-2.5 py-0.5 bg-ecz-50 text-ecz-600 text-xs font-medium rounded-full border border-ecz-200">{estimatedTime}</span>
              <span className="text-xs text-navy-400">{platform} · {language}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
              {name}
            </h1>
          </div>
        </div>
      </section>

      {/* 1. What this kit builds */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">1</span>
              What This Kit Builds
            </h2>
            <p className="text-base text-navy-600 leading-relaxed">{whatItBuilds}</p>
          </div>
        </div>
      </section>

      {/* 2. Who it is for */}
      <section className="py-12 md:py-16 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">2</span>
              Who It Is For
            </h2>
            <p className="text-base text-navy-600 leading-relaxed">{whoItIsFor}</p>
          </div>
        </div>
      </section>

      {/* 3. Why ECZ-ID matters here */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">3</span>
              Why ECZ-ID Matters Here
            </h2>
            <p className="text-base text-navy-600 leading-relaxed">{whyEczIdMatters}</p>
          </div>
        </div>
      </section>

      {/* 4. Architecture */}
      <section className="py-12 md:py-16 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">4</span>
            Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {architecture.map((item) => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Map sidebar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 5. Build steps overview */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">5</span>
                Build Steps Overview
              </h2>
              <div className="space-y-4">
                {buildSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-ecz-50 rounded-xl border border-ecz-200">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-navy-700 border border-ecz-200 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-navy-800">{step.label}</div>
                      <div className="text-xs text-navy-500 mt-0.5">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <TrustMap
                requiredPassports={requiredPassports}
                recommendedPassports={recommendedPassports}
                relevantPackages={relevantPackages}
                enablesMap={enablesMap}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TrustOps Credentialing Checkpoint */}
      <section className="py-12 md:py-16 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">6</span>
            TrustOps Credentialing Checkpoint
          </h2>
          <TrustOpsCheckpoint
            requiredPassports={requiredPassports}
            recommendedPassports={recommendedPassports}
            relevantPackages={relevantPackages}
            acquireItems={acquireItems}
            returnItems={returnItems}
          />
        </div>
      </section>

      {/* 7 & 8 are embedded in the checkpoint above */}

      {/* 9. Return and complete integration */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">9</span>
              Return and Complete Integration
            </h2>
            <p className="text-sm text-navy-600 mb-6">With your TrustOps credentials in hand, return here to complete the final build steps.</p>
            <div className="space-y-4">
              {returnAndCompleteSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-emerald-700 border border-emerald-200 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-800">{step.label}</div>
                    <div className="text-xs text-navy-500 mt-0.5">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Verify through Resolver */}
      <section className="py-12 md:py-16 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">10</span>
            Verify Through Resolver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {verifySteps.map((step, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-ecz-200">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{step.label}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
          <a
            href="https://resolver.ecocitizenz.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm"
          >
            Verify with Resolver
            <svg className="w-3.5 h-3.5 ml-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      {/* 11. Deploy anywhere */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">11</span>
            Deploy Anywhere
          </h2>
          <p className="text-sm text-navy-600 mb-6 max-w-2xl">
            ECZ-ID-backed agents are portable. Your verified identity travels with your agent regardless of deployment target. No vendor lock-in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deployOptions.map((option) => (
              <div key={option} className="p-4 bg-ecz-50 rounded-xl border border-ecz-200 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-navy-700 font-medium">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Limits / non-claims */}
      <section className="py-12 md:py-16 bg-ecz-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">12</span>
              Limits &amp; Non-Claims
            </h2>
            <div className="bg-white rounded-xl border border-ecz-200 p-6">
              <ul className="space-y-3">
                {limits.map((limit) => (
                  <li key={limit} className="text-sm text-navy-600 flex items-start gap-2">
                    <svg className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build This Agent?</h2>
          <p className="text-base text-ecz-300 max-w-2xl mx-auto mb-8">
            Start with the build steps above, credential through TrustOps, and deploy your resolver-verifiable agent anywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://trustops.ecocitizenz.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy-900 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm"
            >
              Continue in TrustOps
              <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link href="/agent-starter-kits" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
              View All Starter Kits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
