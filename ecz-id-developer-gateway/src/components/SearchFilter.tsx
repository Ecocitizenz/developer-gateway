'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Agent {
  id: string;
  name: string;
  category: string;
  description: string;
  domains: string[];
  capabilities: string[];
  tags: string[];
  starterKitAvailable?: boolean;
  starterKitRoute?: string;
  requiredPassports?: string[];
  verifierPath?: string;
  deployReady?: boolean;
  useCase?: string;
  deploymentEnvironments?: string[];
}

interface SearchFilterProps {
  agents: Agent[];
}

export default function SearchFilter({ agents }: SearchFilterProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedUseCase, setSelectedUseCase] = useState('All');
  const [selectedPassport, setSelectedPassport] = useState('All');
  const [selectedEnvironment, setSelectedEnvironment] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(agents.map((a) => a.category));
    return ['All', ...Array.from(cats).sort()];
  }, [agents]);

  const domains = useMemo(() => {
    const doms = new Set(agents.flatMap((a) => a.domains));
    return ['All', ...Array.from(doms).sort()];
  }, [agents]);

  const useCases = useMemo(() => {
    const ucs = new Set(agents.map((a) => a.useCase).filter(Boolean));
    return ['All', ...Array.from(ucs).sort()];
  }, [agents]);

  const passports = useMemo(() => {
    const ps = new Set(agents.flatMap((a) => a.requiredPassports || []));
    return ['All', ...Array.from(ps).sort()];
  }, [agents]);

  const environments = useMemo(() => {
    const envs = new Set(agents.flatMap((a) => a.deploymentEnvironments || []));
    return ['All', ...Array.from(envs).sort()];
  }, [agents]);

  const filtered = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch = search === '' ||
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase()) ||
        agent.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
      const matchesDomain = selectedDomain === 'All' || agent.domains.includes(selectedDomain);
      const matchesUseCase = selectedUseCase === 'All' || agent.useCase === selectedUseCase;
      const matchesPassport = selectedPassport === 'All' || (agent.requiredPassports || []).includes(selectedPassport);
      const matchesEnvironment = selectedEnvironment === 'All' || (agent.deploymentEnvironments || []).includes(selectedEnvironment);
      return matchesSearch && matchesCategory && matchesDomain && matchesUseCase && matchesPassport && matchesEnvironment;
    });
  }, [agents, search, selectedCategory, selectedDomain, selectedUseCase, selectedPassport, selectedEnvironment]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="agent-search" className="sr-only">Search agents</label>
            <input
              id="agent-search"
              type="text"
              placeholder="Search agents by name, description, or tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-ecz-400 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="category-filter" className="sr-only">Filter by category</label>
            <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-44 px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-ecz-400">
              {categories.map((cat) => (<option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="domain-filter" className="sr-only">Filter by domain</label>
            <select id="domain-filter" value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full md:w-52 px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-ecz-400">
              {domains.map((dom) => (<option key={dom} value={dom}>{dom === 'All' ? 'All Domains' : dom}</option>))}
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <label htmlFor="usecase-filter" className="sr-only">Filter by use case</label>
            <select id="usecase-filter" value={selectedUseCase} onChange={(e) => setSelectedUseCase(e.target.value)}
              className="w-full md:w-44 px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-ecz-400">
              {useCases.map((uc) => (<option key={uc as string} value={uc as string}>{uc === 'All' ? 'All Use Cases' : uc}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="passport-filter" className="sr-only">Filter by required passport</label>
            <select id="passport-filter" value={selectedPassport} onChange={(e) => setSelectedPassport(e.target.value)}
              className="w-full md:w-56 px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-ecz-400">
              {passports.map((p) => (<option key={p as string} value={p as string}>{p === 'All' ? 'All Passports' : p}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="env-filter" className="sr-only">Filter by deployment environment</label>
            <select id="env-filter" value={selectedEnvironment} onChange={(e) => setSelectedEnvironment(e.target.value)}
              className="w-full md:w-48 px-4 py-2.5 border border-ecz-200 rounded-lg text-sm text-navy-700 bg-white focus:outline-none focus:ring-2 focus:ring-ecz-400">
              {environments.map((env) => (<option key={env as string} value={env as string}>{env === 'All' ? 'All Environments' : env}</option>))}
            </select>
          </div>
        </div>
      </div>

      <p className="text-sm text-navy-400 mb-6">Showing {filtered.length} of {agents.length} agents</p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((agent) => (
            <div key={agent.id} className="p-6 bg-white rounded-xl border border-ecz-200 hover:border-ecz-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-2.5 py-0.5 bg-ecz-50 text-ecz-700 text-xs font-medium rounded-full">{agent.category}</span>
                {agent.starterKitAvailable && (
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                    Starter Kit Available
                  </span>
                )}
                {agent.deployReady && (
                  <span className="px-2.5 py-0.5 bg-navy-50 text-navy-600 text-xs font-medium rounded-full">
                    Deploy-Ready
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-navy-900 mb-2">{agent.name}</h3>
              <p className="text-sm text-navy-500 leading-relaxed mb-4">{agent.description}</p>

              {/* Required Passports */}
              {agent.requiredPassports && agent.requiredPassports.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">TrustOps Credentialing Required</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.requiredPassports.map((p) => (
                      <span key={p} className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded-full border border-red-200">{p}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-3">
                <h4 className="text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">Capabilities</h4>
                <ul className="space-y-1">
                  {agent.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap} className="text-xs text-navy-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-ecz-400 rounded-full shrink-0"></span>{cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {agent.domains.map((domain) => (
                  <span key={domain} className="px-2 py-0.5 bg-navy-50 text-navy-600 text-xs rounded">{domain}</span>
                ))}
              </div>

              <div className="pt-3 border-t border-ecz-100 flex flex-wrap gap-3">
                {agent.starterKitRoute && (
                  <Link href={agent.starterKitRoute} className="text-sm text-ecz-600 hover:text-navy-800 font-medium transition-colors">
                    Choose This Starter Kit →
                  </Link>
                )}
                {agent.verifierPath && (
                  <a href={agent.verifierPath} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
                    Verify with Resolver ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-ecz-50 rounded-xl">
          <p className="text-navy-500">No agents match your filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}
