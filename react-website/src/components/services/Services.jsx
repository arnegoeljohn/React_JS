import React from "react";
import SectionHeader from "../partials/SectionHeader";
import ActionButton from "../partials/ActionButton";
import { ArrowRight, Pill } from "lucide-react";
import { services } from "./services-data";

const Services = () => {
  return (
    <section className="py-24 bg-lightgray">
      <div className="container">
        <div className="flex justify-between items-end">
          <div className="max-w-[645px]">
            <SectionHeader
              tag="Our Services"
              primary="A Wide Range Of Services "
              secondary="of Your Best Smile "
            />{" "}
          </div>

          <ActionButton label="Explore All Services" />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-24">
          {services.map((item, key) => {
            return (
              <div className="card rounded-2xl overflow-hidden" key={key}>
                <div className="card-img">
                  <img
                    src="https://placehold.co/350x200"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="card-info p-5 bg-white relative">
                  <span className="absolute left-5 -top-[60px] size-30 rounded-full bg-primary grid place-content-center border-8 border-white">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl mb-3 mt-24 text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="opacity-50">{item.description}</p>
                  <a href={item.path} className="flex gap-4 text-primary">
                    Learn More <ArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
