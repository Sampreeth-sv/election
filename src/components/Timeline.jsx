const STEP_LABELS = ['Eligibility', 'Registration', 'Verification', 'Key dates', 'Voting day']

export default function Timeline({ steps, activeStep, onStepClick }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-body text-ink-200 uppercase tracking-widest font-medium mb-3">Your journey</p>
      <div className="flex items-start gap-0 overflow-x-auto pb-1">
        {steps.map((step, idx) => {
          const isActive = step.id === activeStep
          const isPast = step.id < activeStep
          return (
            <div key={step.id} className="flex items-center flex-1 min-w-0">
              <button
                onClick={() => onStepClick(step.id)}
                className="flex flex-col items-center flex-1 min-w-0 group"
              >
                <div className={`
                  w-7 h-7 rounded-full flex items-center justify-center text-xs font-body font-medium transition-all duration-200 mb-2 flex-shrink-0
                  ${isActive ? 'bg-ink-800 text-ink-50 ring-2 ring-ink-800 ring-offset-2 ring-offset-ink-50' : ''}
                  ${isPast ? 'bg-leaf-400 text-white' : ''}
                  ${!isActive && !isPast ? 'bg-ink-100 text-ink-200 group-hover:bg-ink-200' : ''}
                `}>
                  {isPast ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : step.id}
                </div>
                <span className={`text-[10px] font-body text-center leading-tight px-1 truncate w-full transition-colors
                  ${isActive ? 'text-ink-800 font-medium' : 'text-ink-200'}
                `}>
                  {STEP_LABELS[idx]}
                </span>
              </button>
              {idx < steps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-1 mb-4 rounded-full transition-colors ${isPast ? 'bg-leaf-400' : 'bg-ink-100'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}