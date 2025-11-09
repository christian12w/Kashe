import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [{
  id: 1,
  name: 'James Wilson',
  role: 'CEO, Wilson Properties',
  content: 'Kashe Investments delivered our office building on time and within budget. Their attention to detail and quality workmanship exceeded our expectations.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
}, {
  id: 2,
  name: 'Sarah Johnson',
  role: 'Director of Operations, TechCorp',
  content: "We've been using Kashe's security services for over 3 years. Their team is professional, responsive, and has significantly improved our facility's security posture.",
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
}, {
  id: 3,
  name: 'Michael Brown',
  role: 'Project Manager, City Development',
  content: "The infrastructure project handled by Kashe Investments was completed with exceptional quality. Their team's expertise and problem-solving abilities made all the difference.",
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
}];

export const Testimonials = () => {
  return <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with Kashe Investments Limited.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl relative hover:bg-white/15 transition-all duration-300">
              <Quote size={48} className="text-orange-500/20 absolute top-6 right-6" />
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-500 mx-auto mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="text-xl font-bold text-center mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-orange-400 text-center text-sm">
                  {testimonial.role}
                </p>
              </div>
              <p className="text-blue-100 text-center italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-blue-200 font-medium">Bethel Christian Centre</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-blue-200 font-medium">Zambia Air Force</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-blue-200 font-medium">Ministry of Home Affairs</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3"></div>
              <p className="text-blue-200 font-medium">Zambia Army</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};