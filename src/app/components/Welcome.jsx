import React from 'react';

const Welcome = () => {
  return (
    <div className="flex   items-center justify-center  ">
      <div className="text-center p-3  shadow-lg rounded-lg">
        <h1 className="text-4xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500 blink">
          WELCOME
        </h1>
        <p className="mt-4 text-lg text-black text-justify">
          Welcome to Rainbow Concept School & Play School! We are delighted to have you join our vibrant and nurturing community. At Rainbow, we believe in fostering a love for learning from an early age, providing a safe and stimulating environment where children can explore, discover, and grow. Our dedicated team of educators is committed to delivering a holistic education that balances academic excellence with creativity, play, and social development. Together, we create a rainbow of opportunities for every child to shine brightly. Welcome to a place where imaginations soar and lifelong friendships begin!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
