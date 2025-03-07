import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "A Monk’s Dharma Lecture",
    description: "Join us as a revered monk shares profound insights on the Dharma, guiding us toward wisdom, compassion, and inner peace. Through ancient teachings and practical wisdom, this lecture offers a path to mindfulness, self-discovery, and spiritual growth. Open your heart and mind to the timeless teachings that illuminate the way to a more harmonious life.",
    imageUrl: "https://thatswhatshehad.com/wp-content/uploads/2017/09/dana-sri-lanka-buddhist-monks-1024x681.jpg"
  },
  {
    title: "Assisted Living",
    description: "We provide a comfortable, home-like environment where seniors receive the care they need while maintaining their independence.",
    imageUrl: "https://www.countrypines.org/wp-content/uploads/2023/09/10-signs-it-might-be-time-to-find-an-assisted-living-facility.jpg"
  },
  {
    title: "Medical Assistance & Nursing Care",
    description: "Our skilled nurses and caregivers offer round-the-clock medical support, medication management, and personalized care plans.",
    imageUrl: "https://www.portea.com/static/ad63fb57468502f3461ef225393b7652/ca537/Nursing-service-in-City-page-big.png"
  },
  {
    title: "Nutritious Meals & Dining",
    description: "We serve well-balanced, dietician-approved meals tailored to meet the dietary needs of each resident.",
    imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
  },
  {
    title: "Recreational & Social Activities",
    description: "We offer engaging activities such as arts & crafts, music therapy, and group outings to keep our residents active and happy.",
    imageUrl: "https://bucknercalderwoods.org/wp-content/uploads/2023/04/10-Indoor-Recreational-Activities-for-Seniors.jpg"
  },
  {
    title: "Memory Care & Dementia Support",
    description: "Specialized programs for individuals with Alzheimer's and dementia, ensuring a safe and supportive environment.",
    imageUrl: "https://img.aplaceformom.com/image/web-lighthouse/prod/memory-care-vs-home-care.jpg?t=default"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-lg">
          At Elder Care Sweet Home, we provide compassionate care to seniors and ensure their comfort and safety.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}