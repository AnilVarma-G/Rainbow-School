import React from 'react';
import Image from 'next/image';

const Founder = () => {
    const images = [
        { src: '/chairperson.jpg', name: 'Dr. Sudha Rani, Chairperson' },
        { src: '/chairperson2.jpg', name: 'Dr. S Sameer Al-Hussaini, Academic Director' },
        { src: '/chairperson3.jpg', name: 'Dr. MD Misbah Uddin, Managing Director' }
    ];

    return (
        <div className="text-center text-white">
            <h1 className="text-3xl mb-4 text-yellow-400">Founded Members</h1>
            <blockquote className="italic text-lg mb-4">
                "Education is the key to unlocking the golden door of freedom." - George Washington Carver
            </blockquote>
            <p className="mb-8 text-justify">
                Rainbow Concept School &
                 Play School was founded by visionary leaders committed to providing a nurturing environment where every child can flourish. Dr. S Sameer Al-Hussaini, the Academic Director, brings a wealth of educational expertise, ensuring our curriculum is innovative and student-focused. Dr. MD Misbah Uddin, the Managing Director, oversees operations with a passion for excellence, ensuring that our school maintains the highest standards of care and education. D. Sudha Rani, our esteemed Chairperson, guides the institution with dedication and a deep understanding of community values, ensuring that Rainbow Concept School & Play School remains a beacon of quality education and holistic development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-around">
                {images.map((image, index) => (
                    <div key={index} className="m-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                            <Image
                                src={image.src}
                                alt={image.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <p className="text-white mt-2">{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Founder;
