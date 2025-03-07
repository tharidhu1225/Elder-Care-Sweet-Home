import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const images = [
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359563194WhatsApp%20Image%202025-03-07%20at%2019.28.08_578c3ad1.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359619822WhatsApp%20Image%202025-03-07%20at%2019.27.32_488b708f.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359673206WhatsApp%20Image%202025-03-07%20at%2019.27.51_c9b8984c.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359619822WhatsApp%20Image%202025-03-07%20at%2019.27.34_7e85e3cd.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359673206WhatsApp%20Image%202025-03-07%20at%2019.27.51_9e51d0f3.jpg.jpg",
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section with Background Image Transition */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${images[index]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Elder Care Sweet Home
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg  md:text-2xl font-semibold relative text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Bringing sweetness and joy to every generation. Your support makes a difference in elderly care.
        </motion.p>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6 sm:py-8 text-center text-sm sm:text-base">
        <p>&copy; 2025 Elder Care Sweet Home. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-white hover:text-[#3b5998]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-white hover:text-[#E1306C]" />
          </a>
          <a href="http://Wa.me/+94743597009" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={30} className="text-white hover:text-[#00ee14]" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-2">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <FaPhoneAlt size={18} />
            <span>Phone 1: <a href="tel:0112163580" className="text-[#43d939] hover:text-[#34c25c]">0112163580</a></span>
          </p>
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <FaPhoneAlt size={18} />
            <span>Phone 2: <a href="tel:+94743597009" className="text-[#43d939] hover:text-[#34c25c]">+94743597009</a></span>
          </p>
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-red-600" size={18} />
            <span>Address: No : 980/3 A, Udawaththa Road, Malabe</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <MdEmail size={18} />
            <span>Email: <a href="mailto:colombosweethome@gmail.com" className="text-[#43d939] hover:text-[#34c25c]">colombosweethome@gmail.com</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}
