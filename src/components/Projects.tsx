import React from 'react';

const projects = [{
  id: 1,
  title: 'Zambia Army (Backup Systems)',
  category: 'Security',
  image: '/solar instulation.jpg',
  description: 'Comprehensive security backup systems for Zambia Army facilities with advanced surveillance and monitoring capabilities.'
}, {
  id: 2,
  title: 'Chilukutu Farms',
  category: 'Construction',
  image: '/residential_building_picture.jpg',
  description: 'Complete construction and development of agricultural facilities for Chilukutu Farms with modern infrastructure.'
}, {
  id: 3,
  title: 'The Botas',
  category: 'Construction',
  image: '/commercial_building_picture.jpg',
  description: 'Commercial building construction project for The Botas with modern design and sustainable features.'
}, {
  id: 4,
  title: 'Agraria Farms',
  category: 'Construction',
  image: '/about us picture.jpg',
  description: 'Agricultural infrastructure development for Agraria Farms including storage facilities and processing units.'
}];

export const Projects = () => {
  return <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Completed Projects
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful construction and security projects that showcase our expertise and quality of work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mt-8' : ''}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View Project Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};