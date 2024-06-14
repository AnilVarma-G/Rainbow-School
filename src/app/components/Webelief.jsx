'use client'
import { useState, useEffect } from 'react';

const images = [
  '/scroll1.jpg',
  '/scroll2.jpg',
  '/scroll3.jpg',
  '/scroll4.jpg',
  '/scrol5.jpg',

];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000); // Change slide every 5 seconds (5000 ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h1 className="text-3xl font-bold mb-8 mt-14 text-blue-900 blink">We Believe</h1>
    <p className='text-black text-xl p-5 text-justify'>At Rainbow Concept School, we believe in providing quality education with experiential learning. From our vibrant play school environment to our enriching high school programs, every stage of a child’s educational journey is crafted to inspire curiosity, foster creativity, and build a strong foundation for lifelong learning.</p>
    <div className="relative w-full h-[300px] overflow-hidden" id='Webelieve' >
         {/* <h1 className="text-3xl font-bold mb-8 mt-14 text-yellow-300">We Belief</h1> */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
    </div>
    </>
  );
};

export default ImageSlider;