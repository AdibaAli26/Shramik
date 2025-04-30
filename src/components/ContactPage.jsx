import React from "react";
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#EBF5FF] py-4 sm:py-5 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-[#E5E7EB] gap-4">
        <Link to="/" className="flex items-center hover:scale-105 transition-transform">
          <img src="/logo.png" alt="Logo" className="h-12 sm:h-14 w-12 sm:w-14 mr-3" />
          <h1 className="text-black font-bold text-xl sm:text-2xl">Shramik</h1>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-gray-600 text-base sm:text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">Home</Link>
          <Link to="/about" className="text-gray-600 text-base sm:text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">About us</Link>
          <Link to="/contact" className="text-black text-base sm:text-lg font-semibold border-b-4 border-black hover:scale-110 transition-transform">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search address, city, location"
            className="border border-gray-400 rounded-full py-2 px-4 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105 transition-all"
          />
          <button className="bg-white border border-black text-black px-4 py-2 rounded-full shadow-lg hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95">Post</button>
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white text-lg">👤</span>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-12">
            Contact Us
          </h1>
          
          <div className="space-y-10">
            <div className="bg-[#EBF5FF] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
              <p className="text-xl text-[#4B5563] mb-4">
                You can reach out to us for any type of query, feedback, business, collab at
              </p>
              <p className="text-xl font-semibold text-[#4B5563]">
                shramikofficial@gmail.com
              </p>
            </div>

            <div className="bg-[#EBF5FF] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-4">Visit Us</h2>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Sector 71, Near Metro Station<br />
                Sector 51, Noida,<br />
                Uttar Pradesh.
              </p>
            </div>

            <div className="bg-[#EBF5FF] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-4">Follow Us</h2>
              <div className="flex items-center justify-center gap-6">
                <img src="/instagram.jpg" alt="Instagram" className="w-[44px] h-[44px]" />
                <img src="/twitter.avif" alt="Twitter" className="w-[44px] h-[44px]" />
                <img src="/linkedin.png" alt="LinkedIn" className="w-[44px] h-[44px]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage; 
