import React from "react";

const ActionButton = ({ label }) => {
  return (
    <div>
      <button className="py-2 px-8 bg-primary text-white rounded-4xl font-bold text-lg">
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
