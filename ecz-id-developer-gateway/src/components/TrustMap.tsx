interface TrustMapProps {
  requiredPassports: string[];
  recommendedPassports: string[];
  relevantPackages: string[];
  enablesMap?: { passport: string; enables: string }[];
}

export default function TrustMap({
  requiredPassports,
  recommendedPassports,
  relevantPackages,
  enablesMap = [],
}: TrustMapProps) {
  return (
    <div className="bg-ecz-50 rounded-xl border border-ecz-200 overflow-hidden">
      <div className="px-6 py-3 bg-navy-800 flex items-center gap-2">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h4 className="text-sm font-semibold text-white">Trust Map</h4>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h5 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Required Passports</h5>
          <div className="flex flex-wrap gap-2">
            {requiredPassports.map((p) => (
              <span key={p} className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200">{p}</span>
            ))}
          </div>
        </div>
        {recommendedPassports.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Recommended Passports</h5>
            <div className="flex flex-wrap gap-2">
              {recommendedPassports.map((p) => (
                <span key={p} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">{p}</span>
              ))}
            </div>
          </div>
        )}
        {relevantPackages.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">Relevant Packages</h5>
            <div className="flex flex-wrap gap-2">
              {relevantPackages.map((p) => (
                <span key={p} className="px-3 py-1 bg-ecz-100 text-ecz-700 text-xs font-medium rounded-full border border-ecz-200">{p}</span>
              ))}
            </div>
          </div>
        )}
        {enablesMap.length > 0 && (
          <div className="pt-3 border-t border-ecz-200">
            <h5 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-2">What Each Enables</h5>
            <div className="space-y-2">
              {enablesMap.map((item) => (
                <div key={item.passport} className="text-xs text-navy-600">
                  <span className="font-medium text-navy-800">{item.passport}:</span> {item.enables}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
