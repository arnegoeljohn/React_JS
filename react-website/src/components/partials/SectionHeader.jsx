import React from "react";

const SectionHeader = ({ tag, primary, secondary, isInverts = false }) => {
  return (
    <>
      <span className="uppercase text-2xl ">{tag}</span>
      <h2 className={`${isInverts ? "text-white" : "text-primary"}`}>
        {primary}
        <span className={`${isInverts ? "text-primary" : "text-primary-dark"}`}>
          {secondary}
        </span>
      </h2>
    </>
  );
};

export default SectionHeader;
