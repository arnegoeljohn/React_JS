import React from "react";
import ActionButton from "../partials/ActionButton";

const banner = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="max-w-[600px] w-full">
              <h1 className="text-primary-dark">
                The <span className="text-primary">Best Dental Experience</span>{" "}
                Awaits
              </h1>

              <p className="my-8 opacity-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                explicabo laboriosam tempora repudiandae saepe
              </p>

              <ActionButton label="Explore our Services" />
            </div>

            <img src="https://placehold.co/600x800" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default banner;
