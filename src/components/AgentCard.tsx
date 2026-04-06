import Link from 'next/link';

interface AgentCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  domains: string[];
  capabilities: string[];
  tags: string[];
}

export default function AgentCard({ name, category, description, domains, capabilities, tags }: AgentCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-ecz-200 hover:border-ecz-300 hover:shadow-sm transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 bg-ecz-50 text-ecz-700 text-xs font-medium rounded-full">{category}</span>
      </div>
      <h3 className="text-base font-semibold text-navy-900 mb-2">{name}</h3>
      <p className="text-sm text-navy-500 leading-relaxed mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">Capabilities</h4>
        <ul className="space-y-1">
          {capabilities.slice(0, 3).map((cap) => (
            <li key={cap} className="text-xs text-navy-500 flex items-center gap-1.5">
              <span className="w-1 h-1 bg-ecz-400 rounded-full shrink-0"></span>
              {cap}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {domains.map((domain) => (
          <span key={domain} className="px-2 py-0.5 bg-navy-50 text-navy-600 text-xs rounded">{domain}</span>
        ))}
      </div>

      <div className="pt-3 border-t border-ecz-100">
        <Link
          href="/agent-starter-kits"
          className="text-sm text-ecz-600 hover:text-navy-800 font-medium transition-colors"
        >
          View Starter Kit →
        </Link>
      </div>
    </div>
  );
}
