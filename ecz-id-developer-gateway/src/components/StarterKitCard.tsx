import Link from 'next/link';

interface StarterKitCardProps {
  name: string;
  description: string;
  platform: string;
  language: string;
  difficulty: string;
  estimatedTime: string;
  features: string[];
  requiredPassports?: string[];
  route?: string;
}

export default function StarterKitCard({ name, description, platform, language, difficulty, estimatedTime, features, requiredPassports = [], route }: StarterKitCardProps) {
  const difficultyColor = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
    Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
  }[difficulty] || 'bg-ecz-50 text-ecz-700 border-ecz-200';

  return (
    <div className="p-6 bg-white rounded-xl border border-ecz-200 hover:border-ecz-300 hover:shadow-sm transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${difficultyColor}`}>{difficulty}</span>
        <span className="px-2.5 py-0.5 bg-ecz-50 text-ecz-600 text-xs font-medium rounded-full border border-ecz-200">{estimatedTime}</span>
      </div>
      <h3 className="text-base font-semibold text-navy-900 mb-2">{name}</h3>
      <p className="text-sm text-navy-500 leading-relaxed mb-4">{description}</p>

      {requiredPassports.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">Required Passports</h4>
          <div className="flex flex-wrap gap-1.5">
            {requiredPassports.map((p) => (
              <span key={p} className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded-full border border-red-200">{p}</span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 text-xs text-navy-400 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          {platform}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          {language}
        </span>
      </div>

      <div>
        <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">Includes</h4>
        <ul className="space-y-1.5">
          {features.slice(0, 4).map((feature) => (
            <li key={feature} className="text-xs text-navy-500 flex items-start gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 pt-4 border-t border-ecz-100">
        {route ? (
          <Link href={route} className="inline-flex items-center text-sm text-ecz-600 hover:text-navy-800 font-medium transition-colors">
            Choose This Starter Kit →
          </Link>
        ) : (
          <a
            href="https://trustops.ecocitizenz.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-ecz-600 hover:text-navy-800 font-medium transition-colors"
          >
            Continue in TrustOps
            <svg className="w-3.5 h-3.5 ml-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
      </div>
    </div>
  );
}
