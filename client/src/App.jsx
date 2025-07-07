import { useEffect } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from './About'
import Education from "./Education"
import Contact from "./Contact"
import Skills from "./Skills"
import Experience from "./Experince"

function App() {
useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Experience />
    <About />
    <Education />
    <Contact />
    </>
  )
}

export default App
