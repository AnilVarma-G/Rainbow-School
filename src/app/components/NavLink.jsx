import Link from "next/link";
import React from "react";
import styles from './NavLink.module.css';

const NavLink = ({ href, title,onClick  }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick handler passed from parent (Navbar or MenuOverlay)
    }
  };
  return (
    <Link href={href} passHref>
      <span onClick={handleClick}  className={`block py-2 pl-3 pr-4 text-black hover:text-red-700 sm:text-xl rounded md:p-0 nav-link ${styles.navLink}  ${styles.rainbowText}`}>
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
