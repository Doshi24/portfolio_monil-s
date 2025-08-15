export default function Projects() {
  const projects = [
    {
      title: "Sales Forecast App",
      tech: ["Python", "Flask", "ML"],
      description: "Predicts future sales using machine learning. Built with Flask & Streamlit.",
      demo: "#",
      code: "#"
    },
    {
      title: "AI-Powered Event Management & Ticketing Platform",
      tech: ["React","Node","Mongodb","Oauth","OpenApi Key","Payment Intregation"],
      description: "Combine Multipe Feature",
      demo: "#",
      code: "#"
    },
    {
      title: "News API App",
      tech: ["JavaScript", "HTML", "Public API"],
      description: "Live news by category using async fetch from public APIs.",
      demo: "#",
      code: "#"
    },
    {
      title: "Notes App",
      tech: ["JavaScript", "LocalStorage", "HTML/CSS"],
      description: "Simple rich text editor for creating and storing notes in-browser.",
      demo: "#",
      code: "#"
    }
  ];

  return (
<section id="project" className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 px-6 py-16">
      <div className="max-w-7xl w-full bg-white/70 rounded-3xl shadow-xl p-8 md:p-16 transition-all duration-500 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-10 text-center">Projects</h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mr-2 mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-medium hover:underline"
                  >
                    💻 View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
