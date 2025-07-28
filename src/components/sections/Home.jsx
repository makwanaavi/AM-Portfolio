import { RevealOnScroll } from "../RevealOnScroll";
import reactimg from "../../../public/react.svg";
import Jsimg from "../../../public/java.png";
import nextjs from "../../../public/next-js.png"; // Ensure the path is correct

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative text-black bg-white"
    >
      {/* Responsive positioned Logos */}
      <img
        src={reactimg}
        alt="JavaScript Logo"
        width={250}
        height={250}
        className="absolute z-20 drop-shadow-lg translate-y-3 rotate-12 transition-all duration-4000 ease-in-out hover:scale-105
          top-16 left-2 md:top-32 md:left-38
        "
      />
      <img
        src={Jsimg}
        alt="JavaScript Logo"
        width={250}
        height={250}
        className="absolute z-20 drop-shadow-lg translate-y-3 rotate-12 transition-all duration-4000 ease-in-out hover:scale-105
          top-32 right-2 md:top-40 md:right-38
        "
      />
      <img
        src={nextjs}
        alt="JavaScript Logo"
        width={250}
        height={250}
        className="absolute z-20 drop-shadow-lg translate-y-3 rotate-12 transition-all duration-4000 ease-in-out hover:scale-105
          top-60 right-10 md:top-[47rem] md:right-32
        "
      />
      <RevealOnScroll>
        <div className="text-center z-10 px-2 md:px-4">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-clip-text leading-tight md:leading-right">
            Hi, I'm Avi Makwana
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-black border text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border text-black py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
