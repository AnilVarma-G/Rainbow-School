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
    },
    {
      text: "I'm impressed by the dedication of the staff. My child feels motivated and enjoys learning here.",
      imageUrl: "/image9.jpg",
    },
    {
      text: "Great school! The extracurricular activities are fantastic, and my child has made wonderful friends.",
      imageUrl: "/image12.jpg",
    },
    {
      text: "The school's environment is safe and welcoming. The academic curriculum is challenging yet engaging.",
      imageUrl: "/image6.jpg",
    },
    {
      text: "I love the practical approach to learning. The teachers make complex subjects easy to understand.",
      imageUrl: "/image7.jpg",
    },
    {
      text: "The school has provided me with opportunities to explore my interests and grow as an individual.",
      imageUrl: "/image2.jpg",
    }
  ];

  return (
    <div className="feedback-list-wrapper mt-14">
      <div className="long-image">
        <img
          className="w-full h-[440px] object-cover"
          src="/image6.jpg"
          alt="Long Image"
        />
      </div>
      <div className="feedback-list-container">
        <div className="feedback-list flex items-center overflow-x-auto">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item bg-white p-4 rounded-lg shadow-md mx-2 max-w-xs flex flex-col items-center">
              <div className="profile-picture w-20 h-20 overflow-hidden rounded-full mb-4">
                <img src={feedback.imageUrl} alt="Profile" className="rounded-full w-full h-full object-cover" />
              </div>
              <p className="feedback-text text-center">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;