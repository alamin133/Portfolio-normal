import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       
        <Link to="/" className="ml-3 text-xl">
            Intro
          </Link>
        
      
      
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <Link
          to="/about"
          className="inline-flex items-center mr-5 hover:text-white">
          About
          <div className="w-4 h-4 ml-1" />
        </Link>
          <Link to="/projects" className="mr-5 hover:text-white">
            Past Work
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white">
            Skills
          </Link>
          <Link to="/testimonials" className="mr-5 hover:text-white">
            Testimonials
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <div className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}