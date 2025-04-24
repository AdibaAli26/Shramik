import React from "react";
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#EBF5FF] py-5 px-8 flex justify-between items-center border-b border-[#E5E7EB]">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-14 mr-3" />
          <h1 className="text-black font-bold text-2xl">Shramik</h1>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 text-lg">Home</Link>
          <Link to="/about" className="text-gray-600 text-lg">About us</Link>
          <Link to="/contact" className="text-black text-lg font-semibold">Contact Us</Link>
        </nav>

        <button className="bg-[#1E40AF] text-white px-8 py-3 rounded-full flex items-center font-semibold">
          <span className="mr-2">⭐</span>
          Download Now
        </button>
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
