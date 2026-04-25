import { ChevronDown, ArrowRight } from 'lucide-react'

const colorMap = {
  sky: { dot: 'bg-sky-500', num: 'bg-sky-400/10 text-sky-600', next: 'border-sky-400/40 bg-sky-400/5' },
  saffron: { dot: 'bg-saffron-500', num: 'bg-saffron-400/10 text-saffron-600', next: 'border-saffron-400/40 bg-saffron-400/5' },
  leaf: { dot: 'bg-leaf-500', num: 'bg-leaf-400/10 text-leaf-600', next: 'border-leaf-400/40 bg-leaf-400/5' },
}

export default function StepCard({ step, isExpanded, onToggle }) {
  const colors = colorMap[step.color] || colorMap.sky

  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${isExpanded ? 'border-ink-200 shadow-sm' : 'border-ink-100 hover:border-ink-200'}`}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-medium flex-shrink-0 ${colors.num}`}>
          {step.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body font-medium text-ink-800 text-sm">{step.title}</p>
        </div>
        <ChevronDown
          size={16}
          className={`text-ink-200 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Body */}
      {isExpanded && (
        <div className="px-5 pb-5 animate-fade-in">
          <div className="border-t border-ink-100 pt-4 space-y-4">

            {/* Requirements */}
            {step.requirements && (
              <div>
                <p className="text-xs font-body text-ink-200 uppercase tracking-wider font-medium mb-2">You must meet all of these:</p>
                <ul className="space-y-2">
                  {step.requirements.map(req => (
                    <li key={req} className="flex items-start gap-2.5 text-sm font-body text-ink-800">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Methods */}
            {step.methods && (
              <div className="space-y-3">
                {step.methods.map(method => (
                  <div key={method.label}>
                    <span className={`inline-block text-xs font-body font-medium px-2.5 py-0.5 rounded-full mb-2 ${colors.num}`}>
                      {method.label}
                    </span>
                    <ul className="space-y-1.5 ml-1">
                      {method.steps.map((s, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm font-body text-ink-800">
                          <span className="text-ink-200 font-mono text-xs mt-0.5 flex-shrink-0">{i + 1}.</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Documents */}
            {step.documents && (
              <div>
                <p className="text-xs font-body text-ink-200 uppercase tracking-wider font-medium mb-2">Documents needed:</p>
                <ul className="space-y-1.5">
                  {step.documents.map(doc => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm font-body text-ink-800">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Generic details */}
            {step.details && (
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-body text-ink-800">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {/* Dates */}
            {step.dates && (
              <div className="space-y-2">
                {step.dates.map(date => (
                  <div key={date.label} className="flex items-start justify-between gap-4 py-2.5 border-b border-ink-100 last:border-0">
                    <div className="min-w-0">
                      <p className="text-xs font-body text-ink-200 mb-0.5">{date.label}</p>
                      <p className="text-sm font-body font-medium text-ink-800">{date.value}</p>
                    </div>
                    {date.note && (
                      <p className="text-xs font-body text-ink-200 text-right flex-shrink-0 max-w-[140px]">{date.note}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Next action */}
            {step.nextAction && (
              <div className={`flex items-start gap-3 p-3 rounded-xl border-l-2 ${colors.next} mt-1`}>
                <ArrowRight size={14} className="text-ink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-body font-medium text-ink-800 uppercase tracking-wider">Do this next: </span>
                  <span className="text-xs font-body text-ink-200">{step.nextAction}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}