import { Navigate, Route, Routes } from "react-router-dom"
import { HeroSection } from "./components/organisms/HeroSection"
import { PageLayout } from "./layouts"
import { ProjectsPage } from "./pages/Projects"
import { AboutPage } from "./pages/About"

function App() {

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/hello" element={<Navigate to="/" replace />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
