import { Check } from "lucide-react";
import React from "react";
import ListItem from "../partials/ListItem";
import SectionHeader from "../partials/SectionHeader";
import ActionButton from "../partials/ActionButton";

const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-24">
          <img src="https://placehold.co/500x450" alt="" className="w-full" />
          <div className="max-w-[500px]">
            <SectionHeader
              tag="About Us "
              primary="15 years of Expertise "
              secondary="In Dental Care"
            />
            <p className="opacity-50 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ab quod expedita, et cumque cum vero atque quisquam sit eos nihil
              eligendi perferendis, rerum corrupti.
            </p>

            <ul className="space-y-3 mb-5">
              <ListItem text="Premium Dental Services You Can Trust" />
              <ListItem text="Award-Winning Expert Dental Care" />
              <ListItem text="Dedicated Experts Behind Every Smile" />
            </ul>

            <ActionButton label="Learn More" className="py-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
