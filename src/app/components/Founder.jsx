import React from "react";
import Image from "next/image";

const Founder = () => {
  const images = [
    {
      src: "/chairperson.jpg",
      name: "Dr. Sudha Rani, Chairperson",
      color: "bg-blue-200",
    },

    {
      src: "/chairperson3.jpg",
      name: "Dr. MD Misbah Uddin, Managing Director",
      color: "bg-purple-200",
    },
    {
      src: "/chairperson2.jpg",
      name: "Dr. S Sameer Al-Hussaini, Academic Director",
      color: "bg-green-200",
    },
  ];

  return (
    <div className="text-center text-black">
      <h1 className=" mb-4 text-4xl font-bold text-blue-900 blink">
        Founding Members
      </h1>
      <blockquote className="italic text-lg mb-4">
        "Education is not about the learning of facts but the training of minds
        to think"
      </blockquote>
      <p className="mb-8 text-justify">
        Rainbow Concept School & Play School, founded by visionary leaders, is
        guided by Dr. Sudha Rani, Chairperson, whose dedication and deep
        community values ensure the institution's commitment to quality
        education and holistic development. Dr. MD Misbah Uddin, Managing
        Director, upholds the school's highest standards with a relentless
        pursuit of excellence in operations and educational quality.Dr. S Sameer
        Al-Hussaini, Academic Director, leverages his extensive educational
        expertise to innovate and create a nurturing learning environment
        centered on student needs. Together, under their leadership, Rainbow
        Concept School & Play School continues to flourish as a beacon of
        educational excellence.
      </p>
      <div className="flex flex-wrap justify-center items-start">
        {images.map((image, index) => (
          <div key={index} className="m-2 w-80 relative">
            <div
              className={`relative h-[500px] rounded-md overflow-hidden ${image.color} shadow-lg transition-transform duration-300 transform hover:scale-105`}
            >
              <Image
                src={image.src}
                alt={image.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-yellow-100 opacity-0 transition-opacity duration-300"></div>
            </div>
            <p className="text-black mt-2 font-semibold text-center relative z-10 hover:text-xl hover:text-blue-900">
              <span className="relative">{image.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
