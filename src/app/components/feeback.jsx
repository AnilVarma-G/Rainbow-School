



// components/FeedbackList.js
'use client'
import React, { useEffect, useRef } from 'react';

const FeedbackList = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const feedbacks = [
    {
      text: "Our child has shown remarkable improvement since joining. The teachers are very supportive and nurturing.",
      imageUrl: "/image13.jpg",
      name: "John Doe",
    },
    {
      text: "I'm impressed by the dedication of the staff. My child feels motivated and enjoys learning here.",
      imageUrl: "/image9.jpg",
      name: "Jane Smith",
    },
    {
      text: "Great school! The extracurricular activities are fantastic, and my child has made wonderful friends.",
      imageUrl: "/image12.jpg",
      name: "Emily Johnson",
    },
    {
      text: "The school's environment is safe and welcoming. The academic curriculum is challenging yet engaging.",
      imageUrl: "/image6.jpg",
      name: "Michael Brown",
    },
    {
      text: "I love the practical approach to learning. The teachers make complex subjects easy to understand.",
      imageUrl: "/image7.jpg",
      name: "Jessica Davis",
    },
    {
      text: "The school has provided me with opportunities to explore my interests and grow as an individual.",
      imageUrl: "/image2.jpg",
      name: "Daniel Wilson",
    }
  ];

  return (
    <>
    <h2 className="text-4xl font-bold text-blue-900  mt-14 blink"> Our School Feed Back</h2>
    <div className="feedback-list-wrapper mt-14">
      <div className="long-image">
        <img
          className="w-full h-[300px] md:h-[440px] object-cover"
          src="/image6.jpg"
          alt="Long Image"
        />
      </div>
      <div className="feedback-list-container mt-4">
        <div ref={scrollRef} className="feedback-list flex items-center overflow-x-auto">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item bg-white p-4 rounded-lg shadow-md mx-2 max-w-xs flex flex-col items-center">
              <div className="profile-picture w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full mb-2 md:mb-4">
                <img src={feedback.imageUrl} alt="Profile" className="rounded-full w-full h-full object-cover" />
              </div> 
              <p className="feedback-name text-center text-xs font-extrabold  md:text-sm mt-2">{feedback.name}</p>
              <p className="feedback-text text-center text-sm md:text-base">{feedback.text}</p>
          
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FeedbackList;
