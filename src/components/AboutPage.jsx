import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header Section */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#EBF5FF] py-5 px-12 flex justify-between items-center border-b border-[#E5E7EB]"
      >
        <div className="flex items-center hover:scale-105 transition-transform">
          <motion.img 
            src="/logo.png" 
            alt="Logo" 
            className="h-14 w-14 mr-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <h1 className="text-black font-bold text-2xl tracking-wide hover:text-blue-600 transition-colors">Shramik</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">Home</Link>
          <Link to="/about" className="text-black text-lg font-semibold border-b-4 border-black hover:scale-110 transition-transform">About us</Link>
          <button className="text-gray-600 text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">More</button>
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1E40AF] text-white px-8 py-3 text-lg rounded-full flex items-center font-semibold hover:bg-blue-800"
        >
          <span className="mr-2">⭐</span>
          Download Now
        </motion.button>
      </motion.header>

      <div className="bg-white">
        {/* Main Content */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-12 py-16"
        >
          <div className="flex items-center justify-between">
            {/* Left Side Cartoon Worker */}
            <motion.div 
              className="w-1/4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                {/* Worker Character */}
                <motion.div
                  className="w-64 h-64 mx-auto"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Hard Hat */}
                  <motion.div
                    className="w-32 h-24 bg-[#FFD700] rounded-t-full absolute top-0 left-1/2 transform -translate-x-1/2"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <div className="w-24 h-4 bg-[#1E40AF] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  </motion.div>

                  {/* Face */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 bg-[#FFE4C4] rounded-full">
                      {/* Eyes */}
                      <div className="flex justify-center space-x-8 pt-8">
                        <motion.div
                          className="w-6 h-6 bg-black rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <motion.div
                          className="w-6 h-6 bg-black rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                          }}
                        />
                      </div>
                      {/* Smile */}
                      <motion.div
                        className="w-16 h-8 border-b-4 border-black rounded-full mx-auto mt-4"
                        animate={{
                          scaleX: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                  </div>

                  {/* Body */}
                  <motion.div
                    className="w-40 h-48 bg-[#1E40AF] rounded-lg absolute top-32 left-1/2 transform -translate-x-1/2"
                    animate={{
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    {/* Arms */}
                    <motion.div
                      className="absolute -left-4 top-8 w-8 h-24 bg-[#1E40AF] rounded-full"
                      animate={{
                        rotate: [0, 15, 0, -15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="absolute -right-4 top-8 w-8 h-24 bg-[#1E40AF] rounded-full"
                      animate={{
                        rotate: [0, -15, 0, 15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Center Content */}
            <div className="w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[42px] font-bold text-black mb-10 hover:text-blue-600 transition-colors"
              >
                About Shramik
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8 text-black text-[20px] leading-[1.8]"
              >
                <p className="hover:scale-[1.02] transition-transform">
                  At Shramik, we are dedicated to transforming the way laborers find jobs and how businesses 
                  connect with skilled workers. Our mission is to create a seamless, transparent, and 
                  accessible platform where hardworking individuals can secure reliable job opportunities, and 
                  hirers can effortlessly hire the right talent.
                </p>

                <p className="hover:scale-[1.02] transition-transform">
                  We understand the challenges laborers face—irregular work, lack of visibility, and unfair 
                  wages. That's why we've built a solution that empowers workers by giving them access to 
                  verified job listings, fair pay, and a hassle-free hiring process. Whether you are a 
                  construction worker, electrician, plumber, or any other skilled laborer, our platform ensures 
                  you find the right job, at the right time, with the right employer.
                </p>

                <p className="hover:scale-[1.02] transition-transform">
                  For businesses, we simplify the hiring process with a smart-matching system, real-time job 
                  postings, and a database of verified professionals. Finding the right workforce has never 
                  been easier.
                </p>

                <p className="hover:scale-[1.02] transition-transform">
                  At Shramik, we believe that every hardworking individual deserves a chance to grow and 
                  succeed. Together, let's build a future where opportunities are within everyone's reach.
                </p>
              </motion.div>
            </div>

            {/* Right Side Cartoon Worker */}
            <motion.div 
              className="w-1/4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                {/* Worker Character */}
                <motion.div
                  className="w-64 h-64 mx-auto"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  {/* Hard Hat */}
                  <motion.div
                    className="w-32 h-24 bg-[#FFD700] rounded-t-full absolute top-0 left-1/2 transform -translate-x-1/2"
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <div className="w-24 h-4 bg-[#1E40AF] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  </motion.div>

                  {/* Face */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 bg-[#FFE4C4] rounded-full">
                      {/* Eyes */}
                      <div className="flex justify-center space-x-8 pt-8">
                        <motion.div
                          className="w-6 h-6 bg-black rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.3
                          }}
                        />
                        <motion.div
                          className="w-6 h-6 bg-black rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                      </div>
                      {/* Smile */}
                      <motion.div
                        className="w-16 h-8 border-b-4 border-black rounded-full mx-auto mt-4"
                        animate={{
                          scaleX: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.2
                        }}
                      />
                    </div>
                  </div>

                  {/* Body */}
                  <motion.div
                    className="w-40 h-48 bg-[#1E40AF] rounded-lg absolute top-32 left-1/2 transform -translate-x-1/2"
                    animate={{
                      rotate: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    {/* Arms */}
                    <motion.div
                      className="absolute -left-4 top-8 w-8 h-24 bg-[#1E40AF] rounded-full"
                      animate={{
                        rotate: [0, -15, 0, 15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="absolute -right-4 top-8 w-8 h-24 bg-[#1E40AF] rounded-full"
                      animate={{
                        rotate: [0, 15, 0, -15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.main>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white py-20 text-center"
        >
          <h2 className="text-[36px] font-bold text-black mb-4 hover:text-blue-600 transition-colors">Want To Contact With Us?</h2>
          <p className="text-[20px] text-black mb-2 hover:scale-105 transition-transform">You can reach out to us for any type of query, feedback, business, collab at</p>
          <p className="text-[20px] text-black font-semibold hover:text-blue-600 transition-colors">shramikofficial@gmail.com</p>
        </motion.section>

        {/* Footer Section */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white py-6 border-t border-gray-300"
        >
          <div className="w-full px-16 flex justify-between items-center">
            {/* Company Section */}
            <div className="text-left hover:scale-105 transition-transform">
              <motion.img 
                src="/logo.png" 
                alt="Shramik Logo" 
                className="w-[60px] h-[60px] mb-4"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-[20px] font-bold text-black mb-2 hover:text-blue-600 transition-colors">Company</h3>
              <ul className="space-y-[6px]">
                {["About us", "Terms & conditions", "Privacy policy", "Careers", "Anti-discrimination policy"].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a href="#" className="text-[16px] text-[#4B5563] hover:text-black transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Address Section */}
            <div className="text-left hover:scale-105 transition-transform">
              <h3 className="text-[22px] font-bold text-black mb-2 hover:text-blue-600 transition-colors">Address</h3>
              <p className="text-[19px] text-[#4B5563] leading-[1.8]">
                Sector 71, Near Metro Station<br />
                Sector 51, Noida,<br />
                Uttar Pradesh.
              </p>
            </div>

            {/* App Download Section */}
            <div className="relative group">
              <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
                <motion.img 
                  src="/google-play.jpg" 
                  alt="Get it on Google Play" 
                  className="h-14 w-44 mb-3 object-contain"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src="/app-store.webp" 
                  alt="Download on the App Store" 
                  className="h-14 w-44 object-contain"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              {/* Popup overlay */}
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40" />
              
              {/* Popup content */}
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100 transition-all duration-300 z-50">
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
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-2xl font-bold text-black mb-4">Download Our App</h3>
                  <motion.img 
                    src="/google-play.jpg" 
                    alt="Get it on Google Play" 
                    className="h-16 w-48 object-contain hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.img 
                    src="/app-store.webp" 
                    alt="Download on the App Store" 
                    className="h-16 w-48 object-contain hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="text-left ml-8 hover:scale-105 transition-transform"> 
              <h3 className="text-[22px] font-bold text-black mb-3 hover:text-blue-600 transition-colors">Social links</h3>
              <div className="flex items-center gap-6">
                {["instagram.jpg", "twitter.avif", "linkedin.png"].map((icon, index) => (
                  <motion.img 
                    key={icon}
                    src={`/${icon}`} 
                    alt={icon.split('.')[0]} 
                    className="w-[44px] h-[44px] hover:scale-110 hover:rotate-6 transition-all"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-[13px] text-[#4B5563] mt-4 hover:text-black transition-colors">
            COPYRIGHT ©2025, SHRAMIK. ALL RIGHTS RESERVED.
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default AboutPage;

