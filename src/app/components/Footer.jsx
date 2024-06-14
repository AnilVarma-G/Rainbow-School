import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      {/* <span className="inline-block w-20 h-20 overflow-hidden rounded-full border-2 border-white">
  <img
    src="/rainbowlogo.jpg"
    alt=""
    className="object-cover w-full h-full"
  />
</span> */}
<span className="text-black font-extrabold">Designed by @RISTOGLOBALTECH</span>
        <p className="text-black font-extrabold">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
