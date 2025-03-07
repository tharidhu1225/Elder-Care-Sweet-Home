import React from 'react';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhoneForwarded } from 'react-icons/md';

const services = [
  {
    imageUrl: "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359563194WhatsApp%20Image%202025-03-07%20at%2019.28.08_578c3ad1.jpg.jpg",
    address: "No : 980/3 A,Udawaththa Road,Malabe",
    phone1 : "0112163580",
    phone2 : "+94743597009",
    email : "colombosweethome@gmail.com",
    branch : "Baththaramulla Main Branch"
  },
  {
    imageUrl: "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359619822WhatsApp%20Image%202025-03-07%20at%2019.27.32_488b708f.jpg.jpg",
    address: "Mangalagama,Molagoda,Kegalle",
    phone1 : "0112163580",
    phone2 : "+94743597009",
    email : "colombosweethome@gmail.com",
    branch : "Kegalle"
  },
{
  imageUrl: "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359673206WhatsApp%20Image%202025-03-07%20at%2019.27.51_9e51d0f3.jpg.jpg",
    address: "171/B,Colombo Road,Kaduwela",
    phone1 : "0112163580",
    phone2 : "+94743597009",
    email : "colombosweethome@gmail.com",
    branch : "Kaduwela"
}
];

export default function PlacesPage() {
  return (
    <div className="bg-gray-400 text-white py-6 sm:py-8 px-4 sm:px-8 text-center text-sm sm:text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-56 sm:h-64">
              <img src={service.imageUrl} alt="Branch Image" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
            <p className="flex items-center justify-center gap-2">
                <BiSolidBuildingHouse size={20} />
                Branch : {service.branch}
              </p>
              <p className="flex items-center justify-center gap-2">
                <MdPhoneForwarded size={20} />
                Phone 1 : <a href="tel:0112163580" className="text-[#43d939] hover:text-[#34c25c]">{service.phone1}</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MdPhoneForwarded size={20} />
                Phone 2 : <a href="tel:+94743597009" className="text-[#43d939] hover:text-[#34c25c]">{service.phone2}</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-red-600" size={20} />
                Address : {service.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <MdEmail size={20} />
                Email : <a href="mailto:info@suwaarana.com" className="text-[#43d939] hover:text-[#34c25c]">{service.email}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}