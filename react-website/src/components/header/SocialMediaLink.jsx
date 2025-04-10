import { Facebook } from "lucide-react";
import React from "react";

const SocialMediaLink = ({ icon, url }) => {
  return (
    <div>
      <li>
        <a
          href={url}
          className="size-[30px] grid place-content-center bg-lightgray rounded-full"
        >
          {icon}
        </a>
      </li>
    </div>
  );
};

export default SocialMediaLink;
