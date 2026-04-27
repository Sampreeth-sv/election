import { useState } from "react"
import LandingScreen from "./pages/LandingScreen"
import OnboardingScreen from "./pages/OnboardingScreen"
import GuideScreen from "./pages/GuideScreen"

export default function App() {
  const [screen, setScreen] = useState("landing")
  const [profile, setProfile] = useState(null)

  const handleRestart = () => {
    setProfile(null)
    setScreen("landing")
  }

  return (
    <div>
      {screen === "landing" && (
        <LandingScreen onStart={() => setScreen("onboarding")} />
      )}

      {screen === "onboarding" && (
        <OnboardingScreen
          onSubmit={(data) => {
            setProfile(data)
            setScreen("guide")
          }}
        />
      )}

      {screen === "guide" && (
        <GuideScreen profile={profile} onRestart={handleRestart} />
      )}
    </div>
  )
}