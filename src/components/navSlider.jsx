import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import { MdPlace, MdPostAdd } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { GrGallery } from "react-icons/gr";

export default function NavSlider({ closeSlider }) {
  // Close menu when user presses 'Esc' key
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeSlider();
    }
  }, [closeSlider]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      onClick={closeSlider}
      className="fixed top-0 left-0 w-full h-screen bg-[#00000080] z-10 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}  // Slow down the fade-out effect of the background
    >
      {/* Sidebar with Slide Animation */}
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
        className="bg-[#667b8c] w-[75%] sm:w-[250px] h-screen shadow-lg"
        initial={{ x: "-100%" }} // Starts off-screen to the left
        animate={{ x: 0 }} // Slides in to the screen
        exit={{ x: "-100%" }} // Slides out when closing
        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 1.5 }}  // Slow down the slide-out effect
      >
        {/* Logo Section */}
        <div className="bg-[#a4b8ba] flex justify-center items-center py-4">
          <img
            src="/logo.jpg"
            className="cursor-pointer w-[100px] h-[100px]"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 px-6 mt-4">
          <Link to="/" onClick={closeSlider} className="flex items-center text-gray-900 hover:border-b-5 border-b-[#43d939] text-lg">
            <AiOutlineHome className="mr-2" /> Home
          </Link>
          <Link to="/services" onClick={closeSlider} className="flex items-center text-gray-900 hover:border-b-5 border-b-[#43d939] text-lg">
            <MdPostAdd className="mr-2" /> Our Service
          </Link>
          <Link to="/gallery" onClick={closeSlider} className="flex items-center text-gray-900 hover:border-b-5 border-b-[#43d939] text-lg">
            <GrGallery className="mr-2" /> Gallery
          </Link>
          <Link to="/places" onClick={closeSlider} className="flex items-center text-gray-900 hover:border-b-5 border-b-[#43d939] text-lg">
            <MdPlace className="mr-2" /> Places
          </Link>
          <Link to="/contact" onClick={closeSlider} className="flex items-center text-gray-900 hover:border-b-5 border-b-[#43d939] text-lg">
            <AiOutlinePhone className="mr-2" /> Contact Us
          </Link>
          <Link to="/login" onClick={closeSlider} className="flex items-center text-orange-500 hover:text-orange-300 text-lg">
            <CiLogin className="mr-2" /> Login
          </Link>
        </nav>
      </motion.div>
    </motion.div>
  );
}
