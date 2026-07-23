import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md text-[#808000] shadow-[0_4px_30px_rgba(0,0,0,0.05)] px-8 py-5 flex justify-between items-center fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-8 h-8 text-[#556B2F]"
        >
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-2xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-linear-to-r from-[#556B2F] to-[#808000]">
          TB Travels
        </span>
      </div>
      <div className="hidden md:flex gap-10 font-semibold text-sm uppercase tracking-wide">
        <a href="#home" className="hover:text-[#556B2F] transition-colors relative group py-1">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#destinations" className="hover:text-[#556B2F] transition-colors relative group py-1">
          Destinations
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#tours" className="hover:text-[#556B2F] transition-colors relative group py-1">
          Tours
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="hover:text-[#556B2F] transition-colors relative group py-1">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <div className="hidden md:block">
        <button className="bg-[#556B2F] hover:bg-[#808000] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
          Book Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar