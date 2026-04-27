export default function EligibilityBanner({ eligible }) {
  return (
    <div className={`p-4 rounded mb-6 ${eligible ? "bg-green-100" : "bg-red-100"}`}>
      {eligible
        ? "✅ You are eligible to vote"
        : "❌ You are not eligible yet"}
    </div>
  )
}