import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import React from "react";
import { info } from "./header-data";
import SocialMediaLink from "./SocialMediaLink";

const HeaderInfo = () => {
  return (
    <section className="bg-primary text-white py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4">
            {info.map((item, key) => {
              return (
                <li className="flex gap-2 items-center" key={key}>
                  {item.icon} {item.label}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-4">
            <SocialMediaLink
              icon={<Facebook size={16} className="stroke-primary" />}
              url="https://facebook.com"
            />

            <SocialMediaLink
              icon={<Youtube size={16} className="stroke-primary" />}
              url="https://youtube.com"
            />

            <SocialMediaLink
              icon={<Instagram size={16} className="stroke-primary" />}
              url="https://instagram.com"
            />

            <SocialMediaLink
              icon={<Linkedin size={16} className="stroke-primary" />}
              url="https://www.vivamax.net/"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeaderInfo;
