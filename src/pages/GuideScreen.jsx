import { getCountryData } from "../data/votingData"
import EligibilityBanner from "../components/EligibilityBanner"

export default function GuideScreen({ profile, onRestart }) {
  if (!profile) return null

  const data = getCountryData(profile.country)
  if (!data) return <p className="p-10">No data available</p>

  const eligible = profile.ageGroup !== "Under 18"

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            🌍 Voting Guide - {profile.country}
          </h1>

          <button
            onClick={onRestart}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Restart
          </button>
        </div>

        {/* Eligibility */}
        <div
          className={`p-4 rounded-lg mb-6 font-medium ${
            eligible
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {eligible
            ? "✅ You are eligible to vote"
            : "❌ You are not eligible yet"}
        </div>

        {!eligible && (
          <p className="mb-6 text-gray-600">
            You can still learn the process for future voting.
          </p>
        )}

        {/* Steps */}
        <div className="space-y-4">
          {data.steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-semibold mb-2 text-blue-600">
                Step {step.id}: {step.title}
              </h2>

              <ul className="list-disc ml-5 text-gray-700">
                {step.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
