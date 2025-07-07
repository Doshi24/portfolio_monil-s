function Navbar () {
    return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <h1 className="text-xl font-bold">Monil</h1>
        <div className="space-x-4">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;