import React from 'react';

const Proof = () => {
  return (
    <div className="mt-0 w-full">
      {/* Top Section (Optional) */}
      <div className="h-36 bg-white"></div>

      {/* Main Proof Content */}
      <div className="relative bg-cover bg-center h-80 p-6" style={{ backgroundImage: "url('/image/try.jpeg')" }}>
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div> {/* Optional overlay for text visibility */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-poetsen mb-4">
            Future-Proof Your Communications
          </h1>
          <p className="text-sm  md:text-1xl mb-6">
            PrimeLine develops data-rich, cloud-network solutions that connect your<br />
            customers with the information and support they need — today and in the future.
          </p>
          <div className="w-1/2 md:w-1/4 mx-auto py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border rounded-[20px_20px_20px_5px] border-white text-white cursor-pointer  hover:text-gray-800 transition duration-300 text-sm">
            Let's Discuss Your Solution
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
