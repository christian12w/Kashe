import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/LOGO.png" 
                alt="Kashe Investments Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              General Building & Construction Solutions
            </p>
            <p className="text-gray-400 mb-6">
              Think Ahead. Build Forever
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Clients
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Bethel Christian Centre
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Zambia Air Force
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Ministry of Home Affairs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Zambia Army
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Individual Clients
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500"></span>
            </h4>
            <div className="space-y-5">
              <div className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    2 Lubwa Rd, Rhodes Park, Lusaka
                  </p>
                  <p className="text-gray-400 mt-1">
                    7006 Burma Rd, Woodlands, Lusaka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+260 977 405569</p>
                  <p className="text-gray-400 mt-1">+260 955 500704</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-400">info@kasheinvestments.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kashe Investments Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};