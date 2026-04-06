import Link from 'next/link';

interface TrustOpsCheckpointProps {
  requiredPassports: string[];
  recommendedPassports?: string[];
  relevantPackages?: string[];
  acquireItems?: { name: string; enables: string }[];
  returnItems?: { name: string; description: string }[];
}

export default function TrustOpsCheckpoint({
  requiredPassports,
  recommendedPassports = [],
  relevantPackages = [],
  acquireItems = [],
  returnItems = [],
}: TrustOpsCheckpointProps) {
  return (
    <div className="relative">
      {/* Checkpoint Banner */}
      <div className="bg-gradient-to-r from-amber-50 via-amber-50/80 to-amber-50 border-2 border-amber-200 rounded-2xl overflow-hidden">
        {/* Top bar */}
        <div className="bg-amber-100 border-b border-amber-200 px-6 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-900">TrustOps Credentialing Checkpoint</h3>
            <p className="text-xs text-amber-700">Pause here to acquire your required ECZ-ID trust objects</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Why pause here */}
          <div className="bg-white/70 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-amber-900 leading-relaxed">
              This is a designed pause point in your build process. Before continuing, you need to acquire the required ECZ-ID passports and credentials from TrustOps. This midpoint credentialing approach ensures your agent is built with verified identity from the start—not bolted on after the fact.
            </p>
          </div>

          {/* Trust Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Required */}
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <h4 className="text-sm font-semibold text-navy-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Required Passports
              </h4>
              <ul className="space-y-2">
                {requiredPassports.map((p) => (
                  <li key={p} className="text-sm text-navy-700 flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended */}
            {recommendedPassports.length > 0 && (
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <h4 className="text-sm font-semibold text-navy-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Recommended Passports
                </h4>
                <ul className="space-y-2">
                  {recommendedPassports.map((p) => (
                    <li key={p} className="text-sm text-navy-600 flex items-start gap-2">
                      <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Relevant Packages */}
          {relevantPackages.length > 0 && (
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <h4 className="text-sm font-semibold text-navy-900 mb-2">Relevant Packages</h4>
              <div className="flex flex-wrap gap-2">
                {relevantPackages.map((pkg) => (
                  <span key={pkg} className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full border border-amber-200">{pkg}</span>
                ))}
              </div>
            </div>
          )}

          {/* What each enables */}
          {acquireItems.length > 0 && (
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <h4 className="text-sm font-semibold text-navy-900 mb-3">What You Must Acquire in TrustOps</h4>
              <div className="space-y-3">
                {acquireItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-navy-800">{item.name}</div>
                      <div className="text-xs text-navy-500 mt-0.5">Enables: {item.enables}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What you bring back */}
          {returnItems.length > 0 && (
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <h4 className="text-sm font-semibold text-navy-900 mb-3">What You Bring Back from TrustOps</h4>
              <div className="space-y-2">
                {returnItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    <div>
                      <div className="text-sm font-medium text-navy-800">{item.name}</div>
                      <div className="text-xs text-navy-500 mt-0.5">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://trustops.ecocitizenz.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors text-sm"
            >
              Continue in TrustOps
              <svg className="w-3.5 h-3.5 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link
              href="/domains/passport-families-packages"
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-300 text-amber-800 font-medium rounded-lg hover:bg-amber-50 transition-colors text-sm"
            >
              View Required ECZ-ID Package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
