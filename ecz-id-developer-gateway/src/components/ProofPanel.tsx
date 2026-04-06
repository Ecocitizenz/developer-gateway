interface ProofPanelProps {
  title: string;
  description: string;
  steps: { label: string; detail: string }[];
}

export default function ProofPanel({ title, description, steps }: ProofPanelProps) {
  return (
    <div className="bg-ecz-50 rounded-xl p-8 border border-ecz-200">
      <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-navy-600 mb-6 leading-relaxed">{description}</p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-navy-700 border border-ecz-200 shrink-0">
              {index + 1}
            </div>
            <div>
              <div className="text-sm font-medium text-navy-800">{step.label}</div>
              <div className="text-xs text-navy-500 mt-0.5">{step.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
