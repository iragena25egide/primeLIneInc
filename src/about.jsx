import React from 'react';

const About = () => {
  return (
    <div className="px-8 flex flex-col md:flex-row md:px-6 items-center h-[300px]">
      {/* About Content Section */}
      <div className="bg-white px-6 py-8 md:py-8 text-center w-11/12 md:w-1/2 mx-auto md:mx-0 md:mr-4 mt-1 shadow-lg rounded-lg">
        <h4 className="text-3xl font-poetsen text-gray-900">Scale at Speed</h4>
        <h2 className="text-xl font-poetsen text-pink-600 mt-4">With Prime Line</h2>
        <p className="text-sm text-gray-900 mt-6 leading-relaxed font-boogaloo">
          Thriving in the current dynamic landscape demands technological solutions that enable both transformative scale and unparalleled speed.
        </p>
        <button className="mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-[20px_20px_20px_5px] transition-all">
          Learn More
        </button>
      </div>

      {/* About Image Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img 
          src="/image/picture.jpeg" 
          alt="Scenic representation" 
          className="w-full  rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
