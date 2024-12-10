import React from 'react';

const Proof = () => {
  return (
    <div className="mt-0 w-full">
      {/* Top Section (Optional) */}
      <div className="h-36 bg-white"></div>

      {/* Main Proof Content */}
      <div className="relative bg-cover bg-center h-80 p-6" style={{ backgroundImage: "url('/image/future.png')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay for text visibility */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Future-Proof Your Communications
          </h1>
          <p className="text-sm  md:text-1xl mb-6">
            PrimeLine develops data-rich, cloud-network solutions that connect your<br />
            customers with the information and support they need — today and in the future.
          </p>
          <div className="w-1/2 md:w-1/4 mx-auto py-2 rounded-full border border-white text-white cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300 text-sm">
            Let's Discuss Your Solution
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
