import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { MdPlace, MdPostAdd } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { GrGallery } from "react-icons/gr";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.07,  // Faster stagger
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25 },  // Faster link animation
  },
};


export default function NavSlider({ closeSlider }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") closeSlider();
  }, [closeSlider]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      onClick={closeSlider}
      className="fixed top-0 left-0 w-full h-[330px] z-10 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Nav Container */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0000009c] w-full sm:w-[90%] max-w-[500px] rounded-b-2xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        

        {/* Staggered Nav Links */}
        <motion.nav
          className="flex flex-col space-y-6 px-6 py-6"
          variants={containerVariants}
        >
          <motion.div variants={linkVariants}>
            <Link to="/" onClick={closeSlider} className="flex items-center text-white hover:text-green-400 text-lg">
              <AiOutlineHome className="mr-2" /> Home
            </Link>
          </motion.div>

          <motion.div variants={linkVariants}>
            <Link to="/services" onClick={closeSlider} className="flex items-center text-white hover:text-green-400 text-lg">
              <MdPostAdd className="mr-2" /> Our Services
            </Link>
          </motion.div>

          <motion.div variants={linkVariants}>
            <Link to="/gallery" onClick={closeSlider} className="flex items-center text-white hover:text-green-400 text-lg">
              <GrGallery className="mr-2" /> Gallery
            </Link>
          </motion.div>

          <motion.div variants={linkVariants}>
            <Link to="/places" onClick={closeSlider} className="flex items-center text-white hover:text-green-400 text-lg">
              <MdPlace className="mr-2" /> Places
            </Link>
          </motion.div>

          <motion.div variants={linkVariants}>
            <Link to="/contact" onClick={closeSlider} className="flex items-center text-white hover:text-green-400 text-lg">
              <AiOutlinePhone className="mr-2" /> Contact Us
            </Link>
          </motion.div>

          <motion.div variants={linkVariants}>
            <Link to="/login" onClick={closeSlider} className="flex items-center text-orange-400 hover:text-orange-300 text-lg">
              <CiLogin className="mr-2" /> Login
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </motion.div>
  );
}
