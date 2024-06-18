





import React from "react";
import { images } from "./constants";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const rainbowColors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#66FF00", // Yellow
  "#66FF00", // Green
  "#0000FF", // Blue
  "#EE82EE", // Indigo
  "#EE82EE", // Violet
];

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
      <div className="absolute -top-4 -left-4 lg:left-0  z-50 p-4 logo">
        <Image
          src="/rainbowlogo.jpg"
          alt="Logo"
          width={100}
          height={100}
          style={{ borderRadius: "100%" }}
        />
      </div>

          <div className="relative w-full h-[50vh] sm:h-[100vh] overflow-hidden">
   {images.map((elem, idx) => (
    <div
      key={idx}
      className={`${
        idx === activeImage ? "block relative w-full h-full" : "hidden"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={elem.src}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100} // Adjust image quality if necessary
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-blue-200 px-6">
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
          className="w-full max-w-xl"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="mt-20 text-3xl font-extrabold">
            {getColoredTitle(elem.title)}
          </div>
          <div className="leading-relaxed font-medium text-base tracking-wide mt-4">
            <h2 className="text-blue-950 font-extrabold">{elem.head}</h2>
            <p>{elem.desc}</p>
          </div>
        </motion.div>
      </div>
    </div>
  ))}
</div>

      {/* {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block relative w-full h-[50vh] sm:h-[100vh] overflow-hidden"
              : "hidden"
          }`}
        >
          <div className="relative w-full h-[50vh] sm:h-[100vh]">
            <Image
              src={elem.src}
              alt=""
              layout="responsive"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full"
              width={1920}
              height={1080}
            />
          </div>
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
              <div className=" mt-72 text-2xl font-extrabold">
                {getColoredTitle(elem.title)}
              </div>
              <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-white">
                <h2 className="text-blue-950 font-extrabold">{elem.head}</h2>
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
      ))} */}

      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-50 flex justify-start items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="cursor-pointer"
          onClick={clickPrev}
        >
          <Image src={left} alt="" />
        </motion.div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-50 flex justify-end items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="cursor-pointer"
          onClick={clickNext}
        >
          <Image src={right} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
