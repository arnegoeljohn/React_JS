import { useState } from "react";
import { FaHome, FaChevronDown, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleHeader = () => setIsHeaderVisible(!isHeaderVisible);

  return (
    <header className="p-4 shadow bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Logo + mobile chevron */}
        <div className="flex justify-between items-start sm:items-center w-full sm:w-auto">
          <div className="text-blue-600 font-bold text-2xl">MySite</div>

          {/* Chevron only on mobile */}
          <button
            onClick={toggleHeader}
            className="text-gray-700 text-xl sm:hidden"
          >
            {isHeaderVisible ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {/* Nav section - full height of logo row on desktop */}
        <div
          className={`${
            isHeaderVisible ? "block" : "hidden"
          } sm:block w-full sm:w-auto mt-4 sm:mt-0`}
        >
          <nav className="flex flex-col gap-4 text-base sm:flex-row sm:gap-6 sm:items-center sm:text-lg">
            <a href="#" className="flex items-center gap-2">
              <FaHome /> Home
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaCircleInfo /> About
            </a>

            {/* Desktop dropdown */}
            <div className="hidden sm:block relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2"
              >
                More <FaChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-10 text-base">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Services
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Portfolio
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </a>
                </div>
              )}
            </div>

            {/* Mobile-only visible links */}
            <div className="flex flex-col gap-4 sm:hidden">
              <a href="#" className="text-base">
                Services
              </a>
              <a href="#" className="text-base">
                Portfolio
              </a>
              <a href="#" className="flex items-center gap-2">
                <FaEnvelope /> Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
