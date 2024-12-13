import React from 'react';

const Network = () => {
  return (
    <div className="bg-gray-50 py-10 mt-8 px-4 md:px-16 md:flex">
      <div className="w-full md:w-2/5 mb-12 md:mb-0 px-4">
        <small className="text-2xl font-caveat text-gray-700 font-small">Our Network:</small>
        <h1 className="text-1xl font-semibold my-4 text-gray-800">The Foundation for Modern Solutions</h1>
        <p className="text-sm text-gray-700 mt-4 text-1xl">
          Our fully redundant cloud-based mesh network integrates and transports all forms of data from any device to enhance and personalize the end-user experience.
        </p>
      </div>
      <div className="w-full md:w-3/5 grid grid-cols-2 gap-8 px-4">
        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text">
            100M
          </h1>
          <p className="text-sm text-gray-700 mt-2">interactions per year</p>
        </div>

        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text">
            24x7
          </h1>
          <p className="text-sm text-gray-700 mt-2">monitoring and data protection</p>
        </div>

        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text">
            500M
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            endpoints able to connect to the PrimeLine cloud through their service providers
          </p>
        </div>

        <div className="item text-center">
          <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
            5
          </h1>
          <p className="text-sm text-gray-700 mt-2">call centers in North America and abroad</p>
        </div>
      </div>
    </div>
  );
};

export default Network;
