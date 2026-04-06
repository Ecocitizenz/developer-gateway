import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  variant?: 'default' | 'dark' | 'light';
}

export default function CTASection({ title, description, primaryCTA, secondaryCTA, variant = 'default' }: CTASectionProps) {
  const bgClass = variant === 'dark' ? 'bg-navy-900 text-white' : variant === 'light' ? 'bg-ecz-50' : 'bg-white border-t border-b border-ecz-200';
  const titleClass = variant === 'dark' ? 'text-white' : 'text-navy-900';
  const descClass = variant === 'dark' ? 'text-ecz-300' : 'text-navy-600';

  const renderButton = (cta: { label: string; href: string; external?: boolean }, isPrimary: boolean) => {
    const classes = isPrimary
      ? variant === 'dark'
        ? 'px-6 py-3 bg-white text-navy-900 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm'
        : 'px-6 py-3 bg-navy-800 text-white font-medium rounded-lg hover:bg-navy-700 transition-colors text-sm'
      : variant === 'dark'
        ? 'px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm'
        : 'px-6 py-3 border border-ecz-200 text-navy-700 font-medium rounded-lg hover:bg-ecz-50 transition-colors text-sm';

    if (cta.external) {
      return (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center ${classes}`}>
          {cta.label}
          <svg className="w-3.5 h-3.5 ml-1.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
    }
    return (
      <Link href={cta.href} className={`inline-flex items-center justify-center ${classes}`}>
        {cta.label}
      </Link>
    );
  };

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-4`}>{title}</h2>
        <p className={`text-base md:text-lg ${descClass} max-w-2xl mx-auto mb-8`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCTA && renderButton(primaryCTA, true)}
          {secondaryCTA && renderButton(secondaryCTA, false)}
        </div>
      </div>
    </section>
  );
}
