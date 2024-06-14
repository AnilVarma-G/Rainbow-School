
// components/EmailSection.js
'use client'

import React, { useState } from "react";
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true); // Show popup when submission starts

    // Simulate sending message (in real scenario, this would be an API call)
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 2 seconds (simulating response delay)
      setEmailSubmitted(true); // Set emailSubmitted to true (simulated success)
    }, 2000); // Simulate a 2-second delay

    // In a real application, you would handle the actual form submission logic here
  };

  return (
    <>
      <h1 className="text-3xl font-bold  text-blue-900 mt-14 " >Contact Us</h1>
      <section  className="grid md:grid-cols-2 my-4 md:my-12 py-24 gap-4 relative " id="Contactus">
  <div   className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
   
  <div className=" md:mt-5 bg-pink-200 p-5 mb-10 text-start rounded-lg">
    <div className="max-w-md">
      {/* <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5> */}
      <p className="text-blue-900">
        Rainbow Concept School <br />
        Nursery to 10th Class <br /><br />
        <strong className="font-extrabold text-red-900">Address:</strong> <br />
        H. No 5-81, SP Nagar <br />
        Bharat Nagar <br />
        Moosapet <br />
        Hyderabad <br />
        Telangana 500018
      </p>

      {/* Contact details */}
      <div className="flex flex-col text-start md:flex-col items-start md:items-center mt-4">
        <a href="tel:+919398764573" className="flex items-center text-blue-900 p-2 rounded-full">
          <AiFillPhone size={24} />
          <span className="ml-2">+919398764573</span>
        </a>
        <a href="tel:+919398764573" className="flex items-center text-blue-900 p-2 rounded-full">
          <AiFillPhone size={24} />
          <span className="ml-2">+919908442253</span>
        </a>

        <a href="mailto:rainbowschool0236@gmail.com" className="flex items-center p-2 text-blue-900 rounded-full md:ml-4 mt-2 md:mt-0">
          <AiOutlineMail size={24} />
          <span className="ml-2">Rainbowschool0236@gmail.com</span>
        </a>
      </div>
    </div>
  </div>

  <div>
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-xl font-semibold text-gray-800">Thank you for contacting us...</p>
        </div>
      </div>
    )}
    {emailSubmitted ? (
      <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
    ) : (
      <form className="flex flex-col max-w-md mx-auto md:ml-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="text-blue-900 block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#3e404c] border border-[#33353F] rounded-sm placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
            placeholder="jacob@google.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="text-blue-900 block text-sm mb-2 font-medium">
            Name
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#3e404c] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="text-blue-900 block text-sm mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#3e404c] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="bg-slate-900 hover:bg-primary-600 text-white font-semibold py-2.5 px-5 rounded-lg w-full"
        >
          Send
        </button>
      </form>
    )}
  </div>
</section>

      <section className="grid md:grid-cols-1 md:gap-4">
        <div className="mb-4 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.84900924872!2d78.42414267516679!3d17.466939483433922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzAxLjAiTiA3OMKwMjUnMzYuMiJF!5e0!3m2!1sen!2sin!4v1718246559733!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps 1"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default EmailSection;

