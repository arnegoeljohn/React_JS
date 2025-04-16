import React from "react";

const VisionAbout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col-reverse flex-col lg:flex-row items-center justify-between gap-11">
      <div className="max-w-xl">
        <h4 className="text-orange-500 text-sm font-medium uppercase">
          Vision
        </h4>
        <h2 className="text-3xl font-bold text-blue-500 mt-2 mb-4">
          Empowering Change, <br /> Inspiring Purpose
        </h2>
        <p className="text-gray-700 mb-8">
          A nationwide network of child care centers committed <br /> to the
          advocacy, protection, care and development of <br /> abandoned,
          abused, or dangerously neglected children.
        </p>
        <a
          href="#sponsor"
          className="inline-block bg-blue-500 text-white px-6 py-1 rounded hover:bg-blue-600"
        >
          Learn more
        </a>
      </div>
      <div className="mb-12 md:mb-0 md:w-1/2">
        <img
          src="https://facethechildren.org/images/website/about-vision.webp"
          alt="Children Graphic"
        />
      </div>
    </section>
  );
};

export default VisionAbout;
