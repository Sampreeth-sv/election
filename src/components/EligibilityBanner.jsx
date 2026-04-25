import { CheckCircle2 } from 'lucide-react'

export default function EligibilityBanner({ country, ageGroup, eligibilityNote }) {
  return (
    <div className="flex items-start gap-3 bg-leaf-400/10 border border-leaf-400/20 rounded-2xl p-4 mb-6">
      <CheckCircle2 size={20} className="text-leaf-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-body font-medium text-leaf-600 text-sm">You are eligible to vote in {country}!</p>
        <p className="font-body text-leaf-500 text-xs mt-1 leading-relaxed">{eligibilityNote}</p>
      </div>
    </div>
  )
}