import { Brush, Pill, Syringe } from "lucide-react";

export const services = [
  {
    image: "https://placehold.co/350x200",
    icon: <Pill size={60} className="stroke-white size-20" />,
    title: "General Destiny",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, voluptates",
    path: "/general-dentistry",
  },
  {
    image: "https://placehold.co/350x200",
    icon: <Syringe size={60} className="stroke-white size-20" />,
    title: "Dental Implant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, voluptates",
    path: "/dental-implant",
  },
  {
    image: "https://placehold.co/350x200",
    icon: <Brush size={60} className="stroke-white size-20" />,
    title: "Teeth Whitening",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, voluptates",
    path: "/teeth-whitening",
  },
];
