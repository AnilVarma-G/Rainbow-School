// components/FixedIcons.js

import React from 'react';
import Link from 'next/link';
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

const FixedIcons = () => {
    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-start">
            {/* Phone icon with Link */}
            {/* <a href="tel:+919908442253" className="bg-blue-500 text-white p-2 rounded-full mb-4">
                <AiFillPhone size={24} />
            </a> */}

            {/* Phone icon with Link */}
            <a href="tel:+919398764573" className="bg-blue-500 text-white p-2 rounded-full mb-4">
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
            {/* Add more icons as needed */}
        </div>
    );
}

export default FixedIcons;
