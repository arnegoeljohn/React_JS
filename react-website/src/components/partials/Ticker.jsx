import { Pill } from "lucide-react";
import React from "react";

const Ticker = ({ phase }) => {
  return (
    <div className="p-4 bg-primary text-white overflow-hidden">
      <p className="flex gap-5 mb-0 text-5xl capitalize items-center font-bold text-nowrap flex-nowrap w-[200vw] animate-ticker">
        {phase.map((word, key) => {
          return (
            <div key={key} className="flex gap-5 items-center">
              <span className=""> {word}</span> <Pill size={40} />
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default Ticker;
