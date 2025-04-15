import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1e3d] text-white py-10 w-full mt-auto">
      <div className="w-full px-4 text-center">
        <p className="text-lg text-gray-200 mb-2">
          Movie data provided by The Movie Database (TMDb) API
        </p>
        <p className="text-gray-400">© Movie Explorer App</p>
      </div>
    </footer>
  );
};

export default Footer;
