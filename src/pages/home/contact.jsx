import { IoLogoWhatsapp } from "react-icons/io5";

export default function ContactUs() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="text-center bg-white p-6 md:p-10 lg:p-12 rounded-xl shadow-lg max-w-lg md:max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Site Under Construction</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          We are currently working on something amazing. Our website will be ready soon!
        </p>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-sm md:text-base text-gray-600">Redy soon!</p>
        </div>

        <div className="mt-6 text-sm md:text-base text-gray-600">
          <p>&copy; 2025 Elder Care Sweet Home. All rights reserved.</p>
        </div>
      </div>
    </div>
    );
  }
  