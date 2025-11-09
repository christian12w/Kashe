import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <header className="w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Using the ICON.png file with larger size */}
            <img 
              src="/ICON.png" 
              alt="Kashe Investments Icon" 
              className="h-14 w-auto" // Slightly reduced size for better balance
            />
            <div className="ml-3">
              {/* Added title with specific colors - the S in KASHE is orange */}
              <div className="text-xl font-bold">
                <span className="text-blue-900">KA</span>
                <span className="text-orange-500">S</span>
                <span className="text-blue-900">HE INVESTMENTS LIMITED</span>
              </div>
              {/* Updated slogan with orange background, white text (not bold), centered, capital letters */}
              <div className="bg-orange-500 text-white text-center uppercase text-xs px-2 py-1 mt-1 rounded">
                Think Ahead. Build Forever
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-5 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#services" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
};