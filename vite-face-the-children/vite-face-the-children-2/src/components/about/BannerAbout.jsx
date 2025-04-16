import React from "react";

const BannerAbout = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-11">
      {/* for image first on mobile view */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://facethechildren.org/images/website/about-banner.webp"
          alt=""
        />
      </div>

      {/* Text section */}
      <div className="max-w-xl md:ml-12 md:w-1/2">
        <h4 className="text-orange-500 text-sm font-medium uppercase">
          From Streets to Smiles
        </h4>
        <div>
          <div className="max-w-xl">
            <p className="text-xs text-orange-500 uppercase mb-2">
              Creating Opportunity
            </p>
            <h1 className="text-5xl  text-gray-800 leading-tight mb-6">
              Transform lives from the harsh reality of the streets to the
              warmth and comfort of genuine smiles
            </h1>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-sm">
              Sponsor Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
