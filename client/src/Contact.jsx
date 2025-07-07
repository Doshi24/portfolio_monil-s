function Contact (){
    return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-100 to-purple-200">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="text-center text-gray-600">
        <p>Email: <a href="mailto:yourmail@gmail.com" className="text-blue-600">yourmail@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-600">linkedin.com/in/yourname</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-600">github.com/yourusername</a></p>
      </div>
    </section>
  );
}

export default Contact;