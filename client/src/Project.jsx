export default function Projects() {
  const projects = [
    {
      title: "Sales Forecast App",
      tech: ["Python", "Flask", "ML", "OpenAi","Pre-Trained-Data-Model"],
      description: "Predicts future sales using machine learning. Built with Flask & Streamlit.",
      // demo: "#",
      // code: "#"
    },
    {
      title: "BillWise – Inventory & Billing Web App :",
      tech: ["React","Redux-toolkit","Node.js","Mongodb","LocalStorage"],
      description: "Developed a React + Redux Toolkit frontend with CRUD, search, filtering, and CSV export. Integrated JWT-secured APIs using Express.js & MySQL for billing workflows and role-based access.",
      demo: "#",
      code: "https://github.com/Doshi24/BillWise.git"
    },
    {
      title: "Digital Workstation :",
      tech: ["JavaScript", "TypeScript", "React.js" , "WebRtC", "Socket.io" , "socket.io.client"],
      description: "Built a collaborative virtual meeting platform integrating WebRTC and PeerJS for video calls and screen sharing.Implemented a real-time whiteboard with multi-user sync features and chat using WebSocket. Developed using JavaScript, TypeScript, and HTML/CSS, focused on seamless remote collaboration.",
      demo: "#",
      code: "#"
    },
    {
      title: "Multi-Tenant Notes Management System",
      tech: ["Socket.io","role-based access", "LocalStorage", "Redux-toolkit","JWT auth","middleware-based authorization", "Monogdb"],
      description: "Full-stack app where companies (tenants) have Admins & Members with role-based access. Implemented JWT auth, middleware-based authorization, and CRUD notes module with React, Redux Toolkit, Node.js, Express, and MongoDB.",
      demo: "#",
      code: "https://github.com/Doshi24/Multi-Tenant-SaaS-Notes-App.git"
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
