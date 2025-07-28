import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-black">
            {" "}
            Avi<span> Makwana</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-4 md:space-x-8">
            <a
              href="#home"
              className="text-black hover:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-black hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-black hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 z-30 flex flex-col items-center justify-center space-y-8 md:hidden transition-all">
          <a
            href="#home"
            className="text-black text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-black text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
