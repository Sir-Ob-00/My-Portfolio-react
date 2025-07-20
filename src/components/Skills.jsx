import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The tools and technologies I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">HTML/CSS</span>
                  <span className="text-gray-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">JavaScript</span>
                  <span className="text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar bg-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">React</span>
                  <span className="text-gray-600">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar bg-green-500 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Graphic Design</span>
                  <span className="text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar bg-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="text-blue-500 text-3xl mb-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h4 className="font-bold mb-2">Communication</h4>
                <p className="text-gray-600 text-sm">Clear and effective communication with clients and team members.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="text-purple-500 text-3xl mb-3">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="font-bold mb-2">Creativity</h4>
                <p className="text-gray-600 text-sm">Innovative solutions to complex problems.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="text-green-500 text-3xl mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="font-bold mb-2">Teamwork</h4>
                <p className="text-gray-600 text-sm">Collaborative approach to project development.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="text-yellow-500 text-3xl mb-3">
                  <i className="fas fa-clock"></i>
                </div>
                <h4 className="font-bold mb-2">Time Management</h4>
                <p className="text-gray-600 text-sm">Efficient workflow to meet deadlines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
