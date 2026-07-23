import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#11140e] text-gray-300 py-16 border-t border-[#808000]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 text-[#808000]"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-2xl font-black tracking-widest uppercase text-white">
              TB Travels
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mt-2">
            Experience the breathtaking beauty of Northern Pakistan. We offer curated tours and unforgettable adventures tailored to your desires.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-[#808000] transition-colors">Home</a></li>
            <li><a href="#destinations" className="hover:text-[#808000] transition-colors">Destinations</a></li>
            <li><a href="#tours" className="hover:text-[#808000] transition-colors">Our Tours</a></li>
            <li><a href="#about" className="hover:text-[#808000] transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-[#808000] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#808000] mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              </span>
              <span>123 ABC Road,<br />Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#808000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              </span>
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#808000]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              </span>
              <span>info@tbtravels.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest updates on new tours and special offers.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#1a2015] border border-gray-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#808000] transition-colors"
            />
            <button className="bg-[#556B2F] hover:bg-[#808000] text-white px-4 py-3 rounded-lg text-sm font-bold transition-all w-full cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} TB Travels. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
