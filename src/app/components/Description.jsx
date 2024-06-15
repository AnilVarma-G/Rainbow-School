

import React from "react";
import { images } from "./constants";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

// Define rainbow colors
const rainbowColors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#66FF00", // Yellow
  "#66FF00", // Green
  "#0000FF", // Blue
  "#EE82EE", // Indigo
  "#EE82EE", // Violet
];

// Function to split title into colored words
const getColoredTitle = (title) => {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      style={{ color: rainbowColors[index % rainbowColors.length] }}
    >
      {word}{" "}
    </span>
  ));
};

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="relative w-full">
      {/* Logo in the top-left corner */}
      <div className=" absolute top-0 -mt-10 left-0 z-50   p-4 logo">
        <Image
          src="/rainbowlogo.jpg"
          alt="Logo"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </div>

      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block relative w-full h-[80vh] overflow-hidden"
              : "hidden"
          }`}
        >
          <Image
            src={elem.src}
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-6">
            <motion.div
              initial={{
                opacity: idx === activeImage ? 0 : 0.5,
                scale: idx === activeImage ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === activeImage ? 1 : 0.5,
                scale: idx === activeImage ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
              className="w-full"
            >
              <div className="py-16 mt-16 text-5xl font-extrabold">
                {getColoredTitle(elem.title)}
              </div>
              <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-white">
                <h2 className="text-white font-extrabold">{elem.head}</h2>
                {elem.desc}
              </div>
            </motion.div>
            <button
              className="text-white bg-pink-400 uppercase px-4 py-2 rounded-md my-10"
              id="Contact"
            >
              Contact us
            </button>
          </div>
        </div>
      ))}

      {/* Navigation buttons in top corners */}
      <div className="absolute top-[250px] left-0 flex justify-center items-center mt-4 ml-4 z-50">
        <div className="cursor-pointer" onClick={clickPrev}>
          <Image src={left} alt="" />
        </div>
      </div>

      <div className="absolute top-[250px] right-0 flex justify-center items-center mt-4 mr-4 z-50">
        <div className="cursor-pointer" onClick={clickNext}>
          <Image src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
