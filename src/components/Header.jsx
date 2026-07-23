import React from 'react';

function Header() {
  return (
    <header className="relative w-full h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1663134695525-7c05259d3b74?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-[#cce2a3] font-bold tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-md">
          Discover Your Next Adventure
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4e157] to-[#808000]">Northern Pakistan</span> <br /> 
          With TB Travels
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 font-light mb-12 max-w-3xl drop-shadow-lg leading-relaxed">
          Curated tours, exclusive destinations, and unforgettable experiences tailored just for you. Your journey begins here.
        </p>

        {/* Search Bar / Booking Form */}
        <div className="bg-white/95 backdrop-blur-md px-6 py-3 md:px-8 md:py-3.5 rounded-2xl shadow-2xl w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col w-full text-left px-4 border-b md:border-b-0 md:border-r border-gray-200 py-2 md:py-1">
            <label className="text-[11px] font-extrabold text-[#808000] uppercase tracking-widest mb-0.5">Location</label>
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="w-full bg-transparent text-gray-800 font-bold focus:outline-none placeholder-gray-400 text-sm md:text-base"
            />
          </div>
          
          <div className="flex flex-col w-full text-left px-4 border-b md:border-b-0 md:border-r border-gray-200 py-2 md:py-1">
            <label className="text-[11px] font-extrabold text-[#808000] uppercase tracking-widest mb-0.5">Date</label>
            <input 
              type="date" 
              className="w-full bg-transparent text-gray-800 font-bold focus:outline-none text-sm md:text-base cursor-pointer"
            />
          </div>

          <div className="flex flex-col w-full text-left px-4 py-2 md:py-1">
            <label className="text-[11px] font-extrabold text-[#808000] uppercase tracking-widest mb-0.5">Guests</label>
            <div className="relative w-full">
              <select className="w-full bg-transparent text-gray-800 font-bold focus:outline-none appearance-none text-sm md:text-base cursor-pointer pr-8">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4+">4+ Guests</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-[#808000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto px-4 mt-2 md:mt-0">
            <button className="w-full md:w-auto bg-gradient-to-r from-[#556B2F] to-[#808000] hover:from-[#4a5e29] hover:to-[#6b6b00] text-white px-10 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_15px_rgba(85,107,47,0.4)] hover:shadow-[0_6px_20px_rgba(85,107,47,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
