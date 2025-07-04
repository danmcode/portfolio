import { Route, Routes } from "react-router-dom"
import { HeroSection } from "./components/organisms/HeroSection"
import { PageLayout } from "./components/templates/PageLayout"
import { ProjectsPage } from "./pages/Projects/ProjectPage"
import { AboutPage } from "./pages/About"

function App() {

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/hello" element={<HeroSection />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  )
}

export default App
