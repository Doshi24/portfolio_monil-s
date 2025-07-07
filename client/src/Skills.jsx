function Skills (){
    return(

    <section id="skills" className="py-20 px-6 bg-gradient-to-r from-blue-100 to-purple-200">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        <span className="bg-gray-100 p-3 rounded-lg">JavaScript</span>
        <span className="bg-gray-100 p-3 rounded-lg">React</span>
        <span className="bg-gray-100 p-3 rounded-lg">Node.js</span>
        <span className="bg-gray-100 p-3 rounded-lg">SQL</span>
        <span className="bg-gray-100 p-3 rounded-lg">Tailwind CSS</span>
        <span className="bg-gray-100 p-3 rounded-lg">Git</span>
      </div>
    </section>
    )
}

export default Skills;