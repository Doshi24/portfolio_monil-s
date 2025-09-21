import { useState } from "react";
import { Home, User, Briefcase, Hammer, Contact } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/50 backdrop-blur-md shadow sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold"></h1>

          {/* Hamburger Icon - mobile only */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            <NavLinks />
          </div>
        </div>
      </nav>

      {/* Blur + Dark Overlay when mobile menu is open */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>
        <div className="flex flex-col p-4 space-y-4 text-lg">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      <a
        href="#hero"
        className="flex items-center gap-2 hover:text-blue-500"
        onClick={onClick}
      >
        <Home className="h-5 w-5" /> Home
      </a>
      <a
        href="#AboutSection"
        className="flex items-center gap-2 hover:text-blue-500"
        onClick={onClick}
      >
        <User className="h-5 w-5" /> About
      </a>
      <a
        href="#skills"
        className="flex items-center gap-2 hover:text-blue-500"
        onClick={onClick}
      >
        <Briefcase className="h-5 w-5" /> Skills
      </a>
      <a
        href="#project"
        className="flex items-center gap-2 hover:text-blue-500"
        onClick={onClick}
      >
        <Hammer className="h-5 w-5" /> Project
      </a>
      <a
        href="#EductionContact"
        className="flex items-center gap-2 hover:text-blue-500"
        onClick={onClick}
      >
        <Contact className="h-5 w-5" /> Contact
      </a>
    </>
  );
}
