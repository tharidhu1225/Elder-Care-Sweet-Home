import { motion } from "framer-motion";
import { FaDonate, FaRegHeart, FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://assistinghands.com/8/wp-content/uploads/sites/31/2020/01/Elderly-Care-in-Naperville.jpg')",
        }}
      >
        {/* Modern Animated Title (Typewriter Effect) */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Elder Care Sweet Home
        </motion.h1>

        {/* Modern Animated Description (Responsive) */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-gray-200 mt-4 max-w-lg sm:max-w-xl md:max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Bringing sweetness and joy to every generation. Your support makes a difference in elderly care.
        </motion.p>
      </div>

      {/* Donation Section */}
      <div className="py-16 px-6 text-center bg-gray-900 text-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Support Our Cause 💖
        </motion.h2>
        <motion.p
          className="mt-4 max-w-lg sm:max-w-3xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your donation helps us provide sweets and support elderly communities. Together, we can make a significant difference.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-[#f59e0b] text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-[#d97706] transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FaDonate className="inline mr-2" /> Donate Now
        </motion.button>
      </div>

      {/* Testimonials Section */}
      <div className="py-5 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.h2>
        
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
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={30} className="text-white hover:text-[#00ee14]" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
        <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt size={20} />
            Phone 1: <a href="tel:+94702675577" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt size={20} />
            Phone 2: <a href="tel:+94112801675" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-red-600" size={20} />
            Address: Baththaramulla Main Branch
          </p>
          <p className="flex items-center justify-center gap-2">
            <MdEmail size={20} />
            Email: <a href="mailto:info@suwaarana.com" className="text-[#43d939] hover:text-[#34c25c]">Update Soon</a>
          </p>
        </div>
      </div>
    </div>
  );
}
