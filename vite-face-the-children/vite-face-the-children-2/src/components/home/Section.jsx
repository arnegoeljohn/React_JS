import React from "react";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
      {/* for image first on mobile view */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://facethechildren.org/images/website/h-about.webp"
          alt="img3"
          className="w-100 max-w-lg md:max-w-xl rounded-lg"
        />
      </div>

      {/* Text section */}
      <div className="max-w-xl md:ml-12 md:w-1/2">
        <h4 className="text-orange-500 text-sm font-medium uppercase">
          Who We Are
        </h4>
        <h2 className="text-3xl font-bold text-blue-400 mt-2 mb-4">
          Let's Share to Change a life today
        </h2>
        <p className="text-gray-700 mb-8">
          When we come together as a community, our collective efforts can lead
          to monumental changes. By fostering a culture of sharing, we not only
          help those in immediate need but also build a foundation of support
          and compassion that benefits everyone.
        </p>
        <div className="grid grid-cols-2  ">
          <div>
            <p className="text-4xl text-orange-500 font-bold">20+</p>
            <p className="text-gray-700 text-sm sm:pt-0">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl text-orange-500 font-bold">10+</p>
            <p className="text-gray-700 text-sm">Volunteers</p>
          </div>
          <div>
            <p className="text-4xl text-orange-500 font-bold">30+</p>
            <p className="text-gray-700 text-sm">Resident Child</p>
          </div>
          <div>
            <p className="text-4xl text-orange-500 font-bold">10+</p>
            <p className="text-gray-700 text-sm">Non-Resident Child</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
