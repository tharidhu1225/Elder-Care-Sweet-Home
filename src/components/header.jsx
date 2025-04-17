import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavSlider from "./navSlider.jsx";
import { FaFacebook, FaInstagramSquare, FaPhoneVolume } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1AzghTXJQ7/?mibextid=wwXIfr");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/");
  };

  const handleWhatsappClick = () => {
    window.open("http://Wa.me/+94743597009");
  };

  return (
    <>
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}

      {/* Top Header */}
      <header className="bg-[#4d735d] w-full py-2 px-4">
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center text-sm text-white gap-2">
              <FaPhoneVolume size={16} />
              <span>Phone:</span>
              <a href="tel:+94743597009" className="text-[#43d939] hover:text-[#34c25c]">+94743597009</a>
            </div>
            <div className="flex items-center text-sm text-white gap-2">
              <MdAttachEmail size={16} />
              <span>Email:</span>
              <a href="mailto:colombosweethome@gmail.com" className="text-[#43d939] hover:text-[#34c25c]">colombosweethome@gmail.com</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <FaFacebook size={20} className="text-blue-500 cursor-pointer" onClick={handleFacebookClick} />
            <FaInstagramSquare size={20} className="text-pink-500 cursor-pointer" onClick={handleInstagramClick} />
            <IoLogoWhatsapp size={20} className="text-green-400 cursor-pointer hover:text-gray-300" onClick={handleWhatsappClick} />
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="bg-[#667b8c] w-full h-[70px] flex justify-between items-center px-4 lg:px-12 shadow-md">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="w-[60px] h-[60px] mr-2" />
          <div className="text-white text-lg font-light font-mono leading-tight">
            <h2>Elder Care</h2>
            <h2>Sweet Home</h2>
          </div>
        </Link>

        {/* Hamburger Menu for all screen sizes */}
        <GiHamburgerMenu
          onClick={() => setIsSliderOpen(true)}
          className="text-3xl text-white cursor-pointer"
        />
      </header>
    </>
  );
}
