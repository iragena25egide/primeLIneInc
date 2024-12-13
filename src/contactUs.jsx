import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {

  const [result,setResult]=useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form inputs
    const formData = new FormData(event.target);
    const emptyFields = [];
  
    for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        emptyFields.push(key);
      }
    }
  
    if (emptyFields.length > 0) {
      setResult(`Please fill out the following fields: ${emptyFields.join(", ")}`);
      return;
    }
  
    setResult("Sending....");
  
    // Add access key to formData
    formData.append("access_key", "610649f2-45fc-45dc-8a31-5987642d5513");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form. Please try again.");
    }
  };
  
  return (
    <div className="mt-24 p-4 bg-gray-50">
      {/* Contact Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-poetsen text-gray-900">Contact Us</h1>
        <p className="text-sm text-gray-900 mt-2 font-Inder">
          We would love to hear from you, your feedback is our priority.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {/* Form Section */}
        <form className="w-full md:w-2/3 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Firstname*" name='firstname'
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <input
              type="text"
              placeholder="Lastname*" name='lastname'
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email" name='email'
              placeholder="Email*"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <input
              type="number"
              placeholder="Phone*" name='phone'
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name='companyName'
              placeholder="Company Name"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <input
              type="text"
              name='region'
              placeholder="Country/Region"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
          <textarea
            placeholder="How can we help?"
            name='message'
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm resize-none"
          />
          <button className="px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  transition duration-300 text-sm">
            Submit
          </button>
         <br></br>
         {result && <span class="px-3 py-1 text-red-600  text-sm font-medium mt-3">
            {result}
          </span>}
        
        </form>
       

        {/* Contact Info Section */}
        <div className="w-full p-4 md:w-1/3 space-y-3 ml-8">
          <div>
            <h4 className="text-1xl font-poetsen text-black">PrimeLine Communication Inc.</h4>
            <h5 className="text-sm text-gray-700 mt-2 font-poetsen">Rwanda Headquarters</h5>
            <p className="text-sm text-gray-600 mt-2 font-poetsen">Kigali, Gasabo</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-1xl text-gray-900 text-center font-poetsen">Reach Out</h5>
            <div className="flex items-center space-x-3">
              <MdEmail size={18} color="#005ea1" />
              <p className="text-sm text-gray-700">Primeline@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone size={18} color="#005ea1" />
              <p className="text-sm text-gray-700">+250 790 345 345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
