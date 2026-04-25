import { useState } from 'react'
import { MessageCircle, ChevronRight } from 'lucide-react'

export default function FAQSection({ faqs }) {
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <div className="mt-8 animate-fade-up animate-delay-600" style={{ animationFillMode: 'forwards', opacity: 0 }}>
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle size={14} className="text-ink-200" />
        <p className="font-body font-medium text-ink-800 text-sm">Common questions</p>
      </div>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            className={`w-full flex items-center justify-between gap-3 p-4 rounded-xl border text-left transition-all duration-150 font-body text-sm
              ${activeIdx === idx
                ? 'bg-ink-800 text-ink-50 border-ink-800'
                : 'bg-white text-ink-800 border-ink-100 hover:border-ink-200'
              }`}
          >
            <span className="leading-snug">{faq.q}</span>
            <ChevronRight
              size={14}
              className={`flex-shrink-0 transition-transform ${activeIdx === idx ? 'rotate-90 text-ink-100' : 'text-ink-200'}`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs font-body text-ink-200 mt-3 text-center">
        Tap a question to explore it — or type your own question in a new session.
      </p>
    </div>
  )
}