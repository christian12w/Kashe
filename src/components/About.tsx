import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

export const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Kashe Investments
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            General Building & Construction Solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              {/* Updated to use commercial building picture */}
              <img 
                src="/commercial_building_picture.jpg" 
                alt="Kashe Investments team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Think Ahead. Build Forever</h3>
                <p className="text-lg">Your trusted partner in construction and security</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Excellence Since Day One
            </h3>
            <p className="text-gray-600 mb-6">
              Founded with a vision to provide exceptional construction and security services, 
              Kashe Investments Limited has grown to become a trusted name in the industry. 
              Our team of experienced professionals is dedicated to delivering excellence in every project.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience and a commitment to quality, we have successfully completed 
              numerous projects for prestigious clients, establishing ourselves as leaders in our field.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award size={24} className="text-blue-800" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target size={24} className="text-blue-800" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">150+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-800" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality</h4>
              <p className="text-gray-600">
                We never compromise on quality, ensuring every project meets the highest standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-800" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-blue-800" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work and relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Our Clients */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trusted By Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">Bethel Christian Centre</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">Zambia Air Force</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">Ministry of Home Affairs</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">Zambia Army</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">Individual Clients</p>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Our Locations</h3>
              <ul className="space-y-1">
                <li>2 Lubwa Rd, Rhodes Park, Lusaka</li>
                <li>7006 Burma Rd, Woodlands, Lusaka</li>
              </ul>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>
    </section>;
};