
import React from 'react';

const Facilities = () => {
    const items = [
        {
            header: "Transport",
            imageSrc: "/transpaort.jpg", // Corrected image path
            content: "Our school provides safe and reliable transport services to ensure students commute comfortably. With dedicated routes covering various neighborhoods, we prioritize student safety and punctuality."
        },
        {
            header: "CC Camera Security",
            imageSrc: "/cccamera.jpg", // Corrected image path
            content: "To ensure the safety of our students and staff, our campus is equipped with state-of-the-art CCTV surveillance. This system monitors key areas of the school premises, promoting a secure learning environment."
        },
        {
            header: "Digital Classrooms",
            imageSrc: "/digital.jpg", // Corrected image path
            content: "Our digital classrooms are equipped with the latest technology to enhance learning experiences. From interactive displays to multimedia resources, students benefit from innovative teaching methods tailored to modern educational standards."
        },
        {
            header: "Special Focus to Kids",
            imageSrc: "/special.jpg", // Corrected image path
            content: "We prioritize personalized attention and care for every child at our school. Our programs and activities are designed to nurture their unique talents and foster holistic development in a supportive environment."
        },
        {
            header: "Best Caring Teachers",
            imageSrc: "/caringteachers.jpg", // Corrected image path
            content: "Our dedicated teaching staff comprises passionate educators who go beyond academics to mentor and guide students. With their commitment to excellence, they create engaging learning experiences that inspire and empower."
        },
        {
            header: "Full Security Close Gates",
            imageSrc: "/gates.jpg", // Corrected image path
            content: "Ensuring a safe environment is our top priority. Our school premises are equipped with secure fencing and monitored entry points, providing peace of mind to students, staff, and parents."
        }
    ];

    return (
        <div className="p-4 mt-14" id='Facilities'>
            <h1 className="text-3xl font-bold mb-8 text-blue-900 blink">Our Facilities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-sm">
                {items.map((item, index) => (
                    <div key={index} className="bg-sky-50 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 facilities">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2 p-2">{item.header}</h2>
                        <img
                            src={item.imageSrc}
                            alt={item.header}
                            className="mx-auto mb-4 object-cover h-48 md:h-64 lg:h-72 w-full"
                            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                        />
                        <p className="text-sm p-2">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facilities;

