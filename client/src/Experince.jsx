function Experience () {
  const style = "text-purple-600 font-semibold";
return (
    <section id="experience" className="w-full md:w-[55%] py-20 px-6 bg-white/70 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Experience</h2>
      <div className="max-w-4xl mx-auto text-gray-600">
        <ul className="space-y-4">
          <li className="text-purple-700 font-bold">
            <strong>Technical Support Intern</strong> – <strong> Credence Analytics </strong> (2025 – Present)
          </li>
            <li>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>Assisting in resolving <span className={style}>backend bugs</span> and delivering <span className={style}>ticket-based updates</span> across live systems.</li>
                <li>Working with <span className={style}>Node.js</span>, <span className={style}>Express.js</span>, <span className={style}>Core JavaScript</span>, and <span className={style}>Oracle PL/SQL</span> to maintain and enhance enterprise modules.</li>
                <li>Contributed to the release of the <span className={style}>VaR module</span>, supporting patch configuration and resolving client-reported issues.</li>
                <li>Providing <span className={style}>technical support</span> and <span className={style}>bug fixes</span> for internal tools, ensuring smooth deployment.</li>
                <li>Collaborating with senior developers for production support and system improvements.</li>
              </ul>
            </li>
        </ul>
      </div>
    </section>
)
}

export default Experience;
