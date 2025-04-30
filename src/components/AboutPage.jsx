import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#EBF5FF] py-4 px-4 flex flex-col sm:flex-row justify-between items-center border-b border-[#E5E7EB] gap-4">
        <Link to="/" className="flex items-center hover:scale-105 transition-transform">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 sm:h-14 sm:w-14 mr-3" />
          <h1 className="text-black font-bold text-lg sm:text-2xl">Shramik</h1>
        </Link>

        <nav className="flex items-center space-x-4 sm:space-x-8">
          <Link to="/" className="text-gray-600 text-sm sm:text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">Home</Link>
          <Link to="/about" className="text-black text-sm sm:text-lg font-semibold border-b-4 border-black hover:scale-110 transition-transform">About us</Link>
          <Link to="/contact" className="text-gray-600 text-sm sm:text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-400 rounded-full py-1 px-3 w-32 sm:w-64 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105 transition-all"
          />
          <button className="bg-white border border-black text-black px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-full shadow-lg hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95">Post</button>
          <div className="h-8 w-8 sm:h-10 sm:w-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white text-sm sm:text-lg">👤</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-black mb-6 sm:mb-12">
            About Shramik
          </h1>
          
          <div className="space-y-4 sm:space-y-10 text-black text-base sm:text-xl leading-relaxed">
            <p>
              At Shramik, we are dedicated to transforming the way laborers find jobs and how businesses 
              connect with skilled workers. Our mission is to create a seamless, transparent, and 
              accessible platform where hardworking individuals can secure reliable job opportunities, and 
              hirers can effortlessly hire the right talent.
            </p>

            <p>
              We understand the challenges laborers face—irregular work, lack of visibility, and unfair 
              wages. That's why we've built a solution that empowers workers by giving them access to 
              verified job listings, fair pay, and a hassle-free hiring process. Whether you are a 
              construction worker, electrician, plumber, or any other skilled laborer, our platform ensures 
              you find the right job, at the right time, with the right employer.
            </p>

            <p>
              For businesses, we simplify the hiring process with a smart-matching system, real-time job 
              postings, and a database of verified professionals. Finding the right workforce has never 
              been easier.
            </p>

            <p>
              At Shramik, we believe that every hardworking individual deserves a chance to grow and 
              succeed. Together, let's build a future where opportunities are within everyone's reach.
            </p>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-white py-8 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">Want To Contact With Us?</h2>
          <p className="text-base sm:text-2xl text-black mb-4">
            You can reach out to us for any type of query, feedback, business, collab at
          </p>
          <p className="text-base sm:text-2xl text-black font-semibold">
            shramikofficial@gmail.com
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-6 border-t border-gray-300">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-start flex-wrap gap-8">
          {/* Company Section */}
          <div className="text-left w-full sm:w-auto">
            <img src="/logo.png" alt="Shramik Logo" className="w-10 h-10 sm:w-[60px] sm:h-[60px] mb-4" />
            <h3 className="text-base sm:text-[20px] font-bold text-black mb-2">Company</h3>
            <ul className="space-y-[6px]">
              {["About us", "Terms & conditions", "Privacy policy", "Careers", "Anti-discrimination policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-[16px] text-[#4B5563] hover:text-black">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-base sm:text-[22px] font-bold text-black mb-2">Address</h3>
            <p className="text-sm sm:text-[19px] text-[#4B5563] leading-[1.8]">
              Sector 71, Near Metro Station<br />
              Sector 51, Noida,<br />
              Uttar Pradesh.
            </p>
          </div>

          {/* App Download Section */}
          <div className="relative group w-full sm:w-auto">
            <div className="flex flex-col items-center cursor-pointer">
              <img src="/google-play.jpg" alt="Get it on Google Play" className="h-10 sm:h-14 w-28 sm:w-44 mb-3 object-contain" />
              <img src="/app-store.webp" alt="Download on the App Store" className="h-10 sm:h-14 w-28 sm:w-44 object-contain" />
            </div>
            
            {/* Popup overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40" />
            
            {/* Popup content */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 sm:p-8 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100 transition-all duration-300 z-50 w-[90%] sm:w-auto">
              <button 
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const popup = e.currentTarget.parentElement;
                  popup.classList.remove('group-hover:opacity-100', 'group-hover:visible');
                  popup.classList.add('opacity-0', 'invisible');
                  const overlay = popup.previousElementSibling;
                  overlay.classList.remove('group-hover:opacity-100', 'group-hover:visible');
                  overlay.classList.add('opacity-0', 'invisible');
                }}
              >
                <span className="text-2xl text-gray-500 hover:text-gray-700">&times;</span>
              </button>
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <h3 className="text-lg sm:text-2xl font-bold text-black mb-2 sm:mb-4">Download Our App</h3>
                <img src="/google-play.jpg" alt="Get it on Google Play" className="h-12 sm:h-16 w-32 sm:w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
                <img src="/app-store.webp" alt="Download on the App Store" className="h-12 sm:h-16 w-32 sm:w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-base sm:text-[22px] font-bold text-black mb-3">Social links</h3>
            <div className="flex items-center gap-4 sm:gap-6">
              {["instagram.jpg", "twitter.avif", "linkedin.png"].map((icon) => (
                <img 
                  key={icon}
                  src={`/${icon}`} 
                  alt={icon.split('.')[0]} 
                  className="w-8 h-8 sm:w-[44px] sm:h-[44px]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs sm:text-[13px] text-[#4B5563] mt-8 px-4">
          COPYRIGHT ©2025, SHRAMIK. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
