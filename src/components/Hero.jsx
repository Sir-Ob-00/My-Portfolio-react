const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My Name is <span className="gradient-text">Owusu Boateng</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600">
            Frontend Developer and an Intermediate Graphic Designer
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-lg">
            I'm a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and Tailwind CSS, with growing expertise in React.js. I love turning ideas into beautiful, responsive websites. With a touch of graphic design, 
            I blend creativity with code to build user-focused digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all text-xs md:px-6 md:py-3 md:font-medium text-center cursor-pointer"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-all md:px-6 md:py-3 md:font-medium text-center cursor-pointer"
            >
              Contact Me
            </a>
            <a 
              href="/OB Resume final.pdf" 
              download 
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all md:px-6 md:py-3 md:font-medium text-center"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl floating">
            <img 
              src="IMAGES/PASS PIC AAMUTED.jpg" 
              alt="Owusu Picture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
