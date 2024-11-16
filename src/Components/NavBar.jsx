import  { useState } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, makeItDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`w-full flex z-50 justify-between items-center px-[7.5%] pt-[30px] pb-[50px] transition duration-300 
      ${darkMode ? "bg-dark" : "bg-white"} relative`}
    >
      <h1 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-darkText"}`}>
        Mohammad Kerdasi
      </h1>
      <div className="hidden md:flex gap-x-8 items-center">
        <Link to={'/'} className={`nav-link ${darkMode ? "text-white" : "text-darkText"}`}>Blog</Link>
        <Link to={'/'} className={`nav-link ${darkMode ? "text-white" : "text-darkText"}`}>Projects</Link>
        <Link to={'/'} className={`nav-link ${darkMode ? "text-white" : "text-darkText"}`}>About</Link>
        <Link to={'/newsletter'} className={`nav-link ${darkMode ? "text-white" : "text-darkText"}`}>Newsletter</Link>
        <div className={`relative flex items-center cursor-pointer w-20 h-8 rounded-full p-1 transition-colors duration-300 
                    ${darkMode ? "bg-white" : "bg-dark"}`} onClick={makeItDark}>
          {darkMode ? <FaMoon className="absolute right-2 text-dark" size={14} /> : <FaSun className="absolute left-2 text-white" size={14} />}
          <div className={`w-6 h-6 rounded-full transform duration-300 ease-in-out 
            ${darkMode ? "bg-dark translate-x-0" : "bg-white translate-x-12"}`} />
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <FaBars onClick={toggleMenu} className={`text-2xl cursor-pointer ${darkMode ? "text-white" : "text-dark"}`} />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out 
          ${darkMode ? "bg-dark" : "bg-white"} flex flex-col items-center justify-center z-50 
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
        style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
      >
        <h1 className={`text-2xl font-bold mb-12 ${darkMode ? "text-white" : "text-darkText"}`}>
          Mohammad Kerdasi
        </h1>
        <Link to={"/"} className={`nav-link text-xl mb-6 ${darkMode ? "text-white" : "text-darkText"}`} onClick={toggleMenu}>Blog</Link>
        <Link to={"/"} className={`nav-link text-xl mb-6 ${darkMode ? "text-white" : "text-darkText"}`} onClick={toggleMenu}>Projects</Link>
        <Link to={"/"} className={`nav-link text-xl mb-6 ${darkMode ? "text-white" : "text-darkText"}`} onClick={toggleMenu}>About</Link>
        <Link to={"/newsletter"} className={`nav-link text-xl mb-6 ${darkMode ? "text-white" : "text-darkText"}`} onClick={toggleMenu}>Newsletter</Link>

        <div className={`relative flex items-center cursor-pointer w-20 h-8 rounded-full p-1 transition-colors duration-300 
          ${darkMode ? "bg-white" : "bg-dark"}`} onClick={makeItDark}>
          {darkMode ? <FaMoon className="absolute right-2 text-dark" size={14} /> : <FaSun className="absolute left-2 text-white" size={14} />}
          <div className={`w-6 h-6 rounded-full transform duration-300 ease-in-out 
            ${darkMode ? "bg-dark translate-x-0" : "bg-white translate-x-12"}`} />
        </div>
        <LiaTimesSolid onClick={toggleMenu} className={`text-3xl cursor-pointer absolute bottom-0 mb-5 ${darkMode ? "text-white" : ""}`} />
      </div>
    </nav>
  );
};

export default Navbar;