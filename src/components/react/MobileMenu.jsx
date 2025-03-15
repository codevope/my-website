import navLinks from "@/config/header/navlinks.json";
import { useState, useEffect, useRef } from "react";

const MobileMenu = () => {
  const linkClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/5 dark:hover:bg-gray-700 group";
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (
        menuRef.current && 
        menuButtonRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={menuButtonRef}
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Abrir menú"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div
        ref={menuRef}
        className={`${
          isOpen ? "block animate-slideInRight" : "hidden"
        } md:hidden fixed top-16 left-0 w-full border-b text-gray-800 dark:text-gray-100 border-gray-200 dark:bg-gray-900 bg-gray-100 dark:border-gray-700 backdrop-blur-sm shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-row flex-wrap gap-4 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${linkClasses} ${link.hoverText}`}
                >
                  <span set:html={link.icon} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
