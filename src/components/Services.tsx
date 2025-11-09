import React from 'react';
import { Building2, Shield, HardHat, Lock, Truck, Users, Wrench, Camera, Home, Zap, Wifi, Pickaxe } from 'lucide-react';

export const Services = () => {
  const serviceDivisions = [
    {
      id: 1,
      title: "Construction Division",
      description: "Comprehensive building and infrastructure construction services for residential, commercial, and industrial projects.",
      icon: Building2,
      services: [
        "Building Construction",
        "Infrastructure Development",
        "Renovation & Remodeling",
        "Project Management"
      ]
    },
    {
      id: 2,
      title: "Real Estate",
      description: "Property development, sales, and management services for residential and commercial real estate.",
      icon: Home,
      services: [
        "Property Development",
        "Real Estate Sales",
        "Property Management",
        "Land Acquisition"
      ]
    },
    {
      id: 3,
      title: "Security",
      description: "Comprehensive security solutions including manned guarding and electronic security systems.",
      icon: Shield,
      services: [
        "Manned Guarding",
        "CCTV & Surveillance",
        "Access Control Systems",
        "Security Consulting"
      ]
    },
    {
      id: 4,
      title: "IT Services",
      description: "Technology solutions and support for businesses and organizations.",
      icon: Wifi,
      services: [
        "Network Installation",
        "IT Support & Maintenance",
        "Software Solutions",
        "Cybersecurity"
      ]
    },
    {
      id: 5,
      title: "Electrical, Solar & Telecommunications",
      description: "Complete electrical solutions, renewable energy systems, and telecommunications infrastructure.",
      icon: Zap,
      services: [
        "Electrical Installation",
        "Solar Power Systems",
        "Telecom Infrastructure",
        "Energy Efficiency Solutions"
      ]
    },
    {
      id: 6,
      title: "Earth Works",
      description: "Specialized earthmoving and site preparation services for construction projects.",
      icon: Pickaxe,
      services: [
        "Site Excavation",
        "Grading & Leveling",
        "Drainage Systems",
        "Road Construction"
      ]
    }
  ];

  return <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Divisions
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kashe Investments Limited operates across multiple divisions to provide comprehensive solutions for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceDivisions.map((division) => {
            const Icon = division.icon;
            return (
              <div key={division.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {division.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {division.description}
                </p>
                <ul className="space-y-3">
                  {division.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Wrench size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Project?</h3>
              <p className="text-blue-100 max-w-2xl">
                Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors shadow-lg whitespace-nowrap"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>;
};