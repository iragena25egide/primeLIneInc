import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Customer = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:p-12 flex justify-between items-center mt-16">
      {/* Left Section */}
      <div className="w-full md:w-2/5 px-4 mb-8 md:mb-0">
        <h4 className="text-1xl text-blue-700 font-semibold text-center mb-1">The Advantage of our company</h4>
        <img src="/image/customer.png" alt="Image not found" className="w-full h-auto rounded-lg" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/5 px-4 grid grid-cols-2 gap-6">
        <div className="box bg-gray-300 p-6 rounded-lg flex justify-center items-center">
          <FaCloudUploadAlt size={30} />
        </div>
        <div className="box bg-gray-300 p-6 rounded-lg flex justify-center items-center">
          <MdOutlineContactSupport size={30} />
        </div>
        <div className="box bg-gray-300 p-6 rounded-lg flex justify-center items-center">
          <FaCloudUploadAlt size={30} />
        </div>
        <div className="box bg-gray-300 p-6 rounded-lg flex justify-center items-center">
          <FaCloudUploadAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
