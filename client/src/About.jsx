function About (){
  const style = "text-purple-700 font-semibold";

 
     return (
    <section id="about" className=" w-full md:w-[55%] py-20 px-6 bg-white/70 rounded-3xl shadow-2xl ">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Me</h2>
      <div className="text-center space-y-6 text-gray-700">
        <p className="text-justify">
          I may not be a fully seasoned full-stack developer yet, but I’ve built a solid foundation in <span className={style}>Core JavaScript</span>, <span className={style}>Node.js</span>, <span className={style}>Python</span>, and frontend development. Starting my current internship has not only sharpened my technical skills but also boosted my confidence significantly. It gave me real-world insight into how systems work — from backend architecture to production services.
        </p>
        <p className="text-justify">
          I'm passionate about learning and enjoy exploring new technologies. My experience so far has taught me to understand system flow, debug real-time issues, and contribute to meaningful modules. I believe in continuous growth and strive to turn my curiosity into creative and scalable solutions.
        </p>
        <p className="text-justify">
          Beyond coding, I was a core member of the <span className={style}>Rotaract Club</span> at Universal College of Engineering. I’ve coordinated both technical and non-technical events, and have also been part of organizing corporate and social events with NGOs — which strengthened my leadership and collaboration skills.
        </p>
      </div>
    </section>
  );
}

export default About;