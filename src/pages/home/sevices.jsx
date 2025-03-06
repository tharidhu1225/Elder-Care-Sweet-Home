import React from 'react';

const services = [
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
      <div className="max-w-4xl w-full bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">Our Services</h2>
        <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">
          At Elder Care Sweet Home, we provide compassionate care to seniors and ensure their comfort and safety.
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
            Contact Us for More Details
          </button>
        </div>
      </div>
    </div>
  );
}
