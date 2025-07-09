import { useEffect, useState } from "react";
import { Linkedin, Mail} from "lucide-react";
import monil from './assets/monil.jpg'

function Hero() {
  const Msg = ["Hey there, I’m Monil Doshi"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = Msg[index];

    if (!deleting && subIndex < currentText.length) {
      setTimeout(() => {
        setSubIndex(subIndex + 1);
        setText(currentText.substring(0, subIndex + 1));
      }, 100);
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setSubIndex(subIndex - 1);
        setText(currentText.substring(0, subIndex - 1));
      }, 50);
    } else if (!deleting && subIndex === currentText.length) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % Msg.length);
    }
  }, [subIndex, deleting, index]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-6 py-16">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10 bg-white/70 rounded-3xl shadow-xl p-8 md:p-16 transition-all duration-500">
        
        {/* Left: Text Box */}
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800">
            {text}
            <span className="inline-block animate-blink">|</span>
          </h1>
          <h3 className="mt-4 text-xl md:text-xl text-purple-700 font-semibold">
            Not a seasoned dev yet, but I know how to get things done.
          </h3>
          <p className="text-xl mt-2 font-bold text-purple-700">Full-Stack Developer | Tech Enthusiast</p>
          <p className="text-justify mt-4 text-gray-700 leading-relaxed">
            I’m a curious builder who loves to understand & solving real-world problems using code. From designing interactive frontends to building robust backends, I believe in learning by doing and improving every step of the way.
          </p>
          <div className="mt-8 flex items-center gap-4 text-gray-700">
            <p className="text-purple-700 font-semibold">Reach Out to Me</p>
          <a
            href={`mailto:${import.meta.env.VITE_MAILME}?subject=Hi Monil, I came across your portfolio and would love to connect!&body=Enter Your Message here`}
            target="_blank"
            className="flex items-center gap-2 text-base font-semibold hover:text-blue-700 transition-colors"
          >
            <Mail className="h-5 w-5 text-red-600" />
            <span>Email Me</span>
          </a>

          <a
            href={import.meta.env.VITE_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-semibold hover:text-blue-700 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-blue-600" />
            <span>LinkedIn</span>
          </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center animate-fade-in">
          <div className="relative">
            <img src = {monil} alt="Monil Doshi" className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-500 shadow-lg hover:scale-105 hover:brightness-50 transition-transform duration-300"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;