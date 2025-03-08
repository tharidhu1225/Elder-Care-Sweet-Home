import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const images = [
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359563194WhatsApp%20Image%202025-03-07%20at%2019.28.08_578c3ad1.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359619822WhatsApp%20Image%202025-03-07%20at%2019.27.32_488b708f.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359673206WhatsApp%20Image%202025-03-07%20at%2019.27.51_c9b8984c.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359619822WhatsApp%20Image%202025-03-07%20at%2019.27.34_7e85e3cd.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359673206WhatsApp%20Image%202025-03-07%20at%2019.27.51_9e51d0f3.jpg.jpg",
    "https://srvjdzszofbozrnebxmh.supabase.co/storage/v1/object/public/images//1741359563193WhatsApp%20Image%202025-03-07%20at%2019.28.07_c808b63b.jpg.jpg"
  ];

  const texts = [
    "Elder Care Sweet Home",
    "Elder Care Sweet Home",
    "Elder Care Sweet Home",
    "Elder Care Sweet Home",
    "Elder Care Sweet Home",
    "Elder Care Sweet Home"
  ];

  const subtexts = [
    "Baththaramulla Main Branch.",
    "Kegalle Branch.",
    "Kaduwela Branch.",
    "Kegalle Branch.",
    "Kaduwela Branch.",
    "Baththaramulla Main Branch."
  ];

  const [index, setIndex] = useState(0);

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1AzghTXJQ7/?mibextid=wwXIfr");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/");
  };

  const handleWhatsappClick = () => {
    window.open("http://Wa.me/+94743597009");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5500); // Change image and text every 5 seconds

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

        {/* Animated Swiping Text */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={texts[index]}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 100% 0% 0%)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {texts[index]}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={subtexts[index]}
            className="text-sm sm:text-lg md:text-2xl font-semibold relative text-white drop-shadow-lg mt-2"
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 100% 0% 0%)" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          >
            {subtexts[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaPhoneAlt size={18} />
            <span>Phone 1: <a href="tel:0112163580" className="text-green-400 hover:text-green-500">0112163580</a></span>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaPhoneAlt size={18} />
            <span>Phone 2: <a href="tel:+94743597009" className="text-green-400 hover:text-green-500">+94743597009</a></span>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaMapMarkerAlt className="text-red-500" size={18} />
            <span>No: 980/3 A, Udawaththa Road, Malabe</span>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MdEmail size={18} />
            <span>Email: <a href="mailto:colombosweethome@gmail.com" className="text-green-400 hover:text-green-500">colombosweethome@gmail.com</a></span>
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/services" className="hover:text-green-400">Our Services</a></li>
            <li><a href="/gallery" className="hover:text-green-400">Gellery</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <FaFacebookF size={20} className="text-blue-500 cursor-pointer" onClick={handleFacebookClick} />
            <FaInstagram size={20} className="text-pink-500 cursor-pointer" onClick={handleInstagramClick} />
            <FaWhatsapp size={20} className="text-green-400 cursor-pointer hover:text-gray-300" onClick={handleWhatsappClick} />
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Elder Care Sweet Home. All rights reserved.
      </div>
    </footer>
      </div>
    
  );
}
