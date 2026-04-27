export default function LandingScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">CivicGuide AI</h1>
      <button onClick={onStart} className="bg-black text-white px-6 py-3 rounded">
        Start
      </button>
    </div>
  )
}
