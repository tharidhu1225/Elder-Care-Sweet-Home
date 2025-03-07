import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = () => {
    const whatsappMessage = `Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/94743597009?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl w-full bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-lg">
          Reach out to us anytime! We’re here to help.
        </p>

        {/* Quick Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <a 
            href="https://wa.me/94743597009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md w-full md:w-auto"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> WhatsApp Us
          </a>

          <a 
            href="mailto:colombosweethome@gmail.com" 
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md w-full md:w-auto"
          >
            <FaEnvelope className="mr-2 text-2xl" /> Email Us
          </a>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter your name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              rows="4" 
              placeholder="Enter your message" 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button 
            type="button" 
            onClick={handleWhatsAppSend}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md"
          >
            Send Message via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
