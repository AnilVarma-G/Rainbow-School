
'use client'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const images = [
  '/scroll1.jpg',
  '/scroll2.jpg',
  '/scroll3.jpg',
  '/scroll4.jpg',
  '/scroll5.jpg',
];

const texts = [
  "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
  "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
  "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
  "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

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
      <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id='Webelieve'>We Believe</h1>
    <div className="relative w-full">
      {isMobile ? (
        <div className="relative w-full h-[300px] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-xl p-5  h-[300px] overflow-y-hidden text-center">
          <h1 className="mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-transparent bg-clip-text">{texts[currentImage]}</h1>
        </div>
      )}
    </div>
    </>
  );
};

export default ImageSlider;
