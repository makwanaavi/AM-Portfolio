import { RevealOnScroll } from "../RevealOnScroll";
import reactimg from "../../../public/react.svg";
import Jsimg from "../../../public/java.png";
import nextjs from "../../../public/next-js.png"; // Ensure the path is correct

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Unique positioned JavaScript Logo */}
      <img
        src={reactimg}
        alt="JavaScript Logo"
        width={280}
        height={280}
        className="absolute top-120 left-38 z-20 drop-shadow-lg translate-y-3 rotate-12 transition-all duration-4000 ease-in-out hover:scale-105"
      />
      <img
        src={Jsimg}
        alt="JavaScript Logo"
        width={250}
        height={250}
        className="absolute top-40 right-38 z-20 drop-shadow-lg translate-y-3 rotate-12  transition-all duration-4000 ease-in-out hover:scale-105"
      />
      <img
        src={nextjs}
        alt="JavaScript Logo"
        width={250}
        height={250}
        className="absolute top-190 right-120 z-20 drop-shadow-lg translate-y-3 rotate-12 transition-all duration-4000 ease-in-out hover:scale-105"
      />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text leading-right">
            Hi, I'm Avi Makwana
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-black border text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border  text-white py-3 px-6 rounded font-medium transition-all duration-200 
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
