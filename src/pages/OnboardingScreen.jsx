import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

const COUNTRIES = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia']
const AGE_GROUPS = ['Under 18', '18–25', '26–35', '36–50', '51+']

const steps = [
  { id: 'country', label: 'Which country will you be voting in?' },
  { id: 'age', label: 'How old are you?' },
  { id: 'firstTime', label: 'Is this your first time voting?' },
]

export default function OnboardingScreen({ onSubmit, onBack }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ country: '', ageGroup: '', firstTimeVoter: '' })

  const currentStep = steps[step]
  const isLast = step === steps.length - 1

  const canProceed = () => {
    if (step === 0) return answers.country !== ''
    if (step === 1) return answers.ageGroup !== ''
    if (step === 2) return answers.firstTimeVoter !== ''
    return false
  }

  const handleNext = () => {
    if (isLast) {
      onSubmit(answers)
    } else {
      setStep(s => s + 1)
    }
  }

  const handleBack = () => {
    if (step === 0) onBack()
    else setStep(s => s - 1)
  }

  const progressPct = ((step) / steps.length) * 100

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <button onClick={handleBack} className="text-ink-200 hover:text-ink-800 transition-colors p-1">
            <ArrowLeft size={16} />
          </button>
          <div className="flex-1 h-0.5 bg-ink-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-ink-800 rounded-full transition-all duration-500"
              style={{ width: `${progressPct + (100 / steps.length)}%` }}
            />
          </div>
          <span className="text-xs font-body text-ink-200 tabular-nums">{step + 1} / {steps.length}</span>
        </div>

        {/* Question */}
        <div key={step} className="animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-xs font-body text-saffron-600 uppercase tracking-widest mb-3 font-medium">
            Step {step + 1}
          </p>
          <h2 className="font-display text-3xl text-ink-800 mb-8 leading-snug">
            {currentStep.label}
          </h2>

          {/* Country step */}
          {step === 0 && (
            <div className="grid grid-cols-1 gap-2">
              {COUNTRIES.map(country => (
                <button
                  key={country}
                  onClick={() => setAnswers(a => ({ ...a, country }))}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all duration-150 font-body text-sm font-medium
                    ${answers.country === country
                      ? 'bg-ink-800 text-ink-50 border-ink-800'
                      : 'bg-white text-ink-800 border-ink-100 hover:border-ink-200'
                    }`}
                >
                  {country}
                  {answers.country === country && <Check size={14} />}
                </button>
              ))}
            </div>
          )}

          {/* Age step */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {AGE_GROUPS.map(group => (
                <button
                  key={group}
                  onClick={() => setAnswers(a => ({ ...a, ageGroup: group }))}
                  className={`flex flex-col items-center justify-center px-4 py-5 rounded-xl border transition-all duration-150 font-body font-medium
                    ${answers.ageGroup === group
                      ? 'bg-ink-800 text-ink-50 border-ink-800'
                      : 'bg-white text-ink-800 border-ink-100 hover:border-ink-200'
                    }`}
                >
                  <span className="text-lg mb-0.5">{group}</span>
                  <span className={`text-xs ${answers.ageGroup === group ? 'text-ink-100' : 'text-ink-200'}`}>years</span>
                </button>
              ))}
            </div>
          )}

          {/* First time step */}
          {step === 2 && (
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  value: 'Yes, first time',
                  headline: 'Yes, first time',
                  sub: "I've never voted before",
                  icon: '🗳️',
                },
                {
                  value: 'No, voted before',
                  headline: 'No, voted before',
                  sub: "I've voted in a past election",
                  icon: '✅',
                },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setAnswers(a => ({ ...a, firstTimeVoter: opt.value }))}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-150
                    ${answers.firstTimeVoter === opt.value
                      ? 'bg-ink-800 text-ink-50 border-ink-800'
                      : 'bg-white text-ink-800 border-ink-100 hover:border-ink-200'
                    }`}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <div>
                    <p className="font-body font-medium text-sm">{opt.headline}</p>
                    <p className={`font-body text-xs mt-0.5 ${answers.firstTimeVoter === opt.value ? 'text-ink-100' : 'text-ink-200'}`}>
                      {opt.sub}
                    </p>
                  </div>
                  {answers.firstTimeVoter === opt.value && (
                    <Check size={14} className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-body font-medium text-sm transition-all duration-200
              ${canProceed()
                ? 'bg-ink-800 text-ink-50 hover:bg-ink-900'
                : 'bg-ink-100 text-ink-200 cursor-not-allowed'
              }`}
          >
            {isLast ? 'Get my voting guide' : 'Continue'}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}