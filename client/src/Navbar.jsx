import { Home, GraduationCap,Contact,Briefcase,User,BrainCircuit } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white/50 backdrop-blur-md shadow sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center ">
        <h1 className="text-xl font-bold">Monil</h1>
        <div className="flex items-center space-x-8 text-xl">
          <a href="#hero" className="flex items-center gap-2 hover:text-blue-500">
            <Home className="h-5 w-5" />
            Home
          </a>
          <a href="#AboutSection" className=" flex gap-2 items-center hover:text-blue-500">
            <User className="h-5 w-5" />
            About</a>
          <a href="#education" className=" flex items-center gap-2  hover:text-blue-500">
            <GraduationCap className = "h-5 w-5" />
            Education
          </a>
          <a href="#skills" className="flex items-center gap-2 hover:text-blue-500">
            <Briefcase  className = "h-5 w-5"/>
            Skills</a>
          <a href="#AboutSection" className=" flex items-center gap-2 hover:text-blue-500">
            <BrainCircuit className = "h-5 w-5"/>
            Experience</a>
          <a href="#contact" className=" flex items-center gap-2 hover:text-blue-500">
            <Contact className='h-5 w-5'/>
            Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;