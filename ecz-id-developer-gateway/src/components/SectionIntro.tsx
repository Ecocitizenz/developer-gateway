interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionIntro({ eyebrow, title, description, centered = false }: SectionIntroProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-semibold text-ecz-500 uppercase tracking-widest">{eyebrow}</span>
      )}
      <h2 className={`text-2xl md:text-3xl font-bold text-navy-900 mt-2 ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base text-navy-500 mt-3 leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
