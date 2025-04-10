import React from "react";
import ActionButton from "../partials/ActionButton";
import { pages } from "./header-data";
import { siteUrl } from "../helpers/functions-general";
const Header = () => {
  return (
    <header className="py-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href={siteUrl}>Dental.</a>
          <nav>
            <ul className="flex gap-10 font-bold">
              {pages.map((page, key) => {
                return (
                  <li key={key}>
                    <a href={`${siteUrl} ${page.slug}`}>{page.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ActionButton label="Book Now" />
        </div>
      </div>
    </header>
  );
};

export default Header;
