import { ArrowRight, Globe, Shield, Calendar } from 'lucide-react'

export default function LandingScreen({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-ink-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-ink-800 rounded-full flex items-center justify-center">
            <span className="text-ink-50 text-xs font-display font-semibold">C</span>
          </div>
          <span className="font-body font-medium text-ink-800 text-sm tracking-wide">CivicGuide AI</span>
        </div>
        <span className="text-xs text-ink-200 font-body">Neutral · Factual · Free</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-2xl mx-auto w-full">
        <div
          className="inline-flex items-center gap-2 bg-saffron-400/10 border border-saffron-400/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
        >
          <div className="w-1.5 h-1.5 bg-saffron-400 rounded-full animate-pulse-dot" />
          <span className="text-xs font-body font-medium text-saffron-600 tracking-wider uppercase">Your personal voting guide</span>
        </div>

        <h1
          className="font-display text-5xl md:text-6xl text-ink-800 leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: '80ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          Know your vote.
          <br />
          <span className="text-saffron-500">Use your voice.</span>
        </h1>

        <p
          className="font-body text-ink-200 text-lg leading-relaxed mb-10 max-w-md animate-fade-up"
          style={{ animationDelay: '160ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          Step-by-step guidance for first-time and returning voters — tailored to your country, age, and experience level.
        </p>

        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 bg-ink-800 hover:bg-ink-900 text-ink-50 font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-4 animate-fade-up"
          style={{ animationDelay: '240ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          Get my voting guide
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Trust chips */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-fade-up"
          style={{ animationDelay: '320ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { icon: Globe, label: '5 countries covered' },
            { icon: Shield, label: 'Neutral & unbiased' },
            { icon: Calendar, label: 'Up-to-date guidance' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white border border-ink-100 rounded-full px-4 py-2"
            >
              <Icon size={13} className="text-ink-200" />
              <span className="text-xs font-body text-ink-200">{label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 text-center border-t border-ink-100">
        <p className="text-xs text-ink-200 font-body">
          Information is for guidance only. Always verify with your official electoral authority.
        </p>
      </footer>
    </div>
  )
}