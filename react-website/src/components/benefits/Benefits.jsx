import React from "react";
import SectionHeader from "../partials/SectionHeader";
import ActionButton from "../partials/ActionButton";
import ListItem from "../partials/ListItem";
import { benefits } from "./benefits-data";

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeader
            tag="Why Choose Us"
            primary="Benefits of Our Dental Services: "
            secondary="Yourt Path to a Healthier Smile"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-10 items-center md:items-center md:justify-center">
          <img
            src="http://placehold.co/400x400"
            alt=""
            className="rounded-full w-[400px] h-[400px] object-cover"
          />

          <div className="max-w-lg space-y-6 text-center md:text-left">
            <p className="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              facere officia sequi omnis quod maiores exercitationem, eveniet
              nesciunt obcaecati aliquam!
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
              {benefits.map((item, key) => {
                return (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary-dark">
                      {item.stat}
                    </h3>
                    <p className="text-sm opacity-50">{item.statdesc}</p>
                  </div>
                );
              })}
            </div>

            <ListItem text="Easy Online Appointment Booking" />
            <ListItem text="Experienced and Caring Dentists" />
            <ListItem text="Advanced Dental Equipment" />

            <ActionButton label="Book an Appointment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
