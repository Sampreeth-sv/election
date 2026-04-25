import { useState } from 'react'
import { getCountryData } from '../data/votingData'
import StepCard from '../components/StepCard'
import Timeline from '../components/Timeline'
import EligibilityBanner from '../components/EligibilityBanner'
import FAQSection from '../components/FAQSection'
import { RotateCcw, ExternalLink } from 'lucide-react'

export default function GuideScreen({ profile, onRestart }) {
  const [expandedStep, setExpandedStep] = useState(1)
  const data = getCountryData(profile.country)

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-body text-ink-200 mb-4">Country data not available yet.</p>
          <button onClick={onRestart} className="font-body text-sm text-ink-800 underline">Start over</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-ink-50/90 backdrop-blur-sm border-b border-ink-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-ink-800 rounded-full flex items-center justify-center">
            <span className="text-ink-50 text-[10px] font-display font-semibold">C</span>
          </div>
          <span className="font-body font-medium text-ink-800 text-sm">CivicGuide AI</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-xs font-body text-ink-200">
            {profile.country} · {profile.ageGroup} · {profile.firstTimeVoter === 'Yes, first time' ? 'First-time voter' : 'Returning voter'}
          </span>
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-xs font-body text-ink-200 hover:text-ink-800 transition-colors"
          >
            <RotateCcw size={12} />
            Start over
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Hero area */}
        <div className="mb-8 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <p className="text-xs font-body text-saffron-600 uppercase tracking-widest font-medium mb-2">
            Your personalised guide
          </p>
          <h1 className="font-display text-4xl text-ink-800 leading-tight mb-3">
            Voting in {profile.country}
          </h1>
          <p className="font-body text-ink-200 text-base leading-relaxed">
            {profile.firstTimeVoter === 'Yes, first time'
              ? "Welcome! Here's everything you need to know as a first-time voter — step by step."
              : "Here's a refresher on the current voting process — things may have changed since you last voted."}
          </p>
        </div>

        {/* Eligibility Banner */}
        <div className="animate-fade-up animate-delay-100" style={{ animationFillMode: 'forwards', opacity: 0 }}>
          <EligibilityBanner country={profile.country} ageGroup={profile.ageGroup} eligibilityNote={data.eligibilityNote} />
        </div>

        {/* Timeline */}
        <div className="animate-fade-up animate-delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
          <Timeline steps={data.steps} activeStep={expandedStep} onStepClick={setExpandedStep} />
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {data.steps.map((step, idx) => (
            <div
              key={step.id}
              className="animate-fade-up"
              style={{ animationDelay: `${(idx + 3) * 80}ms`, animationFillMode: 'forwards', opacity: 0 }}
            >
              <StepCard
                step={step}
                isExpanded={expandedStep === step.id}
                onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                isFirstTime={profile.firstTimeVoter === 'Yes, first time'}
              />
            </div>
          ))}
        </div>

        {/* Official links */}
        <div className="mt-8 p-5 bg-white border border-ink-100 rounded-2xl animate-fade-up animate-delay-600" style={{ animationFillMode: 'forwards', opacity: 0 }}>
          <p className="font-body font-medium text-ink-800 text-sm mb-3">Official resources</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Register to vote', href: data.registrationUrl },
              { label: 'Verify your status', href: data.verifyUrl },
              { label: 'Official election site', href: data.officialSite },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-sky-600 bg-sky-400/10 border border-sky-400/20 px-3 py-1.5 rounded-full hover:bg-sky-400/20 transition-colors"
              >
                {link.label}
                <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <FAQSection faqs={data.faqs} />

        {/* Footer note */}
        <p className="text-center text-xs font-body text-ink-200 mt-10 leading-relaxed">
          Information is for guidance only. Always verify with your official electoral authority.
          <br />
          Laws and procedures may change — check official sources before the election.
        </p>
      </main>
    </div>
  )
}