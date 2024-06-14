import React from "react";
import NavLink from "./NavLink";


const MenuOverlay = ({ links }) => {
  return (
    <ul className="menu-overlay">
      {links.map((link, index) => (
        <li
          key={index}
          style={{ animationDelay: `${index * 0.2}s` }} // Adjust the delay
        >
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
