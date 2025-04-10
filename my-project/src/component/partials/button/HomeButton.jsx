import React from "react";

const HomeButton = ({ buttonText, buttonFunction }) => {
  return (
    <button
      onClick={() => {
        buttonFunction();
      }}
      className="border-2 py-1 px-3 bg-green-500 rounded-md hover:text-white text text-white"
    >
      {buttonText}
    </button>
  );
};

export default HomeButton;
