import React from "react";
import SectionHeader from "../partials/SectionHeader";
import ActionButton from "../partials/ActionButton";
import { ArrowRight } from "lucide-react";
import { stories } from "./stories-data";

const Stories = () => {
  return (
    <section className="bg-primary-dark text-white py-24">
      <div className="container">
        <div className="flex justify-between items-end">
          <div className="max-w-[670px]">
            <SectionHeader
              tag="Our Case Stories"
              primary="Patients Journey to "
              secondary="Healthier, Happier Smile"
              isInverts={true}
            />
          </div>
          <ActionButton label="Explore All our Stories" />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-24">
          {stories.map((story, key) => {
            return (
              <div
                className="story-card relative rounded-2xl overflow-hidden"
                key={key}
              >
                <img
                  src={story.image}
                  alt=""
                  className="w-full h-[500px] object-cover"
                />

                <div className="absolute left-7 bottom-7">
                  <h3 className="text-2xl">{story.title}</h3>
                  <ul className="flex mt-5">
                    {story.tag.map((item, key) => {
                      return (
                        <li
                          className="px-3 py-1 bg-transparent text-white border-2 border-white rounded-3xl"
                          key={key}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button className="grid place-content-center size-24 rounded-full bg-primary -rotate-45 absolute bottom-8 right-8">
                  <ArrowRight size={50} className="stroke-white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stories;
