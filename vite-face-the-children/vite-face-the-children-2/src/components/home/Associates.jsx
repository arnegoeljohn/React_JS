import React from "react";

const Associates = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h4 className="text-orange-500 text-sm font-medium uppercase mb-2">
        Trusted Affiliates
      </h4>
      <h2 className="text-3xl font-bold text-blue-500 mb-10">
        Our Advocacy Associates
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        {/* Placeholder images – replace src with actual logo URLs */}
        <img
          src="https://facethechildren.org/images/website/logo-fwc.png"
          alt="Affiliate 1"
          className="h-16 object-contain grayscale"
        />
        <img
          src="https://facethechildren.org/images/website/logo-fbs.png"
          alt="Affiliate 2"
          className="h-16 object-contain grayscale"
        />
        <img
          src="https://facethechildren.org/images/website/logo-fca.png"
          alt="Affiliate 3"
          className="h-16 object-contain grayscale"
        />
        <img
          src="https://facethechildren.org/images/website/logo-ftw.png"
          alt="Affiliate 4"
          className="h-16 object-contain grayscale"
        />
        <img
          src="https://facethechildren.org/images/website/logo-pfm.png"
          alt="Affiliate 5"
          className="h-16 object-contain grayscale"
        />
      </div>
    </section>
  );
};

export default Associates;
