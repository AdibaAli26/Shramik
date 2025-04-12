import React, { useState } from "react";

function Homepage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    "Carpenter",
    "Electrician",
    "Plumber",
    "Mechanic",
    "Ac Repair",
    "Painter",
    "Barber",
    "Gardener",
    "Sweeper",
    "Cleaner",
    "Mason",
    "Welder",
  ];

  const designations = ["Any", "Manager", "Carpenter", "Electrician", "Plumber", "Sweeper"];

  const jobDescriptions = {
    Carpenter: "Expert in woodworking and furniture making. Our carpenters specialize in construction, repair, and installation of wooden structures and fixtures.",
    Electrician: "Skilled professional handling electrical wiring, installations, and repairs. Available for both residential and commercial electrical work.",
    Plumber: "Experienced in installing and repairing water systems, pipes, and fixtures. Offering 24/7 emergency plumbing services.",
    Mechanic: "Professional auto mechanic providing comprehensive vehicle repair and maintenance services. Expert diagnostics and quality repairs.",
    "Ac Repair": "Specialized in AC installation, maintenance, and repairs. Keeping your space cool with expert air conditioning services.",
    Painter: "Professional painter offering interior and exterior painting services. Quality finishes and attention to detail guaranteed.",
    Barber: "Skilled hair stylist providing modern and traditional haircuts. Professional grooming services at your convenience.",
    Gardener: "Expert in garden maintenance, landscaping, and plant care. Creating and maintaining beautiful outdoor spaces.",
    Sweeper: "Professional cleaning service provider ensuring neat and hygienic spaces. Regular maintenance and deep cleaning available.",
    Cleaner: "Thorough cleaning services for homes and offices. Detailed cleaning with professional equipment and eco-friendly products.",
    Mason: "Skilled in brick and stone work. Expert construction and renovation services for walls, foundations, and structures.",
    Welder: "Professional welding services for metal fabrication and repairs. Quality welding work with attention to safety and durability."
  };

  return (
    <div className="bg-[#d5e8ff] min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-[#e5efff] py-4 px-8 flex justify-between items-center shadow-lg animate-fadeIn">
        <div className="flex items-center hover:scale-105 transition-transform">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2 animate-spin-slow" />
          <h1 className="text-black font-bold text-xl tracking-wide hover:text-blue-600 transition-colors">Shramik</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button className="text-black text-lg font-semibold border-b-4 border-black hover:scale-110 transition-transform">Home</button>
          <a href="/about" className="text-gray-600 text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">About us</a>
          <button className="text-gray-600 text-lg hover:border-b-4 hover:border-black hover:scale-110 transition-all">More</button>
        </nav>

        <div className="flex items-center space-x-4 md:space-x-6">
          <input
            type="text"
            placeholder="Search address, city, location"
            className="border border-gray-400 rounded-full py-2 px-4 w-64 md:w-96 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105 transition-all"
          />
          <button className="bg-white border border-black text-black px-4 md:px-6 py-2 rounded-full shadow-lg hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95">Post</button>
          <div className="h-10 w-10 md:h-12 md:w-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white text-lg md:text-2xl">👤</span>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="p-6 md:p-8 pb-0 animate-slideUp">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            {/* Daily Jobs Section */}
            <section className="bg-white rounded-xl shadow-lg p-6 mb-12 relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black hover:text-blue-600 transition-colors">Daily Jobs</h2>
                <button className="text-blue-700 text-sm underline hover:text-blue-900 hover:scale-110 transition-all">View all</button>
            </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {jobs.map((job) => (
                <div
                  key={job}
                    className="bg-gradient-to-b from-white to-blue-100 rounded-lg p-3 flex flex-col items-center shadow-lg hover:scale-105 transition-all cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                >
                  <img
                    src={`/${job.toLowerCase().replace(" ", "")}.png`}
                    alt={job}
                      className="h-14 w-14 md:h-16 md:w-16 object-contain mb-2 hover:rotate-12 transition-transform"
                  />
                    <p className="text-center text-sm md:text-base text-black font-medium hover:text-blue-600 transition-colors">
                      {job}
                    </p>
                </div>
              ))}
            </div>

              {/* Job Description Popup */}
              {selectedJob && (
                <>
                  <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setSelectedJob(null)}
                  />
                  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 max-w-md w-full animate-scaleUp">
                    <button 
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                      onClick={() => setSelectedJob(null)}
                    >
                      <span className="text-2xl text-gray-500 hover:text-gray-700">&times;</span>
                    </button>
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={`/${selectedJob.toLowerCase().replace(" ", "")}.png`}
                        alt={selectedJob}
                        className="h-16 w-16 object-contain"
                      />
                      <h3 className="text-2xl font-bold text-black">{selectedJob}</h3>
                    </div>
                    <p className="text-[#4B5563] text-lg leading-relaxed">
                      {jobDescriptions[selectedJob]}
                    </p>
                    <button 
                      className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => setSelectedJob(null)}
                    >
                      Hire Now
                    </button>
                  </div>
                </>
              )}
          </section>

            {/* Contractual Job Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-black mb-6 hover:text-blue-600 transition-colors">Contractual Job</h2>
              <div className="flex gap-x-12">
                <div className="w-64 bg-gradient-to-t from-red-300 to-white text-black py-8 px-12 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center hover:scale-105 hover:-rotate-2">
                  <div className="bg-blue-300 rounded-full p-3 mb-4 hover:rotate-12 transition-transform">
                    <img
                      src="/postjob.png"
                      alt="Post Job"
                      className="h-16 w-16 rounded-full"
                    />
                  </div>
                  <span className="font-bold text-lg hover:text-blue-600 transition-colors">Post Job</span>
                </div>

                <div className="w-64 bg-gradient-to-t from-red-300 to-white text-black py-8 px-12 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center hover:scale-105 hover:rotate-2">
                  <div className="bg-blue-300 rounded-full p-3 mb-4 hover:-rotate-12 transition-transform">
                    <img
                      src="/findworker.png"
                      alt="Find Worker"
                      className="h-16 w-16 rounded-full"
                    />
                  </div>
                  <span className="font-bold text-lg hover:text-blue-600 transition-colors">Find Worker</span>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center items-start">
            <img
              src="/job.png"
              alt="All Jobs Images"
              className="rounded-lg object-cover h-full w-full max-w-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
              style={{ height: "calc(100% + 3rem)" }}
            />
          </div>
        </div>

        {/* Additional Section for Jobs & People UI */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-black mb-6">Designation</h2>
          <div className="flex gap-4 mb-8">
            {designations.map((role) => (
              <button
                key={role}
                className={`py-2 px-6 rounded-full ${role === "Manager" ? "bg-blue-300 text-black font-semibold" : "bg-white border border-gray-400 text-gray-700"}`}
              >
                {role}
            </button>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-black mb-4">Available Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <div key={job} className="bg-gradient-to-b from-blue-100 to-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-200 rounded-full h-10 w-10" />
                  <div className="ml-4">
                    <h4 className="font-bold">Labour Manager</h4>
                    <p className="text-sm text-gray-600">cosmo inc . mumbai, india</p>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">Rs 15K/Mo</p>
                <div className="flex gap-2">
                  <button className="bg-red-200 text-sm rounded-full px-4 py-1">Manager role</button>
                  <button className="bg-red-200 text-sm rounded-full px-4 py-1">part-time</button>
                  <button className="bg-pink-300 text-sm rounded-full px-4 py-1">Apply</button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">Available People</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((person) => (
              <div key={person} className="bg-gradient-to-b from-blue-100 to-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-200 rounded-full h-10 w-10" />
                  <div className="ml-4">
                    <h4 className="font-bold">Manish Saha</h4>
                    <p className="text-sm text-gray-600">Manager . Mumbai</p>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">Rs 25K/Mon</p>
                <div className="flex gap-2">
                  <button className="bg-red-200 text-sm rounded-full px-4 py-1">Manager role</button>
                  <button className="bg-red-200 text-sm rounded-full px-4 py-1">Full time</button>
                  <button className="bg-blue-300 text-sm rounded-full px-4 py-1">Hire</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact With Us Section */}
        <section className="bg-[#EBF5FF] py-16 mt-16 -mx-6 md:-mx-8 text-center">
          <h2 className="text-[32px] font-bold text-black mb-4">Want To Contact With Us?</h2>
          <p className="text-[16px] text-[#4B5563] mb-2">You can reach out to us for any type of query, feedback, business, collab at</p>
          <p className="text-[16px] text-[#4B5563]">shramikofficial@gmail.com</p>
        </section>

        {/* Footer Section */}
        <footer className="bg-white py-6 border-t border-gray-300 px-6 md:px-8 w-full">
          <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center">
            {/* Company Section */}
            <div className="text-left">
              <img src="/logo.png" alt="Shramik Logo" className="w-[60px] h-[60px] mb-4" />
              <h3 className="text-[18px] font-bold text-black mb-2">Company</h3>
              <ul className="space-y-[6px]">
                <li><a href="#" className="text-[15px] text-[#4B5563] hover:text-black">About us</a></li>
                <li><a href="#" className="text-[15px] text-[#4B5563] hover:text-black">Terms & conditions</a></li>
                <li><a href="#" className="text-[15px] text-[#4B5563] hover:text-black">Privacy policy</a></li>
                <li><a href="#" className="text-[15px] text-[#4B5563] hover:text-black">Careers</a></li>
                <li><a href="#" className="text-[15px] text-[#4B5563] hover:text-black">Anti-discrimination policy</a></li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="text-left">
              <h3 className="text-[22px] font-bold text-black mb-2">Address</h3>
              <p className="text-[19px] text-[#4B5563] leading-[1.8]">
                Sector 71, Near Metro Station<br />
                Sector 51, Noida,<br />
                Uttar Pradesh.
              </p>
            </div>

            {/* App Download Section */}
            <div className="relative group">
              <div className="flex flex-col items-center cursor-pointer">
                <img src="/google-play.jpg" alt="Get it on Google Play" className="h-14 w-44 mb-3 object-contain" />
                <img src="/app-store.webp" alt="Download on the App Store" className="h-14 w-44 object-contain" />
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
                  <img src="/google-play.jpg" alt="Get it on Google Play" className="h-16 w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
                  <img src="/app-store.webp" alt="Download on the App Store" className="h-16 w-48 object-contain hover:scale-105 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="text-left">
              <h3 className="text-[22px] font-bold text-black mb-3">Social links</h3>
              <div className="flex items-center gap-6">
                <img src="/instagram.jpg" alt="Instagram" className="w-[44px] h-[44px]" />
                <img src="/twitter.avif" alt="Twitter" className="w-[44px] h-[44px]" />
                <img src="/linkedin.png" alt="LinkedIn" className="w-[44px] h-[44px]" />
              </div>
            </div>
          </div>
          <div className="text-center text-[13px] text-[#4B5563] mt-4">
            COPYRIGHT ©2025, SHRAMIK. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Homepage;
