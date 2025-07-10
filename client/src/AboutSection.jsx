import Experince from "./Experince";
import About from "./About"

function AboutSection (){
    return (
     <section  id ="AboutSection" className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200  px-6 py-16 pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 ">
        <About />
        <Experince />
      </div>
    </section>
    
    )
}

export default AboutSection;