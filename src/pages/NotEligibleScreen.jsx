import { ArrowLeft, Calendar, BookOpen } from 'lucide-react'

export default function NotEligibleScreen({ profile, onRestart }) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full animate-fade-up" style={{ animationFillMode: 'forwards' }}>
        {/* Icon */}
        <div className="w-16 h-16 bg-saffron-400/10 border border-saffron-400/20 rounded-2xl flex items-center justify-center mb-6">
          <Calendar size={28} className="text-saffron-500" />
        </div>

        <p className="text-xs font-body text-saffron-600 uppercase tracking-widest font-medium mb-3">
          Not eligible yet
        </p>

        <h1 className="font-display text-4xl text-ink-800 leading-tight mb-4">
          You're not quite old enough to vote — but that's okay!
        </h1>

        <p className="font-body text-ink-200 text-base leading-relaxed mb-8">
          In <strong className="font-medium text-ink-800">{profile.country}</strong>, the minimum voting age is 18. 
          Once you turn 18, you'll be eligible to register and cast your vote in elections.
        </p>

        {/* What you can do now */}
        <div className="bg-white border border-ink-100 rounded-2xl p-5 mb-6">
          <p className="font-body font-medium text-ink-800 text-sm mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            What you can do right now
          </p>
          <ul className="space-y-3">
            {[
              'Learn about how elections and the voting process work',
              'Follow news and understand political issues that matter to you',
              'Talk to friends and family about the importance of voting',
              `Set a reminder to register as soon as you turn 18`,
              'Volunteer for a political campaign or civic organisation',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-ink-200">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-leaf-400/10 border border-leaf-400/20 rounded-xl p-4 mb-8">
          <p className="font-body text-sm text-leaf-600 font-medium">
            Future tip: When you turn 18, come back and we'll walk you through registering and voting — step by step.
          </p>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center gap-2 font-body text-sm text-ink-200 hover:text-ink-800 transition-colors"
        >
          <ArrowLeft size={14} />
          Start over with different details
        </button>
      </div>
    </div>
  )
}