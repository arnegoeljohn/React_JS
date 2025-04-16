import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src="./src/assets/ftc_svg_logo.svg" alt="Logo" className="h-8" />

        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
          <li>
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Strategy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Sponsor child
            </a>
          </li>
          <li>
            <button className="bg-blue-400 text-white text-sm px-4 py-1 rounded hover:bg-blue-600">
              Donate
            </button>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          <span className="transition-all duration-300 ease-in-out transform">
            {isOpen ? (
              <X
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            ) : (
              <Menu
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            )}
          </span>
        </button>
      </div>

      <div
        className={`fixed top-30 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800">
          <li>
            <a
              href="#"
              className="text-orange-500 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Strategy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Sponsor child
            </a>
          </li>
          <li>
            <button className="bg-blue-500 text-white text-sm px-4 py-1 w-32 rounded hover:bg-blue-600">
              Donate
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
