import { Check } from "lucide-react";
import React from "react";

const ListItem = ({ text = "Lorem ipsum dolor sit amet." }) => {
  return (
    <li className="flex gap-2 items-center">
      <span className="size-5 bg-primary text-white rounded-full grid place-content-center">
        <Check size={14} />
      </span>

      <span className="opacity-50">{text}</span>
    </li>
  );
};

export default ListItem;
