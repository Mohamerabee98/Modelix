import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth"; 
import { MdMenu, MdClose } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
    window.location.reload(); 
  };
  return (
    <nav className="absolute top-6 left-0 w-full z-50">
      <div className="flex items-center justify-between w-[90%] max-w-6xl mx-auto px-4 sm:px-6 py-3 rounded-full border border-white/20  backdrop-blur-md">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
          MODELIX
          <span className="text-purple-400 text-xl">✦</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-200 ml-auto">
          <li className="hover:text-white cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center ml-6 gap-3 text-white">
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-purple-500 hover:bg-purple-600 px-4 py-1 cursor-pointer rounded-full text-sm sm:text-base"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="rounded-full text-white px-2 text-sm sm:text-base">
                Login
              </Link>
              <span className="p-1 text-xl hidden sm:inline">/</span>
              <Link to="/signup" className="rounded-full text-white px-2 text-sm sm:text-base">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-gray-900/90 backdrop-blur-md mt-2 rounded-xl px-6 py-4 flex flex-col gap-4 items-center text-white">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
            Home
          </Link>
          <a href="#About" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
            About
          </a>
          <a href="#Contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
            Contact
          </a>

          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-purple-500 hover:bg-purple-600 px-4 py-1 cursor-pointer rounded-full w-full"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="px-2 rounded-full hover:text-purple-400">
                Login
              </Link>
              <span className="text-xl">/</span>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="px-2 rounded-full hover:text-purple-400">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}