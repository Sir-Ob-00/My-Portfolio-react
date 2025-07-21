import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Some of my recent work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden">
              <img 
                src="IMAGES/Miami Walker.png" 
                alt="Miami Walker" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Miami Walker Landing Page</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">HTML | CSS</span>
              </div>
              <p className="text-gray-600 mb-4">
                A sleek and responsive landing page designed to showcase the Miami Walker brand with bold visuals and smooth scrolling effects.
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href="https://github.com/Sir-Ob-00/Miami_Walker" 
                  className="text-blue-500 font-medium text-sm hover:underline"
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com/Sir-Ob-00/Miami_Walker" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden">
              <img 
                src="IMAGES/Andy-B.png" 
                alt="Photography Studio" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Photography Studio</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">HTML | CSS | JS</span>
              </div>
              <p className="text-gray-600 mb-4">
                A modern photography portfolio website featuring interactive galleries and a clean layout to highlight creative visual work.
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href="https://github.com/Sir-Ob-00/And-B-Studio" 
                  className="text-blue-500 font-medium text-sm hover:underline"
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com/Sir-Ob-00/And-B-Studio" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://andy-b-studio.vercel.app/" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden">
              <img 
                src="IMAGES/abi kitchen.png" 
                alt="Abi's Kitchen" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Restaurant App</h3>
                <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">HTML | TAILWIND | JS</span>
              </div>
              <p className="text-gray-600 mb-4">
                A vibrant restaurant website built to display menus, promote services, and provide a seamless user experience for food lovers.
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href="https://github.com/Sir-Ob-00/abi_kitchen_app" 
                  className="text-blue-500 font-medium text-sm hover:underline"
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com/Sir-Ob-00/abi_kitchen_app" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://abi-kitchen-app.vercel.app/" 
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Sir-Ob-00" 
            className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-all inline-flex items-center"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
