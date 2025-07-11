function Skills (){
  const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'text-sky-500',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'text-green-600',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'text-yellow-500',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'text-orange-600',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'text-blue-600',
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    color: 'text-teal-400',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'text-yellow-600',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'text-green-500',
  },
  {
    name: 'Oracle SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    color: 'text-red-600',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'text-orange-500',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: 'text-gray-700',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: 'text-blue-400',
  },
];

    return(

<section id="skills" className="bg-gradient-to-r from-blue-100 to-purple-200 px-6 py-10">
  <div className="max-w-7xl w-full bg-white/70 rounded-3xl shadow-xl p-8 md:p-16 mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-10 text-center">Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 hover:shadow-2xl" />
          <p className={`text-sm font-semibold ${skill.color}`}>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}

export default Skills;