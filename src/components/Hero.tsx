import React from 'react';
import { ArrowRight, Building2, Shield } from 'lucide-react';

export const Hero = () => {
  return <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="h-20 bg-white rounded-lg"></div>
          <div className="h-32 bg-orange-500 rounded-lg mt-8"></div>
          <div className="h-24 bg-white rounded-lg"></div>
          <div className="h-28 bg-orange-500 rounded-lg"></div>
          <div className="h-20 bg-white rounded-lg mt-6"></div>
          <div className="h-32 bg-white rounded-lg"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                <Building2 size={16} className="mr-2" />
                Trusted Construction Experts
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Security & <span className="text-orange-500">Construction</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              General Building & Construction Solutions with over 10 years of experience delivering quality projects across Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors shadow-lg">
                Our Services
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium rounded-md transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-full mr-3">
                  <Building2 size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-gray-300">Projects</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-700 p-3 rounded-full mr-3">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-gray-300">Years</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/commercial_building_picture.jpg" 
                  alt="Kashe Investments construction project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Shield size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">24/7 Security</p>
                    <p className="text-gray-600">Monitoring & Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};