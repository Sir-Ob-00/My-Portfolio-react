import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Owusu Boateng"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="owusuboat05@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me through any of these channels. I typically respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-10 h-10 text-center content-center rounded-full mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-blue-500"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold mb-1">Email</h4>
                    <a 
                      href="mailto:owusuboat05@gmail.com" 
                      className="text-gray-600 hover:text-blue-500 break-all"
                    >
                      owusuboat05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 w-10 h-10 text-center content-center rounded-full mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt text-purple-500"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a 
                      href="tel:+233240897702" 
                      className="text-gray-600 hover:text-blue-500"
                    >
                      024 089 7702
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 w-10 h-10 text-center content-center rounded-full mr-4 flex-shrink-0">
                    <i className="fab fa-linkedin-in text-green-500"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/owusu-boateng" 
                      className="text-gray-600 hover:text-blue-500 break-all"
                    >
                      https://www.linkedin.com/in/owusu-boateng
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 w-10 h-10 text-center content-center rounded-full mr-4 flex-shrink-0">
                    <i className="fab fa-github text-yellow-500"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Sir-Ob-00" 
                      className="text-gray-600 hover:text-blue-500 break-all"
                    >
                      https://github.com/Sir-Ob-00
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1BaBk38Lkt/" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/obtechub?igsh=Y3BwaWt1ZGp1cDdw" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UChQ0cWEKlUmNrS_Uo53yD4Q" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@obthetechguy0?_t=ZM-8xkZQ5Mh7NY&_r=1" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
