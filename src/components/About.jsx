import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="IMAGES/IMG_2640.JPG" 
                alt="OB's Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a Frontend Developer with a solid foundation in HTML, CSS, JavaScript, and Tailwind CSS. I specialize in creating clean, responsive, and user-friendly interfaces that bring designs to life on the web.
              Currently, I'm expanding my skills in React.js, building dynamic and scalable components as I transition into more advanced frontend projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-code text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Clean Code</h4>
                  <p className="text-gray-600 text-sm">I write maintainable, efficient code following best practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <i className="fas fa-paint-brush text-purple-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Graphic Design</h4>
                  <p className="text-gray-600 text-sm">I'm passionate about crafting digital experiences that are both visually appealing and technically sound</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-mobile-alt text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Responsive Design</h4>
                  <p className="text-gray-600 text-sm">My work looks great on any device, any screen size.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <i className="fas fa-rocket text-yellow-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Fast Performance</h4>
                  <p className="text-gray-600 text-sm">I optimize for speed because every second counts.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">HTML</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">CSS</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">JavaScript</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">React</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">TailwindCSS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
