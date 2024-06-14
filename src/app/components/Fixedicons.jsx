



// components/FixedIcons.js

import React from 'react';
import Link from 'next/link';
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { FaWhatsapp, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiYoutube } from 'react-icons/fi';

const FixedIcons = () => {
    return (
        <div className="fixed  right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-start">
            {/* Phone icon with Link */}
            <a href="tel:+919908442253" className="bg-blue-500 text-white p-2 rounded-full mb-4">
                <AiFillPhone size={24} />
            </a>

            {/* WhatsApp icon with Link */}
            <a href="https://wa.me/918897116408" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded-full mb-4">
                <FaWhatsapp size={24} />
            </a>

            {/* Instagram icon with Link */}
            <a href="https://www.instagram.com/rainbow_school_rcs?igsh=MXN2aWxhcjNjY256" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-2 rounded-full mb-4">
                <AiFillInstagram size={24} />
            </a>

            {/* Twitter icon with Link */}
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-2 rounded-full mb-4">
                <FaTwitter size={24} />
            </a>

            {/* Facebook icon with Link */}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-2 rounded-full mb-4">
                <FaFacebookF size={24} />
            </a>

            {/* Email icon with Link */}
            <a href="mailto:rainbowschool0236@gmail.com" className="bg-red-500 text-white p-2 rounded-full mb-4">
                <MdEmail size={24} />
            </a>

            {/* YouTube icon with Link */}
            <a href="https://www.youtube.com/example" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white p-2 rounded-full mb-4">
                <FiYoutube size={24} />
            </a>
        </div>
    );
}

export default FixedIcons;

