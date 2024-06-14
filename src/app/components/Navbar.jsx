'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Gallery",
    path: "#Gallery",
  },
  {
    title: "Facilities",
    path: "#Facilities",
  },
  {
    title: "Activities",
    path: "#Activities",
  },
  {
    title: "Contactus",
    path: "#Contactus",
  },
  {
    title: "Webelieve",
    path: "#Webelieve",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full border h-20 border-[grey] rounded-sm top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center text-2xl md:text-5xl text-white font-semibold">
          {/* <img src="/rainbowlogo.jpg" alt="Rainbow School Logo" width={100} height={30} /> */}
          <span className="rainbow-text ml-2">Rainbow School</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4  md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
