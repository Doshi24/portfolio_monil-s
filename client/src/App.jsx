import { useEffect } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import EductionContact from "./EductionContact"
import Skills from "./Skills"
import AboutSection from "./AboutSection"
import Project from "./Project"

function App() {
useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <AboutSection />
    <Project />
    <Skills />
    <EductionContact />
    </>
  )
}

export default App
