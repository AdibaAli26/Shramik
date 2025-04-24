import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#EBF5FF] py-4 sm:py-5 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-[#E5E7EB] gap-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 sm:h-14 w-12 sm:w-14 mr-3" />
          <h1 className="text-black font-bold text-xl sm:text-2xl">Shramik</h1>
        </Link>

        <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <Link to="/" className="text-gray-600 text-base sm:text-lg">Home</Link>
          <Link to="/about" className="text-black text-base sm:text-lg font-semibold">About us</Link>
          <Link to="/contact" className="text-gray-600 text-base sm:text-lg hover:text-black">Contact Us</Link>
        </nav>

        <button className="bg-[#1E40AF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center font-semibold text-sm sm:text-base">
          <span className="mr-2">⭐</span>
          Download Now
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 sm:mb-12">
            About Shramik
          </h1>
          
          <div className="space-y-6 sm:space-y-10 text-black text-lg sm:text-xl leading-relaxed">
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
      <section className="bg-white py-12 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">Want To Contact With Us?</h2>
          <p className="text-lg sm:text-2xl text-black mb-4">
            You can reach out to us for any type of query, feedback, business, collab at
          </p>
          <p className="text-lg sm:text-2xl text-black font-semibold">
            shramikofficial@gmail.com
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-6 border-t border-gray-300">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-start flex-wrap gap-8">
          {/* Company Section */}
          <div className="text-left w-full sm:w-auto">
            <img src="/logo.png" alt="Shramik Logo" className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] mb-4" />
            <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-2">Company</h3>
            <ul className="space-y-[6px]">
              {["About us", "Terms & conditions", "Privacy policy", "Careers", "Anti-discrimination policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] sm:text-[16px] text-[#4B5563] hover:text-black">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-black mb-2">Address</h3>
            <p className="text-[16px] sm:text-[19px] text-[#4B5563] leading-[1.8]">
              Sector 71, Near Metro Station<br />
              Sector 51, Noida,<br />
              Uttar Pradesh.
            </p>
          </div>

          {/* App Download Section */}
          <div className="relative group w-full sm:w-auto">
            <div className="flex flex-col items-center cursor-pointer">
              <img src="/google-play.jpg" alt="Get it on Google Play" className="h-12 sm:h-14 w-36 sm:w-44 mb-3 object-contain" />
              <img src="/app-store.webp" alt="Download on the App Store" className="h-12 sm:h-14 w-36 sm:w-44 object-contain" />
            </div>
            
            {/* Popup overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40" />
            
            {/* Popup content */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100 transition-all duration-300 z-50 w-[90%] sm:w-auto">
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
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">Download Our App</h3>
                <img src="/google-play.jpg" alt="Get it on Google Play" className="h-14 sm:h-16 w-40 sm:w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
                <img src="/app-store.webp" alt="Download on the App Store" className="h-14 sm:h-16 w-40 sm:w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">Social links</h3>
            <div className="flex items-center gap-4 sm:gap-6">
              {["instagram.jpg", "twitter.avif", "linkedin.png"].map((icon) => (
                <img 
                  key={icon}
                  src={`/${icon}`} 
                  alt={icon.split('.')[0]} 
                  className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-[12px] sm:text-[13px] text-[#4B5563] mt-8 px-4">
          COPYRIGHT ©2025, SHRAMIK. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
