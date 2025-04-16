import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

const Header = () => {
  return (
    <>
      <header className="bg-primary shadow">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-white text-sm">
          <div />
          <div className="flex space-x-4">
            <a href="#">Visit Philippine Frontline Ministries</a>
            <a href="#" className="hover:underline">
              Login
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
