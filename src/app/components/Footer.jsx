
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center"> {/* Container for logo and text */}
          <img
            src="/rainbowlogo.jpg"
            alt="Rainbow Logo"
            className="object-cover w-20 h-20 rounded-full mr-4"
          />
          <span className="text-blue-950 font-extrabold">Designed by @RISTOGLOBALTECH</span>
        </div>
        <p className="text-blue-950  ml-24 font-extrabold">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
