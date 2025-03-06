import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhoneForwarded } from 'react-icons/md';

const services = [
  {
    imageUrl: "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741170347247WhatsApp%20Image%202025-03-05%20at%2011.43.12_64803598.jpg.jpg",
    address: "Baththaramulla Main Branch"
  },
  {
    imageUrl: "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741169709539WhatsApp%20Image%202025-03-05%20at%2007.29.42_0f540453.jpg.jpg",
    address: "Kegalle Molagoda Branch"
  },
];

export default function PlacesPage() {
  return (
    <div className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-8 text-center text-sm sm:text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {services.map((service, index) => (
          <div key={index} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-56 sm:h-64">
              <img src={service.imageUrl} alt="Branch Image" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="flex items-center justify-center gap-2">
                <MdPhoneForwarded size={20} />
                Phone 1: <a href="tel:+94702675577" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MdPhoneForwarded size={20} />
                Phone 2: <a href="tel:+94112801675" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-red-600" size={20} />
                Address: {service.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <MdEmail size={20} />
                Email: <a href="mailto:info@suwaarana.com" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}