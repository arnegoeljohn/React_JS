import React from "react";

const Banner = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </p>
          <h1 className="text-5xl  text-gray-800 leading-tight mb-6">
            Making a difference for abandoned, abused, or dangerously <br />
            neglected children
          </h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-sm">
            Sponsor Now
          </button>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12">
          <img
            src="https://facethechildren.org/images/website/h-banner.webp"
            alt="Children Graphic"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
