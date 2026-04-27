import { useState } from "react"

const COUNTRIES = ["India", "United States"]
const AGE_GROUPS = ["Under 18", "18+"]

export default function OnboardingScreen({ onSubmit }) {
  const [country, setCountry] = useState("")
  const [ageGroup, setAgeGroup] = useState("")

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-6">Tell us about you</h2>

      {/* Country */}
      <select
        className="border p-3 w-full mb-4"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {COUNTRIES.map(c => <option key={c}>{c}</option>)}
      </select>

      {/* Age */}
      <select
        className="border p-3 w-full mb-6"
        onChange={(e) => setAgeGroup(e.target.value)}
      >
        <option value="">Select Age</option>
        {AGE_GROUPS.map(a => <option key={a}>{a}</option>)}
      </select>

      <button
        onClick={() => onSubmit({ country, ageGroup })}
        className="bg-black text-white px-6 py-3 w-full"
      >
        Continue
      </button>
    </div>
  )
}
