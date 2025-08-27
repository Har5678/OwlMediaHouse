import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="w-30 h-27" />
        </div>

        {/* Desktop Menu (Increased Text Size) */}
        <ul className="hidden lg:flex space-x-8 text-lg font-bold lg:text-2xl xl:text-3xl md:text-xl font-sans">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500">Connect</Link></li>
          <li><Link to="/career" className="hover:text-orange-500">Career</Link></li>
          <li><Link to="/blogs" className="hover:text-orange-500">Blog</Link></li>
        </ul>

        {/* Call Now Button (Scales with Viewports) */}
        <Link
          to="tel:+1234567890"
          className="hidden lg:block bg-black text-white px-8 py-4 text-xl font-bold rounded-full hover:bg-gray-800 md:px-6 md:py-3 md:text-lg xl:text-2xl"
        >
          Call Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6 space-y-4 text-lg font-sans">
          <a href="/" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/services" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="/about" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/contact" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Connect</a>
          <a href="/career" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Career</a>
          <a href="/blogs" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</a>

          {/* Call Now Button */}
          <a
            href="tel:+1234567890"
            className="block bg-black text-white px-6 py-3 text-lg font-bold rounded-full hover:bg-gray-800 text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
