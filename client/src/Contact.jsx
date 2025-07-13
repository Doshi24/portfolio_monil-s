function Contact() {
  return (
    <div className="flex-1 bg-white/70 rounded-3xl shadow-xl p-8 md:p-12 text-gray-700 transition-all duration-500">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">Contact</h2>
      <div className="space-y-4">
        <p className="text-lg">
          📧 <strong>Email:</strong>{" "}
          <a href={`mailto:${import.meta.env.VITE_MAILME}`} className="text-blue-600 hover:underline">
            {import.meta.env.VITE_MAILME}
          </a>
        </p>
        <p className="text-lg">
          💼 <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/monil-doshi-49b966356/" className="text-blue-600 hover:underline" target="_blank">
            linkedin.com/in/monil-doshi
          </a>
        </p>
        <p className="text-lg">
          🐙 <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Doshi24" className="text-blue-600 hover:underline" target="_blank">
            github.com/Doshi24
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;